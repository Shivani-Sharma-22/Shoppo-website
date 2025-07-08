import { getCartProductFormLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event,id,stock,price) => {
    const currCardElem = document.querySelector(`#card${id}`);
    const productQuantity = currCardElem.querySelector('.productQuantity');
    const productPrice = currCardElem.querySelector(".productPrice");

    let quantity = 1;
    let lsPrice = 0;

    //get the data from local storage
    let localCartProducts = getCartProductFormLS();

    let existingProduct = localCartProducts.find((curProd) => curProd.id === id);

    if(existingProduct){
        quantity = existingProduct.quantity;
        lsPrice = existingProduct.price;
    }else{
        lsPrice = price;
        price = price;
    }
    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
            lsPrice = price * stock;
        }
    }
    if(event.target.className === "cartDecrement") {
        if(quantity > 1){
            quantity -= 1;
        }
    }
    //finally we update the local storage price
    //price - actual price hai yey api wala
    lsPrice = price * quantity;
    lsPrice = Number(lsPrice.toFixed(2));
    let updatedCart = {id,quantity,price:lsPrice};
        updatedCart = localCartProducts.map((currProd) => {
        return currProd.id === id ? updatedCart:currProd;
        });
        //console.log(updatedCart);
            
        localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

        //also we need to reflects the changes on the screen
        productQuantity.innerText =quantity;
        productPrice.innerText = lsPrice;
        //calculate cart total 
        updateCartProductTotal();
}