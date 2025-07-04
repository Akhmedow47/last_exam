import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./pages/layout/layout";
import Home from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Info from "./pages/info/info";
import Program from "./pages/program/program";
import "@ant-design/v5-patch-for-react-19";
import { unstableSetRender } from "antd";
import { createRoot } from "react-dom/client";

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="program" element={<Program />} />
      </Route>
    </Routes>
  );
}

export default App;
