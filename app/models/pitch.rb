class Pitch < ApplicationRecord
	belongs_to :creator, class_name: 'User'
	has_many :memberships
	has_many :votes
	has_many :members, through: :memberships, source: :member

	validates :title, :body, :creator, presence: true

end
