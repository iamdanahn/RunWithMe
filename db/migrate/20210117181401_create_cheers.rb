class CreateCheers < ActiveRecord::Migration[5.2]
  def change
    create_table :cheers do |t|
      t.integer :cheerable_id, null: false
      t.string :cheerable_type, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end

    add_index :cheers, [:cheerable_id, :cheerable_type]
  end
end
