import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import distributors from './data/distributors.js'
import User from './models/userModel.js'
import Distributor from './models/distributorModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // Deletion of already existed records
    await Distributor.deleteMany()
    await User.deleteMany()

    // Insertion of new records
    // Inserting all the users
    const createdUsers = await User.insertMany(users)

    // Getting the Admin
    const adminUser = createdUsers[0]._id

    // set the distributor with admin Id
    const sampleDistributors = distributors.map((distributor) => {
      return {
        ...distributor,
        user: adminUser,
      }
    })

    // Inserting the Distributor
    await Distributor.insertMany(sampleDistributors)

    // console.log(createdUsers)
    // console.log(sampleDistributors)

    console.log('Data Imported!')
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // Deletion of already existed records
    await Distributor.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
