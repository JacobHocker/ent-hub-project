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


     

    private  

    def movie_params  
        params.permit(:movie_poster, :movie_trailer, :title, :summary, :awards, :run_time, :release_date)
    end
end
