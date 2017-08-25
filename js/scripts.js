var priceArr = [];

// function addPrices(Pizza){
//   for (var k in pizza) {
//     priceArr.push(input[k]);
//     console.log(priceArr);
//   }
// }

var prices = {
  0: "0",
  1: "9.99",
  2: "10.99",
  3: "11.99",
  4: "1.00",
  5: "2.00",
};

function Pizza(size, sauce, crust, meat, veg) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.meat = meat;
  this.veg = veg;
  //this.price = new window.Price(this);
}
function addPrices (newPizza) {

for (var k in newPizza) {
     priceArr.push(newPizza[k]);
   }
    console.log(priceArr);
}




$(document).ready(function() {
  $('#pizza-form').submit(function(event) {
    event.preventDefault();

     var selectedSize =$('#select-size').val();
     var selectedSauce = $('#select-sauce').val();
     var selectedCrust = $('#select-crust').val();
     var selectedMeat = $('#select-meat').val();
     var selectedVeggie = $('#select-veg').val();
     var newPizza = new Pizza (selectedSize, selectedSauce, selectedCrust, selectedMeat, selectedVeggie);

     addPrices(newPizza);

     console.log(newPizza);

   });

});
