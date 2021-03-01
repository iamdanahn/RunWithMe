class Api::FriendRequestsController < ApplicationController

    # shows all pending requests 
  def index
    @requests = current_user.friend_requests.all
  end

    # will we need an individual request to show?
  def show
    @request = FriendRequest.find(params[:id])
  end

  def create
    # check if requester id === current users id, if so
      # make new friend_request object 
      # create pending status as true
      # save friend_request object
      # do this for both parties

      debugger
    if current_user.id == request_params[:requester_id].to_i #enters as a string
      @request = FriendRequest.new(request_params) #prepopulate on FE

        #checks to see if all of current user's friend rqsts do not include the receiver
      if current_user.friend_requests.all? { |req| req[:receiver_id] != request_params[:receiver_id] }
        @request[:pending] = true
        debugger
        if @request.save
          debugger
          render "/api/friend_requests/show"
        else
          debugger
          render json: @request.errors.full_messages, status: 422
        end
      else
        debugger
        render json: ["You're already friends or pending request!"]
      end
    end
  end

  def destroy
    # find FriendRequest object
    # if exists, FR.destroy
    @request = current_user.friend_requests.find(params[:id])

    if @request
      @request.destroy
    else
      render json: @request.errors.full_messages, status: 422
    end
  end
  
  private
  def request_params
    params.require(:friend_request).permit(:pending, :requester_id, :receiver_id)
  end
end
