class PitchesController < ApplicationController
	def index
		pitches = Pitch.all
		teams = Team.all
		@pitches = pitches.as_json(include: {:user => {only:[:username]}})
		@teams = teams.as_json(include: {:pitch => {only:[:title]}})
	end

	def new
	end

	def create
		pitch = current_user.pitches.create(title: params[:title], body: params[:body], user: current_user)
		render :json =>  {pitch: pitch}.as_json(include: {:user => {only:[:username, :admin]}})
	end

	def show
	end

	def edit
	end

	def update
	end

	def destroy
	end
end
