@routes.each do |route|
  json.routes do
    json.set! route.id do
      json.partial! 'api/routes/route', route: route
      
      # Created custom nesting 
      # json.route_comments makes a 'route_comments' key and the values are the comments
      json.route_comments route.comments.pluck(:id)
    end
  end

   
  json.route_comments do
    json.set! route.id do
      json.comments route.comments.each do |comment|
        json.extract! comment, :id, :body, :created_at
        
        json.commenter do 
          json.extract! comment.user, :first_name, :last_name, :id
        end
      end
    end
  end
  
end
