// Display an alert when the page loads
window.onload = function () {
    alert("Hello! Welcome to Coco's website.");
};

// Display more info when the "Learn More" button is clicked
function showMore() {
    document.getElementById("more-info").style.display = "block";
}

// Change profile picture on hover
// function changeMePicture() {
//     document.getElementById("me-pic").src = "img/mee.png"; // Replace with the alternate image
// }

// function resetMePicture() {
//     document.getElementById("me-pic").src = "img/me.png"; // Original image
// }

function changePicture() {
    document.getElementById("profile-pic").src = "img/contact2.png"; // Replace with the alternate image
}

function resetPicture() {
    document.getElementById("profile-pic").src = "img/contact.png"; // Original image
}

// Display greeting with user's name
function greet() {
    const name = document.getElementById("name-input").value;
    const greeting = `Greetings, ${name || "friend"}!`;
    document.getElementById("greeting").innerText = greeting;
    const message = document.getElementById("hidden-message");
    message.style.display = "block";
}

// Variable usage example
let textColorIndex = 0;
const colors = ["#382812", "#afccc7", "#d2aacb", "fde257"];
const textElement = document.querySelector("h1");

// Change text color every 30 seconds
setInterval(() => {
    textColorIndex = (textColorIndex + 1) % colors.length;
    textElement.style.color = colors[textColorIndex];
}, 30000);