class Ranking < ApplicationRecord
	belongs_to :pitch
	belongs_to :user

	validates :rank, :user, :pitch, presence: true

end
