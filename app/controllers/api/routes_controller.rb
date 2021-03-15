class Api::RoutesController < ApplicationController
  before_action :ensure_logged_in

  def index
    # @routes = Route.all
    # gets routes for only the user id requested
    @user = User.where(id: route_params[:creator_id]).includes(:routes)[0]
    @routes = @user.routes.limit(10).includes(:comments).to_a
    # @routes.each do |route|  
    #   route.comments.includes(:user).to_a
    # end
  end

  def show
     
    @route = Route.find(params[:id])
    @comments = @route.comments
  end

  def create
    #  
    @route = Route.new(route_params)
    @comments = @route.comments
    # @comments
     
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
     
    if @route && @route.destroy
      render json: ["Route destroyed"]
    else
      render json: ["One cannot destroy what does not exist"]
    end
    
  end

  private
  def route_params
    params.require(:route).permit(:name, :creator_id, :activity, 
    :location, :distance, :markers, :thumbnail, :bounds)
  end
end
