import React from "react";
import { Footer } from "../helper/lib";

export const Footers = (): JSX.Element => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="footer-category">
            <h2>Shortcut menu</h2>
            <a href="/">menu1</a>
            <a href="/">menu2</a>
            <a href="/">menu3</a>
            <a href="/">menu4</a>
            <a href="/">menu5</a>
            <a href="/">menu6</a>
            <a href="/">menu7</a>
          </div>
          <div className="footer-category">
            <a href="/">menu1</a>
            <a href="/">menu2</a>
            <a href="/">menu3</a>
            <a href="/">menu4</a>
            <a href="/">menu5</a>
            <a href="/">menu6</a>
            <a href="/">menu7</a>
          </div>
          <div className="footer-category">
            <h2>Responsive Web UI</h2>
            <a href="/">menu1</a>
            <a href="/">menu2</a>
            <a href="/">menu3</a>
            <a href="/">menu4</a>
            <a href="/">menu5</a>
            <a href="/">menu6</a>
            <a href="/">menu7</a>
          </div>
          <div className="footer-category">
            <h2>About</h2>
            <a href="/">menu1</a>
            <a href="/">menu2</a>
            <a href="/">menu3</a>
          </div>
        </div>
        <p style={{ margin: "1.5rem 0" }}>
          © 2022 Deutschkihun. All rights reserved.
        </p>
      </div>
    </Footer>
  );
};
