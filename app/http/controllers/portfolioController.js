function portfolioController() {
    return {
      index(req, res) {
        res.render("portfolio");
      },
    };
  }
  
  module.exports = portfolioController;
  