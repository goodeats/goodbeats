# this is the music track that will contain many instruments and authors
class CreateBeats < ActiveRecord::Migration[5.2]
  def change
    create_table :beats do |t|
      t.string :title
      t.text :description
      t.string :timestamps

      t.timestamps
    end
  end
end
