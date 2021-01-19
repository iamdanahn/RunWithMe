class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :route_title, null: false
      t.integer :creator_id, null: false
      t.string :activity, null: false
      t.string :location, null: false
      t.integer :distance, null: false
      t.float :start_pos_lat, null: false
      t.float :start_pos_lng, null: false
      t.float :end_pos_lat, null: false
      t.float :end_pos_lng, null: false

      t.timestamps
    end

    add_index :routes, :route_title, unique: true
    add_index :routes, :creator_id
  end
end
