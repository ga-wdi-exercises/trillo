//This file builds a Card constructor function with a getter method called this.description
//that is set to the description parameter that is passed into the constructor function. The
//Card model also has a method that can push itself into the cards array in the Trillo model.

// Card Object
var Card = function( description ){
  // description: string
  this.description = description
  // completed: boolean
  trillo.cards.push( this )
}
