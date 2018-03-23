var MyGame = {};
MyGame.Boot = function(game) {
};
MyGame.Boot.prototype = {
	init : function(){
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.scale.pageAlignHorizontally =  true;
        this.scale.pageAlignVertically = true;
        
        console.log(this.scale);
        
	},
    preload: function() {
    },
    create: function() {
        this.state.start('Preloader');
    }
};