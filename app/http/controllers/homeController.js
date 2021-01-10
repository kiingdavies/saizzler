const Menu = require("../../models/menu");

function homeContorller() {
  return {
   index(req, res) {
      
      res.render('home');
    },
  };
}

module.exports = homeContorller;
