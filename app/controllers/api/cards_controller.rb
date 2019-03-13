class Api::CardsController < ApplicationController
  def create
    # @board = Board.find(params[:board_id])
    # @list = List.new(list_params.merge({ board: @board }))
    @list = List.find(params[:list_id])
    @card = Card.new(card_params.merge({ list: @list }))

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid list id provided"
    render 'api/shared/error', status: 404
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render :update
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: 404
  end

  def show
    @card = Card.find(params[:id])

    render :show, status: 200

    rescue ActiveRecord::RecordNotFound
      @error = "Invalid board id provided"
      render 'api/shared/error', status: 404
  end

  private

  def card_params
    params.require(:card).permit(:title)
  end
end
