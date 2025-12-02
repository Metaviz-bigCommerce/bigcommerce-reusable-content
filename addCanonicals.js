  addCanonicals(){
    const url = window.location.href;

  // Remove existing canonical tags (if any)
  document.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());

  // Function to create canonical
  function setCanonical(href) {
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = href;
    document.head.appendChild(link);
  }

  // sitemap.php
  if (url.includes("/sitemap.php") && !url.includes("/sitemap/categories")) {
    setCanonical("https://www.thequeenstreasures.com/sitemap.php");
  }

  // sitemap/categories
  else if (url.includes("/sitemap/categories")) {
    setCanonical("https://www.thequeenstreasures.com/sitemap/categories");
  }

  // compare
  else if (url.includes("/compare")) {
    setCanonical("https://www.thequeenstreasures.com/compare");
  }

  // giftcertificates (main)
  else if (url.includes("/giftcertificates.php") && !url.includes("action=")) {
    setCanonical("https://www.thequeenstreasures.com/giftcertificates.php");
  }

  // giftcertificates?action=redeem
  else if (url.includes("/giftcertificates.php?action=redeem")) {
    setCanonical("https://www.thequeenstreasures.com/giftcertificates.php?action=redeem");
  }

  // giftcertificates?action=balance
  else if (url.includes("/giftcertificates.php?action=balance")) {
    setCanonical("https://www.thequeenstreasures.com/giftcertificates.php?action=balance");
  }
  }