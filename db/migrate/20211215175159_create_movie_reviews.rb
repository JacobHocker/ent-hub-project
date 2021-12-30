class CreateMovieReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :movie_reviews do |t|
      t.string :review_content
      t.float :movie_score 
      t.belongs_to :movie
      t.belongs_to :user

      t.timestamps
    end
  end
end
