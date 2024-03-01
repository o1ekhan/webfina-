# Webfina - Explore New York City

Dive into the heart of New York City with Webfina, a dynamic web platform showcasing the best of NYC through curated content, personal profiles, and live data from renowned APIs.

## Key Features

### Dynamic Carousel Management
Admins have the power to update the homepage carousel, reflecting the ever-changing beauty of NYC. Utilizing `multer` for image uploads, this feature allows for seamless management of visual content.

### Exclusive Admin Dashboard
Secured with custom middleware, the dashboard offers admins the ability to edit and delete carousel items, ensuring content remains fresh and engaging.

### Personalized User Profiles
After secure registration and login processes, powered by `bcrypt` and `express-session`, users can view and edit their profiles, adding a personal touch to their Webfina experience.

### Live Data Integration
- **Yelp API**: Discover top-rated restaurants with live data, bringing the culinary delights of NYC to users.
- **NYT Top Stories API**: Keep users informed with the latest news stories, directly integrated into the platform.
- **Unsplash API**: Showcase professional NYC photographs, enhancing the visual experience with high-quality images.

## Technical Overview

### Server Setup
Built on `Express.js`, the server integrates `mongoose` for database interactions, `ejs` for templating, and session management for user authentication, providing a robust backend framework.

### Middleware for Security
Custom middleware ensures that only authenticated users and admins access certain functionalities, maintaining a secure environment.

### API Consumption
Utilizing `axios`, the platform fetches and displays live data from Yelp, NYT, and Unsplash, enriching the user experience with external content.

### Responsive Design
Implemented with EJS and CSS, the user interface is designed to be engaging and accessible, ensuring a seamless experience across devices.

## Getting Started
1. Clone the repo and install dependencies.
2. Set up your `.env` with the necessary API keys.
3. Launch the server to explore the functionalities.

Your journey through the essence of New York City begins with Webfina. Join us in exploring the city's stories, tastes, and visuals.

## Contribute
We welcome contributions to enhance the platform's features and user experience. Please feel free to fork the project and submit your pull requests.

## License
This project is licensed under the MIT License.

Thank you for exploring Webfina, where New York City's heartbeats are just a click away.

## Setup instruction 
1.Clone the repo
git clone https://github.com/o1ekhan/webfina-.git
2.Install npm packages
npm install express ejs bcrypt mongoose body-parser axios multer dotenv
3.Get API keys on websites and change YELP_API_KEY, NYTIMES_API_KEY, UNSPLASH_ACCESS_KEY in .env file
4.Run node server.js
