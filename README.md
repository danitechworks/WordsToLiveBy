# Quote Generator

A minimalist quote generator web application that displays random inspirational quotes from notable figures throughout history. Built with vanilla JavaScript, HTML, and CSS as an early school project focused on learning core web development and front-end programming fundamentals.

## Features

- Random quote selection from a curated collection of 50+ quotes
- Clean, modern UI with smooth hover transitions
- Responsive design for mobile and desktop
- Open Graph meta tags for social media sharing
- Google Fonts integration (Roboto)

## Technologies

- **HTML5** - Semantic markup with proper meta tags
- **CSS3** - Modern styling with transitions, backdrop filter, and flexbox
- **JavaScript (ES6)** - DOM manipulation, event handling, and randomization

## Project Structure

```
03-Quote-Generator-main/
├── index.html      # Main HTML structure
├── index.js        # JavaScript functionality
├── style.css       # Styling
├── images/         # Background images
└── README.md       # This file
```

## Live Demo

The project is live and published at:  
**http://dannellbayer.com/WordsToLiveBy/**

## How to Run

1. Clone the repository or download the files
2. Open `index.html` in any web browser
3. Click the "Inspire Me" button to generate a new random quote

## Key Code Highlights

### Event Handling

```javascript
btn.addEventListener("click", newQuote);
```

### Random Quote Selection

```javascript
function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNumber].quote;
  person.innerText = `~${quotes[randomNumber].person}`;
}
```

## Design Details

- **Font**: Roboto (Google Fonts)
- **Background**: Fixed, cover-size background image
- **Quote Container**: Frosted glass effect using `backdrop-filter: blur(6px)`
- **Button**: Rounded corners with hover transition effect

## License

This project is for educational purposes.
