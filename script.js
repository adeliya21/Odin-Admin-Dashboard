document.querySelector('.theme-toggle').addEventListener('click', setTheme)

function setTheme() {
    const body = document.body;
    const newTheme = body.className === 'dark' ? 'light' : 'dark';
    body.className = newTheme;
}