@requests.each do |request|
  json.set! request.id do
    json.partial! "/api/friend_requests/friend_request", request: request 
  end
end