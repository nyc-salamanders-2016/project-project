Rails.application.routes.draw do
	get    '/login',   to: 'login#new'
  post   '/login',   to: 'login#create'
  delete '/logout',  to: 'login#destroy'
  
	resources :users, only: [:new, :create]
	resources :pitches
	resources :teams
	resources :rankings
	resources :cohorts

	root to: 'pitches#index'
end
