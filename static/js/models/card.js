// Card Object
// Card constructor function
var Card = function( description ){
  // description: string 
  this.description = description // a new card has a description
  // completed: boolean
  trillo.cards.push( this ) // a new card is pushed onto trillo.cards (an array)
}
