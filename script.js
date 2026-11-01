let quantity = 0;
let plusButton = document.getElementById("plus-btn");
let quantityValue = document.getElementById("quantity-value");

plusButton.addEventListener("click",function () {
    quantity++;
    quantityValue.textContent = quantity;

});
let minusButton = document.getElementById("minus-btn");

minusButton.addEventListener("click", function(){
    if (quantity >0) {
        quantity--;
        quantityValue.textContent = quantity;
    }
});