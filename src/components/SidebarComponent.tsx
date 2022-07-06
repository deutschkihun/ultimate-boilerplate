import React, { useState } from "react";
import { links } from "../assets/data";

const SidebarComponent = (): JSX.Element => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <i
        className={`${sideBarOpen ? "fa fa-bars sidebar " : "fa fa-bars"}`}
        aria-hidden="true"
        onClick={() => setSideBarOpen(true)}
      ></i>

      {sideBarOpen && (
        <aside className="sidebar">
          <div className="sidebar-header">
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
              onClick={() => setSideBarOpen(false)}
            ></i>
          </div>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                    {text === "Dropdown" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </>
  );
};

export default SidebarComponent;
