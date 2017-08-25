


function Pizza(size, sauce, crust, meat, veg) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.meat = meat;
  this.veg = veg;
  //this.price = new window.Price(this);
}
Pizza.prototype.totalPrice = function() {
  return (this.size + this.sauce + this.crust + this.meat + this.veg).toFixed(2);
};



$(document).ready(function() {
  $('#pizza-form').submit(function(event) {
    event.preventDefault();
    $('#show-pizza').empty(newPizza);
     var selectedSize = parseFloat($('#select-size').val());
     var selectedSauce = parseFloat($('#select-sauce').val());
     var selectedCrust = parseFloat($('#select-crust').val());
     var selectedMeat = parseFloat($('#select-meat').val());
     var selectedVeggie = parseFloat($('#select-veg').val());
     var newPizza = new Pizza (selectedSize, selectedSauce, selectedCrust, selectedMeat, selectedVeggie);

console.log(newPizza.totalPrice());
$('#show-pizza').append(newPizza.totalPrice());
console.log(newPizza);

     //addPrices(newPizza);
     //sum(newPizza);

    //  console.log(newPizza);
    //  console.log(newPizza.sum(this));

   });

});
