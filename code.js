document.getElementById('random-generator').addEventListener('submit', generate);

function generate(event) {
  event.preventDefault(); // Prevent form submit and page refresh

  let inputValue = document.getElementById('userInput').value;

  if (inputValue === '') {
    alert('You forgot to enter your name.');

  } else {
    let celebList = ['Britney Spears', 'Doja Cat', 'Brenda Song', 'Kim K', 'Saweetie', 
      'Snoop Dogg', 'Will Smith', 'Jackie Chan', 'Miley Cyrus']
    let result = Math.floor(Math.random() * celebList.length);
    let resultCeleb = celebList[result];

    restyle()

    document.getElementById('output').innerText = inputValue + ' looks like ' + resultCeleb;
  }
  
}

function restyle() {
  let colorList = ['blue', 'red', 'purple', 'black', 'green']
  let randomColor = Math.floor(Math.random() * colorList.length);
  let resultColor = colorList[randomColor];

  let fontSize = Math.floor(Math.random() * 70 + 20) + 'px';
  let fontWeight = Math.random() >= 0.5 ? 'bold' : 'normal';

  document.getElementById('output').style.fontSize = fontSize;
  document.getElementById('output').style.color = resultColor;
  document.getElementById('output').style.fontWeight = fontWeight;
}