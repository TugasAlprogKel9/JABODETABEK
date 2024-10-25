// Function to display the greeting message based on the current time
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date(); // Get the current date and time
    const hour = now.getHours(); // Get the current hour
    let greetingMessage = '';

    // Conditional logic based on the time of day
    if (hour >= 6 && hour <= 11) {
        greetingMessage = 'Selamat Pagi, Penjelajah';
    } else if (hour >= 12 && hour <= 15) {
        greetingMessage = 'Selamat Siang, Penjelajah';
    } else if (hour >= 16 && hour <= 18) {
        greetingMessage = 'Selamat Sore, Penjelajah';
    } else {
        greetingMessage = 'Selamat Malam, Penjelajah';
    }

    // Display the greeting in the element
    greetingElement.innerHTML = greetingMessage;
}

// Call the function to display the greeting when the page loads
window.onload = function() {
    displayGreeting();
};
