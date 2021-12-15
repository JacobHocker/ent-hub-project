class GenreSerializer < ActiveModel::Serializer
  attributes :id, :genre_picture, :name, :description
end
