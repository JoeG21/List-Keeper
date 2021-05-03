class UsersController < ApplicationController
    before_action :set_user, only: [:show,:update,:destroy]

    def index
      @users = User.all
      render json: @users, status: 200
    end
  
    def create
      @user = User.create(user_params)
      payload = { user_id: @user.id}
      token = JWT.encode(payload, 'myKey', 'HS256')
      render :json => { :auth_key => token }, :status => :ok
    end
  
    def update
      @user.update(user_params)
      render json: @user, status: 200
    end
  
    def destroy
      userId = @user.id
      @user.destroy
      render json: {message:"Zap! user deleted", userId:userId}
    end
  
    def show
      render json: @user, status: 200
    end
  
    private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
  
    def set_user
      @user = User.find(params[:id])
    end

end
