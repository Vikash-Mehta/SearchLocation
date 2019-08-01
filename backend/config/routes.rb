Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'dashboard/isloggedin'
  get 'dashboard/getnearbylocations'
  get 'dashboard/getlastlocation'
  post 'dashboard/signout'
  post 'account/signup'
  post 'account/signin'  
end
