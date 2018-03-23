MyGame.MainMenu = function(game) {

};
MyGame.MainMenu.prototype = {
    create: function() {
    	
    	this.stage.backgroundColor = '#cdf3fa';
    	
    	game.bg = game.add.image(game.world.centerX,game.world.height,'bg');
    	game.bg.anchor.set(0.5,1);

    	
    	game.logo = game.add.image(game.world.centerX,game.world.height * 0.03,'logo');
    	game.logo.anchor.set(0.5,0)
        
		game.title = game.add.image(game.world.centerX,game.world.height * 0.1,'title');
		game.title.anchor.set(0.5,0);
		
		game.finish = game.add.image(game.world.centerX,game.world.height - 270,'finish');
		game.finish.anchor.set(0.5,1)
		
		
		
		game.pao1 = game.add.image(120,game.world.height - 230,'buji_0');
		game.pao1.anchor.set(0,1);
		game.add.tween(game.pao1).to({y:game.world.height - 240},2000,null,true,0,-1,true)
		
		game.pao2 = game.add.image(game.world.width - 60,game.world.height - 280,'buji_1');
		game.pao2.anchor.set(1);
		game.add.tween(game.pao2).to({y:game.world.height - 275},2000,null,true,0,-1,true)
		
		game.pao3 = game.add.image(game.world.width - 100,game.world.height - 450,'buji_2');
		game.pao3.anchor.set(1);
		game.pao3.scale.x = game.pao3.scale.y = 0.8
		game.add.tween(game.pao3).to({y:game.world.height - 455},2000,null,true,0,-1,true)
		
		game.pep = game.add.button(game.world.centerX,game.world.height - 50,'pep');
		game.pep.anchor.set(0.5,1)
		
		
		game.startBtn = game.add.button(game.world.centerX,game.world.height - 80,'startBtn',function(){
			
			pop._show('tel');
			
			//game.state.start('Gameready');
		});
		game.startBtn.anchor.set(0.5,1)
		
		game.mypoilText = game.add.button(game.world.centerX - 100,game.world.height-25,'mypoil_text',function(){
			pop._show('mybox');
		})
		game.mypoilText.anchor.set(0.5,1)
		
		game.ruleText = game.add.button(game.world.centerX + 100,game.world.height-25,'rule_text',function(){
			game.graphics.visible = true;
		})
		game.ruleText.anchor.set(0.5,1)

		
		
		game.graphics = game.add.graphics(0, 0);
        game.graphics.beginFill(0x000000,.7);
        game.graphics.drawRect(0, 0, game.world.width,game.world.height);
        game.graphics.endFill();
        game.graphics.visible = false;
        
        
        game.rulePic = game.add.image(game.world.centerX,game.world.centerY,'rule_pic');
		game.rulePic.anchor.set(0.5);
		
		
		game.graphics.addChild(game.rulePic);
		game.graphics.inputEnabled = true;
		game.graphics.input.priorityID = 1;
		
		game.graphics.events.onInputDown.add(function(){
			game.graphics.visible = false;
		}, this);
	
		
		GameUI.cutscenes()

    },
    update: function() {
    }
};

