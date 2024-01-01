// Array of words with their corresponding hints

let words = [
  // Each object represents a word and its hint
  {
    word: "Arehalli",
    hint: "Vaishu's home town"
  },
  {
    word: "Rashu",
    hint: "Vaishu bestie name"
  },
  {
    word: "Nirmala",
    hint: "Vaishu's mother name"
  },
  {
    word: "Shashi",
    hint: "Vaishu's sister name"
  },
  {
    word: "Puliogre",
    hint: "Vaishu's fav food"
  },
  {
    word: "Vaishu",
    hint: "Who roasts most between Vaishu and rashu"
  },
  {
    word: "Vaishu",
    hint: "Who stolen rashu heart:)!"
  },
  {
    word: "Yes",
    hint: "Rashu loves his bestiee"
  },
  {
    word: "Yes",
    hint: "Vaishu lives in Rashu heart ...Yes or No?"
  },
  {
    word: "Vaishu",
    hint: "Who talks more in between vaishuu and rashu"
  },
  {
    word: "Shree",
    hint: "Vaishuu's jaan name"
  },
  {
    word: "Rashu",
    hint: "Vaishu soul belongs to...?"
  },
  {
    word: "Vaishu",
    hint: "Rashu's fav person on the whole planet"
  },
  {
    word: "Yes",
    hint: "Vaishu and Rashu made for each other Yes or No?"
  },
  {
    word: "Vaishu",
    hint: "Vaishu and Rashu yaru jasthi dove madtare...?"
  },
  {
    word: "Vaishu",
    hint: "Rashu's second mother name?"
  }
];

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;

// Function to initialize the timer
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

// Function to initialize the game
const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

// Function to check the user's input word
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
  initGame();
};

// Event listeners for the refresh and check buttons
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);