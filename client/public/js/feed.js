var feedItem={
    Title: 'string',
    Body:'string',
    linkUrl: 'string',
    imageUrl: 'string',
}
const currentStories = [];
feedItem[0]='marist story 1','This is the story,it may be longer','http://localhost:1337/feed','images/campus.png';
feedItem[1]='marist story 2','This is the story,it may be longer','http://localhost:1337/feed','';'images/news_pic.jpg';
feedItem[2]='marist story 3','This is the story,it may be longer','http://localhost:1337/feed','';'images/hancock.jpeg';


function displayItem(feedItem){
    window.getElementById("newsFeed").innerHTML = currentStories;
    window.addEventListener('load', (feedhtml) => {
        console.log(feedItem[0]);
        console.log(feedItem[1]);
        console.log(feedItem[2]);
    });
}





