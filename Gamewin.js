MyGame.Gamewin = function(game) {
	
	

};


MyGame.Gamewin.prototype = {
    create: function() {

        this.stage.backgroundColor = '#cdf3fa';

       
        
        
        game.bg = game.add.image(game.world.centerX,game.world.height - 692,'game_bg');
        game.bg.anchor.set(0.5,1);
        game.bg.scale.x = 1.2;
        
        game.logo = game.add.image(game.world.centerX,game.world.height * 0.03,'logo');
    	game.logo.anchor.set(0.5,0)
       
       
        game.rond = game.add.sprite(game.world.centerX,game.world.height,'rond');
		game.rond.anchor.set(0.5,1);
		game.rond.animations.add('run');
		
        
        
        game.land = game.add.image(game.world.centerX,game.world.height,'land');
        game.land.anchor.set(0.5,1)
        
        game.finish = game.add.image(game.world.centerX,game.world.height - 470,'win_flag');
		game.finish.anchor.set(0.5,1)
        
        
        
        
        game.pep = game.add.button(game.world.centerX,game.world.height - 350,'pep');
		game.pep.anchor.set(0.5,1)
		
		game.winText = game.add.image(game.world.centerX,game.world.height - 300,'win');
        game.winText.anchor.set(0.5,1);
        game.add.tween(game.winText).from({y:game.world.height - 300 - 10,alpha:0},800,Phaser.Easing.Cubic.Out,true)
        
        game.cjBtn = game.add.button(game.world.centerX,game.world.height - 80,'cj_btn',function(){
			pop._show('flags')
		});
		game.cjBtn.anchor.set(0.5,1)
        
        
       
        GameUI.cutscenes()

       

    },
    update: function() {
    	
    	
    	
    },
    
    
    
};