# Property Listings](https://herojha1.github.io/propertylisting/)

Overview
This project is a property listing website where users can browse various properties across different cities, and proceed with the purchase process after logging in. The site is built using HTML, CSS, and JavaScript.

Files
index.html:

The main entry point of the website.
Provides a user interface for selecting properties based on city and type (Western or Indian).
Displays available properties with images, location, cost, and type.
Users can click "Buy Now" to proceed with purchasing a property.
Buy Now.html:

This page is displayed when a user successfully logs in and chooses to purchase a property.
It shows a simple thank-you message indicating that the purchase request has been received​(Buy Now).
login.js:

Contains the JavaScript logic for validating the login credentials.
Compares user input with predefined username-password combinations.
On successful validation, redirects the user to the Buy Now.html page.
If the credentials are incorrect, it shows an alert with the message "wrong password/username"​(login).
settings.json:

Configures the port for the live server.
The port is set to 5501 for local development purposes​(settings).
How to Run the Project
Set Up Live Server:

Ensure you have a live server setup, which is configured to run on port 5501.
Open the project in a code editor like VS Code.
Right-click on index.html and choose "Open with Live Server."
Navigating the Website:

Upon visiting the homepage, users can browse through different properties listed based on the selected city and type.
To purchase a property, users must log in with one of the predefined credentials:
Username: 12311454, 12310937, or 12311288
Password: 07172005, 12082004, or 23072004
After a successful login, users will be redirected to the "Buy Now" page, confirming their purchase request.
Future Enhancements
Database Integration: Currently, the project uses hard-coded values for login. Integrating a database will allow dynamic user management.
Responsive Design: Improve the user interface to be fully responsive for different screen sizes.
Additional Features: Implement features like property filtering, user reviews, and an admin panel for managing property listings.
Dependencies
HTML, CSS, JavaScript: Basic front-end languages used for structure, styling, and interactivity.
Live Server: For serving the project locally during development.
