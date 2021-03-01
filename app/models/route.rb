# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  creator_id  :integer          not null
#  activity    :string           not null
#  location    :string           not null
#  distance    :string           not null
#  markers     :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Route < ApplicationRecord
  validates :name, :creator_id, :activity, :location, :distance, :markers, presence: true

  # Route does not have a comments column
  # this is handled by the separate comments table
  has_many :comments, as: :commentable

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
    

end
