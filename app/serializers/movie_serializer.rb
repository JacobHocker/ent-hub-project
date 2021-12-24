class MovieSerializer < ActiveModel::Serializer
  attributes :id, :movie_poster, :movie_trailer, :title, :summary, :awards, :run_time, :release_date, :gross_worldwide, :actors, :directors, :genres
end
