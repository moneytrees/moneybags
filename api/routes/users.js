const userController = require("../controllers/userController");
const passport = require("passport");
require(__basedir + "config/passport")(passport);

module.exports = (app, express) => {
  const userRouter = express.Router();

  userRouter.route("/api/register").post(userController.registerUser);
  userRouter.route("/api/login").post(userController.loginUser);
  userRouter.route("/api/addCashFlow").post(userController.addCashFlow);
  userRouter.route("/api/getNewUserAchievements").post(userController.getNewAchievements);
  userRouter.route("/api/getLatestCashFlow").post(userController.getLatestCashFlow);
  userRouter.route("/api/deleteNewAchievements").post(userController.deleteNewAchievements);
  userRouter
    .route("/api/current")
    .get(
      passport.authenticate("jwt", { session: false }),
      userController.currentUser
    );
  return userRouter;
};
