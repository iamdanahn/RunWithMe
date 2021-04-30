class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.string :activity, null: false
      t.string :location, null: false
      t.string :distance, null: false
      t.string :markers, null: false
      t.text :description 
      t.text :thumbnail
      t.text :bounds
      t.timestamps
    end

    add_index :routes, :name, unique: true
    add_index :routes, :creator_id
  end
end
