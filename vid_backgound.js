var vid = document.getElementById('exampleVideo');

	vid.play();

	var wrapper = document.getElementById('wrapper');
	var canvas = document.getElementById('exampleCanvas');
	var ctx = canvas.getContext('2d');

	var ratio = window.devicePixelRatio || 1;
	var vidWidth;
	var vidHeight;

	vid.onloadedmetadata = function() {
		vidWidth = vid.videoWidth;
		vidHeight = vid.videoHeight;

		canvas.width = vid.offsetWidth * ratio;
	canvas.height = vid.offsetHeight * ratio;

	canvas.style.width = vid.offsetWidth + "px";
	canvas.style.height = vid.offsetHeight + "px";



		drawingLoop();

		setTimeout(() => {
			setVideoBgColor(vid, wrapper);
		}, 150);
	};

	function drawingLoop(){
	  requestId = window.requestAnimationFrame(drawingLoop)

	  ctx.drawImage(vid, 0, 0, vidWidth, vidHeight, // source rectangle
	                   0, 0, canvas.width, canvas.height); // destination rectangle);
	}

	function setVideoBgColor(vid, backgroundElement) {

	            // draw first four pixel of video to a canvas
	            // then get pixel color from that canvas
	            var canvas = document.createElement("canvas");
	            canvas.width = 8;
	            canvas.height = 8;

	            var ctx = canvas.getContext("2d");
	            ctx.drawImage(vid, 0, 0, 8, 8);

	            var p = ctx.getImageData(0, 0, 8, 8).data;
	            //dont take the first but fourth pixel [r g b]
	            backgroundElement.style.backgroundColor = "rgb(" + p[60] + "," + p[61] + "," + p[62] + ")";

	}


	window.onresize = function(event) {
	    vidWidth = vid.videoWidth;
	    vidHeight = vid.videoHeight;

	    canvas.width = vid.offsetWidth;
	    canvas.height = vid.offsetHeight;

	    //redraw canvas after resize
	    ctx.drawImage(vid, 0, 0, vidWidth, vidHeight, // source rectangle
	                   0, 0, canvas.width, canvas.height); // destination rectangle);
	};


	// $(document).ready(function() {
	//   setTimeout(function(){
	//     window.location.href = "home.html";
	//   },7000)
	//
	//   });