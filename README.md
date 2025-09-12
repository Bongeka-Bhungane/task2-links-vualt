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

Below are the commands you can run to create the project, install dependencies and run it locally.  
Choose the template (JavaScript or TypeScript) you prefer.

### Create the project (Vite)

**TypeScript template (recommended):**

```bash
# create a new Vite + React + TypeScript project
npm create vite@latest 
- chose a name for my file
- cd file name
- npm install 
- npm run dev

--- 
### Key implementation notes
* State & data model: store bookmarks as an array of objects. Example object:
``` js
{
  title: "MDN Web Docs",
  url: "https://developer.mozilla.org/",
  description: "Resources for web developers",
  tags: ["docs", "web", "reference"]
}

--- 
### 🧩 Evaluation mapping

- User-friendliness & design: simple, clear layout with responsive breakpoints.

- Interactivity: hover states, cursor changes, subtle transitions.

- React features: components, props and hooks used; custom hook for localStorage.

- Responsiveness: media queries for 320px, 480px, 768px, 1024px, 1200px.

- Notifications: UI feedback when deleting.

--- 
### how to clone 
- co go vs code 
- click on "clone a git repository"
- past this link on the input bar that pops ub at the top (https://github.com/Bongeka-Bhungane/task2-links-vualt)
- press enter
- open the file

---
### figma link:
- https://www.figma.com/design/KAA24s86XDIIjLSNbjzOCv/links-vault-moodboard?node-id=0-1&t=uZwh9eEGq66IVTuI-1