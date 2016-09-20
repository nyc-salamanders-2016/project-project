class Vote < ApplicationRecord
	belongs_to :user
	belongs_to :pitch
	validates_uniqueness_of :user_id, scope: :pitch_id
	validate :vote_count

	def vote_count
		if self.user.votes.length > 5
			errors.add(:user, "You can only vote for 6 pitches!")
		end
	end

end

