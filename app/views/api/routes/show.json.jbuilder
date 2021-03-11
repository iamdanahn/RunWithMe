#  
 
# json.route do
  json.partial! 'api/routes/route', route: @route
  json.comments @comments.pluck(:id)
# end

# BELOW is for cases where we want to minimize backend calls
# aka get everything in one AJAX request then parse thru reducers.
# Since this is a small project, I'm going to split responsibilities
# json.comments do 
#   @comments.each do |comment|
#     json.set! comment.id do
#       json.partial! 'api/comments/comment', comment: comment
#     end
#   end
# end
