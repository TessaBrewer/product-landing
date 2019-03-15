var video = document.getElementById("video");
var videoLink = document.getElementById("video-link");
videoLink.onclick = function()
{
	console.log("video-link clicked");
	video.scrollIntoView();
}

var email = document.getElementById("email");
var emailLink = document.getElementById("email-link");
emailLink.onclick = function()
{
	console.log("email-link clicked");
	email.scrollIntoView();
	email.focus();
	email.select();
}

var topBit = document.getElementById("topBit");
var topLink = document.getElementById("top-link");
topLink.onclick = function()
{
	console.log("top-link clicked");
	topBit.scrollIntoView();
}
