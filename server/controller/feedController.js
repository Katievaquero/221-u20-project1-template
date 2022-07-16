//program logic will be here
//will be invoked by routes created in the appServer.js 
//controller
/*
limk to requred model
*/
const feedItem = require('../model/feedItem');
console.log('controll running');

/*let user1 = user.createUser('brian','gormany');
let user2 = user.createUser('katie','vaquero');
let user3 = user.create.User('kevin','jonny');
*/
const feeditems = [];
const feedItem1=('marist story 1','This is the story,it may be longer','http://localhost:1337/feed','images/campus.png');
const feedItem2=('marist story 2','This is the story,it may be longer','http://localhost:1337/feed','images/news_pic.jpg');
const feedItem3=('marist story 3','This is the story,it may be longer','http://localhost:1337/feed','images/hancock.jpeg');
//how to make array 
/*let users = [];
users.push(user1);
users.push(user2);
users.push(user3);
*/
const feedItems = [];
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);


///console.log(feedItems);

//use exports for appServer.js utilize code in feedControl.js & and for ur controller to utilize your model 
//function1
exports.feedItems = (req, res) => {
    res.setHeader('content type','aplication/json');
    res.send(feedItems)
}

//function2
exports.saveFeedItem = (req, res) => {
    res.setHeader('content type','aplication/json');
    //add user to an array 
    user.push(feedItems .getAllFeedItems(req.body.Title, req.body.Body, req.body.LinkUrl, req.body.imagesUrl))
    //console.log(req.body.Title);
    res.send(feedItems);
}

//funtion getfeedItems
exports.getfeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}

//function deletefeedItem
exports.deletefeedItem = function(req, res) {
	feedItems.splice(req.params.feedITemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem);
}
//function updateFeedItem
/*exports.UpdateFeedItem = (req, res) => {
    req.body.title, req.body.Body, req.body.LinkUrl, req.body.imagesUrl
    feedItem[re.params.feedItemId] 

    res.setHeader
    res.send(feedItems);
}
*/


exports.updatefeedItem = function(req, res) {
	// get the existing user from the array
	var updatedUser = feedItems[req.params.feedItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.Title);
	if(req.body.Title)

		updatedfeedItem.Title = req.body.Title;
	if(req.body.Body)
		updatedfeedItem.Body = req.body.Body;
	if(req.body.linkUrl)
		updatedfeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedfeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	feedItems[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}



    
    

