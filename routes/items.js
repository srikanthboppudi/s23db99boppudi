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
