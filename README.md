# Subscription-Tracker
Subscription Tracker

Description

Subscription Tracker is a backend-only application designed to help users manage their subscriptions efficiently. The system allows users to create, view, and delete subscriptions, ensuring they stay on top of their recurring payments.

Features

User Authentication: Secure authentication using JWT bearer tokens.

Create Subscription: Add new subscriptions with details like price, currency, frequency, and payment method.

Manage Subscriptions: View and delete subscriptions.

Reminders: Automated reminders (if configured) for upcoming subscription payments.

Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT

Installation

Clone the repository:

git clone https://github.com/GaneshramWebDev/Subscription-Tracker.git

Navigate to the project directory:

cd Subscription-Tracker

Install dependencies:

npm install

Environment Variables

Create a .env file and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
SERVER_URL=http://localhost:8080

Running the Server

To start the backend server, run:

npm start

The server will run on http://localhost:8080/

API Routes

Method

Endpoint

Description

POST

/api/v1/subscription/create

Create a new subscription

GET

/api/v1/subscription/:id

Get user subscriptions

DELETE

/api/v1/subscription/:id

Delete a subscription

Security Considerations

🚨 Sensitive Information 🚨

The project contains MongoDB connection credentials. Do NOT push .env files to GitHub.

Make sure your repo is private if credentials are exposed.

Use .gitignore to exclude sensitive files.

Contributing

If you want to improve this project, fork the repository and create a pull request.

License

This project is for learning purposes only and is not meant for public use.

✨ Created by Ganesh Ram
