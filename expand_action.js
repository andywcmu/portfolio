function show_project(id) {
	// console.log(document.getElementById(id).style);
	document.getElementById(id).style.maxHeight = "1000px";
	
	var buttonImage = document.getElementById(id + "_button_image");
	buttonImage.style.opacity = "1.0";
	buttonImage.style.marginTop = "80px";
	var buttonImageSrc = buttonImage.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
	var image = new Image();
    image.src = buttonImageSrc;
    // console.log(image.width, image.height);

    document.getElementById(id + "_button").style.height = 800.0 / image.width * image.height + "px";


	document.getElementById(id + "_button_text").style.visibility = "hidden";
	// document.getElementById(id + "_button_text").style.opacity = 0;
	// window.location.hash = "#" + id + "_button_image";
	// window.scrollBy(0,-80);
}

function jump_to_id(id) {
	window.location.hash = "#" + id;
	window.scrollBy(0,-80);
}

// window.addEventListener("scroll", function() {
//     // not the most exciting thing, but a thing nonetheless
    
//    console.log(document.body.scrollTop);
// });
