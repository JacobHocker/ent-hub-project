class GenresMoviesController < ApplicationController 
    # POST /genre_movie
    def create 
        genre_movie = GenresMovie.create(params.permit(:genre_id, :movie_id))
            if genre_movie
                render json: genre_movie, status: :created 
            else   
                render json: { errors: ["validation errors"] }, status: :unprocessable_entity
            end
    end
end