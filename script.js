// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the donation form element
    const donationForm = document.getElementById('donationForm');

    // Event listener for form submission
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission (page reload)

        // Get the donation amount entered by the user
        var amount = document.getElementById('amount').value;

        // Validate the donation amount (must be at least $10)
        if (amount >= 10) {
            // Display the confirmation message
            var confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.style.display = 'block';  // Show the confirmation message

            // Optionally, log the donation amount (for debugging or tracking purposes)
            console.log('Donation Amount: $' + amount);
        } else {
            // If the amount is less than $10, show an alert to the user
            alert("Please enter a donation amount of at least $10.");
        }
    });
});
