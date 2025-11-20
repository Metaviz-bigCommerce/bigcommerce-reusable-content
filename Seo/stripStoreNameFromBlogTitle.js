let path = window.location.pathname;

// ✅ Remove unwanted brand TQT (all possible forms)
document.title = document.title
  .replace(/[-|–]+\s*The Queen's Treasures/gi, "")
  .trim();

// ✅ If it's home page
if (path === "/" || path === "") {
  document.title = "Home";
  return;
}

// ✅ Auto title only if current title is empty or still has old brand text
if (!document.title || document.title.match(/The Queen's Treasures/gi)) {
  let parts = path.replace(/^\/|\/$/g, "").split("/");

  let pageName = parts[parts.length - 1];
  pageName = pageName.replace(/-/g, " ");
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  if (parts.length > 1) {
    let section = parts[parts.length - 2];
    section = section.charAt(0).toUpperCase() + section.slice(1);
    document.title = `${section} - ${pageName}`;
  } else {
    document.title = pageName;
  }
}
