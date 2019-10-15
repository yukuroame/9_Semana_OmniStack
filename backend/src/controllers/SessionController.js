const User = require('../models/User');

// index (metodo que retorna uma listagem de sessões), show (listar uma única sessão), store (criar uma sessão), update (alter sessão), destroy (remover ou destruir sessão)

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({ email });        
        }

        return res.json(user);
    }
};