function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    const themeToggleBtn = document.querySelector(".theme-toggle");
    themeToggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const themeToggleBtn = document.querySelector(".theme-toggle");
    themeToggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
});
