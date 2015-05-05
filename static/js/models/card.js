// Card Object
var Card = function( description ){
  // description: string 
  this.description = description
  // completed: boolean
  this.completed = false
  this.id = trillo.cards.length
  trillo.cards.push( this )
}

Card.prototype = {
  save: function(){
    trillo.cards[this.id] = this	
  }
}
