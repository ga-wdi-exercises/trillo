var TrilloView = function( model ){
  var newCard = document.querySelector("#new-card-button")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.newCardText = document.querySelector("#new-card-text") 
  this.model = model

  // handle form submission
  // create new cards 
  newCard.addEventListener("click", this.newCard.bind(this) )
  this.render()
  // put existing cards into
  // either done or todo lists.
}

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
