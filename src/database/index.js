const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false })
mongoose.connection.once('open', () => {
    console.log("MongoDB database connection extablished successfully")
})

module.exports = mongoose
