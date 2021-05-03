class NotesController < ApplicationController
    before_action :set_note, only: [:show,:update,:destroy]
    before_action :authenticate!, only: [:index, :destroy]

    def index
        if current_user
            @notes = Note.all
            render :json => @notes.as_json(
                include: [:user]
            ), :status => :ok
        else 
            render :json => { :msg => 'Login First...' }
        end
    end

    def create
        note = Note.create(note_params)
        render json: note, status: 201
    end

    def update
        @note.update(note_params)
        render json: @note, status: 200
    end

    def destroy
        if @note.user == current_user
            @note.destroy
            render :json => { :msg => "Zap! Note deleted" }, :status => :ok
        else
            render :json => { :msg => "LOG IN" }, :status => :ok
        end
    end

    def show
        render json: @note, status: 200
    end

    private
    def note_params
        params.permit(:body, :title, :user_id)
    end

    def set_note
        @note = Note.find(params[:id])
    end

end
