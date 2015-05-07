// CardView
var CardView = function( card ){
  console.log( card )
  // displaying the card
  var li = document.createElement("li")
  li.innerHTML = card.description
  return li
  // allow completion check
}

// when CardView runs, a message will be displayed in the browser's console log with the card's information.  then, any "string" that was in the description will be pushed to the appropriate line item ("To Do" or "Completed") 
