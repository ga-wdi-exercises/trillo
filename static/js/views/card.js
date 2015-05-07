// CardView
var CardView = function( card ){
  console.log( card )
  // displaying the card
  var li = document.createElement("li")
  li.innerHTML = card.description
  return li
  // allow completion check
}

//views allow us to display.  The above is the display for the card (console.log).
//li creates HTML list format so that cards are displayed properly. 
