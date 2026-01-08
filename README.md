<img src="https://socialify.git.ci/Bongeka-Bhungane/task2-links-vualt/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="task2-links-vualt" width="640" height="320" />

# Link Keeper — MVP

> A simple, responsive React app for saving, editing, searching and organising your favourite links using **localStorage** as the persistence layer.

---

## 📌 Project overview

**Link Keeper** is a minimal viable product (MVP) that lets users save bookmarks (links) with a title, URL, description and optional tags.  

The app demonstrates core front-end concepts taught in Lesson 2: arrays & array methods, objects, React components, state & props, hooks (useState, useEffect), JSON methods and browser `localStorage` for persistence.

The goal is a user-friendly, accessible UI (desktop and mobile) built with plain CSS and media queries (no third-party CSS frameworks).  
This project is intended as a proof-of-concept: localStorage is used so the app can be accessed across sessions on the same browser; a real-world extension would replace localStorage with a server-side database.

---

## ✅ Features

- Create / Read / Update / Delete (CRUD) bookmarks
- Store metadata: **Title**, **URL**, **Description**, **Tags** (optional)
- Search saved links by title, URL, description or tags
- Persist data using `localStorage` (JSON)
- Responsive layout for these breakpoints: 320px, 480px, 768px, 1024px, 1200px
- Reusable React components and clean component hierarchy
- Notifications (simple UI feedback) for operations like save, update and delete

---

## 🧰 Tech stack

- React (recommended with Vite)
- JavaScript or TypeScript (both supported — instructions below)
- Plain CSS + media queries
- Browser `localStorage`
- Optional small libraries: `react-icons`, `uuid` for generating IDs (optional but recommended)

---

## 🚀 Getting started — installation commands

Below are the commands I ran to create the project, install dependencies and run it locally.  
Choose the template (JavaScript or TypeScript) you prefer.

--- 
### 🧩 Evaluation mapping

- User-friendliness & design: simple, clear layout with responsive breakpoints.

- Interactivity: hover states, cursor changes, subtle transitions.

- React features: components, props and hooks used; custom hook for localStorage.

- Responsiveness: media queries for 320px, 480px, 768px, 1024px, 1200px.

- Notifications: UI feedback when deleting.

--- 
## How to Clone the Repository (Any Editor/Terminal)

- Open your terminal (Command Prompt, PowerShell, iTerm, or any terminal you prefer).

1. Navigate to the folder where you want to save the project. For example:
``` bash
cd path/to/your/folder
```

2. Clone the repository using Git:
``` bash
git clone https://github.com/Bongeka-Bhungane/task2-links-vualt.git
```

3. Navigate into the cloned project folder:
```bash
cd task2-links-vualt
```

4. Open the folder in your code editor of choice (e.g., VS Code, Sublime Text, Atom, etc.) or start working directly in the terminal.

```bash
1. npm i

2. npm run dev
```

---

### figma link:
- https://www.figma.com/design/KAA24s86XDIIjLSNbjzOCv/links-vault-moodboard?node-id=0-1&t=uZwh9eEGq66IVTuI-1
