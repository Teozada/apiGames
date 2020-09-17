const User = require('../model/user.model')

class userController {
    async login(req, res) {
        const { login, senha } = req.body
        User.findOne({ login }, (err, data) => {
            if (err) return res.status(500).send( "An error occurred while logging on, please try again later");
            if (!data) return res.status(404).send("User not found" );
            if(data.senha === senha ){
                return res.status(200).send(data)
            }
        })
    }
    async create(req, res) {
       User.create(req.body, (err, data) => {
            if (err) { return res.status(500).send("Registration failed!") };
            return res.status(200).send(data);
        })
    }
}
module.exports = new userController()
