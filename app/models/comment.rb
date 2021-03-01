# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  commentable_id   :integer          not null
#  commentable_type :string           not null
#  user_id          :integer          not null
#  body             :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Comment < ApplicationRecord
  
  # comments actual text 
  validates :body, presence: true

  # always belongs to a user
  belongs_to :user
  # comments can belong to multiple other models (routes/goals/workouts)
  belongs_to :commentable, polymorphic: true
end
