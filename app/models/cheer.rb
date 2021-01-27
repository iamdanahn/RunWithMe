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
class Cheer < ApplicationRecord
  belongs_to :cheerable, polymorphic: true
end
