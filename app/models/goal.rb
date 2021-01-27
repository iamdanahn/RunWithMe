# == Schema Information
#
# Table name: goals
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  goal_type   :string           not null
#  goal_number :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Goal < ApplicationRecord
  validates :title, :user_id, :goal_type, :goal_number, presence: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
