# Project Nexus

Welcome to Project Nexus! This repository contains multiple projects that demonstrate various web development concepts, ranging from basic login and signup pages to more complex authentication systems for a restaurant website.

## Table of Contents
- [Projects](#projects)
  - [Project 1: Login and Signup Page (Front-end Only)](#project-1-login-and-signup-page-front-end-only)
  - [Project 2: Simple Restaurant Website Login and Signup Authentication](#project-2-simple-restaurant-website-login-and-signup-authentication)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Projects

### Project 1: Login and Signup Page (Front-end Only)

#### Overview

This project focuses on creating an attractive and responsive login and signup page using HTML, CSS, and JavaScript. It emphasizes aesthetics and basic form validation.

#### Features
- Attractive design with gradient background.
- Responsive layout.
- CSS decorations and animations.
- Basic form validation with error messages.

#### File Structure

Project%201\
├── index.html # Main HTML file for the login/signup page\
├── style.css # CSS for styling the page\
└── script.js # JavaScript for form validation and interactivity

### Project 2: Simple Restaurant Website Login and Signup Authentication

#### Overview

This project is a medium-level implementation of a simple restaurant website with user authentication. It includes both front-end and back-end components, utilizing technologies like Node.js, Express, MongoDB, and EJS templates.

#### Features

- User signup and login functionality.
- Personalized welcome message upon successful login.
- Responsive design for accessibility on various devices.
- Backend integration with MongoDB for user data storage and authentication.

#### File Structure

Project%202/\
├── models/\
│ └── User.js # User schema and model\
├── routes/\
│ └── auth.js # Authentication routes (signup and login)\
├── views/\
│ ├── home.ejs # Home page template\
│ ├── login.ejs # Login page template\
│ └── signup.ejs # Signup page template\
├── .env # Environment variables\
├── package.json # Project metadata and dependencies\
├── server.js # Main server file\
└── README.md # Project documentation

## Installation

To run any of the projects locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akku-07/project-nexus.git
   cd project-nexus

2. **Install dependencies:**\
  Navigate to the project directory (e.g., Project%202/) and install the necessary dependencies:
   ```bash
   npm init -y
   npm i bcrypt ejs mongoose express
   
3. **Run the application:**\
   Create a .env file in the root of the project directory and add the required environment variables:
    ```bash
      nodemon src/index.js

The server will start on http://localhost:5000.

## Usage

### For Project 1

Open the index.html file in your browser to view and interact with the login and signup page.

### For Project 2

- Signup:

  Open your browser and go to http://localhost:3000/signup to create a new account.

- Login:

  Open your browser and go to http://localhost:3000/login to log into your account. After logging in, you will see a personalized welcome message.

## File Structure

project-nexus/\
├── Project%201/\
│   ├── index.html\
│   ├── style.css\
│   └── script.js\
├── Project%202/\
│   ├── models/\
│   │   └── User.js\
│   ├── routes/\
│   │   └── auth.js\
│   ├── views/\
│   │   ├── home.ejs\
│   │   ├── login.ejs\
│   │   └── signup.ejs\
│   ├── .env\
│   ├── package.json\
│   └── server.js\
├── README.md\
└── LICENSE
  
## License

This project is licensed under the MIT License. See the LICENSE file for more information.
