class User < ApplicationRecord
  attr_reader :password
  
  validates :email, :password_digest, :session_token, :birthday, :first_name, :last_name, :gender, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  # Add associations
  # Route / Friends / Comments / Cheers / Goal

    has_one_attached :photo

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
