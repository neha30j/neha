var express = require('express');
var router = express.Router();
var ctrllocations = require('../controller/locations');
var ctrlothers = require('../controller/others');

/* GET Locations page */
router.get('/', ctrllocations.homelist);
router.get('/location', ctrllocations.locationInfo);
router.get('/location/review/new', ctrllocations.addReview);

/*GET others page */
router.get('/about', ctrlothers.about);

module.exports = router;

 