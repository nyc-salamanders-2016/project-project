class User < ApplicationRecord
	has_many :pitches
	has_many :rankings
	belongs_to :cohort

	has_secure_password

	validates :username, :email, presence: true
	# validates :team_id, :cohort_id, length: {minimum: 1, allow_nil: true}

end
