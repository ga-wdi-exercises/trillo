// CardView
var CardView = function( card ){
  // displaying the card
  var li = document.createElement("li")
  li.className = "card"
  li.innerHTML = card.description
  var input = document.createElement("input")
  input.type = "checkbox"
  input.checked = card.completed
  input.className = "finish"
  input.addEventListener("click", function(){
    card.completed = input.checked ? true : false
    card.save()
    trilloView.render()
  })
  li.appendChild( input )
  return li
  // allow completion check
}

CardView.prototype = {
  toggleCompleted: function( event ){
    alert("yeah")
  }
}
