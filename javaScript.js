localStorage.setItem('turn', 'x');
localStorage.setItem('game', '---------')

function fieldClick(id){
    var item = localStorage.getItem('turn');
    var game = localStorage.getItem('game');
    var button = document.getElementById(id);
    if(!button.innerHTML){
        
        button.innerHTML = item;

        if(item == 'x'){ 
            localStorage.setItem('turn', 'o');
        }
        else{
            localStorage.setItem('turn', 'x');
        }
    }

    
}