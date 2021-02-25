class Api::FriendsController < ApplicationController
  def index
    @friends = Friend.all
  end

  def show
    @friend = User.find(:friend_id)
  end

  def create
    @friend = Friend.new(friend_params)

    if @friend.save
      render 'api/friends/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  # def update
  # end

  def destroy
    @friend = Friend.find()
  end

  private
  def friend_params
    params.require(friends).permit(:user_id, :friend_id)
  end
end
