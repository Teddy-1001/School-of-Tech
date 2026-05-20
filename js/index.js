console.log("JS loaded");
const header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add(
            "bg-gray-900/60",
            "backdrop-blur-md",
            "border-b",
            "border-black/10"
        );
    } else {
        header.classList.remove(
            "bg-gray-900/60",
            "backdrop-blur-md",
            "border-b",
            "border-white/10"
        );
    }
})

const floating = document.getElementById('floating')
const closeBtn = document.getElementById('closeFloating');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
    header.classList.add(
        "bg-gray-900/60",
        "backdrop-blur-md",
        "border-b",
        "border-black/10"
    );
    header.classList.remove("border-white/10");
} else {
    header.classList.remove(
        "bg-gray-900/60",
        "backdrop-blur-md",
        "border-b",
        "border-black/10"
    );
    header.classList.add("border-white/10");
}})


closeBtn?.addEventListener('click', () => {
    localStorage.setItem('floatingClosed', 'true');
    setTimeout(() => {
        localStorage.removeItem('floatingClosed');
    }, 3000 * 60 * 60 * 24);
    floating.classList.add('opacity-0', 'translate-y-10');
});

if (localStorage.getItem('floatingClosed') === 'true') {
    floating.classList.add('opacity-0', 'translate-y-10');
}

const mobileNav = document.getElementById('mobileNav');
const openMobileNavBtn = document.getElementById('openMobileNav');
const closeMobileNavBtn = document.getElementById('closeMobileNav');;

function openNav() {
    mobileNav.classList.remove('-translate-x-full');
}

function closeNav() {
    mobileNav.classList.add('-translate-x-full');
}

openMobileNavBtn?.addEventListener('click', openNav);
closeMobileNavBtn?.addEventListener('click', closeNav);