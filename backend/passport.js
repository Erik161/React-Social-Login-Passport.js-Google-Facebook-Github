const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const GOOGLE_CLIENT_ID ="433187654647-k10v3je1m2b1g7o6817auskj5n17gv9j.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
   done(null,profile)
  }
));


passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    //done(null,user)

});

