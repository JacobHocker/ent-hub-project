class DirectorsMoviesController < ApplicationController 
    # POST /director_movie
    def create 
        director_movie = DirectorsMovie.create(params.permit(:director_id, :movie_id))
            if director_movie
                render json: director_movie, status: :created 
            else   
                render json: { errors: ["validation errors"] }, status: :unprocessable_entity
            end
    end
end