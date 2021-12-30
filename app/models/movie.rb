class Movie < ApplicationRecord
    has_and_belongs_to_many :actors 
    has_and_belongs_to_many :directors 
    has_and_belongs_to_many :genres  
    has_many :movie_reviews 
    has_many :users, through: :movie_reviews
    
    def self.random 
        Movie.limit(1).order("RANDOM()").first
    end

    validates :title, presence: true
end
