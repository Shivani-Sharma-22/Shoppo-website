import './style.css'
import products from "./src/api/products.json";
import { showProductContainer } from './homeProductCard.js';

//define the function named 'showProductContainer 'that takes an array of product
showProductContainer(products);