# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_13_195835) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.string "actor_image"
    t.string "actor_video"
    t.string "name"
    t.string "brief_history"
    t.string "accomplishments"
    t.time "birth_date"
  end

  create_table "actors_movies", force: :cascade do |t|
    t.bigint "movie_id"
    t.bigint "actor_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["actor_id"], name: "index_actors_movies_on_actor_id"
    t.index ["movie_id"], name: "index_actors_movies_on_movie_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "movie_poster"
    t.string "movie_trailer"
    t.string "title"
    t.string "summary"
    t.string "awards"
    t.integer "run_time"
    t.time "release_date"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
