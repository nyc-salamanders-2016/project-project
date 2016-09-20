class VotesController < ApplicationController

	def new
		pitches = Pitch.all
		@pitches = pitches.as_json(include: {:creator => {only:[:username]}})
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
