/**
 * /**
 *  =====================================
 *  FUNCTION OBJECT (CONSTRUCTOR PATTERN)
 *  =====================================
 *  General:
 *  Konstruktormönstret gör det möjligt att instansiera unika objekt utifrån funktioner, 
 *  detta kan ses som en kombination av fabriksmönstret och "vanlig" objektinstansiering. 
 *  Konstruktormönstret påminner därför på många sätt om de arbetsmetoder som används vid 
 *  andra klass-baserade programmeringsspråk. 
 *  Istället för att definiera objekt utifrån klasser används funktioner
 *  
 *	The dice application object
 *	Sets up variables and functions for the dice application
 *	Creates the dice application window
 *	Adds drag-n-drop functionality and functinality thats exposes elements in the dice application
 */
function DiceApplication(){
	/**
	 *	Internal reference to the instance of this object. 
	 */
	var self = this;
	
	/**
	 *	Reference to the object's dice window 
	 */
	this.element = null;
	
	/**
	 *	Reference to the object's menubar
	 */
	this.menubar = null;

	/**
	 * Reference to the closebutton on the menubar
	 */
	this.closeButton = null;
	
	/**
	 *	Reference to the object's toolbar
	 */
	this.toolBar = null;
	
	/**
	 * Reference to the tools on the toolbar
	 * add, remove, roll dice icons and the counter
	 */
	this.ulAddRemoveRoll = null;
	this.liAdd = null;
	this.liRemove = null;
	this.liRoll = null;
	this.liToolbarCounter = null;
	this.ulToolbarCounter = null;
	this.liCounterArray = [];
	this.liCounterElement = null;

	/**
	 *	Reference to the object's contents (desktop)
	 *	where the the random dices shows up
	 */
	this.content = null;
	this.ulContent = null;
	
	/**
	 *	Reference to the content area (desktop)
	 */
	this.pageContentWrapper = document.getElementById('page-content-wrapper');

	/**
	 * Counts the amount of dices that has been appended to the application
	 * @type {Number}
	 */
	this.amountOfDices = 0;
	/**
	 * Sum of all the dices
	 * @type {Array}
	 */
	this.sumOfDices = [];

	/**
	 *	"The class constructor"
	 *	Creates all the graphic elements and applies the event listeners
	 */
	function init(){
		/**
		 * WINDOW WRAPPER
		 */
		self.element = document.createElement('div');
		self.element.setAttribute('class', 'dice-window-wrapper');

		/** 
		 * MENUBAR
		 */
		self.menubar = 	document.createElement('div');
		self.menubar.setAttribute('class', 'dice-menubar-wrapper');
		self.closeButton = document.createElement('div');
		self.closeButton.setAttribute('class', 'close');
		self.menubar.appendChild(self.closeButton);

		/**
		 * TOOLBAR
		 */
		// Create the toolbar
		self.toolbar = document.createElement('div');
		self.toolbar.setAttribute('class', 'dice-toolbar-wrapper');
		
		// Create the dices in toolbar
		self.ulAddRemoveRoll = document.createElement('ul');

		self.liAdd = document.createElement('li');
		self.liAdd.setAttribute('class', 'add');
		self.ulAddRemoveRoll.appendChild(self.liAdd);

		self.liRemove = document.createElement('li');
		self.liRemove.setAttribute('class', 'remove');
		self.ulAddRemoveRoll.appendChild(self.liRemove);

		self.liRoll = document.createElement('li');
		self.liRoll.setAttribute('class', 'roll');
		self.ulAddRemoveRoll.appendChild(self.liRoll);

		// Create the counter in toolbar
		self.liToolbarCounter = document.createElement('li');
		self.ulToolbarCounter = document.createElement('ul');
		self.ulToolbarCounter.setAttribute('class', 'dice-toolbar-counter-wrapper');;
			for (var i=0; i<5; i++){
				self.liCounterElement = document.createElement('li');	
				self.liCounterElement.setAttribute('class', 'zero');
				self.liCounterArray.push(self.liCounterElement);
				self.ulToolbarCounter.appendChild(self.liCounterElement)
			}

		self.liToolbarCounter.appendChild(self.ulToolbarCounter);
		self.toolbar.appendChild(self.ulAddRemoveRoll);
		self.ulAddRemoveRoll.appendChild(self.liToolbarCounter);

		/**
		 * CONTENT
		 */
		self.content = document.createElement('div');
		self.content.setAttribute('class', 'dice-content-wrapper');
		self.ulContent = document.createElement('ul');
		self.content.appendChild(self.ulContent);

		/**
		 * Append the parts to the dice window element
		 */
		self.element.appendChild(self.menubar);
		self.element.appendChild(self.toolbar);
		self.element.appendChild(self.content);

		/**
		 * Event listeners for draggable window element, close button and dice buttons
		 */
		Event.addEventListener(self.menubar, Event.MOUSE_DOWN, startDrag);
		Event.addEventListener(self.menubar, Event.MOUSE_UP, stopDrag);

		Event.addEventListener(self.closeButton, Event.CLICK, closeWindow);

		Event.addEventListener(self.liAdd, Event.CLICK, addDice);
		Event.addEventListener(self.liRemove, Event.CLICK, removeDice);
		Event.addEventListener(self.liRoll, Event.CLICK, rollAllDices);

	}

	/**
	 *	Starts the drag-and-drop functionality found in Utils and Drag objects and
	 */
	function startDrag(event){
		self.element.style.zIndex	= Utils.getUniqueId();
		self.element.style.opacity	= 0.7;
		self.menubar.style.cursor	= 'move';
		Drag.beginDrag(self.element, event);
	}
	
	/**
	 *	Stops the drag-and-drop functionality
	 */
	function stopDrag(event){
		self.element.style.opacity	= 1;
		self.menubar.style.cursor	= 'default';
	}

	/**
	 * Closes the dice application window
	 */
	function closeWindow(event){
		self.element.parentNode.removeChild(self.element);
	}

	/**
	 * Add a new dice to the application but only if there is less then 40 dices.
	 */
	function addDice(event){
		var newDice = new Dice();			// New instance of a Dice
		var element = newDice.roll();		
		var sum = newDice.sum;
		if(self.amountOfDices < 40){
			self.sumOfDices.push(sum);
			self.amountOfDices = self.amountOfDices+1;
			var buttonSound = new Sound('src/wav/add.wav');
			buttonSound.play();
			self.ulContent.insertAdjacentHTML('beforeend',element);
		}
		countDices();
	}

	/**
	 * Remove last dice on the application
	 */
	function removeDice(event){
		if(self.ulContent.lastChild){
			var buttonSound = new Sound('src/wav/add.wav');
			buttonSound.play();
			self.ulContent.removeChild(self.ulContent.lastChild);
			self.sumOfDices.pop();
			self.amountOfDices = self.amountOfDices-1;
		}
		countDices();
	}

	/**
	 * Roll all dices with random numbers
	 * (Removes and create new dices)
	 */
	function rollAllDices(event){
		var children = self.ulContent.childNodes;
		var childNum = children.length;

		self.amountOfDices = 0;
		self.sumOfDices = [];
			
		var buttonSound = new Sound('src/wav/add.wav');
			buttonSound.play();

		for(var i=0; i<childNum; i++){
			var newDice = new Dice();			// Objektinstans av tärning
			var element = newDice.roll();
			var sum = newDice.sum;
			self.sumOfDices.push(sum);
		 	self.ulContent.insertAdjacentHTML('afterbegin',element);
		 	self.ulContent.removeChild(self.ulContent.lastChild);
			self.amountOfDices = self.amountOfDices+1;
		 }
		 self.sumOfDices.reverse();
		 countDices();
	}

	/**
	 * Count the dices
	 */
	function countDices(){
		var totalSum = 0;
		for (var i=0; i<self.sumOfDices.length; i++) {
		    totalSum += self.sumOfDices[i] << 0;
		}
		updateCounter(totalSum);
	}
		
	/**
	 * Update the counter. 
	 * Removes the counter that is shown and create and appends a new one based on the values sent in as parameter.
	 * Creates list items with the right class depending on what number is sent in to the array
	 */
	function updateCounter(totalSum){
		var numbers = totalSum.toString().split(""); 
		numbers.reverse();

		// Remove current counter
		var children = self.ulToolbarCounter.childNodes;
		var childNum = children.length;
		for(var i=0; i<childNum; i++){
			self.ulToolbarCounter.removeChild(self.ulToolbarCounter.firstChild);
		 }
		 // Empty the array
		 self.liCounterArray = [];

		// Creates new list items in the array
		for(var i=0; i<5; i++){
			var num = Number.parseInt(numbers[i]);
			switch(num){
	 			case 1:	var li = document.createElement('li'); li.setAttribute('class', 'one' ); self.liCounterArray.unshift(li); break;
	 			case 2:	var li = document.createElement('li'); li.setAttribute('class', 'two' ); self.liCounterArray.unshift(li); break;
	 			case 3:	var li = document.createElement('li'); li.setAttribute('class', 'three' ); self.liCounterArray.unshift(li);  break;
	 			case 4:	var li = document.createElement('li'); li.setAttribute('class', 'four' ); self.liCounterArray.unshift(li);  break;
	 			case 5:	var li = document.createElement('li'); li.setAttribute('class', 'five' ); self.liCounterArray.unshift(li);  break;
	 			case 6:	var li = document.createElement('li'); li.setAttribute('class', 'six' ); self.liCounterArray.unshift(li);  break;
	 			case 7:	var li = document.createElement('li'); li.setAttribute('class', 'seven' ); self.liCounterArray.unshift(li);  break;
	 			case 8:	var li = document.createElement('li'); li.setAttribute('class', 'eight' ); self.liCounterArray.unshift(li); break;
	 			case 9:	var li = document.createElement('li'); li.setAttribute('class', 'nine' );  self.liCounterArray.unshift(li); break;
 				default: var li = document.createElement('li');	li.setAttribute('class', 'zero' ); self.liCounterArray.unshift(li); break;
			}	
		} 

		// Loop the array and append the new list items
		var liArrayLength = self.liCounterArray.length;
		for(var i=0; i<liArrayLength; i++){
			self.ulToolbarCounter.appendChild(self.liCounterArray[i]);
		}

	}

	/**
	 *	Invokes the "constructor" function
	 */
	init();

}

