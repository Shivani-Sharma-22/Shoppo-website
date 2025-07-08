const cartValue = document.querySelector("#cartValue");
export const updateCartValue = (cartProducts) =>{
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-plus"></i>${cartProducts.length}</i>`)
}