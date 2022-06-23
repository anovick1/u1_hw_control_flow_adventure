// starting phrase for when page is loaded, don't need to ask more than once
let NAME = prompt('Whats your name?')
console.log('Hello: ' + NAME + '!')
console.log(NAME)
let userPlay = confirm(NAME + ', will you go on an adventure with me?')

// when user types a bad choice
const noChoice = () => {
  alert('Incorrect response. Back to the start')
  travel()
}

const travel = () => {
  let city = prompt('Sweet, where do you wanna travel? NYC or LA')

  //
  // NYC story line
  //
  if (city === 'NYC') {
    let nyc1 = prompt(
      'Now that we just got to NYC, what do you want to do first? STATUE OF LIBERTY or YANKEES GAME'
    )

    // NYC path 1
    // #1 Final Destination: Death at the statue
    if (nyc1 === 'STATUE OF LIBERTY') {
      prompt(
        'What is your favorite part about statue? Mine is the history behind it'
      )
      alert('Yeah that part is awesome... WOAH watch out behind you!!!!')
      alert(
        "It looks like you fell off the top of statue.... how does anyone even do that? You're dead, obviously. But...."
      )
      playGame(confirm('would you like to play again?'))
    }

    // NYC path 2
    if (nyc1 === 'YANKEES GAME') {
      let nyc2 = prompt(
        "Great! They are playing the Red Sox this weekend, who are you rooting for? RED SOX  YANKEES or DON'T CARE ? Should be an intense game"
      )
      // #2 Final Destination: beaten up by yankees fans rip
      if (nyc2 === 'RED SOX') {
        alert(
          'Rookie mistake! Yankee fans beat you up the second you sat down wearing a sox hat. does this really suprise you?'
        )
        playGame(confirm('would you like to play again?'))
      }
      // #3 Final destination: sold ball hit by jeter
      else if (nyc2 === 'YANKEES' || nyc2 === "DON'T CARE") {
        alert(
          'Derek Jeter hit a foul ball and it hit your face! He paid to a few mil because he felt bad and you get to keep the ball! The video went viral too'
        )
        playGame(confirm('would you like to play again?'))
      } else {
        noChoice()
      }
    }
  }

  //
  // LA Story Line
  //
  else if (city === 'LA') {
    let la1 = prompt(
      'There are two flights we can take, both in the morning. Which one would you prefer? 8 OR 11'
    )

    // LA path 1
    if (la1 == 8) {
      let la2 = prompt('Hello? Are you there and awake?!?!?! YES or NO?!?!?')
      // #4 Final Destination: Death by plane
      if (la1 === 'YES') {
        alert(
          'Great we can make our flight ... but it crashed and we all died :/'
        )
        playGame(confirm('would you like to play again?'))
      }
      // #5 Final destination: Slept through fight
      else if (la2 === 'NO') {
        alert(
          "Oh no, you slept through the flight and we missed it!! No adventure today. At least you didn't die in a plane crash ;)"
        )
        playGame(confirm('would you like to play again?'))
      } else {
        noChoice()
      }
    }

    //LA path 2
    if (la1 == 11) {
      let la2 = prompt(
        'Nice! On your flight to LA, you got upgraded to first class and sat next to Quentin Tarantino! Did you get his contact info? YES or NO?'
      )
      switch (la2) {
        // #6 Final Destination: Movie Star
        case 'YES':
          alert(
            'He casted you as the main role in his next move! You are now a movie star!'
          )
          playGame(confirm('would you like to play again?'))
          break
        // #7 Final destination: Boring
        case 'NO':
          alert(
            'Ah that is a shame. We just had a boring adventure in LA. Great weather tho!'
          )
          playGame(confirm('would you like to play again?'))
          break
        default:
          noChoice()
      }
    } else {
      noChoice()
    }
  }
}

// initiates game
const playGame = (play) => {
  if (play) {
    travel()
  } else {
    alert('bye')
  }
}

playGame(userPlay)
