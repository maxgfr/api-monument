module.exports = function(app) {
    var router = app.loopback.Router();
    router.get('/', function(req, res) {
        app.models.Monument.find(function(err, monuments) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(monuments);
            }
            res.render('index');
        });
    });
    app.use(router);
}
