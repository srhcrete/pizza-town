

function Pizza(size, sauce, crust, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.totalPrice = function() {
  return (this.size + this.sauce + this.crust + this.toppings).toFixed(2);
};

var toppings = 0;
function sumToppings(){
  $("input[type=checkbox]:checked").each(function(){
    toppings += parseFloat($(this).val());
  });

}


$(document).ready(function() {
  $('#pizza-form').submit(function(event) {
    event.preventDefault();
    $('#show-pizza').empty();
     var selectedSize = parseFloat($('#select-size').val());
     var selectedSauce = parseFloat($('#select-sauce').val());
     var selectedCrust = parseFloat($('#select-crust').val());
     sumToppings();
     var newPizza = new Pizza (selectedSize, selectedSauce, selectedCrust, toppings);


$('#show-pizza').append("$" + newPizza.totalPrice());
console.log(newPizza);

   });

});
