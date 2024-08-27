// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//function extraYT() {
//    document.getElementById("JSpower").innerHTML = "Paragraph changed.";
//}

let isOriginal = true;

// Store the original and new video details
const originalVideoSrc = "https://www.youtube.com/embed/tgbNymZ7vqY";
const newVideoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with the desired video URL
const originalHeader = "Its Music Time!!!";
const newHeader = "Now Playing: New Song!";
const originalSubHeader = "Greatest song of all time is here";
const newSubHeader = "Enjoy the new hit.";

document.getElementById("JSpower").addEventListener("click", function () {
    if (isOriginal) {
        // Switch to the new video and update text
        document.getElementById("main-header").textContent = newHeader;
        document.getElementById("sub-header").textContent = newSubHeader;
        document.getElementById("youtube-video").src = newVideoSrc;
    } else {
        // Switch back to the original video and update text
        document.getElementById("main-header").textContent = originalHeader;
        document.getElementById("sub-header").textContent = originalSubHeader;
        document.getElementById("youtube-video").src = originalVideoSrc;
    }

    // Toggle the state
    isOriginal = !isOriginal;
});