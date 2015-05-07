// CardView
var CardView = function( card ){
  console.log( card )
  // displaying the card
  var li = document.createElement("li")
  li.innerHTML = card.description
  return li
  // allow completion check
}
