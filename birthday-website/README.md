# 🎀 Birthday Wishing Website — Setup Guide

A beautiful, mobile-friendly birthday website with:
- Live **countdown timer** to June 29
- **Photo slideshow** background (your own pics!)
- Animated **quote carousel** with love messages
- Floating hearts, stars, and confetti on her birthday
- Colours: Blue · Purple · Violet · Pink gradient theme
- Elegant fonts: Playfair Display + Dancing Script + Cormorant Garamond

---

## 📁 Folder Structure

```
birthday-website/
├── index.html      ← Main webpage (do not rename)
├── style.css       ← All styling
├── script.js       ← All logic (customise this!)
├── README.md       ← This file
└── images/         ← 📸 PUT YOUR PHOTOS HERE
    ├── image1.jpg
    ├── image2.jpg
    └── image3.jpg
```

---

## 🚀 Setup Steps (No Installation Needed!)

### Step 1 — Add Your Photos
1. Open the `images/` folder.
2. Copy your couple photos into it.
3. Rename them to `image1.jpg`, `image2.jpg`, `image3.jpg`
   *(or keep your own names — just update `script.js` in Step 2)*

   > You can add as many photos as you like! Just add more filenames to the `images[]` array.

---

### Step 2 — Personalise in `script.js`

Open `script.js` in any text editor (Notepad, VS Code, etc.) and find the top section:

```js
// ── 1. Her Name ──────────────────────────────────────────────
const girlfriendName = "My Darling";   // ← Change this to her real name

// ── 2. Your Photos ───────────────────────────────────────────
const images = [
  "images/image1.jpg",   // ← Change to your actual filenames
  "images/image2.jpg",
  "images/image3.jpg",
];
```

**Change:**
- `"My Darling"` → her actual name (e.g. `"Priya"`)
- The image filenames → your actual photo filenames

---

### Step 3 — Open the Website

**Easiest (no server needed):**
Double-click `index.html` → it opens in your browser. Done! ✅

**For best experience (optional):**
If photos don't load via double-click (some browsers block local files), use a simple local server:

**Option A — VS Code (recommended):**
1. Install the "Live Server" extension in VS Code.
2. Open the `birthday-website/` folder in VS Code.
3. Right-click `index.html` → click **"Open with Live Server"**.

**Option B — Python (if installed):**
```bash
cd birthday-website
python -m http.server 8080
```
Then open: `http://localhost:8080` in your browser.

**Option C — Node.js (if installed):**
```bash
cd birthday-website
npx serve .
```
Then open the URL shown in your terminal.

---

## 🗓️ How the Timer Works

| Date             | What the visitor sees                          |
|------------------|------------------------------------------------|
| Before June 29   | Countdown timer: Days · Hours · Minutes · Secs |
| On June 29       | Full birthday page with photos, quotes, confetti |
| After June 29    | Countdown to **next year's** June 29           |

The switch happens **automatically** — no manual changes needed!

---

## 💜 Adding More Quotes

In `script.js`, find the `quotes` array and add your own lines:

```js
const quotes = [
  "You make every ordinary moment feel magical.",
  "Add your own heartfelt message here.",
  // ...
];
```

---

## 🌐 Sharing Online (Optional)

Want to share the link with her instead of showing it locally?

**Free hosting options:**
- **Netlify** → https://netlify.com → drag & drop the `birthday-website/` folder
- **GitHub Pages** → upload to a GitHub repo and enable Pages
- **Vercel** → https://vercel.com → import the folder

No configuration needed — just upload and share the link!

---

## 📱 Mobile Friendly

The website is fully responsive. Works great on:
- iPhone & Android browsers
- Tablets
- Laptops & desktops

---

Made with 💜 for your special one.
