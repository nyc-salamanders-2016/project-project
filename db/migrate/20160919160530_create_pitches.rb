class CreatePitches < ActiveRecord::Migration[5.0]
  def change
    create_table :pitches do |t|
    	t.string :title, null: false
    	t.text :body, null: false
    	t.integer :user_id, null: false
    	t.integer :first_round_votes, default: 0
    	
      t.timestamps
    end
  end
end
