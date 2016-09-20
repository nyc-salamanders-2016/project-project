class MembershipsController < ApplicationController
	def new
		@users = User.all.to_json
		ordered_pitches = Pitch.order_pitches_by_votes.first(7)
		@ordered = ordered_pitches.as_json(include: {:creator => {only:[:username]}})
	end

	def create
		
	end
end
