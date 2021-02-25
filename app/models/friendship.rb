# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  friend_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true

  # friendship has 1 user to 1 friend relationship
  belongs_to :user
    # User has foreign key of "user_id", look it up in Users table
  belongs_to :friend, class_name: :User
    # "foreign key" = friend_id, which will be searched in Users table
    # class name is explicit here to tell Rails, 
    # look in Users table, not Friends Table (which also doesnt exist)


    # creates Friendship object for both parties
  def self.create_other(user_id, friend_id)
    user_friendship = Friendship.create(user_id: user_id, friend_id: friend_id)
    friends_friendship = Friendship.create(user_id: friend_id, friend_id: user_id)

    [user_friendship, friends_friendship]
  end

    # destroys Friendship object for both parties
  def self.destroy_other(user_id, friend_id)
    goodbye1 = Friendship.find_by(user_id: user_id, friend_id: friend_id)
    goodbye2 = Friendship.find_by(user_id: friend_id, friend_id: user_id)

    goodbye1.destroy
    goodbye2.destroy
  end
end
