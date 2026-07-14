const STORAGE_KEY = "ledgrx-theme";
const THEME_ATTRIBUTE = "data-theme";

function updateToggleUI(theme) {
  const outerToggle = document.querySelector(".outer-toggle");
  const innerToggle = document.querySelector(".inner-toggle");

  if (!outerToggle || !innerToggle) {
    return;
  }

  const isDark = theme === "dark";
//   outerToggle.classList.toggle("justify-start", !isDark);
//   outerToggle.classList.toggle("justify-end", isDark);
  outerToggle.classList.toggle("bg-[#1e1e1e]", !isDark);
  outerToggle.classList.toggle("bg-(--toggle-off)", isDark);
  innerToggle.style.transform = isDark ? "translateX(100%)" : "translateX(0%)";
}

export function applyTheme(theme = "light") {
  const resolvedTheme = theme === "dark" ? "dark" : "light";

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolvedTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.style.colorScheme = resolvedTheme;
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, resolvedTheme);
  }

  updateToggleUI(resolvedTheme);
  return resolvedTheme;
}

export function initTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return applyTheme(savedTheme);
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return applyTheme(prefersDark ? "dark" : "light");
}

export function toggleTheme() {
  if (typeof document === "undefined") {
    return "light";
  }

  const currentTheme = document.documentElement.getAttribute(THEME_ATTRIBUTE) === "dark" ? "dark" : "light";
  return applyTheme(currentTheme === "dark" ? "light" : "dark");
}

export function bindThemeToggle() {
  const outerToggle = document.querySelector(".outer-toggle");

  if (!outerToggle) {
    return;
  }

  outerToggle.onclick = () => {
    toggleTheme();
  };
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initTheme();
      bindThemeToggle();
    });
  } else {
    initTheme();
    bindThemeToggle();
  }
}

export default {
  applyTheme,
  initTheme,
  toggleTheme,
  bindThemeToggle,
};