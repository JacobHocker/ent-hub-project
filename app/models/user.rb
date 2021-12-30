class User < ApplicationRecord
    has_many :movie_reviews 
    has_many :movies, through: :movie_reviews 
    has_secure_password 

    validates :username, presence: true, uniqueness: true 
    validates :bio, length: { maximum:750 }
    validates :password, presence: true, length: {minimum:4, maximum:12}
    validates :password_confirmation, presence: true, length: {minimum:4, maximum:12}
end
