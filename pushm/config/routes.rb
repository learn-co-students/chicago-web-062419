Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :commits, except: [:index, :destroy]
  resources :authors, only: [:index, :show, :destroy]
end
