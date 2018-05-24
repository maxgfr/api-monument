module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/', function(req, res) {
    res.send('pongaroo');
  });
  app.use(router);
}
