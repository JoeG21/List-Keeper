class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:email])
        if @user ** @user.authenticate(params[:password])
            render :json => @user
        else
            render :json => { :msg => 'Login Failed... Try Again'}
    end

    

end