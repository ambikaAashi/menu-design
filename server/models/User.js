const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password_hash: String,
  role: { type: String, enum: ['super_admin', 'company_admin'] },
  company_id: { type: Schema.Types.ObjectId, ref: 'Company' },
  status: { type: String, default: 'active' }
}, { timestamps: true })

module.exports = model('User', userSchema)
