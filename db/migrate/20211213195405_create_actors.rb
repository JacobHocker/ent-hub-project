class CreateActors < ActiveRecord::Migration[6.1]
  def change
    create_table :actors do |t|
      t.string :actor_image
      t.string :actor_video
      t.string :name
      t.string :brief_history
      t.string :accomplishments
      t.time :birth_date 
    end
  end
end
