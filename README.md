# RunWithMe
## [Live app!](https://runwithme-aa.herokuapp.com/)
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

## User Authentication
- Users can signup or demo login to browse the website
- BCrypt on the backend to store encrypted passwords, never users actual passwords!
![Login]()
![SignUp]()

## Create/Edit a route
- Used several Google Maps APIs (Autocomplete (PENDING), Directions, Geocoding, Maps JS) to create a seamless map environment

- Google Maps JS API
  - Allows rendering of a Google map to view the world

- Directions API
  - Calculates directions and distance between map locations

- Geocoding API
  - Converts address' into latitude/longitude coordinates providing the ability to center a map

- Autocomplete API (PENDING)
  - Autocompletes an address as the user types into the address search bar

## Search/Add friends
- Search for other users and add them to your friends list

## Comment on runs or routes
- Write comments on your or your friends running routes

## Track runs or routes
- See your saved routes on the dashboard
