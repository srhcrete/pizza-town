
function Order(name, total) {
  this.name = name;
  total = total;
}

var orderArr = [];

function makeOrder() {
  name = $('#name').val();
  newOrder = new Order (name);
}

function sumOrder() {
  var sum = orderArr.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  newOrder.total = sum;
  console.log(sum);
  console.log(newOrder);
}
// function updateElementContents(element, contents) {
//   var htmlString = '';
//   contents = [].concat(contents);
//   element.hide().empty();
//   htmlString = contents.map(function(contentItem) {
//     return '<p><span class="type">' + contentItem + '</span></p>';
//   }).join('');
//   element.append(htmlString);
//   element.show();
// }
//
function updatePriceElement(newOrder) {
//   updateElementContents(window.$('#show-order'), [newOrder.name, newOrder.total]);
      $('#total-order').append("<ul>" + newOrder.name + "</ul>");
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
  orderArr.push(newPizza.pizzaPrice());
  console.log(orderArr);

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
    toppings=0;
  });

  $('#completeOrder').click(function() {
    $('#show-order').show();
    sumOrder();
    updatePriceElement(newOrder);
  });
});
