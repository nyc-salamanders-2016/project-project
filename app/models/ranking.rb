class Ranking < ApplicationRecord
	belongs_to :pitch
	belongs_to :student, class_name: 'User'

	validates :rank, :user, :pitch, presence: true

end
