import mongoose from 'mongoose'

const distributorSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    agentName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Distributor = mongoose.model('Distributor', distributorSchema)

export default Distributor
