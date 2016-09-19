class Team < ApplicationRecord
	has_one :pitch
	has_many :users

	validates :name, :pitch, presence: true
end
