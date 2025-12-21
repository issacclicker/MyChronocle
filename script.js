const root = document.documentElement;
const key = "theme";

function setTheme(theme) {
  if (theme === "light") root.classList.add("light");
  else root.classList.remove("light");
  localStorage.setItem(key, theme);
}

function initTheme() {
  const saved = localStorage.getItem(key);
  if (saved) return setTheme(saved);

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  setTheme(prefersLight ? "light" : "dark");
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const isLight = root.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("updated").textContent = new Date().toISOString().slice(0, 10);

initTheme();
