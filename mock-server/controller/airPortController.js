exports.viewAirPort = function(req, res) {
        let airPortDetails = [{"airportCode":"301","airportState":"BIHAR","airportName":"PATNA"},{"airportCode":"307","airportState":"MAHARASHTRA","airportName":"PUN"},{"airportCode":"405","airportState":"Maharashtra","airportName":"nagpur"},{"airportCode":"409","airportState":"Maharashtra","airportName":"mumbai"},{"airportCode":"505","airportState":"Mah","airportName":"pune"}]
        ;
        res.json(airPortDetails);
};

exports.add = function(req, res) {
        let airPortDetails = {
                code: 200,
                message: "Airport Added Successfully"
        }
        res.json(airPortDetails);
};