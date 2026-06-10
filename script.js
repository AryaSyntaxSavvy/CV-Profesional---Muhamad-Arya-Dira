// Mengambil elemen tombol dari HTML
const themeToggle = document.getElementById('theme-toggle');

// Mendengarkan efek klik pada tombol
themeToggle.addEventListener('click', () => {
    // Memeriksa tema yang sedang aktif saat ini
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Jika saat ini gelap, ubah ke terang
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙 Mode Gelap';
    } else {
        // Jika saat ini terang, ubah ke gelap
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Mode Terang';
    }
});