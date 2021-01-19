class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.integer :route_id
      t.string :workout_name
      t.date :workout_date, null: false
      t.string :activity, null: false
      t.integer :distance
      t.integer :duration #seconds

      t.timestamps
    end

    add_index :workouts, [:user_id, :route_id]
  end
end
