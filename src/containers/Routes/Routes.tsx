import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemsPage } from "../../pages";

export const RoutesComponent = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemsPage />} />
      <Route path="cart" element={<h1>cart</h1>} />
    </Routes>
  </BrowserRouter>
}
