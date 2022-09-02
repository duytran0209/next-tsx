import React, { useState } from "react";
import useSWR from "swr";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";
const CategoryPage = () => {
  const { data } = useSWR(`https://picsum.photos/v2/list`, fetcher);
  const debounce = useDebounce();
  const photos = data || [];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(4);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  };
  const total = photos.length;
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPhotos = photos.slice(indexOfFirstPage, indexOfLastPage);
  const itemRender = (current: any, type: string, originalElement: any) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }

    if (type === "next") {
      return <a>Next</a>;
    }

    return originalElement;
  };

  return (
    <PostListStyled>
      <div className="container">
        <div className="flex mb-10">
          <div className="flex-1">
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

        <div className="grid grid-cols-4 gap-10">
          {currentPhotos.length > 0 &&
            currentPhotos
              .filter((value: { author: string }) => {
                if (searchTerm === "") {
                  return value;
                } else if (
                  value.author.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map(
                (item: {
                  id: React.Key | null | undefined;
                  author:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => <p key={item.id}>{item.author}</p>
              )}
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
      </div>
    </PostListStyled>
  );
};

const PostListStyled = styled.div`
  margin-top: 30px;
  input {
    position: relative;
    width: 100%;
    padding: 16px 20px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.graylight}; // grayLight: "#E7ECF3"
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
    background-color: ${(props) => props.theme.primary};
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
    gap: 0 10px;
    font-size: 18px;
    &-item-active {
      color: red;
    }
  }
  .ant-select {
    display: none !important;
  }
`;

export default CategoryPage;
