function Sound(file){

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
	 *	Reference to audio element.
	 *
	 *	@default null
	 */
	this.audio = null;
	
	/**
	 *	Reference to source element.
	 *
	 *	@default this
	 */
	this.source = null;
	
	/**
	 *	Reference to the audio file.
	 *
	 *	@default this
	 */
	this.file = null;
	
	/**
	 *	Contains information about the file's file type.
	 *
	 *	@default this
	 */
	this.fileType = null;
    
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
    function setDefault(file){
    	
    	if (Utils.isset(file)){
    		self.setSource(file);
    	}
    }
      
    /**
     *	Set to default.
     */
    setDefault(file);
}

//-------------------------------------------------------
//  Public methods
//-------------------------------------------------------

/**
 *	Used to provide a valid data source for the object. 
 *	Used as a quick way to set file and file type.
 *
 *	@param	file	The sound file to use as a data source.
 *
 *	@return	undefined
 */
Sound.prototype.setSource = function(file){

	if (Utils.isset(file)){
		this.setFile(file);
		this.setFileType(file);
	}
	
	this.source	= document.createElement('source');
	this.source.setAttribute('src', this.file);
	this.source.setAttribute('type', this.fileType);
	this.source.setAttribute('preload', 'true');
	
	this.audio = document.createElement('audio');
	this.audio.appendChild(this.source);
}

/**
 *	Sets the file to be used as a data source.
 *
 *	@param	file	The sound file to use as a data source.
 *
 *	@return	undefined
 */
Sound.prototype.setFile = function(file){

	this.file = file;
}

/**
 *	Calculates the file's file type.
 *
 *	@param	file	The sound file to use as a data source.
 *
 *	@return	undefined
 */
Sound.prototype.setFileType = function(file){

	var ext = file.substr(file.lastIndexOf('.') + 1);
	
	switch(ext.toLowerCase()){
	
		case 'wav':
			 this.fileType = 'audio/wav';
			 break;
			 
		case 'mp3':
			 this.fileType = 'audio/mp3';
			 break;
			 
		case 'ogg':
			 this.fileType = 'audio/ogg';
			 break;
	}
}

/**
 *	Start playback of the sound object.
 *
 *	@return	undefined
 */
Sound.prototype.play = function(){

	this.audio.play();
}