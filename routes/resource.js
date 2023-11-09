var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var item_controller = require('../controllers/items');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/items', item_controller.item_create_post);
// DELETE request to delete Costume.
router.delete('/items/:id', item_controller.item_delete);
// PUT request to update Costume.
router.put('/items/:id', item_controller.item_update_put);
// GET request for one Costume.
router.get('/items/:id', item_controller.item_detail);
// GET request for list of all Costume items.
router.get('/items', item_controller.item_list);
module.exports = router;