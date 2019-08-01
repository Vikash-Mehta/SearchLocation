class AccountController < ApplicationController
    require 'jsonwebtoken'
    
    def signup
        @username = User.getuser(params[:username])

        if (@username && @username.count > 0)
            json_response({ username: @username[0]['username'] }, :unauthorized)
            return
        end

        User.adduser(params[:username], params[:password])
        @user = User.getuser(params[:username])
        auth_token = getToken(@user[0]['user_id'])
        response.set_cookie "app_token", auth_token
        redirect_to '#/dashboard'
    end

    def signin
        @username = params[:username]
        @password = params[:password]

        @userexists = User.verifyuser(@username, @password)
        
        if (@userexists && @userexists.count > 0)
            auth_token = getToken(@userexists[0]['user_id'])
            response.headers['Access-Control-Allow-Origin'] = '*'
            cookies.signed[:remember_me_token] = { 
                value: auth_token, 
                expires: 1.days 
            }
            redirect_to "http://localhost:9000/#/dashboard"      
        else
            redirect_to 'http://localhost:9000/account.html#/signin'
        end
    end

    def getToken(userId)
        auth_token = JsonWebToken.encode({userid: userId})
        return auth_token        
    end
end
