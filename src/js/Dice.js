/**
 *	The dice object
 *	Sets up variables and functions for the dice
 */
function Dice() {   
	
	this.sum = 0;			// represents the dice active side
	this.element = '';		// reference to the dice graphical representation

	/**
	 * Throws a dice with random number 1-6 
	 * Returns the li element with the random dicenumber
	 */
	this.roll = function(){			
        this.sum = Math.floor(6*Math.random())+1;
        
		switch (this.sum) {
		  case 1:
		    this.element = '<li class="dice dice-side-one"></li>';
		    break;
		  case 2:
		    this.element = '<li class="dice dice-side-two"></li>';
		    break;
		  case 3:
		    this.element = '<li class="dice dice-side-three"></li>';
		    break;
		  case 4:
		    this.element = '<li class="dice dice-side-four"></li>';
		    break;
		  case 5:
		    this.element = '<li class="dice dice-side-five"></li>';
		    break;
		  case 6:
		    this.element = '<li class="dice dice-side-six"></li>';
		    break;
		  default:
		    return null;
		}

    	return this.element;
	}  


}



