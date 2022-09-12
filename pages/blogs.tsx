import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Title from "../components/Title";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";
import { Blogs } from "../models/blogs";
import { InnerLayout, MainLayout } from "../styles/Layouts";

function BlogsPage() {
  const { data, error } = useSWR<Blogs[]>(`/api/blogs`, fetcher);

  const debounce = useDebounce();
  const photos = data || [];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const postPerPage = 4;
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  };
  const total = photos.length;
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPhotos = photos.slice(indexOfFirstPage, indexOfLastPage);
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Blogs Page</title>
        <meta
          name="description"
          content="Welcome to my profile, I am a front end web developer"
        />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my profile, I am a front end web developer"
        />
        <meta property="og:url" content="https://tranduy020900dev.vercel/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <BlogsStyled>
          <Title title={"Blogs"} span={"Blogs"} />
          <div className="flex mt-[70px]">
            <div className="flex-1 ">
              <input
                type="text"
                placeholder="Type here to search..."
                onChange={handleFilterChange}
              />
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <InnerLayout>
            <div className="blog">
              {currentPhotos.length > 0 &&
                currentPhotos
                  .filter((value) => {
                    if (searchTerm === "") {
                      return value;
                    } else if (
                      value.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  ?.map((item) => (
                    <div key={item.id} className={"blog-item"}>
                      <div className="image">
                        <Image
                          src={item.url}
                          alt={item.description}
                          height={250}
                          width={450}
                          priority
                          quality={100}
                          blurDataURL="blur"
                        />
                      </div>
                      <div className="title">
                        <Link href={item.url}>{item.description}</Link>
                      </div>
                    </div>
                  ))}
            </div>
            <div className="mt-10">
              <Pagination
                onChange={(value) => setPage(value)}
                pageSize={postPerPage}
                total={total}
                current={page}
                itemRender={itemRender}
              />
            </div>
          </InnerLayout>
        </BlogsStyled>
      </MainLayout>
    </>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      overflow: hidden;
      padding-bottom: 0.5rem;
      & > span {
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }

    .title {
      a {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 1.8rem;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  input {
    position: relative;
    width: 100%;
    padding: 16px 20px;
    background-color: transparent;
    border: 3px solid var(--primary-color);
    transition: all 0.2s linear;
    color: ${(props) => props.theme.black};
    font-size: 16px;
    font-weight: 600;
    &::-webkit-input-placeholder {
      color: #b2b3bd;
    }
    &::-moz-input-placeholder {
      color: #b2b3bd;
    }
  }

  button {
    padding: 1rem;
    color: #ffffff;
    background-color: var(--primary-color);
  }

  .anticon svg {
    display: none;
  }
  .ant-pagination {
    li {
      cursor: pointer;
    }
    display: flex;
    margin-top: 30px;
    justify-content: center;

    gap: 0 15px;
    font-size: 18px;
  }
  .ant-select {
    display: none !important;
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    color: var(--white-color);
  }
  .ant-pagination-item-ellipsis {
    background-color: var(--background-light-color);
  }
`;

export default BlogsPage;
