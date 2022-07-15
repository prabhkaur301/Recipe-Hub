import React from "react";
import Home from "./Home";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import NotFound from "./NotFound";
// import Saved from "./Saved";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:term" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/saved" element={<Saved />} /> */}
    </Routes>
  );
};

export default Pages;
