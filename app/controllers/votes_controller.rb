class VotesController < ApplicationController

	def new
		@pitches = Pitch.all
	end
	def create
	end
end
