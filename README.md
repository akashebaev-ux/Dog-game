
# 🎮 Magic Forest — Web Game

**Magic Forest** is a browser-based interactive game for kids.
Players explore an enchanted forest, overcome obstacles, and interact with magical elements in a rich, immersive environment.

---

## 📖 Overview

Magic Forest is a **2D/interactive web game** built with HTML, CSS, and JavaScript.
It is designed for desktop and mobile browsers, with responsive controls and engaging gameplay.
The goal of the game is to **avoid enemies and reach a destination**.

---


## 1. User Experience

Many of our users shared the same challenge:
they wanted to play an engaging game featuring a beautiful, fantasy-style character, but most available games offer paid content or limited graphics.

To address this, I created a game that combines both accessibility and visual quality:

Players get a free-to-play game with smooth animations and visually rich design.

# Magic Forest provides:

* 🎨 A themed game environment with immersive forest visuals and animations

* 🕹️ Simple and intuitive controls

* 🎯 Goals and challenges that reward exploration and player skill

* 🌿 Smooth performance across modern web browsers

Players are immersed in a magical world filled with forests, creatures, and interactive challenges.


## Target audience

**Magic Forest** is a family-friendly game designed for **children aged 5–12** and for **businesses or organisations** that wish to integrate a free interactive game into their spaces or platforms, such as cafés, kindergartens, and schools.


## 1.1 User Stories

## Client Goals

- View the **Magic Forest** game seamlessly across all device sizes, including mobile, tablet, and desktop.

## Potential Client Goals

- High-quality visual design and smooth character animations
- Engaging gameplay with simple rules and intuitive controls, suitable for children

# 📋 Project Planning & User Stories

GitHub project planning tools were used to track the progress of **user stories** throughout the development of Magic Forest. Each user story includes clearly defined **acceptance criteria** and **associated tasks**, ensuring structured and goal-oriented development.

<img  src="https://github.com/user-attachments/assets/1f4c4847-a702-4ccf-95e0-f117bd11ea97" width="600">


The stories were organised into progress stages, which helped maintain focus, monitor development milestones, and ensure consistent forward momentum throughout the project lifecycle.

<img  src="https://github.com/user-attachments/assets/ae23ea41-960f-4b44-925c-9cae4818d1d2" width="600">



---

## 2. Design
## 2.1 Colour Scheme & Visual Style

Open-source Christmas elf images were used as an initial visual reference for the main character. To avoid plagiarism and ensure originality, the character was **regenerated using AI**, transforming it into a **2D game-ready design**.

Character movement animations were generated using [Pixverse.ai](https://app.pixverse.ai/onboard). Individual animation frames were then extracted from the generated video using [miniWebtool] (ru.miniwebtool.com) – Video Frame Extractor, allowing precise control over sprite animations.

To ensure seamless integration with the game environment, the background of each extracted frame was removed using [Carve.Photos](carve.photos), resulting in transparent images that blend cleanly with the game background.

The forest background was generated using ChatGPT, and the colour palette [ImageColorPicker.com](https://imagecolorpicker.com/) was selected to support a fantasy-style visual theme. This ensured visual consistency between the animated character and the environment, contributing to an immersive and cohesive game experience.

## 2.2 Typography

Google Fonts are used to style the text on the *Magic Forest* game’s home page.

**Great Vibes** is applied to the main page titles, enhancing the magical and fantasy-inspired atmosphere of the game.


## 3. Features

The **Magic Forest** game consists of **two main pages**, accessible via the **Home** and **Play** buttons.

# Pages Overview

**Home Page**
Presents general information about the game and includes a **Play** button that allows users to start the game.

**Game Page**
Hosts the game itself and includes a **Home** button, allowing players to return to the main page at any time.

# Gameplay Description

The game is designed as a simple, forward-moving challenge:

* The player moves forward and must **jump over obstacles**.

* Each successful action increases the player’s score.

* When the player reaches a **score of 100**, a **win screen animation** appears, accompanied by a winning sound effect.

* The player can press **R** to restart the game after winning.

If the player fails to jump over an obstacle:

* A **lose screen animation** is displayed.

* A hit sound effect is played.

* The player can press **R** to restart the game.

# Controls

The control buttons used in the game are listed below.

## 🕹️ Controls

*(Fill in with actual controls from your game)*

| Action     | Control   |
| ---------- | --------- |
| Move Right |→ (Right Arrow)|
| Jump       | R    |

---


## 🚀 Getting Started

### 🎮 Play

You can play the game directly in your browser:

👉 [https://akashebaev-ux.github.io/Magic-forest/game.html](https://akashebaev-ux.github.io/Magic-forest/game.html)

---



## 📦 Project Structure

```
Magic-forest/
├── index.html
├── game.html
└── README.md


├── assets/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── png/webp
├── audio/
│   └── MP3/

```

---
## 4.🛠️ Technologies Used
## 4.1 Languages Used


Magic Forest is built with:

* **HTML** — Structure of the game pages
* **CSS** — Visual styling and responsive layout
* **JavaScript** — Game logic, animation, and interactivity
* **Web Audio** — Sound effects and music [https://pixabay.com]



## 4.2 Frameworks, Libraries & Programs Used

- [GitHub](https://github.com/) – Deployment and version control. The repository for storing project files.
- [Google Fonts](https://fonts.google.com/) – Integrated to apply the chosen typography across the website.
- Chrome DevTools – testing, debugging, and checking responsiveness.
- [Favicon.io](https://favicon.io/) – Used to create the site’s emoji favicon.
- [Amiresponsive](https://ui.dev/amiresponsive) – Used to display how the website appears across multiple device sizes.
- [Pixverse.ai](https://app.pixverse.ai/onboard) – Used to generate the custom AI-created video.
- [Ezgif](https://ezgif.com/video-to-gif) - Used to generate the GIF images.
  
- [ImageColorPicker.com](https://imagecolorpicker.com/)
- [miniWebtool] (ru.miniwebtool.com)
- [Carve.Photos](carve.photos)


## 🚢 Installation

To run the game locally:

1. Clone the repository

   ```bash
   git clone https://github.com/akashebaev-ux/Magic-forest.git
   ```
2. Open **`game.html`** in your browser.

No build tools or servers are required — the game runs in any modern browser.

---

## 🔍 Development

For development:

* Use Chrome DevTools or similar tools for debugging
* Keep code modular by organizing functions and events
* Test on multiple screen sizes to ensure responsive gameplay

---

## 📄 Deployment

This project is deployed via **GitHub Pages**:

* Hosted at `akashebaev-ux.github.io/Magic-forest/`
* Automatically updated when changes are pushed to `main` branch

---

## 🧪 Testing

Magic Forest should be tested for:

* ✔ Responsiveness on desktop and mobile
* ✔ Cross-browser compatibility (Chrome, Firefox, Safari)
* ✔ Control responsiveness and input events
* ✔ Asset loading performance

---

## 🧠 Future Improvements

Potential enhancements include:

* 🎵 Background music and sound effects
* 🧟 Enemies, hazards, and power-ups
* 📈 Score and leaderboard system
* 🎨 Additional levels and themes
* 🧩 Improved animations and particle effects

---

## 👤 Author

**Akashebaev-UX**
Original game concept and implementation.

---

## 📌 Project Status

🚧 **In Progress / Growing**
Magic Forest continues to be refined with new gameplay mechanics and features.


[1]: https://akashebaev-ux.github.io/Magic-forest/game.html "Magic Forest"
