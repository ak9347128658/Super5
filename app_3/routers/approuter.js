const express = require('express');
const {getapp, getabout, getaboutname ,getaboutageprice, getak} = require('../controllers/appcontroller')
const router = express.Router();
const {appmidelware} = require('../middleware/appmiddleware');
// locahost:5000/api/about
router.get("",appmidelware,getapp);

 router.get("about",getabout);

//path parameter
router.get("about/:name",getaboutname);

router.get("about/:age/:price",getaboutageprice);

//query parameter
router.get("api/ak",getak);


module.exports = router;