const score = {
    wins: 0,
    losess: 0,
    ties: 0
}

const moves = ['R', 'S', 'P']

function playGame(data){

    let randomNum = Math.round(Math.random() * 10) % 3 + 1;
    var computerMove = moves[randomNum];

    if(data == moves[randomNum]){
        score.ties += 1;
        alert(` ties!!! \n computer: ${computerMove}, your move ${data} \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
    }else if(data == 'R'){
        if(computerMove == 'S'){
            score.wins += 1;
            alert(` you win!!! \n computer: ${computerMove}, your move ${data} \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
        }else if(computerMove == 'P')
            score.losess += 1;
            alert(` you lost!!! \n computer: ${computerMove}, your move ${data} \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
    }else if(data == 'S'){
        if(computerMove == 'R'){
            score.losess += 1;
            alert(` you lost!!! \n computer: ${computerMove}, your move ${data} \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
        }else if(computerMove == 'P')
            score.wins += 1;
            alert(` you win!!! \n computer: ${computerMove}, your move ${data} \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
    }else if(data == 'P'){
        if(computerMove == 'R'){
            score.wins += 1;
            alert(` you win!!! \n computer: ${computerMove}, your move ${data} \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
        }else if(computerMove == 'S')
            score.losess += 1;
            alert(` you lost!!! \n computer: ${computerMove}, your move ${data} \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
    }



}

function reset(){
    score.wins = 0;
    score.losess = 0;
    score.ties = 0;
    alert(` everything has been reseted!!! \n wins: ${score.wins} \n losses: ${score.losess} \n ties: ${score.ties}`);
}