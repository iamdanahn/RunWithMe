class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :commentable_id, null: false
      t.string :commentable_type, null: false
      t.integer :user_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :comments, :commentable_id
    add_index :comments, :commentable_type
    add_index :comments, :user_id
  end
end
