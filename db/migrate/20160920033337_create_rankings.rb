class CreateRankings < ActiveRecord::Migration[5.0]
  def change
    create_table :rankings do |t|
    	t.integer :rank, null: false
    	t.integer :user_id, null: false
    	t.integer :pitch_id, null: false
    	
      t.timestamps
    end
  end
end
