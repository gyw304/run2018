MyGame.Game = function(game) {
	
	

};


MyGame.Game.prototype = {
    create: function() {
    	
    	game.that = this;
    	
    	game.pos = {};
        game.step = 0;
        game.speed = 20;
        game.timer = 30;
        game.runtimer = 15;
        game.runtimerCount = 15;
        game.addTimeNum = 5;
        
        
        
        game.timerEvents = [];
    	
    	
    	game.physics.startSystem(Phaser.Physics.ARCADE);
    	
    	game.audio_oncell = game.add.audio('audio_oncell');
    	
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
        
        
        game.obstacles = game.add.group();
        
        game.player = game.add.sprite(game.world.centerX + 100,game.world.height - 50,'player');
        game.player.anchor.set(0.5,1);
        game.physics.arcade.enable(game.player);
        game.player.body.setSize(80, 50, 0, -50);
        game.player.animations.add('pao');
        
        
        
        game.left = game.add.button(120,game.world.height - 150,'left',function(){
        	
        	game.add.tween(game.left.scale).to({x:0.9,y:0.9},200,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
        		game.add.tween(game.left.scale).to({x:1,y:1},200,Phaser.Easing.Cubic.Out,true)
        	})
        	
        	if(game.player.x <= 115){
        		
        		game.player.x = 115;
        	}
        	else{
        		game.player.x -= 180;
        	}


        });
        game.left.anchor.set(0.5)
        
         game.right = game.add.button(game.world.width - 120,game.world.height - 150,'right',function(){
         	
         	game.add.tween(game.right.scale).to({x:0.9,y:0.9},200,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
        		game.add.tween(game.right.scale).to({x:1,y:1},200,Phaser.Easing.Cubic.Out,true)
        	})
         	
         	if(game.player.x >= 655){
        		
        		game.player.x = 655
        	}
        	else{
        		game.player.x += 180;
        	}

        });
        game.right.anchor.set(0.5);
        
        game.right.input.enabled = false;
    	game.left.input.enabled = false
        
        
        
        
        game.maps = game.add.sprite(game.world.width - 50,game.world.centerY,'map');
        game.maps.anchor.set(0.5);
        
        game.mapBar = game.add.sprite(0,155,'map_bar');
        game.mapBar.anchor.set(0.5,1);
        
        game.mapMak = game.add.graphics(0, 0);
        game.mapMak.size = 0;
        game.mapMak.beginFill(0x000000,.5);
        game.mapMak.drawRect(-5, -1, 10,game.mapMak.size);
        game.mapMak.scale.y = -1;
        
        
        game.mapBar.mask = game.mapMak;
        

        game.mapBar.addChild(game.mapMak)
        
        
        
        game.startPoint = game.add.image(0,150,'start_point');
        game.startPoint.anchor.set(0.5)
        game.maps.addChild(game.startPoint);
        game.maps.addChild(game.mapBar);
        
        
        
       
        
        
        
        
        
        //game.timerEvents[1] map time
        game.timerEvents[1] = game.time.events.loop(Phaser.Timer.SECOND, function(){
        	
        	if(game.startPoint.y <= -150){
        		game.startPoint.y = -150;
        		game.time.events.remove(game.timerEvents[1]);
        		game.that.gamewin();
        	}
        	else{
        		game.startPoint.y -= parseInt(310/game.timer);
        		game.mapMak.clear();
	            game.mapMak.size+=10;
	            game.mapMak.drawRect(-5, -1, 10,game.mapMak.size);
	            
        	}
        }, this);

        
 

        //game.timerEvents[0] create obstacle
        game.timerEvents[0] = game.time.events.loop(Phaser.Timer.SECOND * 1.5, function(){
        	
        	game.step++
        	
        	if(game.step % 4 == 0){
        		game.obstacle = new obstacle(game,'buji_'+game.rnd.between(0,2)+'',game.rnd.between(1,4));
        	}
        	else{
        		game.obstacle = new obstacle(game,'stone',game.rnd.between(1,4));
        	}

        	
            game.add.existing(game.obstacle);
            game.obstacles.add(game.obstacle);
        }, this);

        
        
        game.time.events.stop(false);

        
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
        

        
        //game.timerEvents[0] game timer
        game.timerEvents[2] = game.time.events.loop(Phaser.Timer.SECOND, function(){
        	
        	
        	if(game.runtimerCount <= 0){
        		game.time.events.remove(game.timerEvents[2]);
        		game.that.gameover();
        	}
        	else{
        		game.runtimerCount--;
        		
        		game.timerText.setText(game.runtimerCount + 's');
        		
        		//text.setText(game.runtimerCount + 's')
        		
        		game.timerBar.x-= (game.timerBar.width - game.lock.width+20) / game.runtimer;
        		console.log(game.runtimerCount)
        	}

        }, this);
        

        
        
        this.gamestart()
        
        GameUI.cutscenes()
        

       

    },
    update: function() {
    	
    	game.physics.arcade.overlap(game.player,game.obstacles , null, function(player,obstacle){
    		
    		if(obstacle.key == 'stone' && !obstacle.overlap){
    			obstacle.overlap = true;
    			game.that.gameover();
    			
    		}
    		else if(obstacle.key != 'stone' && !obstacle.overlap){
    			obstacle.overlap = true;
    			obstacle.destroy();
    			game.that.addTime();
    		}

        }, this);
    	
    },
    
    
    addTime : function(){
    	game.runtimerCount+=game.addTimeNum ;
    	
    	game.audio_oncell.play()
    	
    	//game.eatTime = game.add.text(game.player.x, game.player.y - game.player.height, "+5s",{font: "65px", fill: "#47abea", align: "center"});
    	
    	game.eatTime = game.add.image(game.player.x,game.player.y - game.player.height,'eatTime');
    	
    	game.add.tween(game.eatTime).to({y:game.player.y - game.player.height - 50,alpha:0},1000,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
    		game.eatTime.kill()
    	})
    	
    	game.eatTime.anchor.set(0.5,1)
    	
    	game.timerBar.x+= ((game.timerBar.width - game.lock.width+20) / game.runtimer) * game.addTimeNum ;
    	game.timerText.setText(game.runtimerCount + 's')
    },
    gamestart : function(){
    	game.right.input.enabled = true;
    	game.left.input.enabled = true
    	game.add.tween(game.flag).to({alpha:0},1000,Phaser.Easing.Cubic.Out,true)
    	game.time.events.start();
		game.player.animations.play('pao', 10, true);
    	game.rond.animations.play('run', 5, true);
    },
    gamewin : function(){
    	//game.paused = true
    	game.state.start('Gamewin');
    },
    gameover : function(){
    	
    	game.state.start('Gameover');
    	
    	/*game.time.events.stop(false);
    	game.rond.animations.stop();
    	game.right.input.enabled = false;
    	game.left.input.enabled = false
    	game.obstacles.forEach(function(item){
    		item.body.allowGravity = false;
    		item.body.enable = false;
    		item.tween.pause()
    	})*/
    },
    render : function(){
    	/*game.obstacles.forEach(function(item){
            game.debug.body(item);
        })
    	game.debug.body(game.player);*/
    }
};


obstacle = function(game,key,line) {
	
	if(line == 1){
		
		
		game.pos = {
			x : 68,
			gX : -3.0
		}
		
		
		
	}else if(line == 2){
		
		game.pos = {
			x : 25,
			gX : -1.0
		}
		
	}else if(line == 3){
		
		
		game.pos = {
			x : -25,
			gX : 1.1
		}
	
		
	}else{
		game.pos = {
			x : -60,
			gX : 3.0
		}
	}
	
	Phaser.Sprite.call(this, game, game.world.centerX - game.pos.x, game.world.height - 770, key);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	
    
    this.body.gravity.y = 10 * game.speed;
    this.body.gravity.x = game.pos.gX * game.speed;
    
    this.overlap = false;
    
	
    
    this.anchor.set(0.5);
    
    this.scale.x = this.scale.y = 0.4;
    
    this.tween = game.add.tween(this.scale).to({x:2,y:2},3000,Phaser.Easing.Cubic.In,true)
    
};
obstacle.prototype = Object.create(Phaser.Sprite.prototype);
obstacle.prototype.constructor = obstacle;

obstacle.prototype.update = function(){
	
	if(this.y>=game.world.height + 100)
    {
        this.destroy()
    }
    
}

