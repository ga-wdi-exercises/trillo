var TrilloView = function( model ){
  var newCard = document.querySelector("#new-card-button")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.newCardText = document.querySelector("#new-card-text")
  this.model = model

// these functions related to the "TrilloView" object map out where on the page the differnet functions of TrilloView are going to take place.
// newCard will take place in the "new-card" class div after the "new-card-button" is clicked.
// toDoList will take place in the "card-list" under the "todo-column" div.
// doneList will take place in the "card-list" under the "completed-column" div
// newCardText will take place in the "new-card-text" div.


  newCard.addEventListener("click", this.newCard.bind(this) )
  this.render()

  // this event listener is awaiting a click on the "new-card-button" in order to create a new card on the Trillo view.
}

TrilloView.prototype = {
  newCard: function( event ){
    event.preventDefault()
    var card = new Card( this.newCardText.value )
    this.render()
// this function is clearing space for all the other events from the "new-card-button" by preventing it's defualt function. It will create and display a new card on the Trillo view after the new card's text is entered and the button is clicked.
  },
  render: function(){
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for( var i = 0; i < this.model.cards.length; i++ ){
      var cardView = new CardView( this.model.cards[i] )
      if( this.model.cards[i].completed ){
        this.doneList.appendChild( cardView )
      } else {
        this.toDoList.appendChild( cardView )

// this render function will review and sort the cards depending on level of completeness.  it will then add them to either the completed or to-do lists in their respective divs.
      }
    }
  }
}
