/**
 *  =========================
 *  A STATIC OBJECT (CLASS)
 *  =========================
 *  General:
 *  Statiska objekt är objekt som automatiskt läses in och "instansieras" av webbläsaren när JavaScript-koden laddas. 
 *  Efter att objektet har aktiverats av webbläsaren så går det inte att skapa nya instanser av objektet, 
 *  dvs det kan endast förekomma en kopia av objektet. 
 *  Det finns inget inbyggt stöd för statiska klasser i JavaScript men det går att simulera funktionaliteten 
 *  genom att skapa JSON-objekt (Object Literal Syntax) och spara dem i webbläsarens window-objekt, se följande exempel.
 *  
 *
 *  Specific:
 *	A static class in order to handle small help methods 
 *	for preforming generic calculations. If you have a small 
 *	static method that you want to reuse throughout the system, 
 *	place it here.
 */

var Utils = {
	//---------------------------------------------------
	//  Public properties
	//---------------------------------------------------
	
	/**
	 *	Check if a property has a value.
	 *
	 *	@return Boolean
	 */
	isset : function(object){
	
		return typeof object !== 'undefined' && object !== null;
	},
	
	/**
	 *	Generates a unique ID-string based on time.
	 *
	 *	@return String
	 */
	getUniqueId : function(){
	
		return Math.floor(new Date().getTime()/1000);
	},
	
	/**
	 *	Converts string values ​​to the valid number.
	 *
	 *	@param	value	The value to be converted.
	 *
	 *	@return number
	 */
	asNumber : function(value)
	{
		var n = parseInt(value); 
		return n == null || isNaN(n) ? 0 : n;
	}
}