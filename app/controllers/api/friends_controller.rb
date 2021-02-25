class Api::FriendsController < ApplicationController
  def index
    @friends = Friend.all
  end

  def show
    @friend = User.find(:friend_id)
    @friend = Friend.find_by(user_id: current_user.id)
  end

  def create
    @friend = Friend.new(friend_params)

    if @friend.save
      render 'api/friends/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend = Friend.find()

    if @friend && @friend.destroy
      render 'api/friends/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def friend_params
    params.require(friends).permit(:user_id, :friend_id)
  end
end
