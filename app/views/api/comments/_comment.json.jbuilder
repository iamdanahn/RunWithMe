json.extract! comment, :id, :body, :user_id, :created_at
json.extract! comment.user, :first_name, :last_name
# N+1 would occur here if User table wasn't preloaded in controller