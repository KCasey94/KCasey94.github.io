const game=() => {
    const play = () => {
        const rockB =document.querySelector('.rock');
        const paperB =document.querySelector('.paper');
        const scissorsB =document.querySelector('.scissors');
        const userOps = [rockB, paperB, scissorsB];
        const computerOps = ['rock', 'paper', 'scissors']

        userOps.forEach(option => {
            option.addEventListener('click',function(){
                const pickNum = Math.random()*3;
                const compPick = computerOps[pickNum];

                winner(this.innerText, compPick)
            })
        })
    }

    const winner = (user, computer) => {
        const result = document.querySelector('.result');
        if(user === computer){
            result='Tie';
        }
        else if(user =='rock'){
            if(computer =='paper'){
                result='The computer chose paper. You lose!'; 
            }else{
                result='The computer chose scissors. You won!';
            }
        }
        else if(user =='paper'){
            if(computer =='scissors'){
                result='The computer chose scissors. You lose!'; 
            }else{
                result='The computer chose rock. You won!';
            }
        }
        else if(user =='scissors'){
            if(computer =='rock'){
                result='The computer chose rock. You lose!'; 
            }else{
                result='The computer chose paper. You won!';
            }
        }

    }
    const result=document.querySelector('result');
    userOps.forEach(option =>{
        option.style.display='none';
    })
    play();
}
game();