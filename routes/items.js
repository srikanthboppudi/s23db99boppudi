var express = require('express');
var router = express.Router();
var item_controller = require('../controllers/items')
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('items', { title: 'Search Results items' });
// });

/*GET items*/
router.get('/',item_controller.item_view_all_Page);
module.exports = router;


// GET request for one costume.
router.get('/items/:id', item_controller.item_detail);
/* GET detail costume page */
router.get('/detail', item_controller.item_view_one_Page);
/* GET create costume page */
router.get('/create', item_controller.item_create_Page);