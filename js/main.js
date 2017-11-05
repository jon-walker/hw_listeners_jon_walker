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
    // Remove class of activenav.
}

// Create listener for click on menu button
var menuButton = document.getElementById('dropdown');
menuButton.addEventListener('click', dropdownMenu);
