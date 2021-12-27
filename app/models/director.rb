class Director < ApplicationRecord
    has_and_belongs_to_many :movies   

    def self.random 
        Director.limit(1).order("RANDOM()").first
    end

    validates :name, presence: true 
end
