import React, { useState } from "react";
import {
  Bookmark,
  Contact,
  Grid,
  Header,
  Home,
  KeywordForm,
  OpenSource,
  Overlay,
  Project,
  SearchContainer,
  SearchContainerWrap,
  SearchForm,
  SearchInput,
} from "../helper/lib";
import { DropdownComponent } from "./DropdownComponent";
import SidebarComponent from "./SidebarComponent";

export const Headers = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const toggleEvent = () => {
    setActive(!active);
  };

  return (
    <>
      <Header>
        <Grid>
          <SidebarComponent />
          <Home to="/">Responsive Web UI</Home>
          <DropdownComponent />
          <Project to="/project">Project</Project>
          <Contact to="/contact">Contact</Contact>
          <Bookmark to="/bookmark">Bookmark</Bookmark>
          <OpenSource to="/source">Source</OpenSource>
          <i
            className={`${active ? "fa fa-times" : "inactive"}`}
            aria-hidden="true"
            onClick={toggleEvent}
          ></i>
          <i
            onClick={toggleEvent}
            className={`${active ? "inactive" : "fa fa-search"}`}
            aria-hidden="true"
          ></i>
        </Grid>
      </Header>
      {active && (
        <SearchContainer>
          <SearchContainerWrap>
            <div className="container">
              <SearchForm>
                <SearchInput placeholder="Search box" />
                <button type="submit" className="input-search-icon" />
              </SearchForm>
              <KeywordForm>
                <span>
                  <a href="/">Keyword1</a>
                </span>
                <span>
                  <a href="/">Keyword2</a>
                </span>
                <span>
                  <a href="/">Keyword3</a>
                </span>
                <span>
                  <a href="/">Keyword4</a>
                </span>
                <span>
                  <a href="/">Keyword5</a>
                </span>
                <span>
                  <a href="/">Keyword6</a>
                </span>
                <span>
                  <a href="/">Keyword7</a>
                </span>
                <span>
                  <a href="/">Keyword8</a>
                </span>
              </KeywordForm>
            </div>
          </SearchContainerWrap>
          <Overlay />
        </SearchContainer>
      )}
    </>
  );
};
