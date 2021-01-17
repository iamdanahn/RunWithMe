class User < ApplicationRecord
  attr_reader :password
  
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, limit: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  def user.find_by_credentials(username, pw)
    user = User.find_by(username: username)
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
