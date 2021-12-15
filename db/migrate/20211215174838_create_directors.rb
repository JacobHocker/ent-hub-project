class CreateDirectors < ActiveRecord::Migration[6.1]
  def change
    create_table :directors do |t|
      t.string :director_image
      t.string :name
      t.string :birth_date
      t.string :brief_history
      t.string :accomplishments

    end
  end
end
