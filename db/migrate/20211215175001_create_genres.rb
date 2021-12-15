class CreateGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :genres do |t|
      t.string :genre_picture
      t.string :name
      t.string :description

    end
  end
end
