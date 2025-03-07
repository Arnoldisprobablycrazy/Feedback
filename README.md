# Campaign Feedback Web Application

## Overview
This project is a web application designed to collect and display public feedback for a political campaign. Users can submit their feedback through a form, which is then stored in a MySQL database and displayed on a webpage for analysis.

## Features
- **Feedback Submission Form:** Users can submit their name, email, feedback, and rating.
- **Data Storage:** Feedback is securely stored in a MySQL database.
- **Data Display:** Submitted feedback is retrieved and displayed on a separate webpage.
- **Validation:** JavaScript validation ensures correct input before submission.
- **Error Handling:** Proper error handling is implemented for form submission and database operations.
- **Responsive Design:** The interface is styled for a user-friendly experience across devices.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP
- **Database:** MySQL
- **Local Server:** XAMPP/WAMP

## Setup Instructions
### 1. Install a Local Server
Ensure you have a local development environment installed, such as:
- [XAMPP](https://www.apachefriends.org/) (Recommended)
- WAMP

### 2. Start Apache and MySQL
- Open XAMPP/WAMP and start the **Apache** and **MySQL** services.

### 3. Create the Database
1. Open **phpMyAdmin** (http://localhost/phpmyadmin/).
2. Create a new database named `campaign_feedback`.
3. create the `feedback` table:
  

### 4. Configure the Project Files
1. Clone or download the project files into your local server directory (`htdocs` for XAMPP).
2. Ensure the following files are in place:
   - `feedback_form.html` (User input form)
   - `submit_feedback.php` (Handles form submission and stores data in the database)
   - `view_feedback.php` (Retrieves and displays feedback data)
   - `style.css` (Styles the UI)
   - `script.js` (Handles form validation and submission)

### 5. Run the Application
1. Open a web browser and go to: `http://localhost/your_project_folder/feedback_form.html`
2. Submit feedback through the form.
3. View submitted feedback at: `http://localhost/your_project_folder/view_feedback.php`

## File Structure
```
project-folder/
│-- feedback_form.html       # HTML form for feedback submission
│-- submit_feedback.php      # PHP script to handle form submission
│-- view_feedback.php        # PHP script to display feedback
│-- style.css                # Stylesheet for UI design
│-- script.js                # JavaScript for form validation
│-- README.md                # Project documentation
```

## Troubleshooting
### Form Not Submitting
- Ensure **JavaScript validation** is not blocking the form (check browser console for errors).
- Check if `submit_feedback.php` is receiving POST data by adding `print_r($_POST);` in the script.
- Verify MySQL connection settings in `submit_feedback.php`.

### Database Connection Issues
- Ensure MySQL is running in XAMPP/WAMP.
- Verify database credentials (`host`, `user`, `password`) in `submit_feedback.php`.

## Future Enhancements
- Add authentication for admin access.
- Implement AJAX-based submission for a smoother user experience.
- Enhance UI with better styling and animations.
- Add pagination for large feedback datasets.

## License
This project is open-source and free to use.

---
**Author:** Your Name  
**Contact:** your-email@example.com  
**Version:** 1.0.0

