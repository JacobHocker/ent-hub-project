class CreateMovieReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :movie_reviews do |t|
      t.string :review_content
      t.float :movie_score 
      t.integer :movie_id, foreign_key: true 
      t.integer :user_id, foreign_key: true

      t.timestamps
    end
  end
end
