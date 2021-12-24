class DirectorSerializer < ActiveModel::Serializer
  attributes :id, :director_image, :name, :birth_date, :brief_history, :accomplishments, :net_worth
end
