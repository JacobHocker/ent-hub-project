class MovieReviewsController < ApplicationController

    # GET movies/:id/movie_reviews
    def index 
        movie_reviews = MovieReview.all 
        render :json => movie_reviews.to_json( :include => [:user] )
    end

    # POST /movie_reviews
    def create 
        movie_review = MovieReview.create(movie_review_params)
        render json: movie_review 
    end

    private 
    def movie_review_params 
        params.permit(:movie_score, :review_content, :movie_id, :user_id)
    end
end
