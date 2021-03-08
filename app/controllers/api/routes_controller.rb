class Api::RoutesController < ApplicationController
  # before_action :ensure_logged_in

  def index
    # @routes = Route.all
    # gets routes for only the user id requested
    @routes = User.find(route_params[:creator_id]).routes
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
    if @route.update(route_params)
      render 'api/routes/show'
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def destroy
    @route = Route.find(params[:id])
    
    if @route && @route.destroy
      render 'api/routes/show'
    else
      render "One cannot destroy what does not exist"
    end
    
  end

  private
  def route_params
    params.require(:route).permit(:name, :creator_id, :activity, :location, :distance, :markers, :thumbnail )
  end
end
