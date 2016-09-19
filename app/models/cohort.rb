class Cohort < ApplicationRecord
	has_many :users
	has_many :pitches, through: :users

	validates :name, :year, presence: true
end
