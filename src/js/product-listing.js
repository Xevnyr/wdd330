import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);
productList.init();

document.querySelector(".products h2").textContent =
  `Top Products: ${category}`;
