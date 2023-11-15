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
    exports.item_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await items.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
    
// Handle Costume delete on DELETE.
exports.item_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await items.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
//Handle Costume update form on PUT.
exports.item_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await items.findById( req.params.id)
// Do updates of properties
if(req.body.itemName)
toUpdate.itemName = req.body.itemName;
if(req.body.itemcategory) toUpdate.itemcategory = req.body.itemcategory;
if(req.body.itemPrice) toUpdate.itemPrice = req.body.itemPrice;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
// Handle a show one view with id specified by query
exports.item_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await items.findById( req.query.id)
res.render('itemdetail',
{ title: 'item Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};