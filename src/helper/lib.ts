import styled, { ThemeProps, createGlobalStyle } from "styled-components";
import { Theme } from "./theme";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #151516;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    line-height: 1.75;
    width: 100%;
    max-width: 1920px;
    position: relative;
    overflow-x: hidden;
    margin: 0 auto;
    min-width: 360px;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
    .sidebar {
      display: none;
    }
  }

@media screen and (max-width: 1000px) {
  .sidebar {
    font-family: "Montserrat", sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background: #313336;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: hsl(360, 67%, 44%);
    transition: all 0.3s linear;
    transform: translate(0);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }  

  .links a {
    display: flex;
    align-items: center;
    font-size: 15px;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: #fff;
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
    text-decoration: none;
    justify-content: space-between;
  }
}

`;

export const LoadingViewTitle = styled.h1<ThemeProps<Theme>>`
  font-family: ${(p): string => p.theme.fontFamily};
  color: ${(p): string => p.theme.primaryTextColor};
  font-size: 24px;
  font-weight: 200;
  margin: 16px 0px 4px;
`;

export const LoadingViewBody = styled.p<ThemeProps<Theme>>`
  font-family: ${(p): string => p.theme.fontFamily};
  color: ${(p): string => p.theme.primaryTextColor};
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0px 8px 0px;
  white-space: pre-wrap;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background-color: #151516;
  padding: 16px 0;
  transition: 0.3s;
  border-bottom: rgba(0, 0, 0, 0);
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 25px);
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
  justify-items: center;

  .fa-bars {
    display: none;
  }

  .fa-times {
    display: none;
  }

  .fa-search,
  .fa-times {
    padding-top: 5px;
    font-size: 15px;
    padding-right: 1rem;
    display: grid;
    grid-column: 12 / 13;
  }

  .inactive {
    display: none;
  }

  /* pc display min  */
  @media screen and (max-width: 1000px) {
    .fa-bars {
      padding-top: 5px;
      font-size: 20px;
      display: grid;
      grid-column: 1 / 2;
    }

    .fa-search {
      padding-top: 5px;
      font-size: 20px;
      padding-right: 1rem;
      display: grid;
      grid-column: 12 / 13;
    }
  }

  /* tablet pc and mobile device */
  @media screen and (max-width: 768px) {
    .fa-bars {
      font-size: 20px;
      padding-left: 1rem;
      display: grid;
      grid-column: 1 / 2;
    }

    .fa-search {
      font-size: 20px;
      padding-left: 1rem;
      display: grid;
      grid-column: 12 / 13;
    }
  }
`;

export const Home = styled(Link)`
  font-size: 15px;
  font-weight: 900;
  grid-column: 1 / 4;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  .fa {
    display: none;
  }

  /* pc display min  */
  @media screen and (max-width: 1000px) {
    grid-column: 5 / 9;
  }

  /* tablet pc */
  @media screen and (max-width: 768px) {
    font-size: 18px;
    grid-column: 4 / 11;
  }

  /* mobile device */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Project = styled(Link)`
  font-size: 15px;
  grid-column: 8 / 9;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Contact = styled(Link)`
  font-size: 15px;
  grid-column: 9 / 10;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Bookmark = styled(Link)`
  font-size: 15px;
  grid-column: 10 / 11;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const OpenSource = styled(Link)`
  font-size: 15px;
  grid-column: 11 / 12;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SearchContainerWrap = styled.div`
  overflow: visible;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  height: 400px;
  margin-top: 70px;
  z-index: 10;
  outline: 0;
  background-color: #fff;
  background: #111;

  .container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 40px;
    margin: 150px auto;
  }
`;

export const SearchForm = styled.form`
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;

  .input-search-icon {
    position: absolute;
    top: 1.5rem;
    left: 45px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0 !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    background-color: transparent;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><title>Icons/Navbar/icon_search</title><desc>Created with Sketch.</desc><path class="st0" d="M23.4,21.9l-4.6-4.6c1.4-1.7,2.3-3.9,2.3-6.3c0-5.5-4.5-10-10-10C5.5,1,1,5.5,1,11c0,5.5,4.5,10,10,10c2.4,0,4.6-0.8,6.3-2.3l4.6,4.6L23.4,21.9z M3,11c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.1-0.8,4.1-2.2,5.5l-0.3,0.3C15.1,18.2,13.1,19,11,19C6.6,19,3,15.4,3,11z"/></svg>');
  }
`;

export const SearchInput = styled.input`
  font-size: 24px;
  height: 48px;
  border-radius: 12px;
  padding-left: 48px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #313336;
  width: 100%;
  max-width: 1200px;
  color: #c5cad5;
  background-position: 7px 7px;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.85);
  z-index: 0;
`;

export const KeywordForm = styled.div`
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  margin: 20px 0;
  color: #fff;

  span {
    display: inline-block;
    font-size: 14px;
    margin-right: 6px;
    margin-bottom: 0.5rem;

    a {
      white-space: nowrap !important;
      padding: 10px;
      display: block;
      color: #32353a;
      border-radius: 8px;
      font-size: 14px !important;
      line-height: 1;
      color: #fff;
      background-color: #313336;
      text-decoration: none;
    }
  }
`;

export const Container = styled.div`
  margin-top: 70px;
`;

export const Grid_Stage1 = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 100px);
  grid-template-columns: repeat(12, 78px);
  grid-gap: 24px;
  justify-items: center;
  padding: 1rem 0;
`;

export const Grid_Stage2 = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 100px);
  grid-template-columns: repeat(6, 180px);
  grid-gap: 24px;
  justify-items: center;
  padding: 1rem 0;
`;

export const Grid_Stage3 = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 100px);
  grid-template-columns: repeat(4, 285px);
  grid-gap: 20px;
  justify-items: center;
  padding: 1rem 0;
`;

export const Grid_Stage4 = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 100px);
  grid-template-columns: repeat(3, 384px);
  grid-gap: 24px;
  justify-items: center;
  padding: 1rem 0;
`;

export const Grid_Stage6 = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 100px);
  grid-template-columns: repeat(2, 588);
  grid-gap: 24px;
  justify-items: center;
  padding: 1rem 0;
`;

export const Grid_Stage12 = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 100px);
  grid-template-columns: repeat(1, 12);
  justify-items: center;
  padding: 1rem 0;
`;

export const Grid_Banner = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(1, 300px);
  grid-template-columns: repeat(1, 12);
  justify-items: center;
  padding: 1rem 0;
`;

export const Banner_1 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 1 / 2;
`;

export const Stage12_1 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 1 / 2;
`;

export const Stage6_1 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 1 / 2;
`;

export const Stage6_2 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 2 / 3;
`;

export const Stage4_1 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 1 / 2;
`;

export const Stage4_2 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 2 / 3;
`;

export const Stage4_3 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 3 / 4;
`;

export const Stage3_1 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 1 / 2;
`;

export const Stage3_2 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 2 / 3;
`;

export const Stage3_3 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 3 / 4;
`;

export const Stage3_4 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 4 / 5;
`;

export const Stage2_1 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 1 / 2;
`;

export const Stage2_2 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 2 / 3;
`;

export const Stage2_3 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 3 / 4;
`;

export const Stage2_4 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 4 / 5;
`;

export const Stage2_5 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 5 / 6;
`;

export const Stage2_6 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 6 / 7;
`;

export const Stage1_1 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 1 / 2;
`;

export const Stage1_2 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 2 / 3;
`;

export const Stage1_3 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 3 / 4;
`;

export const Stage1_4 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 4 / 5;
`;

export const Stage1_5 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 5 / 6;
`;

export const Stage1_6 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 6 / 7;
`;

export const Stage1_7 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 7 / 8;
`;
export const Stage1_8 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 8 / 9;
`;
export const Stage1_9 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 9 / 10;
`;

export const Stage1_10 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 10 / 11;
`;

export const Stage1_11 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 11 / 12;
`;

export const Stage1_12 = styled.div`
  width: 100%;
  background: gray;
  text-align: center;
  grid-column: 12 / 13;
`;

export const Announcement = styled.div`
  position: relative;
  z-index: 1;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 20px 0;
  background-color: #151516;

  .container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 40px;
    margin: auto;

    p {
      text-align: center;
      font-size: 14px;
      margin-bottom: 0;
      color: #c5cad5;
    }
  }
`;

export const Footer = styled.section`
  position: relative;
  padding: 40px 0;
  overflow: hidden;
  z-index: 0;
  background: #151516;

  .container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding: 0 40px;
    margin: auto;

    .row {
      margin-right: -12px;
      margin-left: -12px;
      font-size: 0;

      .footer-category {
        position: relative;
        min-height: 1px;
        display: inline-block;
        padding-left: 12px;
        padding-right: 12px;
        vertical-align: top;
        width: 25%;

        h2 {
          height: 20px;
          font-size: 14px;
          margin-bottom: 20px;
          opacity: 0.7;
          color: #fff;
        }

        a {
          display: block;
          color: #fff;
          font-size: 16px;
          margin-bottom: 10px;
          transition: 0.3s;
        }
      }
    }
  }
`;
