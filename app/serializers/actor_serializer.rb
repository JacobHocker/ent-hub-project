class ActorSerializer < ActiveModel::Serializer
  attributes :id, :actor_image, :actor_video, :name, :brief_history, :accomplishments, :birth_date, :movies
end
