var express = require('express');
var router  = express.Router(); // Build our router


// /* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
// });

// Response to a api GET

// router.get('/', function(req, res) {
  //res.send(400); // example of making an api
  /*
  res.send({
    users: ['Will', "Laura"] // Returning a JSON object
  });
  */

//  res.render('index', {
  //  title: 'My App!',
    //  age: 38
//  });
//});

// Response to a api POST
/*
router.post('/', function(req, res) {

});
*/

/*
router.get('/', function(req, res) {
  res.render('index', {
    title: 'My App!',
    age: 38
  });
  console.log(req.query);
});
*/


router.get('/:id', function(req, res) {
  console.log(req.params);
  //res.send(req.params.id, 200);
  res.status(200);
  res.send(req.params.id);
});



module.exports = router;
