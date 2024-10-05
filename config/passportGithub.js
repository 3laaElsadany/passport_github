const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const User = require("../models/UserModel");
const {
  github
} = require("./config")


passport.use(new GitHubStrategy({
    clientID: github.clientId,
    clientSecret: github.clientSecret,
    callbackURL: "/auth/github/cb"
  },
  function (accessToken, refreshToken, profile, done) {
    console.log(profile)
    User.findOne({
        githubId: profile.id
      })
      .then(currentUser => {
        if (currentUser) {
          return done(null, currentUser)
        } else {
          const user = new User({
            username: profile.username,
            githubId: profile.id,
            email: profile._json.email
          })
          user.save()
          done(null, user)
        }
      })
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});