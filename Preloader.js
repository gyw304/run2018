MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    create:function(){
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(this.world.width/2, this.world.height/2-50, '', { fill: '#fff' });
        this.text.anchor.set(0.5);
        this.start();
    },
    start:function(){
    	
    	//load
    	this.load.audio('audio_oncell', 'assets/oncell.mp3');
    	
    	game.load.image('logo','assets/logo.png');
    	game.load.image('title','assets/title.png');
    	game.load.image('startBtn','assets/start-btn.png');
    	game.load.image('bg','assets/bg.jpg');
    	game.load.image('pep','assets/pep.png');
    	game.load.image('finish','assets/finish.png');
    	game.load.image('buji_0','assets/buji_0.png');
    	game.load.image('buji_1','assets/buji_1.png');
    	game.load.image('buji_2','assets/buji_2.png');
    	game.load.image('mypoil_text','assets/mypoil_text.png');
    	game.load.image('rule_text','assets/rule_text.png');
    	game.load.image('stone','assets/stone.png');
    	
    	game.load.image('rule_pic','assets/rule_pic.png');
    	
    	game.load.atlas('rond', 'assets/rond_json.png?1', 'assets/rond_json.json?1');
    	
    	
    	game.load.image('game_bg','assets/game_bg.jpg');
    	game.load.image('land','assets/land.png');
    	
 
    	game.load.atlas('player', 'assets/player_json.png?1', 'assets/player_json.json?1');
    	
    	
    	game.load.image('right','assets/right.png');
    	game.load.image('left','assets/left.png');
    	
    	game.load.image('map','assets/map.png');
    	
    	game.load.image('flag','assets/flag.png');
    	
    	game.load.image('start_point','assets/start_point.png');
    	game.load.image('map_bar','assets/map_bar.png');
    	
    	game.load.image('timer_pro','assets/timer_pro.png');
    	game.load.image('timer_bar','assets/timer_bar.png');
    	game.load.image('lock','assets/lock.png');
    	
    	game.load.image('gameover','assets/gameover.png');
    	game.load.image('ku','assets/ku.png');
    	
    	game.load.image('win','assets/win.png');
    	game.load.image('win_flag','assets/win_flag.png');
    	game.load.image('cj_btn','assets/cj_btn.png');
    	
    	game.load.image('tt','assets/tt.png');
    	game.load.image('line','assets/line.png')
    	
    	game.load.image('f_1','assets/1.png')
    	game.load.image('f_2','assets/2.png')
    	game.load.image('f_3','assets/3.png')
    	
    	game.load.image('eatTime','assets/eatTime.png')
    	
    	game.load.image('back','assets/back.png')
    	
    	game.load.image('over-back','assets/over-back.png')
    	
    	game.load.image('game_repeat','assets/game_repeat.png')

    	
        this.load.start();
    },
    fileComplete:function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete:function(){
        this.state.start('MainMenu');
    }
};