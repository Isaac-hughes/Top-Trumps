// DOM interactions
const body = document.getElementsByClassName('body')
const playButton = document.querySelector('.playButton')
const firstScreen = document.getElementById('firstScreen')
const cardScreen = document.getElementById('cardScreen')
const playScreen = document.getElementById('playScreen')
const cardPreviewer = document.getElementsByClassName('cardPreviewer')
const card = document.getElementsByClassName('card')
const cardImg = document.getElementsByClassName('image')   
const cardName = document.getElementsByClassName('name')
const cardMagic = document.getElementsByClassName('magic')
const cardCunning = document.getElementsByClassName('cunning')
const cardCourage = document.getElementsByClassName('courage')
const cardWisdom = document.getElementsByClassName('wisdom')
const cardTemper = document.getElementsByClassName('temper')
const playerName = document.getElementsByClassName('pname')
const playerMagic = document.getElementsByClassName('pmagic')
const playerCunning = document.getElementsByClassName('pcourage')
const playerCourage = document.getElementsByClassName('pcunning')
const playerWisdom = document.getElementsByClassName('pwisdom')
const playerTemper = document.getElementsByClassName('ptemper')
const computerName = document.getElementsByClassName('cname')
const computerMagic = document.getElementsByClassName('cmagic')
const computerCunning = document.getElementsByClassName('ccourage')
const computerCourage = document.getElementsByClassName('ccunning')
const computerWisdom = document.getElementsByClassName('cwisdom')
const computerTemper = document.getElementsByClassName('ctemper')
const nextRoundButton = document.getElementsByClassName('nextRound')[0]
const magicButton = document.getElementById('magicButton')
const cunningButton = document.getElementById('cunningButton')
const courageButton = document.getElementById('courageButton')
const wisdomButton = document.getElementById('wisdomButton')
const temperButton = document.getElementById('temperButton')
const turnDisplay = document.getElementsByClassName('turnDisplay')
const playerScoreBoard= document.getElementsByClassName('playerScoreBoard')
const computerScoreBoard = document.getElementsByClassName('computerScoreBoard')
const announcer = document.getElementsByClassName('announcer')



class Card {
    constructor(name, magic, cunning, courage, wisdom, temper){
        this.name = name
        this.magic = magic
        this.cunning = cunning
        this.courage = courage
        this.wisdom = wisdom
        this.temper = temper
    }

}

const card1 = new Card('Argus Filch',0,17,10,40,10)
const card2 = new Card('Severus Snape',120,45,80,76,9)
const card3 = new Card('Draco Malfoy',60,35,30,28,21)
const card4 = new Card('Rubeus Hagrid',11,13,45,15,12)
const card5 = new Card('Luna Lovegood',50,18,65,48,2)
const card6 = new Card('Nigel',45,16,30,35,9)
const card7 = new Card('Lord Voldemort',120,42,0,60,25)
const card8 = new Card('Ginny Weasley',50,22,65,45,11)
const card9 = new Card('Narcissa Malfoy',65,28,10,29,8)
const card10 = new Card('James Potter',75,14,43,40,8)
const card11 = new Card('Alecto Carrow',60,30,20,44,18)
const card12 = new Card('Hermione Granger',88,32,70,100,5)
const card13 = new Card('Bellatrix Lestrange',112,36,4,55,25)
const card14 = new Card('Griphook',40,31,30,40,10)
const card15 = new Card('Aberforth Dumbledore',40,32,45,50,10)
const card16 = new Card('Feurir Greyback',65,30,9,40,18)
const card17 = new Card('Minerva McGonagall',107,36,45,85,20)
const card18 = new Card('Percy Weasley',65,15,40,42,10)
const card19 = new Card('Cho Chang',50,12,55,40,3)
const card20 = new Card('Neville Longbottom',68,36,75,48,9)
const card21 = new Card('Mr Ollivander',65,20,40,72,3)
const card22 = new Card('Ron Weasley',80,25,70,60,10)
const card23 = new Card('Harry Potter',95,40,80,100,8)
const card24 = new Card('Seamus Finnegan',45,20,50,21,3)
const card25 = new Card('Sybill Trelawney',50,11,40,45,3)
const card26 = new Card('Nagini',0,40,1,10,25)
const card27 = new Card('Dean Thomas',45,20,50,26,6)
const card28 = new Card('Gregory Goyle',18,20,7,1,16)
const card29 = new Card('Amycus Carrow',59,31,20,44,19)
const card30 = new Card('Albus Dumbledore',130,50,83,100,0)


let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30]
let cardsInDeck = 30

let playerCards = []
let computerCards = []
let currentPlayerCard = []
let currentComputerCard = []
let winnerArray = []
let whosTurn = ""

let playerScore = 0
let computerScore = 0

let playerSelectionNumber = 0;
let computerSelectionNumber = 0;

let rounds = 0
let choice = ''

const splitCards = () => {
    times(14)(() => {
        givePlayerCard()
        giveComputerCard()
    })
    playerCards.push(cards[0])
    cards.splice(0, 1);
    computerCards.push(cards[0])
    cards.splice(0, 1);
    cardsInDeck = 0
}

const times = (x) => (f) => {
    if (x > 0) {
      f()
      times (x - 1) (f)
    }
}

const givePlayerCard = () => {
    let cardNum = Math.floor(Math.random() * (cardsInDeck - 1) + 1);
    let holder = cardNum--
    playerCards.push(cards[holder])
    cards.splice(holder, 1);
    cardsInDeck--
}

const giveComputerCard = () => {
    let cardNum = Math.floor(Math.random() * (cardsInDeck - 1) + 1);
    let holder = cardNum--
    computerCards.push(cards[holder])
    cards.splice(holder, 1);
    cardsInDeck--
}

const playToptrumps = () => {
    updateScoreBoard()
    getCurrentComputerCard()
    getCurrentPlayerCard()
    if (whosTurn === 'Player'){
        turnDisplay[0].innerHTML = "Player Turn"
        playerTurnEventListener()
        

        changeTurn()
    } else if (whosTurn === "Computer"){
        turnDisplay[0].innerHTML = "Computer Turn!"
        computerTurn()
        setTimeout(function(){cardScreen.remove()}, 2000)
        battle()
        changeTurn()
    }
}

const getCurrentPlayerCard = () => {
    currentPlayerCard = playerCards[0]
    playerCards.splice(0, 1)
    cardName[0].innerHTML = `Name : ${currentPlayerCard.name}`
    cardMagic[0].innerHTML = `Magic : ${currentPlayerCard.magic}`
    cardCunning[0].innerHTML = `Cunning : ${currentPlayerCard.cunning}`
    cardCourage[0].innerHTML = `Courage : ${currentPlayerCard.courage}`
    cardWisdom[0].innerHTML = `Wisdom : ${currentPlayerCard.wisdom}`
    cardTemper[0].innerHTML = `Temper : ${currentPlayerCard.temper}`
    playerName[0].innerHTML = `Name : ${currentPlayerCard.name}`
    playerMagic[0].innerHTML = `Magic : ${currentPlayerCard.magic}`
    playerCunning[0].innerHTML = `Cunning : ${currentPlayerCard.cunning}`
    playerCourage[0].innerHTML = `Courage : ${currentPlayerCard.courage}`
    playerWisdom[0].innerHTML = `Wisdom : ${currentPlayerCard.wisdom}`
    playerTemper[0].innerHTML = `Temper : ${currentPlayerCard.temper}`
    
}

const getCurrentComputerCard = ()=> {
    currentComputerCard = computerCards[0]
    computerCards.splice(0, 1)
    computerName[0].innerHTML = `Name : ${currentComputerCard.name}`
    computerMagic[0].innerHTML = `Magic : ${currentComputerCard.magic}`
    computerCunning[0].innerHTML = `Cunning : ${currentComputerCard.cunning}`
    computerCourage[0].innerHTML = `Courage : ${currentComputerCard.courage}`
    computerWisdom[0].innerHTML = `Wisdom : ${currentComputerCard.wisdom}`
    computerTemper[0].innerHTML = `Temper : ${currentComputerCard.temper}`
}

const playerTurnEventListener = () => {
    magicButton.addEventListener("click", magicListener)
    cunningButton.addEventListener('click', cunningListener)
    courageButton.addEventListener('click', courageListener)
    wisdomButton.addEventListener('click', wisdomListener)
    temperButton.addEventListener('click', temperListener)
}

const magicListener = () => {
    playerSelectionNumber = currentPlayerCard.magic
    computerSelectionNumber = currentComputerCard.magic
    choice = 'magic'
    cardScreen.remove()
    battle()
    rounds++
    removeListeners()
}

const cunningListener = () => {
    playerSelectionNumber = currentPlayerCard.cunning
    computerSelectionNumber = currentComputerCard.cunning
    choice = 'cunning'
    cardScreen.remove()
    battle()
    rounds++
    removeListeners()
}

const courageListener = () => {
    playerSelectionNumber = currentPlayerCard.courage
    computerSelectionNumber = currentComputerCard.courage
    choice = 'courage'
    cardScreen.remove()
    battle()
    rounds++
    removeListeners()
}

const wisdomListener = () => {
    playerSelectionNumber = currentPlayerCard.wisdom
    computerSelectionNumber = currentComputerCard.wisdom
    choice = 'wisdom'
    cardScreen.remove()
    battle()
    rounds++
    removeListeners()
}

const temperListener = () => {
    playerSelectionNumber = currentPlayerCard.temper
    computerSelectionNumber = currentComputerCard.temper
    choice = 'temper'
    cardScreen.remove()
    battle()
    rounds++
    removeListeners()
}

const removeListeners = () => {
    magicButton.removeEventListener('click', magicListener)
    // cardCunning.removeEventListener('click', cunningListener())
    // cardCourage.removeEventListener('click', courageListener())
    // cardWisdom.removeEventListener('click', wisdomListener())
    // cardTemper.removeEventListener('click', temperListener())
}

const computerTurn = () => {
    computerBiggestStat()
}

const computerBiggestStat = () => {
    if (currentComputerCard.magic > currentComputerCard.cunning && currentComputerCard.magic > currentComputerCard.courage && currentComputerCard.magic > currentComputerCard.wisdom && currentComputerCard.magic > currentComputerCard.temper){
        computerSelectionNumber = currentComputerCard.magic
        playerSelectionNumber = currentPlayerCard.magic
        choice = 'Magic'
    } else if (currentComputerCard.cunning > currentComputerCard.magic && currentComputerCard.cunning > currentComputerCard.courage && currentComputerCard.cunning > currentComputerCard.wisdom && currentComputerCard.cunning > currentComputerCard.temper){
        computerSelectionNumber = currentComputerCard.cunning
        playerSelectionNumber = currentPlayerCard.cunning
        choice = 'Cunning'
    } else if (currentComputerCard.courage > currentComputerCard.magic && currentComputerCard.courage > currentComputerCard.courage && currentComputerCard.cunning > currentComputerCard.wisdom && currentComputerCard.courage > currentComputerCard.temper){
        computerSelectionNumber = currentComputerCard.courage
        playerSelectionNumber = currentPlayerCard.courage
        choice = 'Courage'
    } else if (currentComputerCard.wisdom > currentComputerCard.magic && currentComputerCard.wisdom > currentComputerCard.courage && currentComputerCard.wisdom > currentComputerCard.wisdom && currentComputerCard.cunning > currentComputerCard.temper){
        computerSelectionNumber = currentComputerCard.wisdom
        playerSelectionNumber = currentPlayerCard.wisdom
        choice = 'Wisdom'
    } else if (currentComputerCard.temper > currentComputerCard.magic && currentComputerCard.temper > currentComputerCard.courage && currentComputerCard.temper > currentComputerCard.wisdom && currentComputerCard.temper > currentComputerCard.cunning){
        computerSelectionNumber = currentComputerCard.temper
        playerSelectionNumber = currentPlayerCard.temper
        choice = 'Temper'
    }
}
const battle = () => {
    if(computerSelectionNumber < playerSelectionNumber){
        playerScore++
        winnerArray.push(currentPlayerCard)
        winnerArray.push(currentComputerCard)
        updateAnnouncer("Player", whosTurn, choice)
        currentComputerCard = []
        currentPlayerCard = []
        playerCards.push(winnerArray[0])
        playerCards.push(winnerArray[1])
        winnerArray = []
    } else if (computerSelectionNumber > playerSelectionNumber){
        computerScore++
        winnerArray.push(currentPlayerCard)
        winnerArray.push(currentComputerCard)
        updateAnnouncer("Computer", whosTurn, choice)
        currentComputerCard = []
        currentPlayerCard = []
        computerCards.push(winnerArray[0])
        computerCards.push(winnerArray[1])
        winnerArray = []
    } else if (computerSelectionNumber === playerSelectionNumber){
        announcer[0].innerHTML = `${whosTurn} chose ${choice}, It was a draw`
        playerCards.push(currentPlayerCard)
        computerCards.push(currentComputerCard)
        currentComputerCard = []
        currentPlayerCard = []
    } else {
        console.log("error")
    }
}

const gameOver = () => {
    if (playerCards.length === 0){
        alert('Computer Wins')
        window.location.reload(false)
    } else if (computerCards.length === 0) {
        alert('You Win')
        window.location.reload(false)
    } else if (rounds === 20){
        if (playerScore > computerScore){
            alert('You Win')
            window.location.reload(false)
        } else if (computerScore > playerScore){
            alert('Computer wins')
            window.location.reload(false)
        } else if (playerScore === computerScore){
            alert("It's a draw")
            window.location.reload(false)
        }
    }
}

const updateScoreBoard = () => {
    computerScoreBoard[0].innerHTML = `Computer Score: ${computerScore}`
    playerScoreBoard[0].innerHTML = `Player Score: ${playerScore}`
}

const updateAnnouncer = (winner, chooser, condition) => {
    announcer[0].innerHTML = `${chooser} chose ${condition}, ${winner} won this round!`
}

const changeTurn = ()=> {
    if (whosTurn = "Player"){
        whosTurn = "Computer"
    } else if (whosTurn = "Computer"){
        whosTurn = "Player"
    }
}
// Remove Home Screen
playButton.addEventListener('click', () => {
    firstScreen.remove();
    splitCards()
    whosTurn = "Player"
    playToptrumps()
})

nextRoundButton.addEventListener('click', () => {
    playScreen.before(cardScreen)
    gameOver()
    playToptrumps()
})