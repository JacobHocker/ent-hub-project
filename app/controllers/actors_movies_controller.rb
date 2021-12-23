class ActorsMoviesController < ApplicationController 
    # POST /actor_movie
    def create 
        actor_movie = ActorsMovie.create(params.permit(:actor_id, :movie_id))
            if actor_movie.valid?
                render json: actor_movie, status: :created 
            else   
                render json: { errors: ["validation errors"] }, status: :unprocessable_entity
            end
    end
end