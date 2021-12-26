class DirectorsMovieSerializer < ActiveModel::Serializer
    attributes :id, :director_id, :movie_id
end