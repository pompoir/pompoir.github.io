const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
  localStorage.setItem('theme', theme);
  body.classList.toggle('dark-mode', theme === 'dark');
  // Update button text based on theme
  themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

function getTheme() {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme ? storedTheme : 'light';
}

// Initial theme setup
setTheme(getTheme());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});