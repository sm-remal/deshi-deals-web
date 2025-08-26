function getElement(id){
    const element = document.getElementById(id);
    return element;
}

// Button addEventListener 

getElement("cartBox").addEventListener("click", function(event){
    if(event.target.className.includes("cart-btn")){

        const quantityProducts = getElement("quantity").innerText;
        const currentQuantity = Number(quantityProducts) + 1
        getElement("quantity").innerText = currentQuantity 

        // Take 10 Cart Check 

          if(currentQuantity > 10){
            alert("You can add maximum 10 items !!");
            return;
        }

        const value = event.target;
        const productsImg = value.parentNode.parentNode.children[0].children[0].src;
        const productsTitle = value.parentNode.parentNode.children[1].children[1].innerText;
        const productsPrice = value.parentNode.parentNode.children[1].children[2].children[0].innerText

        const total = getElement("total-price").innerText;
        const totalPrice = Number(productsPrice) + Number(total)
        getElement("total-price").innerText = totalPrice


        const parentDiv = getElement("add-to-cart")
        const createDiv = document.createElement("div")
        createDiv.innerHTML = `
                  <div class="flex justify-between items-center mx-5 bg-[#f4f1f1] px-6 my-5 rounded-lg">
                    <img src="${productsImg}" alt="" class="w-18 mt-2">
                    <div>
                        <h3 class="text-lg font-semibold">${productsTitle}</h3>
                        <p class="text-gray-500 text-sm"> <span> 1120 </span> Taka</p>
                    </div>
                </div>
        `
        parentDiv.appendChild(createDiv);  
        
    }   
})


// Discount Coupon 


getElement("couponBtn").addEventListener("click", function(){
    const couponInput = getElement("couponInput").value.trim();
    const totalPrice = Number(getElement("total-price").innerText);

    if(totalPrice === 0){
        alert("Please add some products first!");
        return;
    }

    if(couponInput === "DISCOUNT10"){
        const discount = totalPrice * 0.10;  
        const discountPrice = totalPrice - discount;
        getElement("discountPrice").innerText = discountPrice;
    } else {
        alert("Invalid Coupon Code!");
    }
});


// Cart Clean

document.getElementById("clear-btn").addEventListener("click", function(){
    const addToCart = getElement("add-to-cart");

    addToCart.innerHTML = " ";
    getElement("quantity").innerText = 0
    getElement("total-price").innerText = 0
})


