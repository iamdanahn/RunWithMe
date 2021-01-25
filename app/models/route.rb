# == Schema Information
#
# Table name: routes
#
#  id            :bigint           not null, primary key
#  route_title   :string           not null
#  creator_id    :integer          not null
#  activity      :string           not null
#  location      :string           not null
#  distance      :integer          not null
#  start_pos_lat :float            not null
#  start_pos_lng :float            not null
#  end_pos_lat   :float            not null
#  end_pos_lng   :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Route < ApplicationRecord
  validates :route_title, :activity, :location, :start_pos_lat, :start_pos_lng, :end_pos_lat, :end_pos_lng, presence: true

  has_many :comments, as: :commentable

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
    

end
