class Api::RoutesController < ApplicationController
  before_action :ensure_logged_in

  def index
    @routes = Route.all
  end

  def show
    @route = Route.find(params[:id])
  end

  def create
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
    
  end

  private
  def route_params
    params.require(:routes).permit(:route_title, :creator_id, :activity, :location, :distance, :start_pos_lat, :start_pos_lng, :end_pos_lat, :end_pos_lng )
  end
end
