class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :movie_poster
      t.string :movie_trailer
      t.string :title
      t.string :summary
      t.string :awards
      t.integer :run_time
      t.string :release_date 
    end
  end
end
