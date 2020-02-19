function rpsGame(yourChoice){
    let humanChoice, botChoice

    humanChoice=yourChoice.id

    botChoice=randomBotChoice()
    console.log('Computer Choice ', botChoice)

  results = decideWinner(humanChoice,botChoice)
  console.log(results)

  message = finalMessage(results)
  console.log(message)

  rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randomBotChoice(){
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random()*3)];
}

function decideWinner(yourChoice, computerChoice){
    let rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    }
    let yourScore = rpsDatabase[yourChoice][computerChoice]
    let computerScore = rpsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0 ){
        return {'message': 'You Lost!!', 'color':'red' }
    }
    else if( yourScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'}
    }

    else{
        return {'message': 'You Won', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imagesDatabase = {
        'rock': document.querySelector('.rock').src,
        'paper': document.querySelector('.paper').src,
        'scissors': document.querySelector('.scissors').src
    }

    // remove all the images
    document.querySelector('.rock').remove()
    document.querySelector('.paper').remove()
    document.querySelector('.scissors').remove()

    // create div's for each

    let humanDiv = document.createElement('div')
    let messageDiv = document.createElement('div')
    let botDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice]+ "' style=' box-shadow: 0px 10px 50px rgba(37,50,233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: "+finalMessage['color']+"; font-size: 60px; padding: 30px; '> " +finalMessage['message']+"</h1>"
    botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice]+ "' style=' box-shadow: 0px 10px 50px rgba(243,38,24, 1);'>"


    //attach to the container as child elements
    document.querySelector('.flex-box-rps').appendChild(humanDiv)
    document.querySelector('.flex-box-rps').appendChild(messageDiv)
    document.querySelector('.flex-box-rps').appendChild(botDiv)
}

