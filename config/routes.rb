Rails.application.routes.draw do
  root to: 'home#index'

  get 'elementui', to: 'home#elementui'
end
