class DirectorsController < ApplicationController
    # GET /directors
    def index 
        directors = Director.all
        render :json => directors.to_json( :include => [:movies] )
    end

    # GET /director/:id
    def show 
        director = Director.find_by(id: params[:id])
        if director 
            render :json => director.to_json( :include => [:movies] )
        else  
            render json: { error: 'Director not found' }, status: :not_found
        end
    end

    # POST /director
    def create 
        director = Director.create(director_params)
        render json: director, status: :created  
    end

    # PATCH /director/:id
    def update 
        director = Director.find_by(id: params[:id])
        if director
            director.update(director_params)
            render json: director
        else
            render json: { error: "Director not found" }, status: :not_found
        end
    end

    #GET /director/:id RANDOM
    def random_director 
        render json: Director.find_by(id: params[:id]) || Director.random
    end

    private 

    def actor_params
        params.permit(:director_image, :name, :brief_history, :accomplishments, :net_worth, :birth_date)
    end
end

