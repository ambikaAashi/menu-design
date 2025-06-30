const { Schema, model } = require('mongoose')

const companySchema = new Schema({
  name: String,
  description: String,
  email: String,
  logo: String,
  banner_image: String,
  footer_image: String,
  status: { type: String, default: 'active' },
  admin_user_id: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

module.exports = model('Company', companySchema)
