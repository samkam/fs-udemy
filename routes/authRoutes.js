const passport = require('passport')
module.exports = app => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {
        scope: ["profile", "email"],
        })
    );
    //this route has the user google  code, passenger knows to treat this as
    //having already requested user code from google.?
    
    app.get("/auth/google/callback", passport.authenticate("google"));

};