class Route < ApplicationRecord

  validates :route_title, :activity, :location, :start_pos_lat, :start_pos_lng, :end_pos_lat, :end_pos_lng, presence: true

  has_many :comments, as: :commentable
end
