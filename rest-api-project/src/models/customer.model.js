let mongoose = require('mongoose')

const server='mongodb://localhost:27017/db'
const database='rest-api-project'

mongoose.connect(`mongodb://${server}/${database}`)

let CustomerSchema = new mongoose.Schema
(
    {
        name: String,
        email:
        {
            type: String,
            required: true,
            unique: true
        }
    }
)

module.exports=mongoose.model('Customer',CustomerSchema)