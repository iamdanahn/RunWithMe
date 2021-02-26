class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.boolean :pending, null: false
      t.integer :requester_id, null: false
      t.integer :receiver_id, null: false

      t.timestamps
    end

    add_index :friend_requests, [:requester_id, :receiver_id], unique: true
  end
end
