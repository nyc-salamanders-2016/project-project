class UsersController < ApplicationController
	def new
		@cohorts = Cohort.all.to_json
	end

	def create
		@user = User.new(user_params)
		if @user.save
			log_in @user
			created = ["User has been created!"]
			render json: created
		else
			render json: @user.errors.full_messages
		end
	end

	private

  def user_params
    params.require(:user).permit( :username, :email, :password, :admin, :cohort_id, :team_id )
  end

end
