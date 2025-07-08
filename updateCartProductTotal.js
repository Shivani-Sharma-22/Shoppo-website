import { getCartProductFormLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");


    let localCartProducts = getCartProductFormLS();
    let initialValue =0;
    let totalCartProductsPrice = localCartProducts.reduce((accum,currElem) => {
        let productPrice = parseInt(currElem.price) || 0;
        return accum + productPrice;
    },initialValue)
    //console.log(totalCartProductsPrice);
    productSubTotal.textContent = `₹${totalCartProductsPrice}`;
    productFinalTotal.textContent = `₹${totalCartProductsPrice + 50}`;
}