//Connect to Mongoose
const mongoose = require('mongoose')
//Remove unecessary terminal warning msgs
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})