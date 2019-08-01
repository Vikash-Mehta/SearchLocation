class ApplicationController < ActionController::API
    include Response
    include ActionController::Cookies
    require 'JsonWebToken'

    protected
    # Validates the token and user and sets the @current_user scope
    def authenticate_request!
      if !payload || !JsonWebToken.valid_payload(payload.first)
        return invalid_authentication
      end
    
      # @current_user = load_current_user
      response.headers['Access-Control-Allow-Origin'] = 'http://localhost:9000'
      response.headers['Access-Control-Allow-Credentials'] = true

      load_current_user!
      invalid_authentication unless @current_user
    end
    
    # Returns 401 response. To handle malformed / invalid requests.
    def invalid_authentication
      render json: {error: 'Invalid request'}, status: :unauthorized
    end
    
    private
    # Deconstructs the Authorization header and decodes the JWT token.
    def payload
      token =  cookies.signed[:remember_me_token]
      JsonWebToken.decode(token)
    rescue
      nil
    end
    
    # Sets the @current_user with the user_id from payload
    def load_current_user!
      @current_user = User.getByUserId(payload[0]['userid'])
    end
end
