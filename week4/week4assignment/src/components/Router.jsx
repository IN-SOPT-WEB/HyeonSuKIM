import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Content from "./Content.jsx";

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