@routes.each do |route|
  json.set! route.id do
    json.partial! 'api/routes/route', route: route
    
    # Created custom nesting 
    # json.route_comments makes a 'route_comments' key and the values are the comments
    json.route_comments route.comments.pluck(:id)
  end

  
end
