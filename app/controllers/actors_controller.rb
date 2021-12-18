class ActorsController < ApplicationController
    # GET /actors
    def index 
        actors = Actor.all
        render :json => actors.to_json( :include => [:movies] )
    end

    # GET /actors/:id
    def show 
        actor = Actor.find_by(id: params[:id])
        if actor
            render :json => actor.to_json( :include => [:movies] ) 
        else  
            render json: { error: 'Actor not found' }, status: :not_found
        end
    end

    # POST /actors 
    def create 
        actor = Actor.create(actor_params)
        render json: actor, status: :created  
    end

    private 

    def actor_params
        params.permit(:actor_image, :actor_video, :name, :brief_history, :accomplishments, :birth_date)
    end
end
