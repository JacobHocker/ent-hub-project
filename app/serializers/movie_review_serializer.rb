class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :movie_score, :review_content, :movie_id, :user_id 
end
