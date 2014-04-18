$(document).ready(function() {
	$(".gallery_thumbnails a").click(function(e){
		//Disable the linkes
		e.preventDefault();
		
		//Create var to hold the links from the thumbnails
	var photo_fullsize = $(this).attr("href");
	var photo_caption =$(this).attr("title");
		
		//Create preview link
		
	var photo_preview = photo_fullsize.replace("_fullsize", "_preview");

        //Fade out the preview area
$(".gallery_preview").fadeOut(500, function(){
	    //Preload our clicked image
	
$(".gallery_preload_area").html('<img src="' +photo_preview+'"/>');
	
	    //Once image is preloaded then we use it
	$(".gallery_preload_area img").imgpreload(function(){
		
		
		//Change the picture and link for the preview area
$(".gallery_preview").html('<a class="overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+ '" style="background-image:url('+photo_preview+');"></a>');
	
	//Fade Back in the preview window
	$(".gallery_preview").fadeIn(500);
		
		
		});
	
	});
  
   }); 

});