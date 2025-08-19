let scoreStr = localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);

    function resetScore(scoreStr) {
      score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
      };

      score.displayScore = function() {
        return `Score: Won:${score.win}, Lost${score.lost}, Tie${score.tie}`;
      };

      showResult();
    }

    function generateComputerChoice() {
      let randomNumber = Math.random() * 3;
      if (randomNumber > 0 && randomNumber <=1){
          return 'Bat';
          // console.log('choosen bat');
        }
        else if (randomNumber > 1 && randomNumber <=2) {
          return 'Ball';
          // console.log('choosen ball');
        }
        else {
          return 'Stump';
          // console.log('choosen Stump');
        }
        // const ComputerChoiceMsg = `Computer Choice is ${computerChoice}`;  
    }

    function getResult(usermove, computermove) {
      if (usermove === 'Bat'){
        if (computermove === 'Ball') {
          score.win++;
          return 'User Won.';
        } else if (computermove === 'Bat') {
          score.tie++;
          return `It's a tie.`;
        } else if (computermove === 'Stump') {
          score.lost++;
          return  'Computer Won.';
        }
      } else if (usermove === 'Ball'){
        if (computermove === 'Ball') {
          score.tie++;
          return  `It's tie`;
        } else if (computermove === 'Bat') {
          score.lost++;
          return  `Computer Won.`;
        } else if (computermove === 'Stump') {
          score.win++;
          return  'User Won.';
        }
      }else{
        if (computermove === 'Ball') {
          score.lost++;
          return  `Computer Won.`;
        } else if (computermove === 'Bat') {
          score.win++;
          return  `User Won.`;
        } else if (computermove === 'Stump') {
          score.tie++;
          return  `It's tie`;
        }
      }
    }

    function showResult(usermove, computermove, result){
      localStorage.setItem('Score', JSON.stringify(score));

      document.querySelector('#user-move').innerText = usermove ? `You choose ${usermove}` : '';

      document.querySelector('#computer-move').innerText = computermove ?  `The computer choose ${computermove}` : '';

      document.querySelector('#result').innerText = result || '';

      document.querySelector('#score').innerText = score.displayScore();

      // alert(`You choose ${usermove}. The computer choose ${computermove}.
      // Result: ${result}.
      // ${score.displayScore()}`);
    }