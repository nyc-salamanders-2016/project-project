class TeamsController < ApplicationController

	def create
		team = Team.create(name: params[:name], team_leader: params[:team_leader], pitch_id: params[:pitch_id])
		render :json =>  {team: team}
	end

end
