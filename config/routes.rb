Rails.application.routes.draw do
  
  
  resources :movie_reviews, only: [:index, :show, :create]
  resources :genres, only: [:index, :show, :create]
  resources :directors, only: [:index, :show, :create]
  resources :actors, only: [:index, :show, :create]
  resources :movies, only: [:index, :show, :create]
  
  resources :movies, only: [:show] do 
    resources :actors, only: [:show, :index]
  end

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
