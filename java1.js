const funArr=['The game was played since the Han dynasty in China, which lasted from 202 BC until 220 AD.','The game has three possible outcomes: a draw, a win or a loss.','The odds of winning rock paper scissors is one in three or 33.33%.','On average, players use rock and scissors 35% of the time.']

function funny(){
    let messageBox=document.querySelector('.funFact p')
    const randomIndex = Math.floor(Math.random() * funArr.length);
    messageBox.innerText=funArr[randomIndex]
    console.log(funArr[randomIndex])
}
const arr=document.querySelectorAll('.img1')
var userSpan=0
var compSpan=0
arr.forEach((ele)=>{
    funny()
    
    var optionSelect=1
    ele.addEventListener('click',(event)=>{
        const randomInt1 = Math.floor(Math.random() * 3)+1;
        let tempComp=''
        if (randomInt1===1){
            tempComp='rock'
        }
        else if(randomInt1===2){
            tempComp='paper'
        }
        else{
            tempComp='scissors'
        }
        let tempUser=''
        if (ele==arr[0]){
            optionSelect=1;
            tempUser=ele.id
        }
        else if (ele==arr[1]){
            optionSelect=2;
            tempUser=ele.id
        }
        else{
            optionSelect=3;
            tempUser=ele.id
        }
        // if (optionSelect===randomInt1){
        //     console.log(`DRAW! both selected ${ele.id}`)
        // }
        // else{
        //     console.log(`not matched userselects ${ele.id} and compsel ${tempName}`)
        // }
        
        //conditions of game
        // condition1 --> userchoice==computerchoice
        
        const result=document.querySelector('.result')
        result.style.marginLeft='-50px'
        if (tempUser==tempComp){
            console.log(`DRAW! Both selected ${tempComp}`)
            document.querySelector('.result p').innerText=`DRAW! Both selected ${tempComp}`
            result.style.backgroundColor= "wheat"
            userSpan+=0
            compSpan+=0
        }
        else if(tempUser=='rock' && tempComp=='paper'){
            console.log(`Computer Won! ${tempComp} beats ${tempUser}`)
            document.querySelector('.result p').innerText=`Computer Won! ${tempComp} beats ${tempUser}`
            result.style.backgroundColor= "#ff1a1a"
            userSpan+=0
            compSpan+=1
        }
        else if(tempUser=='rock' && tempComp=='scissors'){
            console.log(`User Won! ${tempUser} beats ${tempComp}`)
            document.querySelector('.result p').innerText=`User Won! ${tempUser} beats ${tempComp}`
            result.style.backgroundColor= "#4dff88"
            userSpan+=1
            compSpan+=0

        }
        else if(tempUser=='paper' && tempComp=='scissors'){
            console.log(`Computer Won! ${tempComp} beats ${tempUser}`)
            document.querySelector('.result p').innerText=`Computer Won! ${tempComp} beats ${tempUser}`
            result.style.backgroundColor= "#ff1a1a"
            userSpan+=0
            compSpan+=1
        }
        else if(tempUser=='paper' && tempComp=='rock'){
            console.log(`User Won! ${tempUser} beats ${tempComp}`)
            document.querySelector('.result p').innerText=`User Won! ${tempUser} beats ${tempComp}`
            result.style.backgroundColor= "#4dff88"
            userSpan+=1
            compSpan+=0
        }
        else if(tempUser=='scissors' && tempComp=='rock'){
            console.log(`Computer Won! ${tempComp} beats ${tempUser}`)
            document.querySelector('.result p').innerText=`Computer Won! ${tempComp} beats ${tempUser}`
            result.style.backgroundColor= "#ff1a1a"
            userSpan+=0
            compSpan+=1
        }
        else if(tempUser=='scissors' && tempComp=='paper'){
            console.log(`User Won! ${tempUser} beats ${tempComp}`)
            document.querySelector('.result p').innerText=`User Won! ${tempUser} beats ${tempComp}`
            result.style.backgroundColor= "#4dff88"
            userSpan+=1
            compSpan+=0
        }
        
        
        if (userSpan==10 && compSpan<userSpan){
            userSpan=0
            compSpan=0
            
            if (confirm("YOU WON! Congratulations\nWanna play again??")) {
                console.log('pressed yes')
                result.style.marginLeft='0px'
                result.style.backgroundColor='wheat'
                document.querySelector('.result p').innerText="Let's Start the game"
                funny()
            } 
            else {
                console.log('pressed no')
                close()
            }    
            
        }
        else if(userSpan<10 && compSpan==10){
            userSpan=0
            compSpan=0
            
            if (confirm("YOU LOST! Better Luck next time\nWanna play again??")) {
                console.log('pressed yes')
                result.style.marginLeft='0px'
                document.querySelector('.result p').innerText="Let's Start the game"
                result.style.backgroundColor='wheat'
                funny()
            } 
            else {
                console.log('pressed no')
                close()
            }  
             
        }
        document.querySelector('.span1').innerText=userSpan
        document.querySelector('.span2').innerText=compSpan
        console.log(`userscore=${userSpan} and computerScore= ${compSpan}`)
        

    })
    
    
})
