localStorage.setItem('turn', 'x');
localStorage.setItem('game', '---------')

function fieldClick(id){
    var turn = localStorage.getItem('turn');
    var game = localStorage.getItem('game');
    var button = document.getElementById(id);
    if(!button.innerHTML){
        button.innerHTML = turn;
        if(turn == 'x'){ 
            localStorage.setItem('turn', 'o');
        }
        else{
            localStorage.setItem('turn', 'x');
        }
        game = game.substring(0, Number(id) - 1) + turn + game.substring(Number(id));
        localStorage.setItem('game', game);
        var winner = verifyWinner(game);
        if (winner) window.alert(`${winner} venceu`);
    }
}

function verifyWinner(game){
    var winner;
    winner = verifyRow(game);
    if(!winner){
        winner = verifyCol(game);
        if(!winner){
            winner = verifyDiagonal(game);
        }
    }
}

function verifyRow(game){
    // primeira linha
    if(game[0] != '-' && game[0] == [1] && game[0] == game[2]){
        if(game[0] == 'x') return 'x';
        else return 'o';
    }
    // segunda linha
    if(game[3] != '-' && game[3] == [4] && game[3] == game[5]){
        if(game[3] == 'x') return 'x';
        else return 'o';
    }
    // terceira linha
    if(game[6] != '-' && game[6] == [7] && game[6] == game[8]){
        if(game[6] == 'x') return 'x';
        else return 'o';
    }
    return;
}

function verifyCol(game){
        // primeira coluna
        if(game[0] != '-' && game[0] == [3] && game[0] == game[6]){
            if(game[0] == 'x') return 'x';
            else return 'o';
        }
        // segunda coluna
        if(game[1] != '-' && game[1] == [4] && game[1] == game[7]){
            if(game[3] == 'x') return 'x';
            else return 'o';
        }
        // terceira coluna
        if(game[2] != '-' && game[2] == [5] && game[2] == game[8]){
            if(game[2] == 'x') return 'x';
            else return 'o';
        }
        return;
}

function verifyDiagonal(game){
    // primeira diagonal
    if(game[0] != '-' && game[0] == [4] && game[0] == game[8]){
        if(game[0] == 'x') return 'x';
        else return 'o';
    }

    // segunda diagonal
    if(game[2] != '-' && game[2] == [4] && game[2] == game[6]){
        if(game[2] == 'x') return 'x';
        else return 'o';
    }
    return;
}