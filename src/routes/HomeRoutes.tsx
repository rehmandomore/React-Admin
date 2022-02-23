import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Comments from "@/pages/Comments";
import Tags from "@/pages/Tags";

type Props = {
  name?: string;
};

const HomeRoutes = ({ name }: Props) => (
  <div className="min-h-screen w-full">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Comments" element={<Comments />} />
      <Route path="/Tags" element={<Tags />} />
    </Routes>
  </div>
);

export default HomeRoutes;
