const form = document.getElementById('quiz-form');
const hasilKuis = document.getElementById('hasil-kuis');
        
// Kunci Jawaban
const jawabanBenar = {
    soal1: 'B',
    soal2: 'C',
    soal3: 'A',
    soal4: 'B',
    soal5: 'A'
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
            
    let skor = 0;
    const totalSoal = 5;
    const passingScore = 4;
            
    // Hitung Skor
    for (let i = 1; i <= totalSoal; i++) {
        const namaSoal = 'soal' + i;
        
        const jawabanUser = document.querySelector(`input[name="${namaSoal}"]:checked`); 
        
        if (jawabanUser && jawabanUser.value === jawabanBenar[namaSoal]) {
            skor++;
        }
    }
            
    // Tampilkan Hasil
    hasilKuis.style.display = 'block';
    
    // Hapus kelas hasil sebelumnya
    hasilKuis.classList.remove('lulus', 'gagal');
            
    if (skor >= passingScore) {
        hasilKuis.classList.add('lulus');
        hasilKuis.innerHTML = `Skor Anda: ${skor} dari ${totalSoal}.<p>Selamat! Anda LULUS dan bisa melanjutkan ke Indikator 2.</p><a href="indikator2.html" class="submit-btn" style="display:block; text-align:center;">Lanjut ke Indikator 2</a>`;
    } else {
        hasilKuis.classList.add('gagal');
        hasilKuis.innerHTML = `Skor Anda: ${skor} dari ${totalSoal}.<p>Maaf, Anda belum mencapai batas minimal ${passingScore}. Silakan ulangi materi dan coba kuis ini lagi.</p><a href="rangkuman.html" class="cta-button" style="background-color:#e53e3e; display:block; text-align:center;">Lihat Rangkuman</a>`;
    }
});