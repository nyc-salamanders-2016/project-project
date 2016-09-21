class MembershipsController < ApplicationController
	def index
		ordered_pitches = Pitch.order_pitches_by_votes.first(7)
		not_picked =[]
		ordered_pitches.each do |pitch|
			unless pitch.picked?
				not_picked << pitch
			end
		end
			@pitches = ordered_pitches - not_picked
	end

	def new
		all_users = User.where(admin: false)
		not_assigned =[]
		all_users.each do |user|
			unless user.picked?
				not_assigned << user
			end
		end
		@users = not_assigned.to_json
		ordered_pitches = Pitch.order_pitches_by_votes.first(7)
		not_picked =[]
		ordered_pitches.each do |pitch|
			unless pitch.picked?
				not_picked << pitch
			end
		end
			@ordered = not_picked.as_json(include: {:creator => {only:[:username]}})
	end

	def create
		team_members = params[:membership][:members]
		pitch = Pitch.find(params[:membership][:pitch_id])
		
		team_members.each do |member|
			unless member==""
				Membership.create(member_id: member, pitch_id: pitch.id)
			end
		end
			all_users = User.where(admin: false)
		not_assigned =[]
		all_users.each do |user|
			unless user.picked?
				not_assigned << user
			end
		end
		@users = not_assigned.to_json
		ordered_pitches = Pitch.order_pitches_by_votes.first(7)
		not_picked =[]
		ordered_pitches.each do |pitch|
			unless pitch.picked?
				not_picked << pitch
			end
		end
			@ordered = not_picked.as_json(include: {:creator => {only:[:username]}})
			render json: [@users,@ordered].to_json


	end
end
