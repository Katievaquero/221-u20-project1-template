const cat = require('../model/cat');
console.log('catcontroll running');

var cats = [];

var cat1=cat.createcat('Persian cat','White','Black');
var cat2=cat.createcat('British Shorthair','Grey','yellow');
var cat3=cat.createcat('ScotishFold','Orange','yellow');
cats.push(cat1);
cats.push(cat2);
cats.push(cat3);



//use exports for appServer.js utilize code in feedControl.js & and for ur controller to utilize your model 
//function1
exports.getCats = (req, res) => {
    res.setHeader('Content-type','aplication/json');
    res.send(cats)
}

//functionsaveFeedItem
exports.savecat = (req, res) => {
	//feedItems.push(feedItem.createFeedItems(req.body.Title, req.body.Body, req.body.LinkUrl, req.body.imagesUrl))
	let newcat = cat.createcat(req.body.Breed, req.body.FurColor, req.body.EyeColor )
	cats.push(newcat);
    res.setHeader('Content-type','aplication/json'); 
    //console.log(req.body.Title);
    res.send(cats);
}

//funtion getfeedItems
exports.getCat = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(cats[req.params.feedItemId]);
}
//function deletefeedItem
exports.deletecat = function(req, res) {
	cats.splice(req.params.catId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(cats);
}
//function updateFeedItem

exports.updatecat = function(req, res) {
	// get the existing user from the array
	var updatedcat = cats[req.params.catId];

	/*function newCats(req,res) {
		let newcats = cat.createcat(req.body.Breed, req.body.FurColor, req.body.EyeColor )
		
		
	}
	*/
	//override the objsct to put a different object 
	//check to see what has been passed and update the local copy
	    console.log(req.body.Breed);
	    if(req.body.Breed)

	    updatedcat.Breed = req.body.Breed;
	    if(req.body.FurColor)
		updatedcat.FurColor = req.body.FurColor;
	    if(req.body.EyeColor)
		updatedcat.EyeColor = req.body.EyeColor;
	
	// save the local copy of the user back into the array
	cats[req.params.catId] = updatedcat;

	res.setHeader('Content-Type', 'application/json');
	res.send(cats[req.params.catId]);
}
