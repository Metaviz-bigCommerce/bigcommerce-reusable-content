# bigcommerce-reusable-content

This repository acts as a **central library of reusable BigCommerce theme customizations**.  
If any developer builds a unique feature, fix, optimization, or JS/CSS/PHP tweak, it must be added here so the team can reuse it instead of rebuilding the same task every time.

---

## 🔥 Purpose

- Prevent repeated work  
- Standardize customizations across all BigCommerce projects  
- Provide ready-to-use code blocks for common SEO, UI, UX, and performance tasks  
- Save time on new client themes by checking this repo first  
- Maintain a single source of truth for our team’s custom solutions

---

## 📌 How to Use

### 1. **Before starting any customization**
- Check this repo.
- Search the folders relevant to your task: SEO, JS Enhancements, Theme Overrides, etc.

### 2. **If the customization already exists**
- Copy the exact implementation.
- Follow the usage notes.

### 3. **If the customization is new**
- Create a new folder under the correct category.
- Add:
  - Code file(s)
  - `README.md` explaining the purpose, usage, and project notes

### 4. **Push with clear commit messages**
Example:
```
feat(seo): add canonical tag injector script
```

---

## 🗂 Repository Structure

```
bigcommerce-reusable-content/
│
├── seo/
│   ├── canonical-tag/
│   ├── meta-tag-updates/
│   └── rich-snippets/
│
├── js-enhancements/
│   ├── dynamic-pricing/
│   ├── custom-event-triggers/
│   └── dom-fixes/
│
├── style-overrides/
│   ├── product-page/
│   ├── cart-page/
│   └── header-footer/
│
├── storefront-api/
│   ├── fetch-products-example/
│   └── graphql-snippets/
│
└── README.md
```

---

## 💠 Contribution Rules

1. **Always document your customization.**  
2. **Never push sensitive data (API keys, store URLs, credentials).**  
3. **Use clear folder names and readable code.**  
4. **One feature per pull request.**  
5. **Add screenshots if the change is frontend-related.**

---

## 🏷 Tags & Conventions

- Use lowercase folder names  
- Use hyphens for spacing  
- Use semantic commit messages  
- Add usage examples inside the customization folder  

---

## 👥 Maintainers

- BigCommerce Dev Team (GitHub Org)

---

## ✔ Summary

This repo exists to make our lives easier.  
Before coding anything, **check here first**.  
If it’s new, **add it**.  
If it already exists, **reuse it**.  
Simple.
