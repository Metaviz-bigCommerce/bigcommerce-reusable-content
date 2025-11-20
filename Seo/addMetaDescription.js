console.log("SEO SCRIPT EXECUTED");

// ✅ Get only the relative path (no origin, no query, no hash, no trailing slash)
const currentPath = window.location.pathname
  .replace(/\/$/, "") // remove trailing slash
  .split("?")[0]
  .split("#")[0];

console.log("Relative path =", currentPath);

// ✅ Define meta descriptions using relative paths
const metaDescriptions = {
  "/giftcertificates.php":
    "Purchase digital gift certificates for The Queen's Treasures. Choose your amount, personalize with a message, and send instantly to doll lovers today.",

  "/sitemap.php":
    "Complete site directory for The Queen's Treasures. Browse all categories, products, and pages for 18-inch doll accessories and furniture.",

  "/brands":
    "Shop all brands at The Queen's Treasures. Find Little House on the Prairie products, doll furniture, accessories, and heirloom quality collections.",

  "/sitemap/categories":
    "Explore categories of 18 inch doll furniture, clothing, accessories, and Little House on the Prairie products at The Queen's Treasures store.",
};

// ✅ Match based on path only
const description = metaDescriptions[currentPath];
if (!description) {
  console.log("No meta description for this path:", currentPath);
  return;
}

// ✅ Check if <meta name="description"> exists
let metaTag = document.querySelector('meta[name="description"]');
if (!metaTag) {
  metaTag = document.createElement("meta");
  metaTag.name = "description";
  document.head.appendChild(metaTag);
}

// ✅ Set content
metaTag.setAttribute("content", description);
console.log("Meta description set:", description);
