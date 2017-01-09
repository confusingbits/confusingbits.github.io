//import {Phaser} from './phaser.js'

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var ship;

function preload() {
    game.load.image('planet', '../img/planet.svg');
    game.load.image('ship', '../img/ship.svg');
}

function create() {
    var planet = game.add.sprite(300, 200, 'planet');
    ship = game.add.sprite(100, 100, 'ship');
    ship.scale.setTo(.1, .1);
    
    // game.physics.arcade.enable(ship);
    // ship.body.gravity.y = 300
    // ship.body.gravity.x = 300
}

function update() {
    ship.x += 1;
    ship.y += 1;        
}