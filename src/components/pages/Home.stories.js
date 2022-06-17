import React from "react";

import Home from "./Home";
import { buildProductList } from "models/builders/products";

export default {
  title: "Components/pages/Home",
  component: Home,
};

const products = buildProductList(8);

export const usage = () => <Home products={products} />;
