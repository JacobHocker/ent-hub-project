class GenresController < ApplicationController
     # GET /genres
     def index 
        genres = Genre.all
        render :json => genres.to_json( :include => [:movies] )
    end

    # GET /genres/:id
    def show 
        genre = Genre.find_by(id: params[:id])
        if genre 
            render :json => genre.to_json( :include => [:movies] )
        else  
            render json: { error: 'Genre not found' }, status: :not_found
        end
    end

    # POST /genre
    def create 
        genre = Genre.create(genre_params)
        render json: genre, status: :created  
    end

    private 

    def genre_params
        params.permit(:genre_picture, :name, :description)
    end
end
