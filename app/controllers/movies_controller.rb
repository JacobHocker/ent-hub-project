class MoviesController < ApplicationController
    # GET /movies
    def index 
        movies = Movie.all
        render :json => movies.to_json( :include => [:actors] )
    end
     
    # GET /movies/:id
    def show 
        movie = Movie.find_by(id: params[:id])
        if movie 
            render json: movie
        else  
            render json: { error: 'Movie not found' }, status: :not_found
        end
    end

    def actors_index 
        movie = Movie.find(params[:id])
        actors = movie.actors 
        render json: actors, include: :movie 
    end

    def actor 
        actor = Actor.find(params[:id])
        render json: actor, include: :movie
    end
end
