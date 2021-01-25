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
require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
