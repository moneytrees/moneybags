//-------------- MODELS -------------------
const Achv = require(__basedir + "db/models/achieve");
const User = require(__basedir + "db/models/user");

module.exports = {

  getAllAchievements: (req, res) => {

    let clientAchvArr = [];
    let tempObj;

    User.findOne({ email: req.body.email })
      .then(user => {
        Achv.find().then((achvData) => {

         
          let clientAchvArr = [];

          achvData.forEach((data) => {
            tempObj = {
              id: data._id,
              name: data.name,
              desc: data.desc,
              unlocked: false
            };
            if (user.achievements.includes(data._id)) {
              tempObj.unlocked = true;
            }
            clientAchvArr.push(tempObj);

          });
          res.json(clientAchvArr);

        }).catch(err => err.message);
      }).catch(err => err.message);
  },
  getOneAchievement: (req, res) => {
  }
};