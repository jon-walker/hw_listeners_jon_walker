// Get all h1's

var getHeading = document.getElementsByTagNames('h1');

// Add event listener to monitor when h1 is clicked

function clickListener() {
    getHeading.addEventListener('click', clickCounter);
}
