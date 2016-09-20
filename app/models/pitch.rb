class Pitch < ApplicationRecord
	belongs_to :creator, class_name: 'User'
	has_many :memberships
	has_many :votes
	has_many :members, through: :memberships, source: :member

	validates :title, :body, :creator, presence: true

	def self.order_pitches_by_votes
		vote_counts = self.get_vote_counts
		pitches = self.all
		ordered_pitches = []
		vote_counts.each do |count|
		  pitches.each do |pitch|
		  	if count == pitch.votes.length
		  		ordered_pitches << pitch
		  	end
		  end 
		 ordered_pitches
		end	
	end

	def self.get_vote_counts
	 	pitches = self.all
		vote_counts = []
		pitches.each do |pitch|
			vote_counts << pitch.votes.length 
		end
		vote_counts = vote_counts.sort.reverse
	end
end
