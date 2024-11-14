# Student Attendance System

This is a simple attendance management system built with React for the frontend and Node.js for the backend. It allows users to log in and access a home page that greets them with their username.

## Features
- **User Authentication**: Basic login system with client-side validation.
- **Session Management**: Stores session information in local storage for persistence.
- **Navigation**: Uses React Router for seamless navigation between pages.
- **Responsive UI**: Styled with a clean and simple user interface.

---

## Project Structure

```plaintext
MyApp/
│
├── public/                  # Public assets
│   ├── index.html           # Main HTML file
│   └── ...
│
├── server/                  # Server code (if applicable)
│   ├── server.js            # Main server file
│   ├── users.json            # Sample user data for authentication
│   ├── .env                 # .env file
│   ├── package.json         # Project metadata and dependencies
├── src/                     # Source code for the app
│   ├── pages/               # React pages
│   │   ├── Login.js         # Login page component
│   │   ├── Home.js          # Home page component
    ├── components/          # React components
│   │   ├── apiServices.js   # apiServices component
│   │   ├── AuthContext.js   # AuthContext component
│   │   ├── header.js        # header component
│   ├── App.js               # Main App component
│   ├── apiService.js        # Mock API service for login
│   ├── index.js             # Application entry point
│   └── ...
│
├── .gitignore               # Git ignore file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Technologies Used

- **Frontend:**
  - React
  - Next.js
  - Axios (for API requests)

- **Backend:**
  - Node.js
  - Express
  - JSON Web Token (JWT)
  - dotenv (for environment variables)
  
## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Priya-Sivalingam/software-engineer-intern-assessment.git
cd attendance-system
```

### Server Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `users.json` file in the `server` directory with the following sample user data:

   ```json
   [
       {
           "username": "2020E122",
           "password": "password1234"
       }
   ]
   ```

4. Start the server:

   ```bash
   npm index.js
   ```

### Client Setup

1. Open a new terminal window and navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the client application:

   ```bash
   npm start
   ```

## Running the Project

Once both the server and client are running, you can access the application in your browser at:

```
http://localhost:3000
```

## API Endpoints

- **POST /login**
  - Request body:
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
  - Response:
    - On success: 
      ```json
      {
          "message": "Login successful",
          "token": "your_jwt_token"
      }
      ```
    - On failure:
      ```json
      {
          "message": "Invalid credentials"
      }
      ```
---

## Server-Side Details

### Overview

The server is implemented in Node.js and provides an API for user authentication.

### Dependencies

The server-side code uses the following dependencies:

* **express**: Web framework for Node.js.
* **body-parser**: Middleware for parsing incoming request bodies.
* **cors**: Middleware to enable CORS.
* **jsonwebtoken**: Library for creating and validating JWT tokens.
* **dotenv**: For managing environment variables.

### Environment Variables

Create a `.env` file in the server directory with the following content:


## Testing Credentials

You can use the following credentials to test the login functionality:

- **Username:** `2020E122`
- **Password:** `password1234`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
