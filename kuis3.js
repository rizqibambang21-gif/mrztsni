const form = document.getElementById('quiz-form');
const hasilKuis = document.getElementById('hasil-kuis');
        
// Kunci Jawaban Indikator 3
const jawabanBenar = {
    soal1: 'B',
    soal2: 'B',
    soal3: 'B',
    soal4: 'B',
    soal5: 'B'
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
        // Berhasil: Selesai
        hasilKuis.innerHTML += `<p>Selamat! Anda LULUS dan telah menyelesaikan pembelajaran Indikator 3.</p><a href="rangkuman.html" class="submit-btn" style="display:block; text-align:center;">Lihat Rangkuman</a>`;
    } else {
        hasilKuis.classList.add('gagal');
        hasilKuis.classList.remove('lulus');
        // Gagal: Kembali ke Materi Indikator 3
        hasilKuis.innerHTML += `<p>Maaf, Anda belum mencapai batas minimal ${passingScore}. Silakan ulangi materi dan coba kuis ini lagi.</p><a href="rangkuman.html" class="submit-btn" style="background-color:#e53e3e; display:block; text-align:center;">Lihat Rangkuman</a>`;
    }
});