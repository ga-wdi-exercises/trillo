var TrilloView = function( model ){
  var newCard = document.querySelector("#new-card-button")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.newCardText = document.querySelector("#new-card-text")
  this.model = model
  //TrilloView is essentially the <form> form which the card information is formated and stored.
  //"this" points to the new card object which inherits from the MODELS folder.


  // handle form submission
  // create new cards
  newCard.addEventListener("click", this.newCard.bind(this) )
  this.render()
  // put existing cards into
  // either done or todo lists.
}
//the eventlistener listens for a mouse click/keyboard enter from the object being worked on
//and points to the function below where 'render' is.  this allows changes in text and mark complete or not.


TrilloView.prototype = {
  newCard: function( event ){
    event.preventDefault()
    var card = new Card( this.newCardText.value )
    this.render()
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
      }
    }
  }
}
//TrilloView.prototype inherits from Trillowview and adds the ability to create/update cards.
//the render portion the the update portion of the card functionality.
