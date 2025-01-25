//logic to prevent tracking existing habits when none are loaded 

document.addEventListener("DOMContentLoaded", function() {
    // Check if habit data exists in localStorage
    var habitData = localStorage.getItem("habitData"); // Change "habitData" to the actual key you are using to store habits
    var message = document.querySelector(".no-habits-message");
    var continueButton = document.querySelector("#continueTrackingButton");

    // If no habit data found, show the message and disable the button
    if (!habitData) {
        message.style.display = "block"; // Show the message
        continueButton.disabled = true; // Disable the button
        continueButton.style.cursor = "not-allowed"; // Optional: change cursor to indicate the button is disabled
    }
});