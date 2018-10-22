function initialize() {
    stage = new createjs.Stage("myCanvas");

    //背景
    bg = new createjs.Shape();
    bg.setBounds(0,0,500,600);
    bg.graphics.beginFill("black")
        .drawRect(0, 0, 500, 600);
    stage.addChild(bg);

//自機
    player = new Player(250, 500, 10, "white");

    //stage.addChild(player);

//敵
    boss = new Boss(250, 200, 25, "red",hp);
    //stage.addChild(boss);

    HPstring = new Text(`${boss.HP}`, "20px sans-serif", "white",400,10);
    HPstring.textAlign = "center";
    //stage.addChild(HPstring);

}
