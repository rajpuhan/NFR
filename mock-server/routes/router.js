'use strict';
module.exports = function(app) {
  var user = require('../controller/userController');
  var flight = require('../controller/flightController');
  var airPort = require('../controller/airPortController');

  // todoList Routes
    app.route('/login')
        .post(user.login);


    app.route('/viewflight')
        .get(flight.viewFlight);
    app.route('/viewairport')
        .get(airPort.viewAirPort);
    app.route('/add')
        .post(airPort.add);
    app.route('/addflight')
        .post(flight.add);
};