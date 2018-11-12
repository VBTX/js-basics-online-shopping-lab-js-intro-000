var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  this.cart.push({
 itemName: "bananas",
 itemPrice: "17"
});
}

function viewCart() {
  for (var i = 0; i <= cart.length; i++){
    if (cart.length>0){
    return `In your cart, you have ${itemName} at $${itemPrice}`
  }else{
    return `Your shopping car is empty.`
  }
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
