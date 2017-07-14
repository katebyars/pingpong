$(document).ready(function() {

///Front End Logic///
  $("form#userInput").submit(function(event) {
    var input = $("input:text").val();
    // $("#list").append.returnArray(input);
    alert(returnArray(input));
    event.preventDefault();
    // });
  });
});

///Back End Logic///
  var newArray = [];

  function returnArray(inputtedNumber) {
    var newNumber = parseInt(inputtedNumber);
    newArray.push(newNumber);
      for (var i = 0; i <= newNumber; i += 1) {
        while (newNumber >= 2) {
          var newNumber = newNumber-1;
          newArray.push(newNumber);
          // alert(newArray);
        }
    }
  }
