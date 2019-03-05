class List < ApplicationRecord
	has_many :cards
	belongs_to :board

  validates_presence_of :title, allow_blank: false
end
