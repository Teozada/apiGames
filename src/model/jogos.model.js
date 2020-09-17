const mongoose = require('mongoose')

const jogoSchema = new mongoose.Schema({
    image: String,
    name: String,
    subtitle: String,
    price: Number,
    plot: String,
    platform: String,
})

const Jogo = mongoose.model('Jogos', jogoSchema)
module.exports = Jogo
