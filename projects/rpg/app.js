var readline = require('readline-sync');
var name = readline.question("what is your name?");
console.log("my name is: " + name);
const player = {
    name: name,
    health: 200,
    attack: 30,
    inventory: []
}
function Enemy(name, health, attack, description) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.description = description;
}
var isAlive = true;
var gameEnd = false;
var num = readline.question()
var Abaddon = new Enemy('Abaddon', 100, 20, 'The ancient vampire Abuddon has appeared!');
var Reaper = new Enemy('Reaper', 150, 20, "High alert, this is the Reaper, we recommend you focus on escaping");
var Osiris = new Enemy('Osiris', 100, 10, 'The egyptian vampire Osiris has appeared!');
var Kim = new Enemy('Kim', 10, 0, "The vampire kim has appeared... get rid of her");
var enemies = [Abaddon, Reaper, Osiris, Kim];
var hasWon = false;
const displayStats = () => {
    console.log(player)
}
displayStats()

function walk() {
    var action = readline.keyIn('What will you do? [W] Walk, [I] Inventory ', { limit: 'wi' })
    if (action === "w") {
        encounter()
    } else if (action === "i") {
        console.log(`${player.inventory}`)

    }

}

// index = readline.keyInSelect(action, 'lets go!');
// // console.log(action[index])

function encounter() {
    var chance = Math.floor(Math.random() * enemies.length);
    var chance1 = Math.random();
    if (chance1 <= .25) {
        console.log(chance)
        console.log(enemies[chance]);
        fight(enemies[chance], chance);

    } else {
        console.log('no challengers')
    }
}

// function run() {
//     if (Math.random() < .5) {
//         console.log('you got away')
//         walk();
//     } else {
//         console.log('NO RUNNING!')
//         console.log('you are beening attacked')
//         console.log('you must fight')
//         var chance = Math.floor(Math.random() * enemies.length);
//     }
// }
// function checkHealth(enemy.health){
//     if ()
// }
function fight(enemy, index) {
    console.log(enemy)
    while (enemy.health > 0 && gameEnd === false) {
        if (player.health <= 0) {
            death();
        }
        var action = readline.keyIn('What will you do? [M] Melee, [S] Shoot, [I] Inventory, [R] Run ', { limit: 'msir' });

        if (action === 'm') {
            var battlehit = player.attack + Math.floor(Math.random() * 30);
            var enemyhit = enemy.attack + Math.floor(Math.random() * 20);
            enemy.health -= battlehit;
            player.health -= enemyhit;
            console.log(`Hit for ${battlehit} and took ${enemyhit}`);
            console.log(`Enemy's health is ${enemy.health}, you are at ${player.health} `);
        } else if (action === 's') {
            var battlehit = player.attack + Math.floor(Math.random() * 10);
            var enemyhit = enemy.attack + Math.floor(Math.random() * 10);
            enemy.health -= battlehit;
            player.health -= enemy.attack
            console.log(`took ${battlehit} and took ${enemyhit}`);
            console.log(`Enemy's health is ${enemy.health}, you are at ${player.health} `);
        } else if (action === 'i') {
            console.log('Nothing to be used here!')
        } else if (action === 'r') {
            if (Math.random() < .5) {
                console.log('you got away')
               return walk();
            } else {
                console.log('NO RUNNING!')
                console.log('you are beening attacked')
                console.log('you must fight')
            }
        }
    }
    if (enemy.health <= 0) {
        enemyDie(index);
    }


}

function win() {
    console.log('YOU WON!!!')
}
function playerDie() {

    console.log("you have died!")
    GameOver();
}

function enemyDie(index) {
    console.log("you have killed the enemy")
    enemies.splice(index, 1)
}

function death() {
    isAlive = false;
    console.log('you have died');
    if (readline.keyInYN('Would you like to try this again?')) {
        player.health = 200;
        gameLoop()
    } else {
        return 0;
    }
}
function GameOver() {
    console.log('Made by Brighton');
    console.log('Thanks for playing!');
    gameEnd = true;
    process.exit(-1);
}
function gameLoop() {
    while (player.health > 0) {
        walk()
    }
}
gameLoop()


playerDie()
