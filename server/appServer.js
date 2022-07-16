//this is the route
const express = require('express')
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

let feedcontroller = require('./controller/feedController');

/*app.route('api/feedItems')
    .get((req,res ) =>{
        feedController.getfeedItems(req, res);
    })
    .post((req, res) => {
        feedController.getfeedItems(req, res);
})
*/
app.route('/api/users')
	.get(feedcontroller.getfeedItems)
	.post(feedcontroller.saveFeedItem)

app.route('/api/feedItems/:feedItemId')
	.get(feedcontroller.getfeedItems)
	.delete(feedcontroller.deletefeedItem)
	.patch(feedcontroller.updatefeedItem)

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.listen(1337, () => console.log('Listening on port 1337.'))
