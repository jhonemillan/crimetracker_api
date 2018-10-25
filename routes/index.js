var express = require('express');
var router = express.Router();
var path = require('path')

module.exports = function(passport){
  
//   /* GET users listing. */

router.get('/favicon.ico', (req, res) => res.status(204));

  router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  router.get('/auth/google/callback',
  passport.authenticate('google', {failureRedirect:'/', failureFlash: true}),
  (req, res) => {    
    req.session.user = req.user;    
    return res.redirect('/map/' + req.user.id);
  }
);

router.get('/auth/getuser',
      passport.authorize('google', { failureRedirect: '/login' }),
      (req, res)=>{
  return res.json(req.user);
})

router.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});

router.get('/me',
  passport.authenticate('google', {failureFlash: true}),
  (req, res) => {
    console.log(req.user.id);
    req.session.user = req.user;
    return res.status(200).json(req.user);
  }
);
return router;

}