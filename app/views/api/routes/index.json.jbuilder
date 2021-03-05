@routes.each do |route|
  json.set! route.id do
    json.partial! 'api/routes/route', route: route
    
    # Created custom nesting 
    # json.route_comments makes a 'route_comments' key and the values are the comments
    json.route_comments do        
      route.comments.each do |comment|
        json.set! comment.id do
          json.partial! 'api/comments/comment', comment: comment
        end
      end
    end
  
  end
end
