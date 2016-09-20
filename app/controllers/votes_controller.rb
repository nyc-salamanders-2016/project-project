class VotesController < ApplicationController
	def index
		if admin? 
			ordered_pitches = Pitch.order_pitches_by_votes
			@ordered = ordered_pitches.as_json(include: {:creator => {only:[:username]}})
			@votes = Vote.all
		end
	end

	def new
		if admin? == false && logged_in?
			pitches = Pitch.all
			@pitches = pitches.as_json(include: {:creator => {only:[:username]}})
			@votes = current_user.votes.to_json
		end
	end

	def create
		@vote = current_user.votes.new(vote_params)
		if @vote.save
			success = true
			render json: success
		else
			failure = false
			render json: failure
		end
	end

	

	private

	def vote_params
    params.require(:vote).permit( :user_id, :pitch_id )
	end

end
