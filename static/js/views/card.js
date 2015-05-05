// CardView
var CardView = function( card ){
  this.container = document.createElement("div")
  // displaying the card
  this.container.className = "card"
  this.description = document.createElement("p")
  this.description.innerHTML = card.description
  this.container.appendChild( this.description ) 
  var input = document.createElement("input")
  input.type = "checkbox"
  input.checked = card.completed
  input.className = "finish"
  input.addEventListener("click", function(){
    var completed = input.checked ? true : false
    card.update({completed: completed})
    trilloView.render()
  })
  this.container.appendChild( input )
  return this.container
  // allow completion check
}

CardView.prototype = {
  toggleCompleted: function( event ){
    alert("yeah")
  },
  showCard: function(){
      	    
  }
}
