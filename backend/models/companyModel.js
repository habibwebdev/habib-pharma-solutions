import mongoose from 'mongoose'

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    distributor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Distributor',
    },
  },
  {
    timestamps: true,
  }
)

const Company = mongoose.model('Company', companySchema)

export default Company
