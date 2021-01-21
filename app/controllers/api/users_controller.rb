class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: {
        first_name: @user.errors.full_messages_for(:first_name),
        last_name: @user.errors.full_messages_for(:last_name),
        email: @user.errors.full_messages_for(:email),
        password: @user.errors.full_messages_for(:password),
        birthday: @user.errors.full_messages_for(:birthday),
        gender: @user.errors.full_messages_for(:gender)
      },  status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email, :birthday, :gender)
  end

end
