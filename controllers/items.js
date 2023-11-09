var items = require('../models/items');
// List of all Costumes
exports.item_list = async function(req, res) {
    try{
    theitems = await items.find();
    res.send(theitems);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.item_detail = function(req, res) {
res.send('NOT IMPLEMENTED: item detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.item_create_post = async function(req, res) {
    console.log(req.body)
    let document = new items();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.itemName = req.body.itemName;
    document.itemcategory = req.body.itemcategory;
    document.itemPrice = req.body.itemPrice;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.item_delete = function(req, res) {
res.send('NOT IMPLEMENTED: item delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.item_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: item update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.item_view_all_Page = async function(req, res) {
    try{
    theitems = await items.find();
    res.render('items', { title: 'item Search Results', results: theitems });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

