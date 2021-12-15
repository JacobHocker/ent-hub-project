class CreateDirectorsMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :directors_movies do |t|
      t.belongs_to :director 
      t.belongs_to :movie  
      t.timestamps
    end
  end
end
