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
 *  Specific:
 *	Simple static class to handle the system's mouse-input. 
 *	The class can not affect the mouse, but it can retrieve the 
 *	mouse coordinates.
 *
 */
var Mouse = {
	//---------------------------------------------------
	//  Public static properties
	//---------------------------------------------------
	
	/**
	 *	The mouse coordinates as a point object(x,y).
	 *
	 *	@default point
	 */
	position : new Point(),
	
	//---------------------------------------------------
	//  Public static methods
	//---------------------------------------------------
	
	/**
	 *	Get the position (x,y) of the mouse based on an event.
	 *
	 *	@param	event	Event related to the mouse.
	 *
	 *	@return Point
	 */
	getPosition : function(event) 
	{
		if(event.pageX && event.pageY)
		{
			Mouse.position.x = event.pageX; 
			Mouse.position.y = event.pageY; 
		}
		else 
		{ 
			Mouse.position.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			Mouse.position.y = event.clientY + document.body.scrollTop  + document.documentElement.scrollTop; 
		}
		
		return Mouse.position;
	},
	
	/**
	 *	Resets the mouse coordinates.
	 *
	 *	@return Point
	 */
	reset : function() 
	{
		Mouse.position.x = 0;
		Mouse.position.y = 0;
		
		return Mouse.position;
	}
}