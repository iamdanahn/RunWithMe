class Workout < ApplicationRecord

  validates :user_id, :workout_date, :activity, presence: true

  has_many :comments, as: :commentable
end
