Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "*path", to: "static_pages#index", constraints: ->(request) do
    !!(!request.xhr? && request.format.html?)
  end
end
