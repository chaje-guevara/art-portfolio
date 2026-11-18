
const gallery = document.getElementById("gallery");

artworks.forEach((art, index) => {
  const item = document.createElement("a");

  item.className = "artwork-card";
  item.href = `artwork.html?id=${encodeURIComponent(art.id)}`;

  // Alternate artwork sizes slightly
  if (index % 4 === 1) item.classList.add("tall");
  if (index % 4 === 3) item.classList.add("wide");

  const img = document.createElement("img");
  img.src = art.image;
  img.alt = art.title;
  img.loading = "lazy";

  const info = document.createElement("div");
  info.className = "artwork-info";

  const title = document.createElement("h2");
  title.textContent = art.title;

  const details = document.createElement("p");
  details.textContent = `${art.medium} · ${art.dimensions}`;

  info.append(title, details);
  item.append(img, info);
  gallery.appendChild(item);
});
