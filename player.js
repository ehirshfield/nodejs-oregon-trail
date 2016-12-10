function Player(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.intelligenceInit = function() {
        this.intelligence = Math.floor((Math.random() * 10) + 1);
    }
    this.intelligence = 0;
    this.strengthInit = function() {
        this.strength = Math.floor((Math.random() * 10) + 1);
    }
    this.strength = 0;
    this.healthInit = function() {
        this.health = Math.floor((Math.random() * 25) + 70);
        
    }
    this.health = 0;
    this.stats = function() {
        console.log("Name: " + this.name + "\nAge: " + this.age + "\nJob: " + this.occupation + "\nIntelligence: " + this.intelligence + "\nStrength: " + this.strength + "\nHealth: " + this.health);
    }
    
}

module.exports = Player

