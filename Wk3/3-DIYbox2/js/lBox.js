window.onload = function() {
	$(".lightbox_trigger").click(function(e) {
	
	//Prevent the default action(make them not clickable)
	e.preventDefault();
	///Get the clicked links href
	var image_href = $(this).attr("href");
	//console.log(image_href);
	
    // Setup the lightbox if it doesn't exist or use the      light box if it does exist
	
	if($("#lightbox").length>0){
	//Lightbox DIV is already created so we can use it
	
	//Place the clicked href into our lightbox 
	$("#content").html('<img src=" ' + image_href+' "/>');
	
	$("#lightbox").slideDown(1000);
		
	}else{
		//furst time Lightbox Div will not exist, so make it
		
		var lightbox = 
		'<div id = "lightbox">' + 
		'<p>Click To Close</p>' + 
		'<div id="content">' + 
		//Insert the clicked link href into an image
		'<img src="' + image_href + '" />'+
		'</div>' +
		'</div>';
		
		//Inster the lightbo HTML into our page
		$("body").append(lightbox);
		
		$("#lightbox").hide();
		
		
		$("#lightbox").slideDown(1000);
		
		}
	
	});
	
	//Setup our click to close
	$("#lightbox").live('click', function(){
		$("#lightbox").slideUp(1000);

});

}