const { Schema, model } = require('mongoose')

const menuSchema = new Schema({
  type: String,
  name: String,
  menu_type: String,
  description: String,
  cover_image: String,
  is_default: Boolean,
  status: { type: String, default: 'active' },
  company_id: { type: Schema.Types.ObjectId, ref: 'Company' },
  outlet_id: { type: Schema.Types.ObjectId, ref: 'Outlet' },
  base_menu_id: { type: Schema.Types.ObjectId, ref: 'Menu' },
  dish_ids: [{ type: Schema.Types.ObjectId, ref: 'Dish' }]
}, { timestamps: true })

module.exports = model('Menu', menuSchema)
