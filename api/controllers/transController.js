const User = require(__basedir + "db/models/user");


module.exports = {
  getInst(req, res) {
    User.findOne({ _id: req.body.user_id }).then(user => {
      inst_data = user.institutions;
      return res.json(inst_data)
    });
  },

};