Rails.application.routes.draw do
	resources :users, only: [:new, :create]
	resources :pitches
	resources :teams
	resources :rankings
end
