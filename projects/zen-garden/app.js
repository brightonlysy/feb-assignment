function Person(name, isAlive, hairColor){
    this.name = name;
    this.isAlive = isAlive;
    this.hairColor = hairColor;
}
var Person = {
    name: "Brighton",
    isAlive: true,
    hairColor: 'blonde',
    speak: 'name',

}
Person.name = function() {
    return this.name + " speak "  + this.isAlive;
}
console.log(speak)