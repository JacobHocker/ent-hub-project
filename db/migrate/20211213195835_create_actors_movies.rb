class CreateActorsMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :actors_movies do |t|
      t.belongs_to :movie
      t.belongs_to :actor

      t.timestamps
    end
  end
end
