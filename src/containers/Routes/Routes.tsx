import React from "react";
import { Route, Routes } from "react-router-dom";
import { ItemsPage } from "../../pages";
import { routesMapper } from "../../config"
import { Help, AboutUs } from "../../containers";

export const RoutesComponent = () => {
  const {cart, help, about} = routesMapper
  return <Routes>
    <Route path="/" element={<ItemsPage />} />
    <Route path="/:itemId" element={<ItemsPage />} />
    <Route path={cart} element={<h1>cart</h1>} />
    <Route path={help} element={<Help />} />
    <Route path={about} element={<AboutUs />} />
  </Routes>
}
