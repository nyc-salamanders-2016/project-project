Rails.application.routes.draw do
	resources :user, only: :new, :create
	resources :pitch
	resources :team
	resources :ranking
end
