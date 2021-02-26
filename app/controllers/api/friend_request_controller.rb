class Api::FriendRequestController < ApplicationController

  def index
    @requests = current_user.friend_requests.all
  end

  def show
    @request = FriendRequest.find(params[:id])
  end

  def create
  end

  def destroy
  end
  
  private
  def request_params
    params.require(:friend_request).permit(:pending, :requester_id, :receiver_id)
  end
end
