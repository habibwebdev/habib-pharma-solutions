import mongoose from 'mongoose'

const purchaseSchema = mongoose.Schema(
  {
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
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Company',
    },
    orderItems: [
      {
        productName: {
          type: String,
          required: true,
        },
        type: {
          type: String,
        },
        potency: {
          type: String,
        },
        batch: {
          type: String,
          required: true,
        },
        qty: {
          type: String,
          required: true,
        },
        purchasePrice: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Purchase = mongoose.model('Purchase', purchaseSchema)

export default Purchase
