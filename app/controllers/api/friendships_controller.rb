class Api::FriendshipsController < ApplicationController
  def index
    @friends = current_user.friends
    #friends == full user info of each friend
    @friendships = current_user.friendships
  end

  def show
    @friend = User.find(:friend_id)
    @friend = Friend.find_by(user_id: current_user.id)
  end

  def create
    if @friend = create_other(current_user.id, friend_params)
      debugger
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

    # creates Friendship object for both parties
  def create_other(user_id, friend_id)
    user_friendship = Friendship.create!(user_id: user_id, friend_id: friend_id)
    friends_friendship = Friendship.create!(user_id: friend_id, friend_id: user_id)

    [user_friendship, friends_friendship]
  end

    # destroys Friendship object for both parties
  def destroy_other(user_id, friend_id)
    goodbye1 = Friendship.find_by(user_id: user_id, friend_id: friend_id)
    goodbye2 = Friendship.find_by(user_id: friend_id, friend_id: user_id)

    goodbye1.destroy
    goodbye2.destroy
  end
end
