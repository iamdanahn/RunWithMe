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
require 'test_helper'

class GoalTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
