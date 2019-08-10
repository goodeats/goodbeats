Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :beats
      resources :instruments
    end
  end
end
