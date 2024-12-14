const sideMenu = document.querySelector("#sideMenu")
const navbar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openMenu() {
    sideMenu.style.transform = "translateX(-16rem)"
}

function closeMenu() {
    sideMenu.style.transform = "translateX(16rem)"
}


window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
    } else {
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
    }
})

// -----------------------------dark mode and light mode ----------------------------------


document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)


function toggleTheme(params) {
    document.documentElement.classList.toggle('dark')
if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark'
}else{
    localStorage.theme = 'light'
}
}