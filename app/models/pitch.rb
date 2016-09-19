class Pitch < ApplicationRecord
	has_many :rankings
	belongs_to :user
	# belongs_to :team

	validates :title, :body, :user, presence: true

end
