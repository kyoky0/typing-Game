'use script';

{
  function setWord() {
  word = words.splice(Math.floor(Math.random() * words.length), 1 )[0];
  target.textContent = word;
  loc=0;

  }
  const words = [
    'red',
    'blue',
    'pink',
    'green',
    'yellow',
    'white',
    'black',
    'purple',
    
  ]
  let word;
  let loc = 0;
  let startTimel;
  let isPlaying = false;


  const target = document.getElementById('target');

  document.addEventListener ('click' , ()=>{

    if ( isPlaying === true) {
      return;
    }

    isPlayng = true;
    startTime = Date.now();
    setWord();
  });


  document.addEventListener('keydown', e => {
    if(e.key !== word[loc]) {
      return;
    }

      loc++;
      target.textContent = '_'.repeat(loc) + word.substring(loc);

      if (loc === word.length) {
        if(words.length === 0) {
          const aa = ((Date.now() -startTime)/1000).toFixed(2) ;
          const result = document.getElementById('result');
          result.textContent = `Finished! ${aa} seconds`;
          return;
        }
        setWord();
      }

      
    
  });
}