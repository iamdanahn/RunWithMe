class Api::RoutesController < ApplicationController
  before_action :ensure_logged_in

  def index
    @routes = Route.all
  end

  def show
    @route = Route.find(params[:id])
  end

  def create
    debugger
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
    params.require(:routes).permit(:name, :creator_id, :activity, :location, :distance, :markers )
  end
end
