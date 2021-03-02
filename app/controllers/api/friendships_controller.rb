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
    # debugger
    user_id = current_user.id
    user_friends = current_user.friends.ids
    
    insiders_ids = user_friends.unshift(user_id)
    friend_id = friend_params["friend_id"].to_i

    if create_other(current_user.id, friend_id)
      # debugger
      # for rendering back users who are NOT friends
      @users = User.where.not(id: insiders_ids)
      render 'api/users/index'  

      # for rendering back all of the user's friends
      # @friends = current_user.friends
      # render 'api/friendships/index'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    # debugger
    friend_id = params[:id].to_i

    # find friendship where user_id = current user and friend_id = clicked user
    @friend = Friendship.where(user_id: current_user.id, friend_id: friend_id)
    
    if @friend && destroy_other(current_user.id, friend_id)
      
      # grab all friends after friendships destroyed
      @friends = current_user.friends
      render 'api/friendships/index'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def friend_params
    params.require(:friends).permit(:user_id, :friend_id)
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
