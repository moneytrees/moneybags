const achvController = require("../controllers/achvController");


module.exports = (app, express) => {
    const achvRouter = express.Router();
  
    achvRouter.route("/api/getAllAchievements").get(achvController.getAllAchievements);
    achvRouter.route("/api/getAchievement").get(achvController.getOneAchievement);
  
    return achvRouter;
  };
