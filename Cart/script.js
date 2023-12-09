const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const item_count = document.getElementById('item-count');
const total_price = document.getElementById('total-price');
const buy_btn = document.getElementById('buy-btn');
const discount_price = document.getElementById('discount-price');

let quantity = 1;
let final_price = 5000;
let discount_final = 0;
update();

function update() {
    total_price.textContent = final_price;
    item_count.textContent = quantity;
    discount_price.textContent = discount_final;
}

function increaseQuantity() {
    if (quantity < 10) {
        quantity++;
        final_price += 5000;
        update();
    }
    else {
        alert("You Can't Buy More Than 10 Items")
    }
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        final_price -= 5000;
        update();
    }
    else {
        alert("You Can't Buy Less Than 1 Item");
    }
    if(quantity == 9 && final_price == 40000){
        final_price += 5000;
        discount_final = 0;
        update();
    }
}

buy_btn.addEventListener('click', () => {
    alert("Bank Balance : 00");
})

function disc(){
    if(quantity == 10 && final_price == 50000){
        discount_final = 5000;
        final_price -= 5000;
        update();
    }
    else{
        alert('you are not eligible for this discount please select 10 or more items for this discount')
    }
}