class CreatePitches < ActiveRecord::Migration[5.0]
  def change
    create_table :pitches do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :creator_id, null: false
      t.integer :votes, default: 0
      t.integer :rank, default: 0

      t.timestamps
    end
  end
end