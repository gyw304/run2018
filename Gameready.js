MyGame.Gameready = function(game) {
	
	

};


MyGame.Gameready.prototype = {
    create: function() {
    	
    	game.that = this;
    	
    	
        
        
       
    	
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
        

        
        game.left = game.add.button(120,game.world.height - 150,'left',function(){
        	
        	


        });
        game.left.anchor.set(0.5)
        
         game.right = game.add.button(game.world.width - 120,game.world.height - 150,'right',function(){
         	
         	

        });
        game.right.anchor.set(0.5);
        
        game.right.input.enabled = false;
    	game.left.input.enabled = false
        
        
        
        
        game.maps = game.add.sprite(game.world.width - 50,game.world.centerY,'map');
        game.maps.anchor.set(0.5);
        
        game.mapBar = game.add.sprite(0,155,'map_bar');
        game.mapBar.anchor.set(0.5,1);
        
        game.graphics = game.add.graphics(0, 0);
        game.graphics.size = 0;
        game.graphics.beginFill(0x000000,.5);
        game.graphics.drawRect(-5, -1, 10,game.graphics.size);
        game.graphics.scale.y = -1;
        
        
        game.mapBar.mask = game.graphics;
        

        game.mapBar.addChild(game.graphics)
        
        
        
        game.startPoint = game.add.image(0,150,'start_point');
        game.startPoint.anchor.set(0.5)
        game.maps.addChild(game.startPoint);
        game.maps.addChild(game.mapBar);
        



        
        game.flag = game.add.image(0,game.world.centerY,'flag');
        game.flag.anchor.set(0,0.5);
        
        

        
        game.timerPro = game.add.sprite(80,150,'timer_pro');
        game.timerBar = game.add.sprite(8,6,'timer_bar');
        game.timerPro.addChild(game.timerBar);
        
        game.timerMask = game.add.graphics(0, 0);
        game.timerMask.size = 0;
        game.timerMask.beginFill(0x000000,.5);
        game.timerMask.drawRect(88, 157, game.timerBar.width,game.timerBar.height);
        game.timerBar.mask = game.timerMask;
        game.lock = game.add.image(70,135,'lock');
        
        game.timerText = game.add.text(550, 150, "15s",{font: "65px", fill: "#47abea", align: "center"});
        

 		game.player = game.add.sprite(game.world.centerX + 100,game.world.height - 50,'player');
        game.player.anchor.set(0.5,1);
        game.physics.arcade.enable(game.player);
        game.player.body.setSize(80, 50, 0, -50);
        game.player.animations.add('pao');
        
        
        game.countMask = game.add.graphics(0, 0);
        game.countMask.beginFill(0x000000,.5);
        game.countMask.drawRect(0, 0, game.world.width,game.world.height);
        game.countMask.endFill();
        game.countMask.visible = true;
        
        game.line = game.add.image(game.world.centerX,game.world.centerY - 200,'line');
        game.line.anchor.set(0.5)
        
        
        game.tt = game.add.sprite(game.world.centerX,game.world.centerY + 300,'tt');
        game.tt.anchor.set(0.5)
        
        
        game.f = game.add.sprite(game.world.centerX,game.world.centerY - 200,'f_3');
        game.f.anchor.set(0.5)
        
        game.index = 3;
        
        game.time.events.repeat(Phaser.Timer.SECOND, 3, function(){
        	
        	--game.index;
        	
        	
        	
        	game.f.loadTexture('f_'+game.index+'', 0, false);
        	
        	if(game.index <=0){
        		game.state.start('Game')
        	}
        	
        }, this);
        
        

        GameUI.cutscenes()
        
        //this.gamestart()
        

       

    },
    update: function() {
    	
    	
    	
    },
    
    
    
};

