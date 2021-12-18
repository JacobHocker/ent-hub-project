class MoviesController < ApplicationController
    # GET /movies
    def index 
        movies = Movie.all
        render :json => movies.to_json( :include => [:actors, :directors, :genres] )
    end
     
    # GET /movies/:id
    def show 
        movie = Movie.find_by(id: params[:id])
        if movie 
            render :json => movie.to_json( :include => [:actors, :directors, :genres] )
        else  
            render json: { error: 'Movie not found' }, status: :not_found
        end
    end

    
    # POST /movies
    def create 
        movie = Movie.create!(movie_params)
        render json: movie, status: :created 
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

    private  

    def movie_params  
        params.permit(:movie_poster, :movie_trailer, :title, :summary, :awards, :run_time, :release_date)
    end
end
