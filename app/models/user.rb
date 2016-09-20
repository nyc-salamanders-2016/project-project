class User < ApplicationRecord
	has_many :pitches, foreign_key: :creator_id
	has_one :membership, foreign_key: :member

	has_secure_password

	validates :username, :email, presence: true
	# validates :team_id, :cohort_id, length: {minimum: 1, allow_nil: true}

end
