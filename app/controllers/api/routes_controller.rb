class Api::RoutesController < ApplicationController
  # before_action :ensure_logged_in

  def index
    # @routes = Route.all
    # gets routes for only the user id requested
    @user = User.where(id: route_params[:creator_id]).includes(:routes)[0]
    @routes = @user.routes.includes(:comments).to_a
  end

  def show
    # debugger
    @route = Route.find(params[:id])
    @comments = @route.comments
  end

  def create
    #  
    @route = Route.new(route_params)

    if @route.save
      render 'api/routes/show'
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def update
    @route = Route.find(params[:id])
    @comments = @route.comments

    if @route.update(route_params)
      render 'api/routes/show'
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def destroy
    @route = Route.find(params[:id])
    
    if @route 
      @route.destroy
    else
      render "One cannot destroy what does not exist"
    end
    
  end

  private
  def route_params
    params.require(:route).permit(:name, :creator_id, :activity, 
    :location, :distance, :markers, :thumbnail, :bounds)
  end
end
