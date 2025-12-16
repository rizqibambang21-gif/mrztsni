document.getElementById('ganjil-btn').addEventListener('click', function() {
    showPertemuan('Semester Ganjil');
});

document.getElementById('genap-btn').addEventListener('click', function() {
    showPertemuan('Semester Genap');
});

function showPertemuan(semester) {
    const container = document.getElementById('pertemuan-container');
    const title = document.getElementById('semester-title');
    
    // Jika sudah ada semester yang dipilih, animasi fade out dulu
    if (container.classList.contains('show')) {
        container.classList.remove('show');
        setTimeout(() => {
            title.textContent = semester;
            container.classList.add('show');
        }, 500); // Waktu fade out
    } else {
        // Jika pertama kali, langsung show
        title.textContent = semester;
        container.classList.add('show');
    }
}