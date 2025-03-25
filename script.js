document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.querySelector(".close-btn");
    const hamburger = document.querySelector(".hamburger");
    const subMenus = document.querySelectorAll("#mobile-menu .submenu");
    const desktopSubMenus = document.querySelectorAll(".desktop-menu .submenu");

    // Fungsi Toggle Menu Mobile
    function toggleMenu() {
        mobileMenu.classList.toggle("active");
        if (!mobileMenu.classList.contains("active")) {
            resetSubMenus(); // Reset submenu jika menu ditutup
        }
    }

    // Fungsi untuk menandai menu yang aktif
document.addEventListener("DOMContentLoaded", function () {
    // Ambil URL saat ini
    let currentPage = window.location.pathname.split("/").pop();

    // Ambil semua link menu
    let menuLinks = document.querySelectorAll("nav a");

    // Loop untuk menandai menu aktif
    menuLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

    // Fungsi Toggle Submenu (Mobile)
    function toggleSubMenu(event) {
        event.preventDefault();
        let submenuItem = event.target.parentElement;
        
        // Jika submenu sudah terbuka, tutup
        if (submenuItem.classList.contains("open")) {
            submenuItem.classList.remove("open");
            submenuItem.style.paddingBottom = ""; // Reset padding-bottom ke default
        } else {
            submenuItem.classList.add("open");
            submenuItem.style.paddingBottom = "0px"; // Atur padding-bottom ke 0px saat dibuka
        }
    }

    // Fungsi Reset Semua Submenu (Mobile)
    function resetSubMenus() {
        subMenus.forEach(submenu => {
            submenu.classList.remove("open");
            submenu.style.paddingBottom = ""; // Reset padding-bottom
        });
    }

    // Tambahkan Event Listener ke Mobile Menu
    hamburger.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
    document.querySelectorAll("#mobile-menu .submenu > a").forEach(menu => {
        menu.addEventListener("click", toggleSubMenu);
    });

    // Tambahkan Event Listener ke Desktop Menu
    desktopSubMenus.forEach(menu => {
        menu.querySelector("a").addEventListener("click", function (e) {
            e.preventDefault();
            let submenuItem = this.parentElement;

            // Jika submenu sudah terbuka, tutup
            if (submenuItem.classList.contains("active")) {
                submenuItem.classList.remove("active");
                submenuItem.style.paddingBottom = ""; // Reset padding-bottom ke default
            } else {
                submenuItem.classList.add("active");
                submenuItem.style.paddingBottom = "0px"; // Atur padding-bottom ke 0px saat dibuka
            }
        });
    });
});
