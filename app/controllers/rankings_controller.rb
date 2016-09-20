class RankingsController < ApplicationController
	def new
		ordered_pitches = Pitch.order_pitches_by_votes.first(7)
		@ordered_pitches = ordered_pitches.as_json(include: {:creator => {only:[:username]}})
	end

	def create
		ranking = Ranking.create(pitch_id: params[:pitch_id], user_id: current_user.id, rank: params[:rank])
		render '_thankyou'
	end
end
