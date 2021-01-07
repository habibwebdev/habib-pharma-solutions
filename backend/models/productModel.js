import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Company',
    },
    name: {
      type: mongoose.Schema.paths('name'),
      required: true,
      ref: 'Purchase',
    },
    ingredients: {
      type: String,
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
    image: {
      type: String,
    },
    expiryDate: {
      type: Date,
    },
    purchasePrice: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Purchase',
    },
    salesPrice: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
