const form = document.getElementById('quiz-form');
const hasilKuis = document.getElementById('hasil-kuis');
        
// Kunci Jawaban Indikator 2
const jawabanBenar = {
    soal1: 'B',
    soal2: 'A',
    soal3: 'C',
    soal4: 'B',
    soal5: 'C'
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
            
    let skor = 0;
    const totalSoal = 5;
    const passingScore = 4;
            
    // Hitung Skor
    for (let i = 1; i <= totalSoal; i++) {
        const namaSoal = 'soal' + i;
        // Menggunakan backtick (`) yang benar untuk querySelector
        const jawabanUser = document.querySelector(`input[name="${namaSoal}"]:checked`);
        
        if (jawabanUser && jawabanUser.value === jawabanBenar[namaSoal]) {
            skor++;
        }
    }
            
    // Tampilkan Hasil
    hasilKuis.style.display = 'block';
    // Menggunakan backtick (`) untuk innerHTML
    hasilKuis.innerHTML = `Skor Anda: ${skor} dari ${totalSoal}.`;
            
    if (skor >= passingScore) {
        hasilKuis.classList.add('lulus');
        hasilKuis.classList.remove('gagal');
        // Berhasil: Lanjut ke Indikator 3
        hasilKuis.innerHTML += `<p>Selamat! Anda LULUS dan bisa melanjutkan ke Indikator 3.</p><a href="indikator3.html" class="submit-btn" style="display:block; text-align:center;">Lanjut ke Indikator 3</a>`;
    } else {
        hasilKuis.classList.add('gagal');
        hasilKuis.classList.remove('lulus');
        // Gagal: Kembali ke Materi Indikator 2
        hasilKuis.innerHTML += `<p>Maaf, Anda belum mencapai batas minimal ${passingScore}. Silakan ulangi materi dan coba kuis ini lagi.</p><a href="rangkuman.html" class="submit-btn" style="background-color:#e53e3e; display:block; text-align:center;">Lihat Rangkuman</a>`;
    }
});