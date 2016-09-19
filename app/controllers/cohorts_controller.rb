class CohortsController < ApplicationController
	def new
	end

	def show
		@cohort = Cohort.find(params[:id])
		@pitches = @cohort.pitches
	end
end
