import { getCartProductFormLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFormLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    //update the localstorage after removing the item
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    //to remove the div by click
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        //show toast when product remove to cart
        showToast("delete",id);
    }
    updateCartValue(cartProducts);
}