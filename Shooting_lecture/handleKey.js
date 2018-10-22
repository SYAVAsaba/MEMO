
function handleKey() {
    // キーボードイベントの登録
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    function handleKeyDown(event) {
        let keyCode = event.keyCode;


        if (keyCode === 90) { // space
            console.log("true");
            isPressZ = true;
            shotJudge = 0;
            //console.log("test");
        }
        if (keyCode === 39)   // 右
            isPressRight = true;

        else if (keyCode === 37) { // 左
            isPressLeft = true;

        }

        else if (keyCode === 40)  // 下
            isPressDown = true;

        else if (keyCode === 38)  // 上
            isPressUp = true;

        else if (keyCode === 16)  // shift
            isPressShift = true;
    }

    function handleKeyUp(event) {
        let keyCode = event.keyCode;
        if (keyCode === 39) { // 右
            isPressRight = false;// 真偽値が切り替わる
        } else if (keyCode === 37) { // 左
            isPressLeft = false;
        } else if (keyCode === 40) { // 下
            isPressDown = false;
        } else if (keyCode === 38) { // 上
            isPressUp = false;
        }
        else if (keyCode === 16){
            isPressShift = false;

        } else if (keyCode === 90) { // space
            isPressZ = false;
            shotJudge = 0;
            //console.log("test");
        }
    }
}