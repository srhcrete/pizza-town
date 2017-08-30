
function Order(name, address, total) {
  this.name = name;
  this.address = address;
  total = total;
}

var cart = [];

function makeOrder() {
  name = $('#orderName').val();
  address = $('#address').val();
  newOrder = new Order (name, address);
}

function sumOrder() {
  var sum = cart.reduce(add, 0);
    function add(a, b) {
    return a + b;
  }
  newOrder.total = sum;
}

function updatePriceElement(newOrder) {
  $('#total-order').append("<ul>" + "Name on Order: "+ newOrder.name + "</ul>");
  $('#total-order').append("<ul>" + "Address for Delivery: "+ newOrder.address + "</ul>");
  $('#total-order').append("<ul>" + "Total Price: $" + newOrder.total + "</ul>");
}

var newPizza;
function Pizza(size, sauce, crust, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function() {
  return (this.size + this.sauce + this.crust + this.toppings);
};

toppings = 0;
function sumToppings(){
  $("input[type=checkbox]:checked").each(function(){
    toppings += parseFloat($(".sum").val());
  });
}

function submitPizza() {
  selectedSize = parseFloat($('#select-size').val());
  selectedSauce = parseFloat($('#select-sauce').val());
  selectedCrust = parseFloat($('#select-crust').val());
  sumToppings();
  makeOrder();
  newPizza = new Pizza (selectedSize, selectedSauce, selectedCrust, toppings);
  cart.push(newPizza.pizzaPrice());
  console.log(newPizza);
}

$(document).ready(function() {
  $('#startOrder').click(function() {
    $( "#start-order" ).hide();
    $('#form-div').show();
  });

  $('#pizza-form').submit(function(event) {
    event.preventDefault();
    window.submitPizza();
    $('#form-div').hide();
    $('#continueOrder').show();
  });

  $('#newPizza').click(function() {
    $('#form-div').show();
    $('#continueOrder').hide();
    toppings=0;
  });

  $('#completeOrder').click(function() {
    $('#show-order').show();
    $('#continueOrder').hide();
    sumOrder();
    updatePriceElement(newOrder);
  });
});
