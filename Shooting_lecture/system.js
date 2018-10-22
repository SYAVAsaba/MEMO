function  title() {
    titleText = new Text("Title", "40px sans-serif", "white",250,275);
    titleText.textAlign = "center";
    stage.addChild(titleText);

    stage1Text = new Text("STAGE 1","20px sans-serif","white",10,350);
    stage.addChild(stage1Text);

    stage2Text = new Text("STAGE 2","20px sans-serif","white",110,350);
    stage.addChild(stage2Text);

    stage3Text = new Text("STAGE 3","20px sans-serif","white",210,350);
    stage.addChild(stage3Text);

    stage4Text = new Text("STAGE 4","20px sans-serif","white",310,350);
    stage.addChild(stage4Text);

    stage5Text = new Text("STAGE 5","20px sans-serif","white",410,350);
    stage.addChild(stage5Text);
}

function titleScene() {
    if(isPressRight) {
        scene_tmp++;
    }
    else if(isPressLeft) {
        scene_tmp--;
    }
    if(scene_tmp < 1) {
        scene_tmp = 1;
    } else if(scene_tmp > 5){
        scene_tmp = 5;
    }
    /*scene_tmpによってtitle画面のstageを赤にする*/
    if(scene_tmp === 1) {
        stage1Text.color = "red";
        stage2Text.color = "white";
    } else if(scene_tmp === 2) {
        stage1Text.color = "white";
        stage2Text.color = "red";
        stage3Text.color = "white";
    } else if(scene_tmp === 3) {
        stage2Text.color = "white";
        stage3Text.color = "red";
        stage4Text.color = "white";
    } else if(scene_tmp === 4) {
        stage3Text.color = "white";
        stage4Text.color = "red";
        stage5Text.color = "white";
    } else if(scene_tmp === 5) {
        stage4Text.color = "white";
        stage5Text.color = "red";
    }
}

function gameStart() {
    scene = scene_tmp;
    stage.removeChild(titleText);
    stage.removeChild(stage1Text);
    stage.removeChild(stage2Text);
    stage.removeChild(stage3Text);
    stage.removeChild(stage4Text);
    stage.removeChild(stage5Text);
}

function gameOver() {
    gameOverText = new Text("GAME OVER", "40px sans-serif", "red",125,275);
    stage.removeChild(player);
    stage.addChild(gameOverText);
    createjs.Ticker.removeAllEventListeners();
    stage.removeAllEventListeners();
}
function gameclear() {
    gameClearText = new Text("GAME CLEAR", "40px sans-serif", "red",125,275);
    stage.removeChild(boss);
    stage.addChild(gameClearText);
    createjs.Ticker.removeAllEventListeners();
    stage.removeAllEventListeners();

}
function DecreaseBossHP() {
    DecreaseBossHP = function () {
        boss.HP--;
    }
}
