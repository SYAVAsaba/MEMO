function Stage2() {
    if(isPressZ) {
        if (shotJudge === 0) {
            for (j = 0; j < 3; j++) {
                let bullet = new stage2Shot(player.x + (((j % 3) - 1) * 10), player.y, 3, "white", "player");
                //console.log(j);
                shotJudge = 1;
                bulletList.push(bullet);
                stage.addChild(bullet);
            }
        }
    }

    if (shotCount === 0) {

        for (j = 0; j < One_shot; j++) {
            enemyShot[i] = new stage2Shot(boss.x, boss.y, 5, "green","boss",i,1);
            stage.addChild(enemyShot[i]);
            i++;
        }
        for (j = 0; j < One_shot; j++) {
            enemyShot[i] = new stage2Shot(boss.x, boss.y, 5, "red","boss",i,2);
            stage.addChild(enemyShot[i]);
            i++;
        }
    }

    shotCount++;

    if (shotCount === 10) {
        shotCount = 0;
    }
}

class stage2Shot extends Shot {

    bulletMove() {
        if (this.type === "player") {
            this.y -= 20;
        }

        else if (this.type === "boss") {
            if(this.group === 1) {
                switch (this.key % One_shot) {
                    case 0:
                        this.x -= 2;
                        this.y += 3;
                        break;
                    case 1:
                        this.x -= 1;
                        this.y += 2;
                        break;
                    case 2:
                        this.x += 0;
                        this.y += 1;
                        break;
                    case 3:
                        this.x += 1;
                        this.y += 2;
                        break;
                    case 4:
                        this.x += 2;
                        this.y += 3;
                        break;
                }
            } else if(this.group === 2) {
                switch (this.key % One_shot) {
                    case 0:
                        this.x -= 2;
                        this.y -= 2;
                        break;
                    case 1:
                        this.x -= 1;
                        this.y -= 1;
                        break;
                    case 2:
                        this.x += 0;
                        break;
                    case 3:
                        this.x += 1;
                        this.y -= 1;
                        break;
                    case 4:
                        this.x += 2;
                        this.y -= 2;
                        break;
                }
            }
            this.y+=5;
        }

    }

}

class Boss2 extends Boss {
    bossMove() {

        if (this.x > 540 - this.getBounds().width) {
            judgeI = 1;
            this.x = 540 - this.getBounds().width;
        } else if (this.x < 0 + this.getBounds().width) {
            judgeI = 0;
            this.x= 0 + this.getBounds().width;
        }

        if (this.y < 20 + this.getBounds().width) {
            judgeJ = 1;
            this.y = 20 + this.getBounds().width
        } else if (this.y > 200) {
            judgeJ = 0;
            this.y = 200;
        }

        if (judgeI === 1) {
            this.x -= 5;
        } else if (judgeI === 0) {
            this.x += 5;
        }

        if (judgeJ === 1) {
            this.y += 3;
        } else if (judgeJ === 0) {
            this.y -= 3;
        }
    }
}