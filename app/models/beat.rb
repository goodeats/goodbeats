# this is the music track that will contain many instruments and authors
class Beat < ApplicationRecord
  has_many :beat_instruments
  has_many :instruments, through: :beat_instruments
end
