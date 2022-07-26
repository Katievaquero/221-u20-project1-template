//program logic will be here
//will be invoked by routes created in the appServer.js 
//controller
/*
limk to requred model
*/
var feedItem = require('../model/feedItem');
console.log('controll running');

/*let user1 = user.createUser('brian','gormany');
let user2 = user.createUser('katie','vaquero');
let user3 = user.create.User('kevin','jonny');
*/

var feedItems = [];

var feedItem1=feedItem.createFeedItems('marist story 1','This is the story,it may be longer','http://localhost:1337/feed','images/campus.png');
var feedItem2=feedItem.createFeedItems('marist story 2','This is the story,it may be longer','http://localhost:1337/feed','images/news_pic.jpg');
var feedItem3=feedItem.createFeedItems('marist story 3','This is the story,it may be longer','http://localhost:1337/feed','images/hancock.jpeg');
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);



///console.log(feedItems);

//use exports for appServer.js utilize code in feedControl.js & and for ur controller to utilize your model 
//function
exports.getFeedItems = (req, res) => {
    res.setHeader('Content-type','aplication/json');
    res.send(feedItems)
}

//functionsaveFeedItem
exports.saveFeedItem = (req, res) => {
	//feedItems.push(feedItem.createFeedItems(req.body.Title, req.body.Body, req.body.LinkUrl, req.body.imagesUrl))
	let newfeedItem = feedItem.createFeedItems(req.body.Title, req.body.Body, req.body.LinkUrl, req.body.imagesUrl)
	feedItems.push(newfeedItem);
    res.setHeader('Content-type','aplication/json'); 
    //console.log(req.body.Title);
    res.send(feedItems);
}

//funtion getfeedItems
exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}

//function deletefeedItem
exports.deleteFeedItem = function(req, res) {
	feedItems.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}
//function updateFeedItem
/*exports.UpdateFeedItem = (req, res) => {
    req.body.title, req.body.Body, req.body.LinkUrl, req.body.imagesUrl
    feedItem[re.params.feedItemId] 

    res.setHeader
    res.send(feedItems);
}
*/


exports.updateFeedItem = function(req, res) {
	// get the existing user from the array
	var updatedfeedItem = feedItems[req.params.feedItemId];
	//check to see what has been passed and update the local copy
	    console.log(req.body.Title);
	    if(req.body.Title)

	    updatedfeedItem.Title = req.body.Title;
	    if(req.body.Body)
		updatedfeedItem.Body = req.body.Body;
	    if(req.body.linkUrl)
		updatedfeedItem.LinkUrl = req.body.LinkUrl;
	    if(req.body.imageUrl)
		updatedfeedItem.ImageUrl = req.body.ImageUrl;
	
	// save the local copy of the user back into the array
	feedItems[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}



    
    

