const btn = document.getElementById('btn');
const email = document.getElementById('email');
const feedback = document.getElementById('feedback');
const rating = document.getElementById('rating');
const name = document.getElementById('name');

// Error messages
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const feedbackError = document.getElementById('feedbackError'); // Fixed space issue
const ratingError = document.getElementById('ratingError');

// Email Regex Pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form event listener
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    let isValid = true; // Track if form is valid

    // Get trimmed values
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let feedbackValue = feedback.value.trim();
    let ratingValue = rating.value.trim();

    // Validate Name
    if (nameValue === "") {
        nameError.textContent = "This field is required.";
        name.style.borderColor = "red";
        isValid = false;
    } else {
        nameError.textContent = "";
        name.style.borderColor = "";
    }

    // Validate Email
    if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Enter a valid email address.";
        email.style.borderColor = "red";
        isValid = false;
    } else {
        emailError.textContent = "";
        email.style.borderColor = "";
    }

    // Validate Feedback
    if (feedbackValue === "") {
        feedbackError.textContent = "This field is required.";
        feedback.style.borderColor = "red";
        isValid = false;
    } else {
        feedbackError.textContent = "";
        feedback.style.borderColor = "";
    }

    // Validate Rating (must be between 1-5)
    if (ratingValue === "" || ratingValue < 1 || ratingValue > 5) {
        ratingError.textContent = "Rating must be between 1 and 5.";
        rating.style.borderColor = "red";
        isValid = false;
    } else {
        ratingError.textContent = "";
        rating.style.borderColor = "";
    }

    // If validation fails, prevent submission
    if (!isValid) {
        event.preventDefault();
        return;
    }

    // Submit the form via AJAX
    const formData = new FormData(this);

    fetch('submit_feedback.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Convert response to text for debugging
    .then(data => {
        console.log("Server Response:", data); // Debugging
        if (data.includes("Feedback submitted successfully")) {
            alert("Feedback submitted successfully!");
            this.reset(); // Clear form after submission
        } else {
            alert("Error: " + data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting feedback. Please try again.');
    });

    event.preventDefault(); // Prevent default submission after fetch
});
