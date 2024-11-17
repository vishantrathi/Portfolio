//block inspect
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12 key
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        return false;
    }
};

var selectedIcon = null
var topIndex = 3
var awaitingResponse = false
function sendMessage() {
  if (!awaitingResponse) {
    var messageContent = document.getElementById("messageInput").value
    // Create a new <p> element
    var paragraph = document.createElement('p');

    // Set the text content of the <p> element
    paragraph.textContent = messageContent


    // Find the target div by its ID
    var targetDiv = document.getElementById('chat');
    paragraph.classList.add("my_message")

    // Append the <p> element to the target div
    targetDiv.appendChild(paragraph);
    awaitingResponse = true
    sendSMS(messageContent)


  }

}
function toggleMusic() {
  var video = document.getElementById("videoElement");
  var musicToggle = document.getElementById("musicToggle");

  if (video.muted) {
    video.muted = false;
    video.style.display = "block";
    video.play(); // Play the video
    musicToggle.textContent = "Mute Music";
  } else {
    video.muted = true;
    video.style.display = "none";
    musicToggle.textContent = "Play Music";
  }
}




function tapWindow(elmnt) {
  elmnt.style.zIndex = topIndex++;
}

function openIcon(name) {
  if (selectedIcon == document.getElementById(name + "Icon")) {
    openElement(document.getElementById(name))
    map.invalidateSize()
    selectedIcon = null
    document.getElementById(name + "Icon").style.backgroundColor = "rgba(85, 166, 241, 0.0)";
    dragElement(document.getElementById(name));

  } else {
    if (selectedIcon) {
      selectedIcon.style.backgroundColor = "rgba(85, 166, 241, 0.0)"
    }
    selectedIcon = document.getElementById(name + "Icon")
    document.getElementById(name + "Icon").style.backgroundColor = "rgba(85, 166, 241, 0.6)";



    selectedIcon = document.getElementById(name + "Icon")
    document.getElementById(name + "Icon").style.backgroundColor = "rgba(85, 166, 241, 0.6)";
  }
}

function openElement(elmnt) {

  elmnt.style.display = 'flex';
  elmnt.style.zIndex = topIndex++;

}
function closeElement(elmnt) {
  elmnt.style.display = 'none'
}

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "handle")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "handle").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  //time
  function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
  }
  setInterval(updateTime, 1000);


  function getAge() {
    const currentDate = new Date();
    const targetDate = new Date("2004-09-28"); // Replace with your target date in the format "YYYY-MM-DD"
    const differenceMs = currentDate - targetDate;
    const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const yearsWithDecimals = (differenceMs / millisecondsPerYear).toFixed(5);
    document.getElementById("age").textContent = yearsWithDecimals;
    console.log("age here");
  }
  getAge();
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.zIndex = topIndex++;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function setDate() {
  var timeElement = document.getElementById("time");
  timeElement.innerText = new Date().toLocaleString();
  setTimeout(setDate, 1000); // Update the time every second
}
setDate();



