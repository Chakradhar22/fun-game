const dice1 = document.getElementById('dice-1');
const dice2 = document.getElementById('dice-2');
const rollDice = (i) =>{
    if(!clicked){
        if(i==1){
                // Animate Dices to Roll
            if(!dice1.classList.contains('rolling'))
                dice1.classList.add('rolling');
            // Get Random values for dices
            num = Math.floor( (Math.random() * 6) + 1 );
            setTimeout(()=>{
                // set dices to random values after certain duration of rolling
                dice1.dataset.face = num;

                // remove rolling animation
                if(dice1.classList.contains('rolling'))
                    dice1.classList.remove('rolling');
            }, 800);
            clicked=true;
            if (num != 6 && DontHaveOtherFree()) {
                var bad = document.getElementById('badtext');
                bad.innerText = "Unfortunatlly you stuck";
                window.setTimeout(changePlayer, 1000);
                clicked = false;
            }
            return num;
        }
        else{
            // Animate Dices to Roll
            if(!dice2.classList.contains('rolling'))
                dice2.classList.add('rolling');
            // Get Random values for dices
            num = Math.floor( (Math.random() * 6) + 1 );
            setTimeout(()=>{
                // set dices to random values after certain duration of rolling
                dice2.dataset.face = num;
                // remove rolling animation
                if(dice2.classList.contains('rolling'))
                    dice2.classList.remove('rolling');
            }, 800);
            clicked=true;
            if (num != 6 && DontHaveOtherFree()) {
                var bad = document.getElementById('badtext');
                bad.innerText = "Unfortunatlly you stuck";
                window.setTimeout(changePlayer, 1000);
                clicked = false;
            }
            return num;
        }
        
    }

}


// Trigger Dices to Roll
dice1.addEventListener('click', function(e){
    e.preventDefault();
    console.log(rollDice(1));
});
dice2.addEventListener('click', function(e){
    e.preventDefault();
    console.log(rollDice(2));
});

/*document.getElementById('1').replaceChildren(document.getElementById('rc1'));*/

function run(){
    document.getElementById((i+1).toString()).innerHTML += document.getElementById(i.toString()).innerHTML;
    document.getElementById(i.toString()).innerHTML="";
    i++;
};
/*PATH*/
const red= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
const green = ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6'];
const yellow = ['27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6'];
const blue = ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38','b1', 'b2', 'b3', 'b4', 'b5', 'b6'];

const safe_box=['1','9','14','22','27','35','40','48'];

var currPos = 0;
var currcolor = "";
var NumOfPaw = "";
var num = 0;
var clicked = false;
var currpawn = "";
var allcolor = ["red", "blue", "green", "yellow"];
var pawnOut = {red:0,blue:0,green:0,yellow:0}

var positions = {
    redcoin1: 0, redcoin2: 0, redcoin3: 0, redcoin4: 0,
    bluecoin1: 0, bluecoin2: 0, bluecoin3: 0, bluecoin4: 0,
    greencoin1: 0, greencoin2: 0, greencoin3: 0, greencoin4: 0,
    yellowcoin1: 0, yellowcoin2: 0, yellowcoin3: 0, yellowcoin4: 0
};
var onboard = {
    redcoin1: 0, redcoin2: 0, redcoin3: 0, redcoin4: 0,
    bluecoin1: 0, bluecoin2: 0, bluecoin3: 0, bluecoin4: 0,
    greencoin1: 0, greencoin2: 0, greencoin3: 0, greencoin4: 0,
    yellowcoin1: 0, yellowcoin2: 0, yellowcoin3: 0, yellowcoin4: 0
};

/*document.getElementById("1").innerHTML +=document.getElementById("rh1").innerHTML;
document.getElementById("1").innerHTML +=document.getElementById("gh1").innerHTML;
for(var i=1;i<=4;i++){
    document.getElementById("redcoin" + 1).style.position.top;
}*/


function HaveHover(color) {
    var count = 0;
    var toKill = "";
    var y = '';
    switch (color) {
        case "red":
            y=red[positions[currpawn]];
            break;

        case "yellow":
            y=yellow[positions[currpawn]];
            break;

        case "blue":
            y=blue[positions[currpawn]];
            break;

        case "green":
            y=green[positions[currpawn]];
            break;
    }
    if(safe_box.includes(y)){
        //console.log("safe");
        return false;
    }
    else{
        for (var i = 0; i < allcolor.length; i++) {
            for (var n = 1; n <= 4; n++) {
                var firstPawn = allcolor[i] + "coin" + n;
                var x = '';
                switch (allcolor[i]) {
                    case "red":
                        x=red[positions[firstPawn]];
                        break;
            
                    case "yellow":
                        x=yellow[positions[firstPawn]];
                        break;
            
                    case "blue":
                        x=blue[positions[firstPawn]];
                        break;
            
                    case "green":
                        x=green[positions[firstPawn]];
                        break;
                }
                //console.log(x);
                if (allcolor[i] != color && x==y){
                    count++;
                    toKill = allcolor[i] + "coin" + n;
                    return toKill;
                }
            }
        }
    }
    return false;
}

function CheckForWinner() {
    if (pawnOut[currcolor] == 4) {
        var player = document.getElementById("player");
        var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
        uselesstext1.innerText = "";
        uselesstext2.innerText = "";
        player.innerText = "The Winner is the "+currcolor+" player";
    }

}

function ResetPawn(victim) {
    onboard[victim] = 0;
    positions[victim] = 0;
    var pawnToMove = document.getElementById(victim);
    switch (victim) {
        case "redcoin1":document.getElementById('rh1').replaceChildren(document.getElementById("redcoin1"));break;
        case "redcoin2":document.getElementById('rh2').replaceChildren(document.getElementById("redcoin2"));break;
        case "redcoin3":document.getElementById('rh3').replaceChildren(document.getElementById("redcoin3"));break;
        case "redcoin4":document.getElementById('rh4').replaceChildren(document.getElementById("redcoin4"));break;

        case "bluecoin1":document.getElementById('bh1').replaceChildren(document.getElementById("bluecoin1"));break;
        case "bluecoin2":document.getElementById('bh2').replaceChildren(document.getElementById("bluecoin2"));break;
        case "bluecoin3":document.getElementById('bh3').replaceChildren(document.getElementById("bluecoin3"));break;
        case "bluecoin4":document.getElementById('bh4').replaceChildren(document.getElementById("bluecoin4"));break;

        case "yellowcoin1":document.getElementById('yh1').replaceChildren(document.getElementById("yellowcoin1"));break;
        case "yellowcoin2":document.getElementById('yh2').replaceChildren(document.getElementById("yellowcoin2"));break;
        case "yellowcoin3":document.getElementById('yh3').replaceChildren(document.getElementById("yellowcoin3"));break;
        case "yellowcoin4":document.getElementById('yh4').replaceChildren(document.getElementById("yellowcoin4"));break;

        case "greencoin1":document.getElementById('gh1').replaceChildren(document.getElementById("greencoin1"));break;
        case "greencoin2":document.getElementById('gh2').replaceChildren(document.getElementById("greencoin2"));break;
        case "greencoin3":document.getElementById('gh3').replaceChildren(document.getElementById("greencoin3"));break;
        case "greencoin4":document.getElementById('gh4').replaceChildren(document.getElementById("greencoin4"));break;
    }
}


function changePlayer() {
    if (num != 6){
        var text = document.getElementById('player');
        document.getElementById(text.innerText+"board").style.backgroundColor="white";
        for(var i=1;i<=4;i++){
            document.getElementById(text.innerText+"coin" + 1).style.position="absolute";
        }
        switch (text.innerText) {
            case "red":
                text.innerText = text.style.color = "blue";
                document.getElementById("dice-bottom").style.display = "block";
                document.getElementById("dice-top").style.display = "none";
                document.getElementById("bluecoin1").style.zIndex = "2";
                document.getElementById("bluecoin2").style.zIndex = "2";
                document.getElementById("bluecoin3").style.zIndex = "2";
                document.getElementById("bluecoin4").style.zIndex = "2";
                document.getElementById("redcoin1").style.zIndex = "1";
                document.getElementById("redcoin2").style.zIndex = "1";
                document.getElementById("redcoin3").style.zIndex = "1";
                document.getElementById("redcoin4").style.zIndex = "1";
                break;
            case "blue":
                text.innerText = text.style.color = "yellow";
                document.getElementById("dice-bottom").style.display = "none";
                document.getElementById("dice-top").style.display = "block";
                document.getElementById("yellowcoin1").style.zIndex = "2";
                document.getElementById("yellowcoin2").style.zIndex = "2";
                document.getElementById("yellowcoin3").style.zIndex = "2";
                document.getElementById("yellowcoin4").style.zIndex = "2";
                document.getElementById("bluecoin1").style.zIndex = "1";
                document.getElementById("bluecoin2").style.zIndex = "1";
                document.getElementById("bluecoin3").style.zIndex = "1";
                document.getElementById("bluecoin4").style.zIndex = "1";
                break;
            case "yellow":
                text.innerText = text.style.color = "green";
                document.getElementById("dice-bottom").style.display = "none";
                document.getElementById("dice-top").style.display = "block";
                document.getElementById("greencoin1").style.zIndex = "2";
                document.getElementById("greencoin2").style.zIndex = "2";
                document.getElementById("greencoin3").style.zIndex = "2";
                document.getElementById("greencoin4").style.zIndex = "2";
                document.getElementById("yellowcoin1").style.zIndex = "1";
                document.getElementById("yellowcoin2").style.zIndex = "1";
                document.getElementById("yellowcoin3").style.zIndex = "1";
                document.getElementById("yellowcoin4").style.zIndex = "1";
                break;
            case "green":
                text.innerText = text.style.color = "red";
                document.getElementById("dice-bottom").style.display = "block";
                document.getElementById("dice-top").style.display = "none";
                document.getElementById("redcoin1").style.zIndex = "2";
                document.getElementById("redcoin2").style.zIndex = "2";
                document.getElementById("redcoin3").style.zIndex = "2";
                document.getElementById("redcoin4").style.zIndex = "2";
                document.getElementById("greencoin1").style.zIndex = "1";
                document.getElementById("greencoin2").style.zIndex = "1";
                document.getElementById("greencoin3").style.zIndex = "1";
                document.getElementById("greencoin4").style.zIndex = "1";
                break;
        }
        document.getElementById(text.innerText+"board").style.backgroundColor="grey";
        for(var i=1;i<=4;i++){
            document.getElementById(text.innerText+"coin" + 1).style.position="absolute";
        }
    }
    var badtext = document.getElementById('badtext');
    badtext.innerText = "";
}


function Stuck() {
    var text = document.getElementById('player');
    if (onboard[currpawn] == 0 || currPos+num>56) {
        if (DontHaveOtherFree() || currPos+num>56) { 
            var badtext = document.getElementById('badtext');
            badtext.innerText = "Unfortunatlly you stuck";
            clicked = false;
            window.setTimeout(changePlayer, 1000);
        }
    }
}


/*coins Movement*/
function randomMove(Color, paw) {
    var text = document.getElementById('player');
    NumOfPaw = paw;
    currcolor = Color;
    currpawn = currcolor + "coin" + NumOfPaw;
    currPos = positions[currpawn];
    var check = true;
    if (num + currPos > 56) {
        Stuck();
    }
    else {
        if (clicked) {
            var position = currPos;
            if (text.innerText == currcolor) {
                if (onboard[currpawn] === 1 || num === 6) {
                    if (onboard[currpawn] === 0) {
                        var doc = document.getElementById(currpawn);
                        switch (Color) {
                            case "red":
                                document.getElementById('1').appendChild(document.getElementById(currpawn));
                                break;

                            case "yellow":
                                document.getElementById('27').appendChild(document.getElementById(currpawn));
                                break;

                            case "blue":
                                document.getElementById('40').appendChild(document.getElementById(currpawn));
                                break;

                            case "green":
                                document.getElementById('14').appendChild(document.getElementById(currpawn));
                                break;
                        }
                        onboard[currpawn] = 1;
                    }
                    else {
                        var pos=positions[currpawn]+num;
                        console.log(pos);
                        positions[currpawn] = pos ;
                        var victim = HaveHover(Color);
                        //console.log(victim);
                        if (victim != false) {
                            ResetPawn(victim);
                        }
                        switch (Color) {
                            case "red":
                                document.getElementById(red[pos]).appendChild(document.getElementById(currpawn));
                                break;

                            case "yellow":
                                document.getElementById(yellow[pos]).appendChild(document.getElementById(currpawn))
                                break;

                            case "blue":
                                document.getElementById(blue[pos]).appendChild(document.getElementById(currpawn))
                                break;

                            case "green":
                                document.getElementById(green[pos]).appendChild(document.getElementById(currpawn))
                                break;
                        }
                        if (pos == 56){
                            pawnOut[currcolor]++;
                            onboard[currpawn] = 0;
                            positions[currpawn] = 56;
                            document.getElementById(currpawn).style.display = "none";
                            check= false;
                            console.log("home");
                        }
                        CheckForWinner();
                        if (victim == false && check == true) {
                            changePlayer();
                        }
                    }
                    num = 0;
                    clicked = false;
                }
                else Stuck();
            }
        }
    }
}

function DontHaveOtherFree() {
    var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
        if (onboard[text.innerText + "coin" + i] == 1 || positions[text.innerText + "coin" + i]+num >=56) return false;
    }
    return true;
}


function start(){
    if(!clicked){
        num=Number(document.getElementById('xx').value);
        clicked=true;
        if (num != 6 && DontHaveOtherFree()) {
            var bad = document.getElementById('badtext');
            bad.innerText = "Unfortunatlly you stuck";
            window.setTimeout(changePlayer, 1000);
            clicked = false;
        }
        return num;
    }
}