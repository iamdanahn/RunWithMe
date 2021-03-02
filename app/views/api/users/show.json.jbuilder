
# NO LONGER USING PARTIAL BC WE WANT USER's ROUTES FOR USER's SHOW PAGE
#partial leads to partial file // file path // defines user var as @user from controller
# json.partial! '/api/users/user', user: @user
debugger
json.extract! @user, :id, :first_name, :last_name, :email, :created_at

@routes.each do |route|
  json.set! route.id do 
    json.extract! route, :id, :name, :activity, :location, :distance, :description
  end
end