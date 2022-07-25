var name1 = true;
if(name1===true)
var player1Name=prompt("Please enter player1 name");
var name2 = true;
if(name2===true)
var player2Name=prompt("Please enter player2 name");

document.getElementById("player1").innerHTML += player1Name + " is<br> \t<span id='player1Sign'>X</span>";
document.getElementById("player2").innerHTML += player2Name + " is<br> \t<span id='player2Sign'>0</span>";

function openGame(){

var f = true; //boolean var if the game finished or not
var player=1; //number of player
arr=[[0,0,0],[0,0,0],[0,0,0]]; //array of the game

//function that check if there is a wiiner
function isThereAWinner(arr){
    var countR1=0,countL1=0,countR2=0,countL2=0;
    for (let i = 0; i < arr.length; i++) {
        var countRow1=0,countCol1=0,countRow2=0,countCol2=0;
        for (let j = 0; j < arr[i].length; j++) {
            if((arr[i][j]%3)===1) 
                countRow1+=arr[i][j];
            if((arr[i][j]%3)===2)
                countRow2+=arr[i][j];
            if((arr[j][i]%3)===1)
                countCol1+=arr[j][i];
            if((arr[j][i]%3)===2)
                countCol2+=arr[j][i];
            if((i===j) && (arr[i][j]===1))
                countR1++;
            if((i+j===2) && (arr[i][j]===1))
                countL1++;
            if((i===j) && (arr[i][j]===2))
                countR2++;
            if((i+j===2) && (arr[i][j]===2))
                countL2++;
        }
        // Checks if there is a winner in rows or cols
        if((countRow1>0 && countRow1%3===0)||(countCol1>0 && countCol1%3===0) ||
            (countRow2>0 && countRow2%3===0)||(countCol2>0 && countCol2%3===0))
            return true;
    } // Checks if there is a winner diagonally
    if((countR1>0 && countR1%3===0) ||(countL1>0 && countL1%3===0) ||
    (countR2>0 && countR2%3===0) ||(countL2>0 && countL2%3===0)) 
        return true;
return false;
}

// Enter 1 to player1
function oneToPlayer1(index1,index2){
    arr[index1][index2]=1;
}

// Actions for player1
function actionsForPlayer1(index1,index2,demo){
    document.getElementById(demo).innerHTML = "X"; // Enter 'X' to cell in table
    document.getElementById(demo).style.color="rgb(227, 53, 158)";
    oneToPlayer1(index1,index2);
    document.getElementById(demo).onclick=null;
    
}

// Enter 2 to player2
function twoToPlayer2(index1,index2){
    arr[index1][index2]=2;
}

// Actions for player2
function actionsForPlayer2(index1,index2,demo){
    document.getElementById(demo).innerHTML = "0";
    document.getElementById(demo).style.color="rgb(243, 225, 94)";
    twoToPlayer2(index1,index2);
    document.getElementById(demo).onclick=null;
}

// General Function
function generalFunction(index1,index2,demo){
    if(player === 1){
        if(f===true && arr[index1][index2]===0){
            actionsForPlayer1(index1,index2,demo);
            player=2; 
        }  
    }
    else{
        if(f===true && arr[index1][index2]===0){
            actionsForPlayer2(index1,index2,demo);
            player=1;
        }
    }
    console.log(arr);
    if(isThereAWinner(arr)===true){
        if(player===2)
            document.getElementById("demo10").innerHTML = "The winner is...<br> "+'<b>' + player1Name +'</b>';
        else
            document.getElementById("demo10").innerHTML = "The winner is...<br> "+'<b>' + player2Name +'</b>';
        f=false;
    }

    // Checking that no one won
    var stalemate = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if(arr[i][j]===0)
                stalemate=false;
        }
    }
    if(isThereAWinner(arr)===false && stalemate===true)
        document.getElementById("demo10").innerHTML = "Oops ... nobody won, <br>Please click on 'Play again!' buttom and do another round!";
}

// Function that turn off the click option
function stopGame(index1,index2,demo){
    document.getElementById(demo).onclick=null;  
}

// Cell number1
document.getElementById("demo1").addEventListener('click',
function func1(){
    if(f===false)
        stopGame(0,0,"demo1");
    else   
        generalFunction(0,0,"demo1");
});

// Cell number2
document.getElementById("demo2").addEventListener('click',
function func2(){
    if(f===false)
        stopGame(0,1,"demo2");
    else    
        generalFunction(0,1,"demo2");    
});

// Cell number3
document.getElementById("demo3").addEventListener('click',
function func3(){
    if(f===false)
        stopGame(0,2,"demo3");
    else    
        generalFunction(0,2,"demo3");
});

// Cell number4
document.getElementById("demo4").addEventListener('click',
function func4(){
    if(f===false)
        stopGame(1,0,"demo4");
    else    
        generalFunction(1,0,"demo4");
});

// Cell number5
document.getElementById("demo5").addEventListener('click',
function func5(){
    if(f===false)
        stopGame(1,1,"demo5");
    else    
        generalFunction(1,1,"demo5");
});

// Cell number6
document.getElementById("demo6").addEventListener('click',
function func6(){
    if(f===false)
        stopGame(1,2,"demo6");
    else    
        generalFunction(1,2,"demo6");
});

// Cell number7
document.getElementById("demo7").addEventListener('click',
function func7(){
    if(f===false)
        stopGame(2,0,"demo7");
    else    
        generalFunction(2,0,"demo7");
});

// Cell number8
document.getElementById("demo8").addEventListener('click',
function func8(){
    if(f===false)
        stopGame(2,1,"demo8");
    else    
        generalFunction(2,1,"demo8");
});

// Cell number9
document.getElementById("demo9").addEventListener('click',
function func9(){
    if(f===false)
        stopGame(2,2,"demo9");
    else    
        generalFunction(2,2,"demo9");
});

}

document.getElementById("btnPlayAgain").addEventListener('click',
function funcReload(){
    document.getElementById("demo10").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo7").innerHTML = " ";
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " ";

    openGame();
});