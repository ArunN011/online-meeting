let camOn = true
let micOn = true

/* CAMERA */

function toggleCam(){

const btn = document.getElementById("camBtn")
const icon = btn.querySelector("i")

camOn = !camOn

if(camOn){

icon.className = "bi bi-camera-video"
btn.style.background = "#333"

}else{

icon.className = "bi bi-camera-video-off"
btn.style.background = "#d13438"

}

}


/* MIC */

function toggleMic(){

const btn = document.getElementById("micBtn")
const icon = btn.querySelector("i")

micOn = !micOn

if(micOn){

icon.className = "bi bi-mic"
btn.style.background = "#333"

}else{

icon.className = "bi bi-mic-mute"
btn.style.background = "#d13438"

}

}
let handRaised = false;

function raiseHand(){

const btn = document.getElementById("handBtn");
const icon = btn.querySelector("i");

handRaised = !handRaised;

if(handRaised){

btn.style.background = "#ffc107";
icon.className = "bi bi-hand-index-fill";

}else{

btn.style.background = "#333";
icon.className = "bi bi-hand-index";

}

}
function openChat(){

const chat=document.getElementById("chatBox")

if(chat.style.display==="block"){
chat.style.display="none"
}else{
chat.style.display="block"
}

}



/* LEAVE MEETING */

function leaveMeeting(){

window.location.href = "join meet.html"

}