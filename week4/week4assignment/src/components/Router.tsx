import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header.tsx";
import Content from "./Content.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Header/>}>
            <Route path=":userName" element={<Content />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;