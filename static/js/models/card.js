// Card Object
var Card = function( description ){
  // description: string
  this.description = description
  // completed: boolean
  trillo.cards.push( this )
}

// this variable defines and ceates what a card is.  when a card is created, the description will be filled with text, or a number and it's "completed" element will be set to true or false.
