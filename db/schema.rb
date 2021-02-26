# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_26_152345) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "cheers", force: :cascade do |t|
    t.integer "cheerable_id", null: false
    t.string "cheerable_type", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cheerable_id", "cheerable_type"], name: "index_cheers_on_cheerable_id_and_cheerable_type"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "commentable_id", null: false
    t.string "commentable_type", null: false
    t.integer "user_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["commentable_id"], name: "index_comments_on_commentable_id"
    t.index ["commentable_type"], name: "index_comments_on_commentable_type"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "friend_requests", force: :cascade do |t|
    t.boolean "pending", null: false
    t.integer "requester_id", null: false
    t.integer "receiver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["requester_id", "receiver_id"], name: "index_friend_requests_on_requester_id_and_receiver_id", unique: true
  end

  create_table "friendships", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "friend_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id"
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "goals", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.string "goal_type", null: false
    t.integer "goal_number", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_goals_on_title"
    t.index ["user_id"], name: "index_goals_on_user_id", unique: true
  end

  create_table "routes", force: :cascade do |t|
    t.string "name", null: false
    t.integer "creator_id", null: false
    t.string "activity", null: false
    t.string "location", null: false
    t.string "distance", null: false
    t.string "markers", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_routes_on_creator_id"
    t.index ["name"], name: "index_routes_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.date "birthday"
    t.string "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email", "session_token"], name: "index_users_on_email_and_session_token", unique: true
    t.index ["first_name", "last_name"], name: "index_users_on_first_name_and_last_name"
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "route_id"
    t.string "workout_name"
    t.date "workout_date", null: false
    t.string "activity", null: false
    t.integer "distance"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "route_id"], name: "index_workouts_on_user_id_and_route_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "friendships", "users"
end
