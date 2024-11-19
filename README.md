# expense-tracker
Expense Tracker is a user-friendly web app simplifying expense management. Track, edit, and delete expenses effortlessly. Responsive design, built with Node.js, Express.js, MongoDB Atlas, and deployed using Docker.

## Features

1. Add Expense:
   - Users can easily add a new expense by providing a description, amount, and date.

2. View Expenses:
   - The application displays a list of all expenses, showing key details such as description, amount, and date.

3. Edit Expense:
   - Users have the ability to edit existing expenses, allowing them to update descriptions, amounts, and dates.

4. Delete Expense:
   - Expenses that are no longer needed can be deleted, helping users keep their expense list tidy.

5. Responsive Design:
   - The application is designed to be responsive, ensuring a seamless user experience across various devices.

## Technology Stack

- Frontend:
  - HTML, CSS, JavaScript
  - EJS (Embedded JavaScript) for templating

- Backend:
  - Node.js
  - Express.js for server and routing

- Database:
  - MongoDB Atlas for cloud-based storage

- Containerization:
  - Docker for containerization and deployment

## Deployment

The application is deployed using Docker, making it easy to run and manage across different environments. Users can access the Expense Tracker through a web browser.

## How to Run

1. Clone the repository to your local machine.
2. Install dependencies using npm install.
3. Build the Docker image using docker build -t expense-tracker ..
4. Run the Docker container using docker run -p 3000:3000 -d expense-tracker.
6. Access the application at http://localhost:3000 in your web browser.
