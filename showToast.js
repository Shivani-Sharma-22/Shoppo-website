export function showToast(operation,id){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add"){
        toast.textContent = `product with Id ${id} has been added.`;
    }else{
        toast.textContent = `product with Id ${id} has been removed.`;  
    
  }
  document.body.appendChild(toast);
  //automatically remove the toast after a few second
  setTimeout(() => {
    toast.remove();
  }, 2000);

}