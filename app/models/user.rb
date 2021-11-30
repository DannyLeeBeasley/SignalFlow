class User < ApplicationRecord
    has_many :pedalboards
    has_many :pedalboard_pedals, through: :pedalboards
    has_secure_password
end
