if(Modernizr.canvas){
	//Canvas is supported
	
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	//Draw some text on canvas
	ctx.font = "25pt Georgia";
	ctx.fillText("Canvas is supported", 20, 60);
	
	}else {
		//Canvas is not supported
		//Polyfill would go here
	}
	console.log(Modernizr);