import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import nes from "./components/nes";
import dash from "./components/dash";
import Da from "./components/Da"
import E from "./components/E"
import Home from "./components/Home";
import Layout from "./components/Layout";
import Blog from "./components/Blog";
import Test from "./components/Test";
import Change from "./components/Change";

export default function Appp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} /> 
            <Route path="/Change" element={<Change/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }




createRoot(document.getElementById("root")).render(<Appp/>)