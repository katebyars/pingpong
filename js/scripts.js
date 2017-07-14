$(document).ready(function() {
///Front End Logic///
  $("form#userInput").submit(function(event) {
    var input = $("input:text").val();
    var newArray = [];
    var newNumber = parseInt(input);
    var result = returnCountDown(newArray, newNumber);
    alert(result.reverse());


    returnCountDown(newArray, newNumber, userInput)
    $("#result").append(result + "<br>");
    event.preventDefault();
  });
});

///Back End Logic///

// if (userInput === "3") {
//        return("ping");
//      } else if {

  function returnCountDown(anArray, aNumber) {
    // var anArray = [];
    anArray.push(aNumber);
    // var aNumber = "";
        for (var i = aNumber; aNumber > 1; i += 1) {
            aNumber -= 1 ;
            anArray.push(aNumber);
        }
        return anArray;
      }
