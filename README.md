# Benoit Webpage

This project creates a simple web page that plays background music automatically upon opening, displays a chosen image in the center, and features the name "Benoit" prominently.

## Project Structure

```
benoit-webpage
├── assets
│   ├── images
│   │   └── chosen-image.jpg
│   └── music
│       └── background-music.mp3
├── css
│   └── main.css
├── js
│   └── script.js
├── index.html
└── README.md
```

## Files Overview

- **index.html**: The main HTML document that includes the structure of the webpage, links to the CSS and JavaScript files, and contains an audio element for playing music automatically, an image element for displaying the chosen image, and a heading for the name "Benoit".

- **css/main.css**: Contains styles for the webpage, setting the background, centering the content, styling the text, and formatting the image display.

- **js/script.js**: Contains JavaScript code that handles the automatic playback of the music when the page loads.

- **assets/images/chosen-image.jpg**: The image file displayed in the center of the webpage.

- **assets/music/background-music.mp3**: The audio file that plays automatically when the webpage is opened.

## Setup Instructions

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. Ensure that the audio and image files are correctly placed in their respective directories.
4. Customize the background by modifying the CSS file as needed.

## Customization

- To change the background image, update the `background` property in `css/main.css`.
- To use a different audio file, replace `background-music.mp3` in the `assets/music` directory and update the `src` attribute in the `index.html` file accordingly.
- Modify the image displayed by replacing `chosen-image.jpg` in the `assets/images` directory.