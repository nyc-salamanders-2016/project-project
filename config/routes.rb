Rails.application.routes.draw do
	get    '/login',   to: 'login#new'
  post   '/login',   to: 'login#create'
  delete '/logout',  to: 'login#destroy'
  
	resources :users, only: [:new, :create]
	resources :rankings, only: [:index, :new, :create]
	resources :memberships, only: [:new, :create, :index]
	resources :pitches
	resources :votes

	root to: 'pitches#index'
end
