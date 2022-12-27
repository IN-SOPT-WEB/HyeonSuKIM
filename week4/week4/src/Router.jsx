import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "./components/Post.jsx";
import ListPage from "./pages/List.jsx";
import MainPage from "./pages/Main.jsx";
import {Link} from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<ListPage />} >
            <Route path=":postId" element={<Post />} />
        </Route>
      </Routes>
      <Link to = "/post"> 리스트 페이지 보러가기 </Link>
    </BrowserRouter>
  );
}

export default Router;