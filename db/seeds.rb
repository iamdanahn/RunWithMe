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
Friendship.destroy_all
FriendRequest.destroy_all
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
  password: 'password', 
  email: 'imfaster@yahoo.com', 
  birthday: '2000-03-29',
  gender:'F'
  )
user3 = User.create!(
  id: 3,
  first_name: 'Ash', 
  last_name: 'Ketchum',
  password: 'password',
  email: 'smoothsailing@gmail.com', 
  birthday: '1986-06-14',
  gender:'M'
  )
user4 = User.create!(
  id: 4,
  first_name: 'Logitech', 
  last_name: 'Pro',
  password: 'password',
  email: 'logitech@gmail.com', 
  birthday: '1986-06-14',
  gender:'F'
  )
user5 = User.create!(
  id: 5,
  first_name: 'Tiger', 
  last_name: 'Cereal',
  password: 'password',
  email: 'cereal@gmail.com', 
  birthday: '1986-06-14',
  gender:'M'
  )
user6 = User.create!(
  id: 6,
  first_name: 'Josh', 
  last_name: 'Planter',
  password: 'password',
  email: 'smoothdemo@gmail.com', 
  birthday: '1986-06-14',
  gender:'M'
  )


route1 = Route.create!(
  id: 1,
  name: 'Tour de New York',
  creator_id: 1,
  activity: 'cycling',
  location: 'New York City',
  distance: "29 mi",
  markers: '[{"lat":40.71411115971662,"lng":-74.01132169889046},{"lat":40.7033821221302,"lng":-74.01622629240303},{"lat":40.71079944830665,"lng":-73.97940492704659},{"lat":40.738664689525265,"lng":-73.97315883889469},{"lat":40.77474843800661,"lng":-73.94294643655094},{"lat":40.82411915550898,"lng":-73.93480985667082},{"lat":40.86850561436029,"lng":-73.9204045210102},{"lat":40.78914261494821,"lng":-73.98014268018989},{"lat":40.71411115971662,"lng":-74.01132169889046}]',
  description: "This is madness!"
  )

route2 = Route.create!(
  id: 2,
  name: 'Path of Moguls',
  creator_id: 1,
  activity: 'running',
  location: "Catskills, NY",
  distance: "8.4 mi",
  markers: '[{"lat":40.75674223226639,"lng":-73.98508680046385},{"lat":40.74035624922381,"lng":-73.99710309685057},{"lat":40.72663313398497,"lng":-73.97925031364744},{"lat":40.761943287259584,"lng":-73.96500241936033},{"lat":40.760448025629294,"lng":-73.98989331901853},{"lat":40.75674223226639,"lng":-73.98508680046385}]',
  description: "Nothing like fresh air"
  )

route3 = Route.create!(
  id: 3,
  name: 'Boulevard of Dreams',
  creator_id: 1,
  activity: 'walking',
  location: "Miami, FL",
  distance: "23.8 mi",
  markers: '[{"lat":25.766513967793152,"lng":-80.19050273967285},{"lat":25.726544797952293,"lng":-80.2397695548584},{"lat":25.81110583843507,"lng":-80.18906731292041},{"lat":25.80932804978399,"lng":-80.13535927392678},{"lat":25.773365948021038,"lng":-80.18726097681186}]',
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

friending1 = Friendship.create!(
  id: 1,
  user_id: user1.id,
  friend_id: user2.id
)
friending2 = Friendship.create!(
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
comments3 = Comment.create!(
  id: 3,
  body: "test - route 1",
  commentable_id: route1.id,
  commentable_type: "Route",
  user_id: user2.id
)
comments4 = Comment.create!(
  id: 4,
  body: "testtttt - route 1",
  commentable_id: route1.id,
  commentable_type: "Route",
  user_id: user2.id
)
comments5 = Comment.create!(
  id: 5,
  body: "Woohooo look at you go - route 1",
  commentable_id: route1.id,
  commentable_type: "Route",
  user_id: user5.id
)
comments6 = Comment.create!(
  id: 6,
  body: "Woohooo look at you gogogogo - route 1",
  commentable_id: route1.id,
  commentable_type: "Route",
  user_id: user4.id
)
comments7 = Comment.create!(
  id: 7,
  body: "Wompmpmpmp - route 1",
  commentable_id: route1.id,
  commentable_type: "Route",
  user_id: user4.id
)

goals1 = Goal.create!(
  id: 1,  
  title: "1st 5k",
  user_id: user2.id,
  goal_type: "Distance",
  goal_number: 5
)
  
cheers1 = Cheer.create!(
  id: 1,
  cheerable_id: goals1.id,
  cheerable_type: "Goal",
  user_id: 1
) 

# connection1 = FriendRequest.create!(requester_id: user1.id, receiver_id: user4.id, pending: true)
# connection1a = FriendRequest.create!(requester_id: user4.id, receiver_id: user1.id, pending: true)

# connection2 = FriendRequest.create!(requester_id: user1.id, receiver_id: user5.id, pending: true)
# connection2a = FriendRequest.create!(requester_id: user5.id, receiver_id: user1.id, pending: true)

# connection3 = FriendRequest.create!(requester_id: user1.id, receiver_id: user6.id, pending: true)
# connection3a = FriendRequest.create!(requester_id: user6.id, receiver_id: user1.id, pending: true)

# connection4 = FriendRequest.create!(requester_id: user5.id, receiver_id: user3.id, pending: true)
# connection4a = FriendRequest.create!(requester_id: user3.id, receiver_id: user5.id, pending: true)