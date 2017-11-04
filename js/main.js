// FORM HANDLING FUNCTION
function formHandler() {

    // Gather form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create log messages
    var firstNameMessage = 'The firstName is: ' + firstName;
    var lastNameMessage = 'The lastName is: ' + lastName;
    var emailMessage = 'The email is: ' + email;
    var textMessage = 'The message is: ' + message;

    // Log messages to the console.
    console.log(firstNameMessage);
    console.log(lastNameMessage);
    console.log(emailMessage);
    console.log(textMessage);
}

// SUBMIT BUTTON LISTENER
//
// Get submit button through id.
var submit = document.getElementById('submit');

// Listen for click on submit button
submit.addEventListener('click', function () {
    event.preventDefault(); // Prevent Default Action
    formHandler(); // Run the formHandler function
});
