window.setInterval(function water(){
	var d = new Date();
	var water = document.getElementsByClassName("water")[0];
	var minutesLeft = 60 - d.getMinutes();
	var screenPercentage = window.innerHeight / 60;
	water.style.top = minutesLeft * screenPercentage + "px";
}, 1000);