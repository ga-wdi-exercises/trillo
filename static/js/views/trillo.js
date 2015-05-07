//This TrilloView is a constructor function that takes one argument. The argument is
//set to a variable called this.model. The object has a number of methods that allow
// the it to access specific DOM elements.

var TrilloView = function( model ){
  var newCard = document.querySelector("#new-card-button")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.newCardText = document.querySelector("#new-card-text")
  this.model = model

//this line sets an event listener to the newCard variable which was defined as the
//"new-card-button" DOM element up above. The event listener listens for a click, and when
//that happens, it call the render function, defined below.
  newCard.addEventListener("click", this.newCard.bind(this) )
  this.render()

}
//this line defines a prototype of the TrilloView object
TrilloView.prototype = {

//attaches a newCard function to the defined TrilloView prototype object
//the function takes in one parameter, an event, which is then used to call the
//preventDefault method, which prevents the page form reloading when clicked.
//The function creates a new instance of the Card object by passing it the text of the new
//card to be created. Finally, calls the render function, defined below.
  newCard: function( event ){
    event.preventDefault()
    var card = new Card( this.newCardText.value )
    this.render()
  },

//this attaches a render function to the TrilloView prototype object. The function shows
//all of the cards and displays them either in the todo list or the done list based
//on whether their status is completed or not.
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
