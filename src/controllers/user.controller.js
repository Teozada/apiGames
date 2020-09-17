const fs = require("fs")

class userController {
    async login(req, res) {
        const { login, senha } = req.body
        fs.readFile("src/database/user.json", "utf8", (err, data) => {
            if (err) return res.status(404).send()
            JSON.parse(data).map(user => {
                if (user.login === login && user.senha === senha) {
                    return res.status(200).send()
                }
            })
            return res.status(404).send()
        })
    }
    async create(req, res) {
        const { login, senha } = req.body
        fs.readFile("src/database/user.json", (err, data) => {
            let db = [...data]
            db.push({ login, senha })
            fs.writeFile("src/database/user.json", JSON.stringify(db), (err, data) => {
                if (err) return res.status(404).send()
                return res.status(200).send()
            })
        })
    }
}
module.exports = new userController()
