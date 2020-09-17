const Jogo = require('../model/jogos.model');
class jogosController {
    async index(req, res) {
        Jogo.find((err,data)=>{
            if (err) { return res.status(500).send("Failed!") };
            return res.status(200).send(data);
        })
    }
    async create(req,res){
        Jogo.create(req.body, (err, data) => {
            if (err) { return res.status(500).send("Registration failed!") };
            return res.status(200).send(data);
        })
    }
}
module.exports = new jogosController()
