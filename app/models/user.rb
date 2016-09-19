class User < ApplicationRecord
	has_many :pitches
	has_many :rankings
	belongs_to :team
	belongs_to :cohort

	has_secure_password

	validates :username, :email, :admin, presence: true

end
