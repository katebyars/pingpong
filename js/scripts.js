$(document).ready(function() {
///Front End Logic///
  $("form#userInput").submit(function(event) {
    var input = $("input:text").val();
    var newArray = [];
    var result = getResult(newArray, input);
    $("#result").append(result + "<br>");
    event.preventDefault();
  });
});

///Back End Logic///

function returnCountDown(anArray, userInput) {
  var aNumber = parseInt(userInput);
  anArray.push(aNumber);

  for (var i = aNumber; aNumber > 1; i += 1) {
      aNumber -= 1 ;
      anArray.push(aNumber);
  }
  anArray.reverse();
  return anArray;
}

function getResult(anArray, userInput) {
  var theInput = parseInt(userInput);

  if (theInput%3===0 && theInput%5!=0) {
      return "ping";
  } else if (theInput%5===0 && theInput%15===0) {
     return "ping-pong";
  } else if (theInput%5===0) {
     return "pong";
  } else if ((theInput%3!=0)||(theInput%5!=0)) {
     returnCountDown(anArray, userInput);
     return anArray;
  }
}
