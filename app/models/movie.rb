class Movie < ApplicationRecord
    has_and_belongs_to_many :actors 
    has_and_belongs_to_many :directors 
    has_and_belongs_to_many :genres  
    has_many :movie_reviews 
    

    validates :title, presence: true
end
