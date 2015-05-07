// CardView
// define a new card view
var CardView = function( card ){
  console.log( card )
  // displaying the card
  // Put each card's description in an <li>
  // that will be placed in a card list
  var li = document.createElement("li")
  li.innerHTML = card.description
  return li
  // allow completion check
}
