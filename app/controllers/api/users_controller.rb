class Api::UsersController < ApplicationController


  # I used friendship's user search here because we want to search 
  # all existing users in the App's database
  def index
    term = user_params
    # debugger
    user_friends = current_user.friends.ids
    
    # SAMPLE: User.where(["first_name = :u", {u: "Demo"}])
    # If search criteria is empty, grab all users EXCEPT 
    # current user and friends

    unless term[:search].empty?
      # debugger
      # ILIKE matches case-INSENSITIVELY
      @users = User.where("first_name ILIKE :term OR last_name ILIKE :term OR email ILIKE :term", {term: "%#{term[:search].downcase}%"}) #.downcase is not necessary here, but added for double-security
    else
      # debugger
      @users = User.all
      # @users = User.where.not("id LIKE current_user.id OR user_friends")


      # User.where.not("id IN (1, 2, 3)") works, will return users who are not in the array
    end
  end

  # Creates new user from signup screen
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: {
        first: @user.errors.full_messages_for(:first_name),
        last: @user.errors.full_messages_for(:last_name),
        email: @user.errors.full_messages_for(:email),
        password: @user.errors.full_messages_for(:password),
        birthday: @user.errors.full_messages_for(:birthday),
        gender: @user.errors.full_messages_for(:gender)
      },  status: 422
    end
  end


  # permits only these categories to enter the controller
  private
  def user_params
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :password, 
      :email, 
      :birthday, 
      :gender, 
      :search
      )
  end

end
