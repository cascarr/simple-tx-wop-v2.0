/**
 *  v.2.0
 *  Player's movement without physics
 *  No Bounds check
 */

 let platforms;
 let playerName;
 let status;
 let statusUpdate;
 
 
 let config = {
     type: Phaser.AUTO,
     width: 800,
     height: 600,
     parent: "thegame",
 
     scene: {
         preload: preload,
         create: create,
         update: update
     }
 };
 
 let game = new Phaser.Game(config);
 
 function preload() {
     this.load.image('sky', 'assets/sky.png');
     this.load.spritesheet('dude', 'assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
     );
 }
 
 function create() {
     // displaying the sky
     this.add.image(400, 300, 'sky');
 
     // displaying the player
     player = this.add.sprite(100, 450, 'dude');
 
     // player's name
     playerName = this.add.text(player.x, player.y, 'Dude',
      { fontSize: '20px', fill: '#000' }
     );
 
     // ability left
     this.anims.create({
         key: 'left',
         frames: this.anims.generateFrameNumbers('dude',
          { start: 0, end: 3 }
         ),
         frameRate: 10,
         repeat: -1
     });
 
     //
     this.anims.create({
         key: 'turn',
         frames: [ { key: 'dude', frame: 4 } ],
         frameRate: 20
     });
 
     // ability to turn right
     this.anims.create({
         key: 'right',
         frames: this.anims.generateFrameNumbers('dude',
          { start: 5, end: 8 }
         ),
         frameRate: 10,
         repeat: -1
     });
 
     cursors = this.input.keyboard.createCursorKeys();
 }
 
 function update() {
     if (cursors.left.isDown) {
         player.x -= 2;
 
         player.anims.play('left', true);
     }
     else if (cursors.right.isDown)
     {
         player.x += 2;
 
         player.anims.play('right', true);
     }
     else
     {
         player.anims.play('turn');
     }
     if (cursors.up.isDown) 
     {
         player.y -= 2;
     }
     else if (cursors.down.isDown)
     {
         player.y += 2;
     }
 
     // follows the player on the x-axis
     playerName.x = player.x - 20;
 
     // follows the player on the y-axis
     playerName.y = player.y - 30;
 }