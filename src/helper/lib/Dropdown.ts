import styled from "styled-components";

export const Dropdown = styled.ul`
  font-size: 14px;
  grid-column: 7 / 8;
  color: white;
  img {
    width: 15px;
    margin: 2px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DropdownContainer = styled.li`
  :hover {
    aside {
      width: 73px;
      font-size: 10px;
      border: 1px solid #fff;
      display: block;
      text-align: center;
      a {
        color: #fff;
        padding: 6px;
        text-decoration: none;
        display: block;
      }
      a:hover {
        background-color: #fff;
        color: #151516;
      }
    }
  }
`;

export const DropdownItem = styled.aside`
  display: none;
`;
