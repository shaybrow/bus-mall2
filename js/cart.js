/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);

}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
// function renderCart() {
//   loadCart();
//   clearCart();
//   showCart();
// }

// done: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // table.innerHTML = ' ';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let parEl = document.getElementById('cart');

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart



  for (var i = 0; i < cart.items.items.length; i++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    parEl.appendChild(tr);
    td.textContent = 'x';
    td.setAttribute(`x${i}`);
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = `${cart.items.items[i].quantity}`;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = `${cart.items.items[i].product}`;
    tr.appendChild(td);
  }

  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
// var clickedX = event.target.id;
// for (var i = 0; i < cart.items.items.length; i++){
// if (clickedX === `x${i}`){
//   var delItem = getElementById`x${i}`;
//   delItem.innerHTML=' '; 
}

}

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}
table.addEventListener('click', removeItemFromCart);

function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
console.log(cart.items.length);