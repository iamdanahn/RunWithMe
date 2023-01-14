# RunWithMe

![Run With Me gif](https://raw.githubusercontent.com/iamdanahn/RunWithMe/main/app/assets/images/RunWithMe.gif)

## Overview
A MapMyRun clone allowing a user to track and share workouts, goals, and running/biking routes with friends

## Features
* User Authentication (Login/Logout, Signup)
* Create & edit a route for your workouts
* Search & add friends to check each others progress
* Comment on runs or routes
* Track your workouts

## Technologies used
* Backend
  * Ruby on Rails
* Database
  * PostgreSQL
* Frontend
  * React
  * Redux
  * Google Maps APIs
* Heroku
* GitHub

## User Authentication
- Users can signup or demo login to browse the website
- BCrypt on the backend to store encrypted passwords, never users actual passwords!

Login:

![Login](https://raw.githubusercontent.com/iamdanahn/RunWithMe/main/app/assets/images/LogIn.png)

Sign Up:

![SignUp](https://raw.githubusercontent.com/iamdanahn/RunWithMe/main/app/assets/images/SignUp.png)


## Create/Edit a route
- Used several Google Maps APIs (Autocomplete, Directions, Geocoding, Maps JS) to create a seamless map environment

- Google Maps JS API
  - Allows rendering of a Google map to view the world

- Directions API
  - Calculates directions and distance between map locations

- Geocoding API
  - Converts address' into latitude/longitude coordinates providing the ability to center a map

- Autocomplete API (PENDING)
  - Autocompletes an address as the user types into the address search bar

![Create route map](https://raw.githubusercontent.com/iamdanahn/RunWithMe/main/app/assets/images/RunWithMe.png)

## Search/Add friends
- Users are able to search specific or all users (for sake of convenience)
- Friends or current user will not show up in user searches

![Search bar for friends](https://raw.githubusercontent.com/iamdanahn/RunWithMe/main/app/assets/images/FindFriends.png)

## Comment on runs or routes
- Anyone can comment on routes posted
- Only the author can delete their own comments

![Route comments](https://raw.githubusercontent.com/iamdanahn/RunWithMe/main/app/assets/images/RouteComments.png)

## Track runs or routes
- See your saved routes on the dashboard

![Dashboard to see saved routes](https://raw.githubusercontent.com/iamdanahn/RunWithMe/main/app/assets/images/Dashboard.png)
