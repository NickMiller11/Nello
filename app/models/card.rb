class Card < ApplicationRecord
	include ActiveModel::Serializers::JSON
	belongs_to :list
	has_many :comments

  validates_presence_of :title, allow_blank: false

	def board_id
		list.board_id
	end
end
