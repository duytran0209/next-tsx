import useClickOutSide from "../../hooks/useClickOutside";
import styled from "styled-components";
import Link from "next/link";

export const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <DropdownStyled>
      <div className="dropdown" ref={nodeRef}>
        <div className="dropdown-select" onClick={() => setShow(!show)}>
          <span className="select">Selected item</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="chevron-down"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {show && (
          <ul className="dropdown-list">
            <li className="dropdown-list_item">
              <Link href="/">Javascript</Link>
            </li>
            <li className="dropdown-list_item">
              <Link href="/a">ReactJS</Link>
            </li>
            <li className="dropdown-list_item">
              <Link href="/">Typescript</Link>
            </li>
          </ul>
        )}
      </div>
    </DropdownStyled>
  );
};
const DropdownStyled = styled.div`
  .dropdown {
    width: 250px;
    position: relative;

    &-select {
      padding: 10px 15px 10px 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      border: 3px solid #000000;
      letter-spacing: 1px;
      cursor: pointer;
      text-transform: uppercase;
      color: #333333;
      .chevron-down {
        width: 25px;
      }
    }

    &-list {
      position: absolute;
      top: 110%;
      left: 0;
      right: 0;
      z-index: 10;
    }

    &-list_item {
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 10px 15px 10px 25px;
      color: #333333;
      border: 3px solid #000000;
      font-size: 16px;
      &:not(:last-child) {
        border-bottom: none;
      }

      &:hover {
        background: #000000;
        color: #ffffff;
      }
    }
  }
`;
