class Ranking < ApplicationRecord
	belongs_to :pitch
	belongs_to :user

	validates :rank, :user, :pitch, presence: true
	validates_uniqueness_of :user_id, scope: :pitch_id

end
