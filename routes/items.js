var express = require('express');
var router = express.Router();
var item_controller = require('../controllers/items')
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('items', { title: 'Search Results items' });
// });
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}


/*GET items*/
router.get('/',item_controller.item_view_all_Page);
module.exports = router;


// GET request for one costume.
router.get('/items/:id', item_controller.item_detail);
/* GET detail costume page */
router.get('/detail', item_controller.item_view_one_Page);
/* GET create costume page */
router.get('/create',secured, item_controller.item_create_Page);
/* GET create update page */
router.get('/update',secured, item_controller.item_update_Page);
/* GET delete costume page */
router.get('/delete',secured, item_controller.item_delete_Page);

