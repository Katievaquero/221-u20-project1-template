
const express = require('express')
var bodyParser = require("body-parser");
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

let feedController = require('./controller/feedController');
let catController = require('./controller/catController');

/*app.route('api/feedItems')
    .get((req,res ) =>{
        feedController.getfeedItems(req, res);
    })
    .post((req, res) => {
        feedController.getfeedItems(req, res);
})
*/
//this is the route
app.route('/api/feedItems')
	.get(feedController.getFeedItems)
	.post(feedController.saveFeedItem)


app.route('/api/feedItems/:feedItemId')
	.get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem) 
    .put(feedController.updateFeedItem)

app.route('/api/cats')
	.get(catController.getCats)
	.post(catController.savecat)


app.route('/api/cats/:catId')
	.get(catController.getCat)
    .delete(catController.deletecat)
    .patch(catController.updatecat) 
    .put(catController.updatecat)

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.listen(1337, () => console.log('Listening on port 1337.'))
