var tableSpoons = function(cups) {
  return cups / 16;
};

var gallons = function(quarts) {
  return quarts * 4;
};



$(function() {
  $("form#cups").submit(function(event) {
    event.preventDefault();
    var cups = parseInt($("input#cups").val());
    var result = tableSpoons(cups);
    $("#cups-output").text(result);
  });

  $("form#quarts").submit(function(event) {
    event.preventDefault();
    var quarts = parseInt($("input#quarts").val());
    var result = gallons(quarts);
    $("#quarts-output").text(result);
  });


});
