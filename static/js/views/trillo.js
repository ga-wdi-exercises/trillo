// Define a TrilloView (a TrilloView constructor function?)
var TrilloView = function( model ){
  var newCard = document.querySelector("#new-card-button")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.newCardText = document.querySelector("#new-card-text") 
  this.model = model // give TrilloView a model (trillo)

  // handle form submission
  // create new cards 
  // When the new card button is clicked, call the newCard function
  newCard.addEventListener("click", this.newCard.bind(this) )
  this.render()
  // put existing cards into
  // either done or todo lists.
}

TrilloView.prototype = {
  // When the new card button is clicked, prevent the form from 
  // being submitted. Then create a new instance of Card with
  // a description of whatever is in the new card text input 
  // field. Then render the page.
  newCard: function( event ){
    event.preventDefault() 
    var card = new Card( this.newCardText.value )
    this.render()
  },
  // Clear each list, then populate each one based on each card's
  // completed status.
  render: function(){
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for( var i = 0; i < this.model.cards.length; i++ ){
      // Create a new CardView instance and append each 
      // card as an <li> to the proper list
      var cardView = new CardView( this.model.cards[i] )
      if( this.model.cards[i].completed ){
        this.doneList.appendChild( cardView ) 
      } else {
        this.toDoList.appendChild( cardView )
      }
    }
  }
}
