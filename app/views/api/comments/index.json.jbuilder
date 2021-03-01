@comments.each do |comment|
  # debugger
  json.set! comment.id do
    json.partial! 'api/comments/comment', comment: comment
  end
end
