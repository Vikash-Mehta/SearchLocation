class DashboardController < ApplicationController
    before_action :authenticate_request!

    def isloggedin
        @authenticated = true
        @userid = payload[0]['userid']
        return json_response({userid: @userid})        
    end
    
    def getnearbylocations
        @lat = params[:lat]
        @long = params[:long]
        @homes = User.getLocation(@lat, @long)

        @userid = payload[0]['userid']
        User.setLastLocation(@userid, @lat, @long)

        return json_response(@homes)
    end

    def getlastlocation
        @userid = payload[0]['userid']
        @homes = User.getLastLocation(@userid)
        return json_response(@homes)
    end

    def signout
        cookies.signed[:remember_me_token] = {};
        redirect_to 'http://localhost:9000/account.html#/signin'        
    end
end
