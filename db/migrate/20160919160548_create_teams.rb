class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
    	t.string :name, null: false
    	t.integer :pitch_id, null: false
    	t.string :team_leader
    	
      t.timestamps
    end
  end
end
