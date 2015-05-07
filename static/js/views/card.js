// CardView

// creates a single view for each card
// creates a new div for the card then add the description and completed to that div inside a different html attribute
// add event listener to completed checkbox
// add event listener to description to edit 
var CardView = function( card ){
  this.card = card
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
  this.description.addEventListener("click", this.editCard.bind(this) )
  this.container.appendChild( input )
  return this.container
  // allow completion check
}

// methods of CardView
// anytime completed is clicked it will alert with yeah
// edit card removes the old descripton then appends the input of the new one
// 
CardView.prototype = {
  toggleCompleted: function( event ){
    alert("yeah")
  },
  editCard: function( event ){
    var input = document.createElement("input")
    input.value = this.description.innerHTML
    this.container.removeChild( this.description )
    this.container.appendChild( input )
    input.addEventListener("keyup", function( event ){
      if( event.keyCode == 13 ){
        var value = input.value
        this.card.update({description: value})
        trilloView.render()
      }
    }.bind(this))
  }
}
