let player = {             
    name: "Player",
    credit: 100
}

let arrayOfCards = []  
let sum = 0            
let hasBlackJack = false
let isAlive = false        
let message = ``
const startBtn = document.getElementById('start-btn') 
const messageEl = document.getElementById('message-el') 
const sumEl = document.getElementById('sum-el')
const cardsEl = document.getElementById('cards-el')
const newCardBtn = document.getElementById('new-card-btn')
let playerEl = document.getElementById('player-el')
const newGameBtn = document.getElementById('new-game-btn')



function startGame(){
    isAlive = true
    let firstCard = getRandomCard()     
    let secondCard = getRandomCard()    
    arrayOfCards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    cardsEl.innerHTML = `Cards: ${  arrayOfCards}` 
    sumEl.innerHTML = `Sum: ${sum}`
    
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        player.credit = player.credit + 10
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    if(sum > 21){
        player.credit = player.credit - 10
    }

     messageEl.innerText = message
     playerEl.innerHTML = `${player.name}: £${player.credit}`  
    }
 


startBtn.addEventListener("click", function(e){
    if(sum === 0){
        startGame(e)
    }
})


newCardBtn.addEventListener("click", function(){
    if (sum <=20){ 
        let newNumber = getRandomCard() 
        sum += newNumber
        arrayOfCards.push(newNumber) 
        renderGame()
    }
   
})

function getRandomCard(){
    return Math.floor( Math.random() *11) +1 
}

newGameBtn.addEventListener("click", function(e){
    if (player.credit === 0){
        player.credit = 100
        resetGame(e)
    } else {
        resetGame(e)
    }
    
})

function resetGame(){
    sum = 0
    arrayOfCards = []
    cardsEl.textContent = `Cards:`
    sumEl.textContent = `Sum:`
}