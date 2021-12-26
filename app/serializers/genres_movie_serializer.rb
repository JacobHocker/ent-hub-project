class GenresMovieSerializer < ActiveModel::Serializer
    attributes :id, :genre_id, :movie_id
end