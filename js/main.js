// DROPDOWN MENU FUNCTION

function dropdownMenu() {
    // Check for class of activenav.
    var navState = document.querySelector('ul.activenav');

    // If menu does not have class of activenav.
    if (navState == null) {

        // Add class of activenav to menu.
        var inactiveNav = document.querySelector('nav ul');
        inactiveNav.setAttribute('class', 'activenav');
    } else {
        navState.removeAttribute('class', 'activenav');
    }
}

// Creates event listener for click on Menu button
// On click, the dropdownMenu function fires which toggles class names on nav ul which results in displaying or hiding the navigation links depending on the state of the ul at the time the menu is clicked.
var menuButton = document.getElementById('dropdown');
menuButton.addEventListener('click', dropdownMenu);

// COLOR CHANGE FUNCTION

function colorChange() {
    // Get the paragraph
    var hoverChange = document.querySelector('.hoverChange');
    hoverChange.setAttribute('class', 'hoverChange colorshift');
    // Add a class
}

// ***** EVENT LISTENER #2 *******
// Creates event listener that is triggered by cursor moving over top the first (and only) paragraph with the hoverChange class.
// When cursor enters the space, a class is added that changes background-color
// Note: I chose not to use ID because specificity would be an issue in the CSS.
var hoverTarget = document.getElementsByClassName('hoverChange');
hoverTarget[0].addEventListener('mouseenter', colorChange);

// REVERT TO ORGINIAL COLOR FUNCTION

function colorRevert() {
    // Get the paragraph
    var hoverChange = document.querySelector('.hoverChange');
    hoverChange.setAttribute('class', 'hoverChange');
    // Add a class
}

// ***** EVENT LISTENER #3 *******
// Creates event listener that is triggered by cursor moving off of the first (and only) paragraph with the hoverChange class.
// When cursor leaves the space, a class added previously is removed that changes background-color back to orginal color
hoverTarget[0].addEventListener('mouseleave', colorRevert);
