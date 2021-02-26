# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  pending      :boolean          not null
#  requester_id :integer          not null
#  receiver_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class FriendRequest < ApplicationRecord

  validates :requester_id, :requestee_id, presence: true
  validates :pending, inclusion: { in: [true, false] }

  belongs_to :user,
    foreign_key: :requester_id,
    class_name: :User

  belongs_to :receiver,
    foreign_key: :receiver_id,
    class_name: :User
end
