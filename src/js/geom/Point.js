/**
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
 *
 *  Specific:
 *	The Point object represents a location in a two-dimensional 
 *	coordinate system, where x represents the horizontal axis 
 *	and y represents the vertical axis. 
 *
 *  This Point Function represents a Point Class
 *	
 */
function Point(x,y){

	//---------------------------------------------------
	//  Private properties
	//---------------------------------------------------
	
	/**
	 *	Internal reference to the instance of this object. 
	 *	Use this property to access the object(this) from 
	 *	private methods.
	 *
	 *	@default this
	 */
	var self = this;
	
	//---------------------------------------------------
	//  Public properties
	//---------------------------------------------------
	
	/**
	 *	The X-coordinate of the point in space.
	 *
	 *	@default 0
	 */
	this.x = x;
	
	/**
	 *	The Y-coordinate of the point in space.
	 *
	 *	@default 0
	 */
	this.y = y;
    
    //---------------------------------------------------
    //  Private method
    //---------------------------------------------------
    
    /**
     *	Simple method to give properties default values ​​if no 
     *	values are ​​assigned to them. Use only for the properties 
     *	that get its default values ​​from the constructor.
     *
     *	@default undefined
     */
    function setDefault(){
    	
    	if (self.x === undefined) self.x = 0;
    	if (self.y === undefined) self.y = 0;
    }
    
    /**
     *	Set to default.
     */
    setDefault();
}

//-------------------------------------------------------
//  Public methods
//-------------------------------------------------------

/**
 *	Simple method for rapidly reset the object.
 *
 *	@return	undefined
 */
Point.prototype.reset = function(){

	this.x = 0;
	this.y = 0;
}