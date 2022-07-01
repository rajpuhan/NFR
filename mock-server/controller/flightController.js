exports.viewFlight = function(req, res) {
        let flightDetails = [{"flightNumber":24535,"srcAirport":"PATNA","dstnAirport":"PUN","deptDateTime":"2022-03-25","arrDateTime":null,"availableSeats":"50","ticketCost":"2900","enabled":true,"airline":"Spice Jet"}];
        res.json(flightDetails);
};

exports.add = function(req, res) {
        let flightDetails = {
                code: 200,
                message: "Flight Added Successfully"
        }
        res.json(flightDetails);
};