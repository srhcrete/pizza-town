
function Pizza(size, sauce, crust, meat, veg) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.meat = meat;
  this.veg = veg;
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

     console.log(newPizza);

   });

});
