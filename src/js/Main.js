/**
 *  =========================
 *  A STATIC OBJECT (CLASS)
 *  =========================
 *  General:
 *  Statiska objekt är objekt som automatiskt läses in och "instansieras" av webbläsaren när JavaScript-koden laddas. 
 *  Efter att objektet har aktiverats av webbläsaren så går det INTE ATT SKAPA NYA INSTANSER av objektet, 
 *  dvs det kan endast förekomma en kopia av objektet. 
 *  Det finns inget inbyggt stöd för statiska klasser i JavaScript men det går att simulera funktionaliteten 
 *  genom att skapa JSON-objekt (Object Literal Syntax) och spara dem i webbläsarens window-objekt, se följande exempel.
 *
 * 	Specific:
 *	The Main Object for the application.
 *	Initiating the application and invokes create DiceApplication window when click on the icon-dice element.
 */
var Main = {
	/**
	 * Reference to the Dice button that add the Dice Application window
	 */
	diceButton: null,
	diceApp: [],

	/**
	 *  Reference to the Clock button
	 */
	//clockButton: null,

	/**
	 *	"The class constructor"
	 *	Initiation method that add event listener to the dice icon in upper right corner
	 */
	init : function() {	
		Main.diceButton = document.getElementById('icon-dice');
		Event.addEventListener(Main.diceButton, Event.CLICK, Main.addDiceApplicationWindow);

		//Main.clockButton = document.getElementById('icon-clock');
		//Event.addEventListener(Main.clockButton, Event.CLICK, Main.addClockApplicationWindow);


	},

	/**
	* Adds new dice application windows to the "desktop"
	 */
	addDiceApplicationWindow: function(event) 
	{	

		Main.diceApp.push(new DiceApplication());

		for(var i=0; i<Main.diceApp.length; i++){
			var pageContentWrapper = Main.diceApp[i].pageContentWrapper;
			pageContentWrapper.appendChild(Main.diceApp[i].element);	
		 }
	console.log(Main.diceApp);
	}
	

	/**
	 * 
	 */
	// addClockApplicationWindow: function(event)
	// {
	// 	//
	// }

}

Event.addEventListener(window, Event.LOAD, Main.init);