class Api::UsersController < ApplicationController


  # I used friendship's user search here because we want to search 
  # all existing users in the App's database
  def index
    # debugger
    term = user_params
    # debugger
    
    # User.where(["first_name = :u", {u: "Demo"}])
    # ^ this works in console

    unless term[:search].empty?
      # debugger
      @users = User.where("first_name ILIKE :term OR last_name ILIKE :term OR email ILIKE :term", {term: "%#{term[:search].downcase}%"})
    else
      # debugger
      @users = User.all
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
