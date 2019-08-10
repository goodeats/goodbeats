class CreateBeatInstruments < ActiveRecord::Migration[5.2]
  def change
    create_table :beat_instruments do |t|
      t.references :beat, foreign_key: true
      t.references :instrument, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
