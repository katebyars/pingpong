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
    var aNumber = parseInt(userInput);
      if ((userInput%3!>0) && (userInput%5!>0) && (userInput%15!=0)) {
        returnCountDown(anArray, userInput);
        return anArray;
      } else if (userInput==="3") {
        return "ping";
      } else if (userInput==="5") {
       return "pong";
     } else if (userInput==="15") {
       return "ping-pong";
     }
}
