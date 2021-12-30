Rails.application.routes.draw do
  
  
  resources :movie_reviews, only: [:index, :show, :create]
  resources :genres
  resources :directors
  resources :actors
  resources :movies
  resources :actors_movies, only: [:create, :update]
  resources :directors_movies, only: [:create, :update]
  resources :genres_movies, only: [:create, :update]
  
  # CONTENT CUSTOM ROUTES
  get "/random_movie", to: "movies#random_movie"
  get "/random_actor", to: "actors#random_actor"
  get "/random_director", to: "directors#random_director"
  get "/random_genre", to: "genres#random_genre"

  # USER 
  get "/users/:id", to: "users#general_show"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
