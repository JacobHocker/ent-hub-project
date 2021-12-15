class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_content, :movie_id, :user_id 
end
