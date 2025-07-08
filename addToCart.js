import { getCartProductFormLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFormLS();

export const addToCart = (event,id,stock) => {

    let arrLocalStorageProduct = getCartProductFormLS();
    const currProductElem = document.querySelector(`#card${id}`);
    //console.log(currProductElem);
    let quantity = currProductElem.querySelector(".productQuantity").innerText;
    let price = currProductElem.querySelector(".productPrice").innerText;
    console.log(quantity,price);
     price = price.replace("₹","");

     //remove duplicate 
     let existingProduct = arrLocalStorageProduct.find(
        (currProd) => currProd.id === id
     );
     if(existingProduct && quantity > 1){
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id,quantity,price};
        updatedCart = arrLocalStorageProduct.map((currProd) => {
            return currProd.id === id ? updatedCart:currProd;
        });
        console.log(updatedCart);
        
        localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
        updateCartValue(updatedCart);
        //show toast when product added to the cart
        showToast("add",id);

     }
     if(existingProduct){
        return false;
     }
     price = Number(price * quantity);
     quantity = Number(quantity);

     //let updateCart = {id,quantity,price};
     arrLocalStorageProduct.push({id,quantity,price});
     localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

     //update the cart button value
     updateCartValue(arrLocalStorageProduct);
     //show toast when product added to the cart
     console.log("Toast should show for ID:", id);
     showToast("add", id);

};