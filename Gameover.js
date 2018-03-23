MyGame.Gameover = function(game) {
	
	

};


MyGame.Gameover.prototype = {
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
        
        
        game.overText = game.add.image(game.world.centerX,300,'gameover');
        game.overText.anchor.set(0.5,0);
        game.add.tween(game.overText).from({y:280,alpha:0},1000,Phaser.Easing.Cubic.Out,true)
        
        
        
        game.ku = game.add.image(game.world.centerX,game.world.height - 100,'ku');
        game.ku.anchor.set(0.5,1)
        
        game.back = game.add.button(game.world.centerX,550,'game_repeat',function(){
        	game.state.start('Game')
        });
        game.back.anchor.set(0.5,1);
        
        game.overBack = game.add.button(20,20,'over-back',function(){
        	window.location.href = 'index.html?' + Math.random() * 1000000
        })
        
        
        
        
       GameUI.cutscenes()
        

       

    },
    update: function() {
    	
    	
    	
    },
    
    
    
};