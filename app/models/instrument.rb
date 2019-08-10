class Instrument < ApplicationRecord
  has_many :beat_instruments
  has_many :beats, through: :beat_instruments
end
