var inquirer = require("inquirer");
var Player = require("./player.js");


inquirer.prompt([

    {
        type: list
        
    }

]);

var Eric = new Player("Eric", 25, "Carpenter");
Eric.strengthInit();
Eric.intelligenceInit();
Eric.healthInit();
Eric.stats();