//this file represants data model
/*function user(firstName,lastName) {
    this.firstName =firstName;
    this.lastName =lastName;
}
*/
function feedItem(Title, Body, LinkUrl, imageUrl){
    this.Title = Title;
    this.Body = Body;
    this.linkUrl = linkUrl; 
    this.imageUrl = imageUrl;
}

//this is the cunstructor
/*exports.createUser = (firstName , lastName) =>{
    return new user(firstName, lastName);
}
console.log ('model running!')
*/

//DATA BASE COMPONENT
exports.getAllFeedItems = function() {
    return(allFeedItems);
}
console.log ('model running!')

