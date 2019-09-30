function computer() {
    const comp = Math.random();

    if (comp < 0.33) return 'gajah';
    if (comp >= 0.33 && comp < 0.67) return 'orang';
    return 'semut';
}

function rules(comp, player) {
    // rules
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}
/*
const caseGajah = document.querySelector('.gajah');
caseGajah.addEventListener('click', function () {
    const pilComp = computer();
    const pilPlay = caseGajah.className;
    const hasil = rules(pilComp, pilPlay);

    // ganti gambar pilihan komputer
    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'img/' + pilComp + '.png');

    // tampilkan hasilnya di div info
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
})

Problem: copy ulang step tsb utk 2 gambar lainnya
*/

// timing opsi komputer
function spin() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    // set waktu mulai gambar diklik
    const start = new Date().getTime();
    // waktu tunggu pilihan komputer
    setInterval(function () {
        // hentikan pilihan setelah 1 detik (waktu dlm milisecond)
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }
        // running gambar pd array gambar
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        // reset index array
        if (i == gambar.length) i = 0;
    }, 100);
    // waktu antargambar 0.1 s
}

// ambil semua list gambar pilihan player
const opsi = document.querySelectorAll('li img');
opsi.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilComp = computer();
        const pilPlay = pil.className;
        const hasil = rules(pilComp, pilPlay);

        // panggil fungsi spin
        spin();
        // keluarkan hasil setelah fungsi spin berhenti
        setTimeout(function () {
            // ganti gambar pilihan komputer
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + pilComp + '.png');

            // tampilkan hasilnya di div info
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    });
});