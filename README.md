# Thought-Blog

# Description

This project is a NoSQL Challenge where we build a RESTful API for a social network web application using MongoDB, Express.js, and Mongoose. The application allows users to share thoughts, react to friends' thoughts, and manage a friend list. MongoDB is used for its scalability and ability to handle unstructured data, which is essential for social networking platforms that process large amounts of dynamic user content.

Since this project focuses on backend functionality, the app is not deployed. Instead, interactions with the API can be tested using tools like Insomnia or Postman. The project's functionality is demonstrated through a walkthrough video showcasing how each API route works.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Routes](#api-routes)
- [License](#license)

# Installation
1. Clone the repository: https://github.com/DrewRic/Thought-Blog.git
2. Install dependencies
    -npm install i
3. Ensure that MongoDB is installed and running on your machine.
4. Run the application

# Usage

Once the server is running, you can use Insomnia or Postman to interact with the API by testing its various routes.

To create a user, send a POST request to /api/users with the appropriate JSON data.
To view all users, send a GET request to /api/users.

This API allows CRUD operations (Create, Read, Update, Delete) on users, thoughts, reactions, and friends.

# Technologies Used

MongoDB: A NoSQL database for storing unstructured data.
Mongoose: An ODM (Object Data Modeling) library to interact with MongoDB.
Express.js: A framework for building the API and handling routes.
Node.js: JavaScript runtime for running the application backend.

# API Routes

Users
    GET /api/users: Get all users.
    GET /api/users/
    : Get a single user by ID.
    POST /api/users: Create a new user.
    PUT /api/users/
    : Update an existing user.
    DELETE /api/users/
    : Delete a user.

Thoughts
    GET /api/thoughts: Get all thoughts.
    GET /api/thoughts/
    : Get a single thought by ID.
    POST /api/thoughts: Create a new thought.
    PUT /api/thoughts/
    : Update an existing thought.
    DELETE /api/thoughts/
    : Delete a thought.

Reactions
    POST /api/thoughts/
    /reactions: Add a reaction to a thought.
    DELETE /api/thoughts/
    /reactions/
    : Remove a reaction from a thought.

Friends
    POST /api/users/
    /friends/
    : Add a friend to a user's friend list.
    DELETE /api/users/
    /friends/
    : Remove a friend from a user's friend list.

# License
This project is licensed under the MIT License.