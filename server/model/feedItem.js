//this file represants data model
/*function user(firstName,lastName) {
    this.firstName =firstName;
    this.lastName =lastName;
}
*/
function feedItem(Title, Body, LinkUrl, imageUrl){
    this.Title = Title;
    this.Body = Body;
    this.linkUrl = LinkUrl; 
    this.imageUrl = imageUrl;
}

//this is the cunstructor
/*exports.createUser = (firstName , lastName) =>{
    return new user(firstName, lastName);
}
console.log ('model running!')
*/

//DATA BASE COMPONENT
exports.createFeedItems = function(Title, Body, LinkUrl, imageUrl) {
    return new feedItem(Title, Body, LinkUrl, imageUrl);
    //return(allFeedItems);
}
console.log ('model running!')

