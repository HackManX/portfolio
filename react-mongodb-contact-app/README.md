# React MongoDB Contact App

## Overview
This project is a full-stack application that allows users to submit their contact information through a React frontend, which is then saved to a MongoDB database via an Express backend.

## Project Structure
```
react-mongodb-contact-app
├── backend
│   ├── controllers
│   │   └── contactController.js
│   ├── models
│   │   └── contactModel.js
│   ├── routes
│   │   └── contactRoutes.js
│   ├── server.js
│   └── .env
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── ContactForm.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles
│   │       └── App.css
│   └── package.json
├── package.json
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB database (either locally or using a service like MongoDB Atlas).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-mongodb-contact-app
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node server.js
   ```

2. In a new terminal, start the frontend application:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Users can fill out the contact form with their name, email, and message.
- Upon submission, the contact information is sent to the backend and saved in the MongoDB database.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.