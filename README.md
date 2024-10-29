# Student Attendance System

This is a simple attendance management system built with React for the frontend and Node.js for the backend. It allows users to log in and access a home page that greets them with their username.

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

3. Create a `.env` file in the `server` directory with the following content:

   ```env
   PORT=5000
   JWT_SECRET=mySuperSecretKey123!
   ```


4. Create a `users.json` file in the `server` directory with the following sample user data:

   ```json
   [
       {
           "username": "2020E122",
           "password": "password1234"
       }
   ]
   ```

5. Start the server:

   ```bash
   npm start
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
   npm run dev
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

## Testing Credentials

You can use the following credentials to test the login functionality:

- **Username:** `2020E122`
- **Password:** `password1234`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
