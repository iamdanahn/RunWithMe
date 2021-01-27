# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Route.destroy_all
Workout.destroy_all
Goal.destroy_all
Friend.destroy_all
Comment.destroy_all
Cheer.destroy_all

user1 = User.create!(
  id: 1,
  first_name: 'Demo', 
  last_name: 'Demo',
  password: '123456',
  email: 'demo@demo.com', 
  birthday: '1990-01-13',
  gender: 'M'
  )
user2 = User.create!(
  id: 2,
  first_name: 'Cat',
  last_name: 'Feline',
  password: 'abcdef', 
  email: 'imfaster@yahoo.com', 
  birthday: '2000-03-29',
  gender:'F'
  )
user3 = User.create!(
  id: 3,
  first_name: 'Ash', 
  last_name: 'Ketchum',
  password: 'pokemon',
  email: 'smoothsailing@gmail.com', 
  birthday: '1986-06-14',
  gender:'M'
  )


route1 = Route.create!(
  id: 1,
  name: 'Tour de New York',
  creator_id: 1,
  activity: 'cycling',
  location: 'New York City',
  distance: 50,
  markers: "[{'lat':40.7128, 'lng':74.0060}, {'lat':40.8249, 'lng':74.2109}]",
  description: "This is madness!"
  )

route2 = Route.create!(
  id: 2,
  name: 'Path of Moguls',
  creator_id: 3,
  activity: 'running',
  location: "Catskills, NY",
  distance: 15,
  markers: "[{'lat':42.0093, 'lng':74.3821}, {'lat':42.8249,'lng':74.2109}]",
  description: "Nothing like fresh air"
  )

route3 = Route.create!(
  id: 3,
  name: 'Boulevard of Dreams',
  creator_id: 2,
  activity: 'walking',
  location: "Miami, FL",
  distance: 20,
  markers: "[{'lat':25.7617, 'lng':80.1918}, {'lat':25.8249, 'lng':80.2109}]",
  description: "Soaking in the sun"
)

workouts1 = Workout.create!(
  id: 1,
  user_id: user1.id,
  route_id: route1.id,
  workout_name: "I can do it!!!",
  workout_date: '2021-01-13', #Date.new(2021,01,13).to_s(:db),    #'2021-01-13',
  activity: "cycling",
  distance: 50,
  duration: 38067 # 10:34:27
)

workouts2 = Workout.create!(
  id: 2,
  user_id: user2.id,
  workout_name: "New Years Resolution: run more!",
  workout_date: '2021-01-01',
  activity: "running",
  distance: 2,
  duration: 1227 # 00:20:27,
)
workouts3 = Workout.create!(
  id: 3,
  user_id: user2.id,
  workout_name: "New Years Resolution: run more!",
  workout_date: '2021-01-01',
  activity: "running",
  distance: 2,
  duration: 1227 # 00:20:27,
)

friending1 = Friend.create!(
  id: 1,
  user_id: user1.id,
  friend_id: user2.id
)
friending2 = Friend.create!(
  id: 2,
  user_id: user1.id,
  friend_id: user3.id
)

comments1 = Comment.create!(
  id: 1,
  body: "Great job Eric! Keep it up!",
  commentable_id: route1.id,
  commentable_type: "Route",
  user_id: user3.id
)
comments2 = Comment.create!(
  id: 2,
  body: "Impressive!",
  commentable_id: workouts2.id,
  commentable_type: "Workout",
  user_id: user2.id
)

cheers1 = Cheer.create!(
  id: 1,
  cheerable_id: 1,
  cheerable_type: "Goal",
  user_id: 1
) 

goals1 = Goal.create!(
  id: 1,  
  title: "1st 5k",
  user_id: user2.id,
  goal_type: "Distance",
  goal_number: 5
)