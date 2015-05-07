// Card Object

// this creates a card js object with description, completed, and id
// pushes the cards into trillo model
var Card = function( description ){
  // description: string 
  this.description = description
  // completed: boolean
  this.completed = false
  this.id = trillo.cards.length
  trillo.cards.push( this )
}

// the methods of the card constructor
// saves the cards into the trillo model's array only if they are the same
// update finds the right card then saves it
Card.prototype = {
  save: function(){
    trillo.cards[this.id] = this	
  },
  update: function( props ){
    for( var prop in props ){
      this[prop] = props[prop]
    }	  
    this.save()
  }
}
