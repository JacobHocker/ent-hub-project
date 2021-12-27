class Genre < ApplicationRecord
    has_and_belongs_to_many :movies  

    def self.random 
        Genre.limit(1).order("RANDOM()").first
    end
    
    validates :name, presence: true 
end
