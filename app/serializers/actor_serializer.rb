class ActorSerializer < ActiveModel::Serializer
  attributes :id, :actor_image, :actor_video, :name, :brief_history, :accomplishments, :net_worth, :birth_date, :movies
end
