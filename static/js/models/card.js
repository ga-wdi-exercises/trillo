// Card Object
var Card = function( description ){
  // description: string
  this.description = description
  // completed: boolean
  trillo.cards.push( this )
}

//the Card allows us to create the new card description and pushes it into the
//MODELS/trillo.js empty array.

//.push(this) is refering to /models/trillo.js "this.cards = []". 
