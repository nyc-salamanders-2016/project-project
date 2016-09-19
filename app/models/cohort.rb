class Cohort < ApplicationRecord
	has_many :students
	has_many :pitches, through: :students, source: :user
	belongs_to :user
	belongs_to :team

	validates :name, :year, presence: true
end
