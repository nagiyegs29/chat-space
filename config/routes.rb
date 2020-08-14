Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
<<<<<<< Updated upstream
    resources :messages, onry: [:index, :create]

    namespace :api do
      resources :messages, only: :index, defaults: { format: "json"}
    end
=======
    resources :messages, only: [:index, :create]
>>>>>>> Stashed changes
  end
end
