const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');

const User = mongoose.model('users');
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log("profile", profile.id);
        var user = User({ googleId: profile.id});
        user.save();
        console.log(user);

        User.find({}, function(err, users){
          if (err) throw err;
          console.log(JSON.stringify(users, null, 4));
        });
        //console.log("accessToken", accessToken);
        //console.log("refresh token", refreshToken);

      }
    )
  );