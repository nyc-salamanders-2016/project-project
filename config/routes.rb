Rails.application.routes.draw do
	get    '/login',   to: 'login#new'
  post   '/login',   to: 'login#create'
  delete '/logout',  to: 'login#destroy'
  
	resources :users, only: [:new, :create]
	resources :memberships, only: [:new, :create]
	resources :pitches
	resources :votes

	root to: 'pitches#index'
end
