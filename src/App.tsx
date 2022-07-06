import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footers } from "./components/Footers";
import { Headers } from "./components/Headers";
import { LoadingView } from "./components/LoadingView";
import { GlobalStyle } from "./helper/lib";
import { Home } from "./page/Home";
import { Project } from "./page/Project";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense
        fallback={
          <LoadingView title={"Loading ..."} body={"please wait a moment"} />
        }
      >
        <BrowserRouter>
          <Headers />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
          <Footers />
        </BrowserRouter>
      </Suspense>
    </>
  );
}
