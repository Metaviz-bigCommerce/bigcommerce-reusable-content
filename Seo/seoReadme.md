# SEO Module – Usage Guide

This folder contains all **SEO-related JavaScript utilities**.
The main entry point is **`seo.js`**, which loads and triggers all other function files inside this directory.

Your project must load this module inside:

```
assets/js/theme/custom/metaviz
```

Place the entire **`seo/`** folder there.

---

## 📌 File Structure

```
seo/
│
├── seo.js                     // Main class
├── addMetaDescription.js      // Function logic
├── stripStoreNameFromBlogTitle.js
└── (more SEO functions...)
```

---

## 🔧 How the Module Works

`seo.js` contains a class `SEO` with method placeholders.
Each method pulls its actual logic from the matching file.

Example:

```js
export default class SEO {
  addMetaDescription() {
    // Code from addMetaDescription.js
  }

  stripStoreNameFromBlogTitle() {
    // Code from stripStoreNameFromBlogTitle.js
  }

  onReady() {
    this.addMetaDescription();
    this.stripStoreNameFromBlogTitle();
  }
}
```

This keeps the main class clean and allows every function to be stored in its own file.

---

## 🚀 How to Use

1. **Place the folder here:**

```
assets/js/theme/custom/metaviz/seo/
```

2. **Import and initialize inside your main custom script:**

```js
import SEO from './seo/seo';

document.addEventListener('DOMContentLoaded', () => {
  const seo = new SEO();
  seo.onReady();
});
```

3. **Add new SEO features**

   * Create a new file inside this folder
   * Add the method inside `seo.js`
   * Call it inside `onReady()`

---

## ✔ Notes

* Every SEO function must sit in its own file.
* Keep the logic small and isolated.
* Always update `onReady()` so the new feature actually runs.

---
