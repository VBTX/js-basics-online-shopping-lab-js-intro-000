var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
 itemName: "daikon",
 itemPrice: Math.floor(Math.random() * 100)
});
return `${item} has been added to your cart.`
}

addToCart("ice cream");
addToCart("vanilla");



function viewCart() {
  for (var i = 0; i <= cart.length; i++){
    var item = cart[i];
    var itemPrice = cart[i].itemPrice;
    if (cart.length === 1){
    return `In your cart, you have ${cart.item} at $${cart.itemPrice}.`;
  }else if(cart.length === 2){
    return `In your cart, you have ${cart.item} at $${cart.itemPrice}, and ${cart.item} at $${cart.itemPrice}.`;
  }else if(cart.length >= 3){
    return `In your cart, you have ${cart.item} at $${cart.itemPrice}, ${cart.item} at $${cart.itemPrice}, and ${cart.item} at $${cart.itemPrice}.`;
  }else{
    return `Your shopping cart is empty.`;
  }
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  cart.pop();
}
removeFromCart("vanilla");

function placeOrder(cardNumber) {
  // write your code here
}
