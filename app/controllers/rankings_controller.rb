class RankingsController < ApplicationController
	def new
		@ordered_pitches = Pitch.order_pitches_by_votes
	end

	def create
	end
end
