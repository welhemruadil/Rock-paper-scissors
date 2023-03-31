const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Get modal
    var modal = document.getElementById('simpleModal');
    var modalBtn = document.getElementById('modalBtn');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    function openModal() {
      modal.style.display = 'block';
    }

    function closeModal() {
      modal.style.display = 'none';
    }
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");

      const score = document.querySelector(".score");
      //for the score section to fadeOut and fadeIn with the match
      

      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["Rock", "Paper", "Scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
        
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./asset/${this.textContent}.png`;
            computerHand.src = `./asset/${computerChoice}.png`;
          }, 1800);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () =>{
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Rock
      if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      
    };
    
    // $("restart").click(function(){
    //   clearScore();
    // });

    // function clearScore(){
    //   $(".cell").each(function(){
    //     $(this).attr("data-player")
    //   })
    // }
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();