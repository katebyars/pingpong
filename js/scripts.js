$(document).ready(function() {
///Front End Logic///
  $("form#userInput").submit(function(event) {
    var input = $("input:text").val();
    var result = returnArray(input);
    $("#result").append(result + "<br>");
    event.preventDefault();
    // });
  });
});

///Back End Logic///


  function returnArray(inputtedNumber) {
    var newArray = [];
    var newNumber = parseInt(inputtedNumber);
    newArray.push(newNumber);
      for (var i = 0; i <= newNumber; i += 1) {
        while (newNumber >= 2) {
          var newNumber = newNumber-1;
          newArray.push(newNumber);
          return(newArray);
        }
    }
  }
