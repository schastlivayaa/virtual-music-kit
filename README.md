# Virtual Music Kit

## Deployment
[**Live Demo**](https://rolling-scopes-school.github.io/schastlivayaa-JSFE2025Q3/virtual-music-kit/)

---

## Overview

**Virtual Music Kit** is an interactive web application that simulates a musical instrument (a piano). Users can play sounds in real time by clicking visual elements or pressing the corresponding keyboard keys, as well as type a sequence of sounds and play it automatically.
The project was created as part of the Frontend Development course at RS School. 

The project demonstrates skills in **DOM manipulation**, **event handling**, and **audio playback** in the browser.

---

## Features

- **Technical requirements:**
  - The `index.html` file initially contains only a `<script>` tag in the `<body>` — all elements are dynamically created using `document.createElement()`.
- **Responsive interface** that visually represents the chosen instrument.
- Each sound is mapped to a **unique English letter key**.
- Sounds can be played by clicking on the element or pressing the corresponding keyboard key.  
- The sound does not repeat automatically when holding the key or mouse button.
- Sound playback works **independently of the keyboard layout** (Russian/English) and **Caps Lock** state.
- **Sequence playback feature:**
  - Users can enter a sequence of assigned keys (e.g., `ASDFG`) and play it automatically.
  - Both uppercase and lowercase letters are supported.
  - Invalid characters are ignored.
  - The sequence length is limited (no more than 2 × the number of available sounds).
  - During automatic playback:
    - Sounds are played one by one with a short, consistent delay to avoid overlapping.
    - The corresponding visual element switches to its active state while its sound is playing.
    - User interaction (clicks/keypresses) is temporarily disabled.
    - After playback finishes, all interactions are fully restored.

---

## Technology Stack

- **HTML5**
- **CSS3 / SCSS / Flexbox**
- **JavaScript (ES6+)**
- **Audio API / HTMLAudioElement**
