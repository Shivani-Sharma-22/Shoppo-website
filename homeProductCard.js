import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

export const showProductContainer = (products) => {
    if (!products) return false;
  
    products.forEach((curProd) => {
      const { id, name, category, brand, image, price, stock, description } = curProd;
  
      // Clone the template
      const productClone = document.importNode(productTemplate.content, true);
  
      // Update the cloned content
      productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
      productClone.querySelector(".category").textContent = category;
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productImage").alt = name;
      productClone.querySelector(".productName").textContent = name;
      productClone.querySelector(".productDescription").textContent = description;
      productClone.querySelector(".productStock").textContent = stock;
      productClone.querySelector(".productPrice").textContent = `₹${price}`;
      productClone.querySelector(".productActualPrice").textContent = `₹${price * 3}`;
  
      // Add event listener inside the loop
      const stockElement = productClone.querySelector(".stockElement");
      if (stockElement) {
        stockElement.addEventListener("click", (event) => {
          homeQuantityToggle(event, id, stock);
        });
      }
      //add add to cart 
      productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
        addToCart(event,id,stock);
      });
  
      // Append to container
      productContainer.append(productClone);
    });
  };
  