class CreateCards < ActiveRecord::Migration[5.1]
  def change
  	create_table :cards do |t|
    	t.string :title
    	t.belongs_to :list, foreign_key: true, nil: false
    	t.datetime :due_date
    	t.string :labels, array: true, default: [], nil: false
    	t.string :description
			t.float :position    	
    	t.timestamps
    end
  end
end
