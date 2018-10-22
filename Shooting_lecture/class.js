class Text extends createjs.Text {
    constructor(text,px,color,x,y) {
        super(text,px ,color);
        this.x = x;
        this.y = y;
        //stage.addChild(this);
    }

    changeColor(color) {
        this.color = color;
    }
}

class object extends createjs.Shape {

    constructor(x, y, r, color) {
        super();
        this.graphics.beginFill(color);
        this.graphics.drawCircle(0,0,r);
        this.setBounds(0,0,r,r);
        this.x = x;
        this.y = y;
        stage.addChild(this);

    }
}

class Player extends object {

    constructor(x, y, r, color) {
        super(x, y, r, color);
    }

    moveUp() {
        if (isPressShift === true) {
            this.y -= 4;
        }
        else {
            this.y -= 8;
        }
    }
    moveDown() {
        if (isPressShift === true) {
            this.y += 4;
        }
        else {
            this.y += 8;
        }
    }
    moveLeft() {
        if (isPressShift === true) {
            this.x -= 4;
        }
        else {
            this.x -= 8;
        }
    }
    moveRight() {
        if (isPressShift === true) {
            this.x += 4;
        }
        else {
            this.x += 8;
        }
    }
}

class Boss extends object {
    constructor(x, y, r, color, HP) {

        super(x,y,r,color);
        this.HP = HP;
        stage.addChild(this);
    }
}

class Shot extends object {
    constructor(x, y, r, color,type,key,group) {
        super(x, y, r, color);
        this.type = type;
        this.key = key;
        this.group = group;
        //stage.addChild(this);
    }

}

function clearShot(shot,num) {

    if (shot.type === "player") {
        //console.log("player");
        if ((shot.x < (0 - shot.getBounds().width) || shot.x > (500 + shot.getBounds().width)) ||
            (shot.y < (0 - shot.getBounds().height) || shot.y > (600 + shot.getBounds().height))) {
            //console.log("perfect");
            bulletList.splice(num,1);

        }
    } else if (shot.type === "boss") {
        if ((shot.x < (0 - shot.getBounds().width) || shot.x > (500 + shot.getBounds().width)) ||
            (shot.y < (0 - shot.getBounds().height) || shot.y > (600 + shot.getBounds().height))) {
            //console.log("boss");
            //console.log(this.key);

            enemyShot.splice(num,1);
        }
    }

}





























