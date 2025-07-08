import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFormLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import products from "./src/api/products.json";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFormLS();

let filterProduct = products.filter((curProd) => {
    return cartProducts.some((currElem) => currElem.id === curProd.id); 
});
console.log(filterProduct);

//to update the addToCart page

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () =>{
    filterProduct.forEach((curProd) => {
        const {category ,id,image,name,stock,price} = curProd;

        let productClone = document.importNode(templateContainer.content,true);

        const lsActualData = fetchQuantityFromCartLS(id,price);

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;

        const stockElement = productClone
        .querySelector(".stockElement")
          stockElement.addEventListener("click", (event) => {
            incrementDecrement(event, id, stock,price);
          });
        

        productClone
        .querySelector(".remove-to-cart-button")
        .addEventListener("click",() => removeProdFromCart(id));
        

        cartElement.appendChild(productClone);
    })
}

//showing cart product
showCartProduct();
//calculate cart total 
updateCartProductTotal();


