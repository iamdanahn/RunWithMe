
class Route < ApplicationRecord
  validates :name, :creator_id, :activity, :location, :distance, :markers, presence: true

  has_many :comments, as: :commentable

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
    

end
