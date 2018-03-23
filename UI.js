var GameUI = ( function (mod){
    mod.cutscenes = function(){
        game.ccs = game.add.graphics(0, 0);
        game.ccs.beginFill(0x000000);
        game.ccs.drawRect(0, 0, game.world.width,game.world.height);
        game.ccs.endFill();
        game.add.tween(game.ccs).to({alpha:0},500,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            game.ccs.kill()
        },this);
    };
    return mod;
})(window.GameUI || {});
