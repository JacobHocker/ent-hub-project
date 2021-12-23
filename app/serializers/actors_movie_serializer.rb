class ActorsMovieSerializer < ActiveModel::Serializer
    attributes :id, :actor_id, :movie_id
end