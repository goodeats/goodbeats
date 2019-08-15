module Api::V1
  class BeatsController < ApplicationController
    before_action :set_beat, only: [:show, :update, :destroy]

    # GET /beats
    def index
      @beats = Beat.all

      render json: @beats
    end

    # GET /beats/1
    def show
      render json: @beat
    end

    # POST /beats
    def create
      @beat = Beat.new(beat_params)

      if @beat.save
        render json: @beat, status: :created
      else
        render json: @beat.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /beats/1
    def update
      if @beat.update(beat_params)
        render json: @beat
      else
        render json: @beat.errors, status: :unprocessable_entity
      end
    end

    # DELETE /beats/1
    def destroy
      @beat.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_beat
        @beat = Beat.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def beat_params
        params.require(:beat).permit(:title, :description, :timestamps)
      end
  end
end
