const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    person: "Chinese Proverb",
  },
  { quote: "Fall seven times, stand up eight.", person: "Japanese Proverb" },
  {
    quote: "A journey of a thousand miles begins with a single step.",
    person: "Lao Tzu",
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    person: "Friedrich Nietzsche",
  },
  {
    quote: "Do not fear going forward slowly, fear only standing still.",
    person: "Chinese Proverb",
  },

  {
    quote: "In the middle of difficulty lies opportunity.",
    person: "Albert Einstein",
  },
  {
    quote:
      "You cannot swim for new horizons until you have courage to lose sight of the shore.",
    person: "William Faulkner",
  },
  {
    quote: "The man who moves a mountain begins by carrying away small stones.",
    person: "Confucius",
  },
  { quote: "Act without expectation.", person: "Lao Tzu" },
  { quote: "Wisdom begins in wonder.", person: "Socrates" },

  {
    quote: "Be not afraid of growing slowly, be afraid only of standing still.",
    person: "Chinese Proverb",
  },
  { quote: "What you think, you become.", person: "Buddha" },
  { quote: "Happiness depends upon ourselves.", person: "Aristotle" },
  { quote: "Turn your wounds into wisdom.", person: "Oprah Winfrey" },
  {
    quote: "The mind is everything. What you think you become.",
    person: "Buddha",
  },

  {
    quote:
      "Discipline is choosing between what you want now and what you want most.",
    person: "Abraham Lincoln (attributed)",
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    person: "Leonardo da Vinci",
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    person: "Confucius",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence is not an act, but a habit.",
    person: "Aristotle",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    person: "Theodore Roosevelt",
  },

  {
    quote: "He who conquers himself is the mightiest warrior.",
    person: "Confucius",
  },
  {
    quote: "Peace comes from within. Do not seek it without.",
    person: "Buddha",
  },
  {
    quote: "It is better to light a candle than curse the darkness.",
    person: "Chinese Proverb",
  },
  {
    quote: "Knowing yourself is the beginning of all wisdom.",
    person: "Aristotle",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    person: "Socrates",
  },

  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    person: "Buddha",
  },
  { quote: "Wherever you go, go with all your heart.", person: "Confucius" },
  {
    quote:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    person: "Bruce Lee",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    person: "Wayne Gretzky",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    person: "Confucius",
  },

  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein",
  },
  { quote: "The only way out is through.", person: "Robert Frost" },
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quote: "What we achieve inwardly will change outer reality.",
    person: "Plutarch",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    person: "Arthur Ashe",
  },

  {
    quote: "A calm mind brings inner strength and self-confidence.",
    person: "Dalai Lama",
  },
  { quote: "Nothing will work unless you do.", person: "Maya Angelou" },
  {
    quote: "Don’t count the days, make the days count.",
    person: "Muhammad Ali",
  },
  { quote: "The best revenge is massive success.", person: "Frank Sinatra" },
  { quote: "Dream big and dare to fail.", person: "Norman Vaughan" },

  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    person: "C.S. Lewis",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: "Do one thing every day that scares you.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    person: "William James",
  },
  {
    quote: "In the end, we only regret the chances we didn’t take.",
    person: "Lewis Carroll (attributed)",
  },

  { quote: "Be water, my friend.", person: "Bruce Lee" },
  {
    quote: "You must be the change you wish to see in the world.",
    person: "Mahatma Gandhi",
  },
  {
    quote: "Small daily improvements lead to stunning results.",
    person: "Robin Sharma",
  },
  {
    quote: "The future depends on what you do today.",
    person: "Mahatma Gandhi",
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    person: "Will Rogers",
  },
];

btn.addEventListener("click", newQuote);

function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNumber].quote;
  person.innerText = `~${quotes[randomNumber].person}`;
}
