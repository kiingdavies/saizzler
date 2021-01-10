function contactController() {
    return {
      index(req, res) {
        res.render("contact");
      },
    };
  }
  
  module.exports = contactController;
  