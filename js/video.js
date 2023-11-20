var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to" + video.autoplay)
	console.log("loop is set to " + video.loop)

});

// var video;


document.querySelector("#play").addEventListener("click", function() {
	console.log("button has been clicked");
	video = document.querySelector("#player1");
	video.play();
	console.log("video is playing")
});

// Updating the volume information

document.querySelector("#slider").addEventListener("dragstart", function(){
	console.log("volume has been changed");
	volume = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = "Volume: " + volume;
	document.querySelector("#slider").innerHTML.value = volume;

	

		
});


// To pause video

document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause button has been clicked");
	video = document.querySelector("#player1");
	video.pause();
	console.log("video is paused")
});

// To slow the video down

// document.querySelector("#slower").addEventListener("click", function(){
// 	console.log("slow down button has been clicked");
// 	video = document.querySelector("#player1");
// 	playback = video.playbackRate;
// 	console.log("The playback rate is " + playback);
// 	currentSpeed = playback - (playback*0.10);
// 	console.log("The new playback rate is " + currentSpeed);
// });
// document.querySelector("#slower").addEventListener("click", function(){
// 	console.log("slow down button has been clicked");
// 	video = document.querySelector("#player1")
// 	playback = video.playbackRate;
// 	console.log("The playback rate is " + playback);
// 	currentSpeed = 0.9*playback;
// 	console.log("The new playback rate is " + currentSpeed);
// })

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down video button pressed");
	video = document.querySelector("#player1");
	video.playbackRate *= 0.9;
	console.log("New Speed: " + video.playbackRate);
})




// document.querySelector("#faster").addEventListener("click", function(){
// 	console.log("speed up button clicked");
// 	video = document.querySelector("#player1");
// 	playback = video.playbackRate;
// 	console.log("The playback rate is " + playback);
// 	speedUp = playback + (playback*0.10);
// 	console.log("The new playback rate is " + speedUp);
// });

// To speed up the video
document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up button has been pressed");
	video = document.querySelector("#player1");
	video.playbackRate *= 1.10;
	console.log("The new playback rate is " + video.playbackRate);
});




// To update the mute button
var mute = true;
document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute button is clicked");
	video = document.querySelector("#player1");
	if (mute == true){
		video.muted = false;
		mute = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else{
		video.muted = true;
		mute = true;
		document.querySelector("#mute").innerHTML = "Unmute";

	}

	// muted = document.querySelector("#mute")
	
	// video.muted = true;
	// if (muted == "Mute"){
	// video.muted = true;
	// document.querySelector("#mute").innerHTML = "Unmute";
	// }
	// else {
	// 	video.muted = false;
	// 	document.querySelector("#mute").innerHTML = "Mute";
	// }
	// console.log("can mute and unmute video");	
});

// To skip ahead in the video
document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip button has been clicked");
	video = document.querySelector("#player1");
	video.currentTime += 10;
	console.log("The current video time is " + video.currentTime);
	console.log("Video duration is " + video.duration);
	if (video.currentTime > video.duration){
		video.currentTime = 0;
	}

})








// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

