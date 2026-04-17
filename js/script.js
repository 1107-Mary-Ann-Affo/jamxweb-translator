document.addEventListener("DOMContentLoaded", function(){

function goToDownloadpage() {
  window.location.href = "download.html";
}
let downloadButton = document.querySelector(".firstButton");

if(downloadButton) {
  downloadButton.addEventListener("click", goToDownloadpage);
}


function displayGithub() {
  window.location.href =
    "https://github.com/1001-Galela-Amiel/JamX-Translator";
}

let macButton = document.querySelector(".mac-button");
let windowsButton = document.querySelector(".windows-button");
let githubButton = document.querySelector(".github-button");

if(macButton) {
  macButton.addEventListener("click", displayGithub);
}

if(windowsButton) {
  windowsButton.addEventListener("click", displayGithub);
}

if(githubButton) {
  githubButton.addEventListener("click", displayGithub);
}

});
