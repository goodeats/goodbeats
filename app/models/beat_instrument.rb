class BeatInstrument < ApplicationRecord
  belongs_to :beat
  belongs_to :instrument
end
