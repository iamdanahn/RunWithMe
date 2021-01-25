# == Schema Information
#
# Table name: workouts
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  route_id     :integer
#  workout_name :string
#  workout_date :date             not null
#  activity     :string           not null
#  distance     :integer
#  duration     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Workout < ApplicationRecord

  validates :user_id, :workout_date, :activity, presence: true

  has_many :comments, as: :commentable
end
