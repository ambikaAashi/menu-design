const { Schema, model } = require('mongoose')

const outletSchema = new Schema({
  company_id: { type: Schema.Types.ObjectId, ref: 'Company' },
  name: String,
  type: [String],
  description: String,
  email: String,
  address: String,
  contact_person: String,
  phone: String,
  status: { type: String, default: 'open' }
}, { timestamps: true })

module.exports = model('Outlet', outletSchema)
