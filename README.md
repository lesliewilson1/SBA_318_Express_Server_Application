# 🎸 Rock Stations API

## 📎About
A public API populated with rock radio stations across the United States. Built with Express.js and Pug, this project allows users to view, add, update, and delete radio station entries—perfect for discovering new music or fixing broken links.

---

## 🚀 Features

- View all rock stations across the US
- Filter stations by state
- Add new stations via API or form
- Update broken station links
- Delete outdated stations
- Rendered homepage with interactive form (Pug)
- CORS-enabled for public access

---

## 📦 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Pug templating engine
- **Middleware**: CORS, Body-Parser
- **Data**: Local JS array (`stations.js`)

---

## 📂 Data Format

Each station entry looks like:

```js
{
  stateId: 50,
  stateName: "Wyoming",
  radioStation: "https://radiostationusa.fm/online/rock967online"
}
