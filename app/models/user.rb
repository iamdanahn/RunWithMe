# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  birthday        :date
#  gender          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password
  
  validates :email, :password_digest, :session_token, :birthday, :first_name, :last_name, :gender, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  # Add associations
  # Route / Friends / Comments / Cheers / Goal

  has_many :routes,
    foreign_key: :creator_id,
    class_name: :Route

  has_many :friends,
    foreign_key: :user_id,
    class_name: :User

  has_many :comments, as: :commentable
  has_many :cheers, as: :cheerable
  has_many :goals,
    foreign_key: :user_id,
    class_name: :Goal
    

  # has_one_attached :photo

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)
    return user && user.is_password?(pw) ? user : nil
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end

  def reset_session_token!
    self.update!(session_token: self.generate_session_token)
    self.session_token
  end

end
