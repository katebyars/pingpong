$(document).ready(function() {
///Front End Logic///
  $("form#userInput").submit(function(event) {
    var input = ("");
    var result = [];
    var resultArray =[];
    input = $("input:text").val();
    result = returnCountDown(resultArray, input);
    appendAsList(result);
    event.preventDefault();
    $("#output").addClass(".result");
  });
///Back End Logic///
  function returnCountDown(anArray, userInput) {
    var newArray = [];
    parseInt(userInput);
    anArray.push(userInput);
    for (var i = userInput; userInput > 1; i += 1) {
      userInput -= 1 ;
      anArray.push(userInput);
    }
    anArray.reverse();
    anArray.forEach(function(part) {
      if (part%3===0 && part%5!=0) {
          newArray.push("ping");
      } else if (part%5===0 && part%15===0) {
         newArray.push("ping-pong");
      } else if (part%5===0) {
         newArray.push("pong");
      } else {
        newArray.push(part);
      }
    });
    return newArray;
  }
  function appendAsList(anyArray) {
    $("#output").empty();
    anyArray.forEach(function(object) {
      $(".result").append("<li>" + object + "<br>");
    });
  }
});





// function replaceNumbers(anArrayOfNumbers){

// }
