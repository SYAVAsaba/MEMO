window.addEventListener("load",init);
function init() {

    initialize();

    createjs.Ticker.addEventListener("tick", titleTick);
    createjs.Ticker.frameRate = 60;

    handleKey();

    if (scene === 0) {
        title();
        stage.update();
    }

    HPstring = new createjs.Text(`${boss.HP}`, "20px sans-serif", "white");
    HPstring.x = 400;
    HPstring.y = 10;
    HPstring.textAlign = "center";
    stage.addChild(HPstring);


    function titleTick() {

        if (scene === 0) {
            //console.log(isPressZ);
            titleScene();
            if (isPressZ) {
                gameStart();
                /*ボスの作成、ここでやらないといけない*/
                stage.removeChild(boss);
                //console.log(scene);
                if (scene === 1) {
                    boss = new Boss1(250, 200, 25, "red", hp);
                } else if (scene === 2) {
                    boss = new Boss2(250, 200, 25, "blue", hp);
                } else if (scene === 3) {
                    boss = new Boss3(250, 200, 25, "purple", hp);
                } else if (scene === 4) {
                    boss = new Boss4(250, 200, 25, "yellow", hp);
                } else if (scene === 5) {
                    boss = new Boss5(250, 200, 25, "green", hp);
                }

                stage.addChild(boss);

                /*tickerの削除、タイトル消す*/
                createjs.Ticker.removeEventListener('tick', titleTick);
                createjs.Ticker.addEventListener("tick", gameTick);
                createjs.Ticker.frameRate = 60;



            }
            stage.update();
        }

    }
    function gameTick() {
        HPstring.text = `${boss.HP}`;
        if (isPressUp)
            player.moveUp();
        if (isPressDown)
            player.moveDown();
        if (isPressRight)
            player.moveRight();
        if (isPressLeft)
            player.moveLeft();
        if (player.x < 0) player.x = 0;
        else if (player.x > 500) player.x = 500;
        if (player.y < 0) player.y = 0;
        else if (player.y > 600) player.y = 600;
        boss.bossMove();


        if (scene === 1) {
            Stage1();
        } else if (scene === 2) {
            Stage2();
        } else if (scene === 3) {
            Stage3();
        } else if (scene === 4) {
            Stage4();
        } else if (scene === 5) {
            Stage5();
        }

        for (j = 0; j < enemyShot.length; j++) {
            enemyShot[j].bulletMove();
            let localPoint = enemyShot[j].localToLocal(0, 0, player);

            if (player.hitTest(localPoint.x, localPoint.y)) {
                console.log("gameover");
                gameOver();
            }
        }

        for (j = 0; j < bulletList.length; j++) {
            bulletList[j].bulletMove();
            localPoint = bulletList[j].localToLocal(0, 0, boss);

            if (player.hitTest(localPoint.x, localPoint.y)) {
                //console.log(boss.HP);
                clearShot(bulletList[j], j);
                stage.removeChild(bulletList[j]);
                DecreaseBossHP();
            }
        }

        //shotの画面外処理
        for(j=0;j<bulletList.length;j++) {
            //console.log(j);
            clearShot(bulletList[j],j);
        }
        for(j=0;j<enemyShot.length;j++) {

            //clearShot(enemyShot[j],j);
        }

        stage.removeChild(HPstring);
        stage.addChild(HPstring);
        //console.log(boss.HP);
        if (boss.HP <= 0) {
            console.log("clear");
            boss.HP = 0;
            stage.addChild(HPstring);
            gameclear();

        }
        stage.update();
    }

    //gameOver();
}

