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

// Create listener for click on menu button
var menuButton = document.getElementById('dropdown');
menuButton.addEventListener('click', dropdownMenu);

// COLOR CHANGE FUNCTION

function colorChange() {
    // Get the paragraph
    var hoverChange = document.querySelector('.hoverChange');
    hoverChange.setAttribute('class', 'hoverChange colorshift');
    // Add a class
}

// Create listener for hover over paragraph
var hoverTarget = document.getElementsByClassName('hoverChange');
hoverTarget[0].addEventListener('mouseenter', colorChange);

// REVERT TO ORGINIAL COLOR FUNCTION

function colorRevert() {
    // Get the paragraph
    var hoverChange = document.querySelector('.hoverChange');
    hoverChange.setAttribute('class', 'hoverChange');
    // Add a class
}

// Create listener for hover over paragraph
hoverTarget[0].addEventListener('mouseleave', colorRevert);
