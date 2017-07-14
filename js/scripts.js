$(document).ready(function() {
///Front End Logic///
  $("form#userInput").submit(function(event) {
    var input = $("input:text").val();
    var newArray = [];

    var result = returnCountDown(newArray, input);

    $("#result").append((result.reverse()) + "<br>");
    event.preventDefault();
  });
});

///Back End Logic///



  function returnCountDown(anArray, userInput) {

    if (userInput = "3") {
      return "ping";
    } else if (userInput = "5") {
      return "pong";
    } else {
        var aNumber = parseInt(userinput);
        anArray.push(aNumber);
          for (var i = aNumber; aNumber > 1; i += 1) {
              aNumber -= 1 ;
              anArray.push(aNumber);
          }
          return anArray;
        }
