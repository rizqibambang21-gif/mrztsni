document.addEventListener("DOMContentLoaded", function () {
    // 1. Inject Navbar HTML
    const navbarHTML = `
    <div class="navbar">
        <div class="navbar-brand">Teman Belajar</div>
        <div class="navbar-links">
            <a href="home.html" id="nav-home">Home</a>
            <a href="profil-sekolah.html" id="nav-profil">Profil Sekolah</a>
            <a href="kelas.html" id="nav-kelas">Kelas</a>
            <a href="index.html" id="nav-auth">Login</a>
        </div>
    </div>
    `;

    // Insert navbar at the top of the body
    // We create a wrapper to avoid overwriting body content if we used innerHTML on body
    const navPlaceholder = document.createElement('div');
    navPlaceholder.innerHTML = navbarHTML;
    document.body.insertBefore(navPlaceholder.firstElementChild, document.body.firstChild);

    // 2. Highlight Active Link
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'home.html';

    function setActive(id) {
        const el = document.getElementById(id);
        if (el) {
            el.style.borderBottom = "3px solid white";
            el.style.paddingBottom = "5px";
        }
    }

    if (page.includes('home')) {
        setActive('nav-home');
    } else if (page.includes('profil')) {
        setActive('nav-profil');
    } else if (page.includes('kelas') || page.includes('sertifikat') || page.includes('peringkat') || page.includes('quiz')) {
        setActive('nav-kelas');
    }

    // 3. Handle Auth State (Login/Logout)
    // We rely on the existing Firebase instance if available, or localStorage for UI speed
    const authLink = document.getElementById('nav-auth');

    function updateAuthUI(user) {
        if (user) {
            authLink.textContent = "Logout";
            authLink.href = "#";
            authLink.onclick = (e) => {
                e.preventDefault();
                // Logout logic
                if (window.firebase && window.firebase.auth) {
                    window.firebase.auth().signOut().then(() => {
                        localStorage.removeItem('isLoggedIn');
                        window.location.href = "home.html";
                    });
                } else {
                    // Fallback
                    localStorage.removeItem('isLoggedIn');
                    window.location.href = "home.html";
                }
            };
        } else {
            authLink.textContent = "Login";
            authLink.href = "index.html";
            authLink.onclick = null;
        }
    }

    // Check LocalStorage first for immediate UI update (prevents flickering)
    if (localStorage.getItem('isLoggedIn') === 'true') {
        updateAuthUI(true);
    }

    // Check Firebase Auth State (if Firebase is loaded)
    // We use a small timeout to let Firebase SDK load if it's included in the head
    setTimeout(() => {
        if (window.firebase && window.firebase.auth) {
            window.firebase.auth().onAuthStateChanged((user) => {
                updateAuthUI(user);
                if (user) localStorage.setItem('isLoggedIn', 'true');
                else localStorage.removeItem('isLoggedIn');
            });
        }
    }, 500);
});
