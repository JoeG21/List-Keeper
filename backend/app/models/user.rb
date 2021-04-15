class User < ApplicationRecord
    has_secure_password

    has_many :notes

    validates :first_name, :last_name, :email, :password, presence: true
    validates :email, uniqueness: { case_sensititve: false }
end
