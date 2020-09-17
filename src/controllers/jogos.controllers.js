const fs = require("fs")

class jogosController {
    async index(req, res) {
        fs.readFile("src/database/jogos.json", (err, data) => {
            if (err) return res.status(404)
            return res.status(200).send(data)
        })
    }
}
module.exports = new jogosController()
