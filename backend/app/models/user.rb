class User < ApplicationRecord
    def self.getuser(userName)
        sql = "Select * from Users WHERE UserName = '#{userName}'"
        records_array = ActiveRecord::Base.connection.execute(sql)
        return records_array
    end

    def self.adduser(userName, password)
        sql = "Insert Into Users (userName, email, password) Values ('#{userName}', '#{userName}', '#{password}')"
        records_array = ActiveRecord::Base.connection.execute(sql)
        return records_array
    end

    def self.verifyuser(userName, password)
        sql = "Select * from Users WHERE UserName = '#{userName}' AND password = '#{password}'"
        records_array = ActiveRecord::Base.connection.execute(sql)
        return records_array
    end

    def self.getByUserId(userid)
        sql = "Select * from Users WHERE user_id = #{userid}"
        records_array = ActiveRecord::Base.connection.execute(sql)
        return records_array[0]
    end

    def self.getLocation(lat, long)
        sql = "Select * from location where earth_distance(ll_to_earth(#{lat}, #{long}), ll_to_earth(lat, long)) < 5000"
        records_array = ActiveRecord::Base.connection.execute(sql)
        return records_array
    end

    def self.getLastLocation(userid)
        sql = "Select * from userlocation WHERE user_id = #{userid}"
        records_array = ActiveRecord::Base.connection.execute(sql)
        return records_array
    end

    def self.setLastLocation(userid, lat, long)
        sql = "Insert Into userlocation (user_id, lat, long) Values ('#{userid}', '#{lat}', '#{long}') ON CONFLICT (user_id) 
            DO UPDATE SET lat = #{lat}, long = #{long}";
        records_array = ActiveRecord::Base.connection.execute(sql)
    end
end
