function cat(Breed, FurColor, EyeColor ){
    this.Breed = Breed;
    this.FurColor= FurColor;
    this.EyeColor = EyeColor ; 
}

//DATA BASE COMPONENT
exports.createcat = function(Breed, FurColor, EyeColor) {
    return new lcat(Breed, FurColor, EyeColor);
}
console.log ('cat model running!')