// Create function that will be notified to add one for each click on an h1
var clickCount = 0;

function clickCounter() {
    clickCount ++;
    var element = document.getElementsByTagName('h1');
    element[0].insertAdjacentHTML('afterend', '<p>This is click number ' + clickCount + '.');
}

// Note to self: Since getElementsByTagName returns an array-like object you have to specify which h1 element to make that work correctly.

// Add event listener to monitor when h1 is clicked

var headline = document.getElementsByTagName('h1');

headline[0].addEventListener('click', clickCounter);
