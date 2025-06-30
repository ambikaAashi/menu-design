const { Schema, model } = require('mongoose')

const dishSchema = new Schema({
  type: String,
  outlet_id: { type: Schema.Types.ObjectId, ref: 'Outlet' },
  base_dish_id: { type: Schema.Types.ObjectId, ref: 'Dish' },
  name: String,
  cuisine_type_id: { type: Schema.Types.ObjectId },
  category_id: { type: Schema.Types.ObjectId },
  price: Number
}, { timestamps: true })

module.exports = model('Dish', dishSchema)
