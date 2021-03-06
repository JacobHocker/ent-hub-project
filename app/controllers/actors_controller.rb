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

    # PATCH /actors/:id
    def update 
        actor = Actor.find_by(id: params[:id])
        if actor
            actor.update(actor_params)
            render json: actor
        else
            render json: { error: "Actor not found" }, status: :not_found
        end
    end

    # DELETE /actors/:id
    def destroy  
        actor = Actor.find_by(id: params[:id])
        if actor 
            actor.destroy 
            head :no_content
        else
            render json: { error: "Actor not found" }, status: :not_found
        end
    end

    # CUSTOM ROUTES

    #GET /actor/:id RANDOM
    def random_actor 
        render json: Actor.find_by(id: params[:id]) || Actor.random
    end

    private 

    def actor_params
        params.permit(:id, :actor_image, :actor_video, :name, :brief_history, :accomplishments, :net_worth, :birth_date, :actor)
    end
end
