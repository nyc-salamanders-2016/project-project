class Membership < ApplicationRecord
	# belongs_to :leader, class_name: 'User'
	belongs_to :member, class_name: 'User'
	belongs_to :pitch
end
