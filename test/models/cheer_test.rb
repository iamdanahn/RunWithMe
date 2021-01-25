# == Schema Information
#
# Table name: cheers
#
#  id             :bigint           not null, primary key
#  cheerable_id   :integer          not null
#  cheerable_type :string           not null
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class CheerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
