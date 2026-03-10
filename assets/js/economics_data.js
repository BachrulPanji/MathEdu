// Economics Topics Data (Ruang Edukasi - Kurikulum Terbaru)
const economicsTopics = {
    sd: {
        name: 'SD',
        color: 'emerald',
        icon: '💰',
        topics: [
            {
                id: 'eco-sd-kebutuhan-keinginan',
                name: 'Kebutuhan vs Keinginan',
                icon: '⚖️',
                concept: `<h3 class="text-xl font-bold mb-4">Kebutuhan vs Keinginan</h3>
                <p class="mb-4">Kebutuhan adalah sesuatu yang harus dipenuhi agar kita bisa hidup (seperti makan dan pakaian). Keinginan adalah sesuatu yang kita harapkan tapi tidak wajib ada.</p>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="card-glass p-3 border border-indigo-500/20">
                        <p class="font-bold text-indigo-400">✅ Kebutuhan:</p>
                        <p class="text-gray-400 text-xs text-xs">Makan, Minum, Tempat Tinggal.</p>
                    </div>
                    <div class="card-glass p-3 border border-purple-500/20">
                        <p class="font-bold text-purple-400">❌ Keinginan:</p>
                        <p class="text-gray-400 text-xs">Mainan Baru, Es Krim, HP Canggih.</p>
                    </div>
                </div>`,
                example: {
                    question: 'Siti lapar dan ingin makan nasi, tapi dia juga ingin membeli boneka. Mana yang kebutuhan?',
                    steps: ['Lapar berarti butuh tenaga.', 'Nasi adalah sumber tenaga.', 'Boneka cuma hobi.'],
                    answer: 'Nasi'
                },
                questions: [
                    { q: 'Manakah yang termasuk kebutuhan pokok?', options: ['Makan', 'Game Online', 'Mobil Mewah', 'Bioskop'], answer: 'Makan' },
                    { q: 'Keinginan adalah sesuatu yang...', options: ['Wajib ada', 'Jika tidak ada kita sakit', 'Bisa ditunda/tambahan', 'Mati jika tidak ada'], answer: 'Bisa ditunda/tambahan' },
                    { q: 'Mengapa kita perlu makan?', options: ['Biar keren', 'Kebutuhan hidup', 'Hobi saja', 'Biar kenyang doang'], answer: 'Kebutuhan hidup' },
                    { q: 'Sesuatu yang diinginkan tapi bukan syarat hidup disebut...', options: ['Kebutuhan', 'Keinginan', 'Kewajiban', 'Harta'], answer: 'Keinginan' },
                    { q: 'Manakah yang merupakan keinginan anak sekolah?', options: ['Buku Tulis', 'Baju Seragam', 'Robot Remote', 'Sepatu Sekolah'], answer: 'Robot Remote' }
                ]
            },
            {
                id: 'eco-sd-jenis-kebutuhan',
                name: 'Jenis-Jenis Kebutuhan',
                icon: '🍱',
                concept: `<h3 class="text-xl font-bold mb-4">Primer, Sekunder, Tersier</h3>
                <ul class="space-y-3 text-sm">
                    <li><b class="text-red-400">1. Primer:</b> Wajib (Sandang, Pangan, Papan).</li>
                    <li><b class="text-blue-400">2. Sekunder:</b> Pelengkap (Meja, Kursi, TV).</li>
                    <li><b class="text-yellow-400">3. Tersier:</b> Mewah (Perhiasan, Mobil Sport).</li>
                </ul>`,
                example: {
                    question: 'Rumah termasuk jenis kebutuhan apa?',
                    steps: ['Manusia butuh tempat tinggal untuk aman.', 'Wajib ada = Primer.'],
                    answer: 'Primer'
                },
                questions: [
                    { q: 'Kebutuhan yang paling utama disebut kebutuhan...', options: ['Sekunder', 'Tersier', 'Primer', 'Sampingan'], answer: 'Primer' },
                    { q: 'Kebutuhan pelengkap setelah primer terpenuhi adalah...', options: ['Primer', 'Tersier', 'Sekunder', 'Kebutuhan Hidup'], answer: 'Sekunder' },
                    { q: 'Perhiasan emas termasuk kebutuhan...', options: ['Primer', 'Sekunder', 'Tersier', 'Kewajiban'], answer: 'Tersier' },
                    { q: 'Manakah yang termasuk kebutuhan primer?', options: ['Laptop', 'Nasi', 'Sepeda', 'Jam Tangan'], answer: 'Nasi' },
                    { q: 'Sandang adalah istilah untuk kebutuhan...', options: ['Makanan', 'Pakaian', 'Rumah', 'Kendaraan'], answer: 'Pakaian' }
                ]
            },
            {
                id: 'eco-sd-sda',
                name: 'Sumber Daya Alam',
                icon: '🌍',
                concept: `<h3 class="text-xl font-bold mb-4">SDA & Pemanfaatannya</h3>
                <p class="mb-4">Sumber Daya Alam (SDA) adalah kekayaan dari alam (Tumbuhan, Air, Minyak Bumi) yang digunakan manusia.</p>`,
                example: {
                    question: 'Pemanfaatan kayu dari hutan digunakan untuk membuat?',
                    steps: ['Kayu kuat dan mudah dibentuk.', 'Bisa jadi Meja atau Kursi.'],
                    answer: 'Perabotan Rumah Tangga'
                },
                questions: [
                    { q: 'SDA yang berasal dari air disebut...', options: ['SDA Darat', 'SDA Udara', 'SDA Perairan', 'SDA Hutan'], answer: 'SDA Perairan' },
                    { q: 'Kayu jati banyak dimanfaatkan untuk...', options: ['Baterai', 'Mebel/Kursi', 'Pakaian', 'Bahan Bakar Mobil'], answer: 'Mebel/Kursi' },
                    { q: 'SDA yang bisa habis disebut SDA...', options: ['Abadi', 'Dapat diperbarui', 'Tidak dapat diperbarui', 'Liar'], answer: 'Tidak dapat diperbarui' },
                    { q: 'Minyak bumi digunakan untuk bahan bakar...', options: ['Lampu Senter', 'Kendaraan', 'Pakaian', 'Garam'], answer: 'Kendaraan' },
                    { q: 'Padi dimanfaatkan manusia sebagai sumber...', options: ['Papan', 'Pangan', 'Sandang', 'Keamanan'], answer: 'Pangan' }
                ]
            },
            {
                id: 'eco-sd-kegiatan-ekonomi',
                name: 'Produksi, Distribusi, Konsumsi',
                icon: '🏭',
                concept: `<h3 class="text-xl font-bold mb-4">Kegiatan Ekonomi</h3>
                <div class="space-y-2 text-sm">
                    <p><b>Produksi:</b> Membuat barang (Petani tanam padi).</p>
                    <p><b>Distribusi:</b> Mengirim barang (Sopir truk kirim beras).</p>
                    <p><b>Konsumsi:</b> Menggunakan barang (Kita makan nasi).</p>
                </div>`,
                example: {
                    question: 'Pedagang keliling sedang melakukan kegiatan apa?',
                    steps: ['Pedagang menyalurkan barang ke pembeli.', 'Menyalurkan = Distribusi.'],
                    answer: 'Distribusi'
                },
                questions: [
                    { q: 'Pelaku kegiatan produksi disebut...', options: ['Produsen', 'Distributor', 'Konsumen', 'Kasir'], answer: 'Produsen' },
                    { q: 'Kegiatan menyalurkan barang dari pabrik ke pasar disebut...', options: ['Produksi', 'Konsumsi', 'Distribusi', 'Koleksi'], answer: 'Distribusi' },
                    { q: 'Orang yang memakai barang hasil produksi disebut...', options: ['Distributor', 'Produsen', 'Konsumen', 'Kuli'], answer: 'Konsumen' },
                    { q: 'Penjahit yang membuat baju sedang melakukan...', options: ['Distribusi', 'Konsumsi', 'Produksi', 'Promosi'], answer: 'Produksi' },
                    { q: 'Dini membeli buku di koperasi lalu membacanya. Dini sedang...', options: ['Produksi', 'Distribusi', 'Konsumsi', 'Eksperimen'], answer: 'Konsumsi' }
                ]
            },
            {
                id: 'eco-sd-profesi',
                name: 'Profesi & Pekerjaan',
                icon: '👨‍🔧',
                concept: `<h3 class="text-xl font-bold mb-4">Profesi di Sekitar Kita</h3>
                <p class="mb-4">Setiap orang bekerja untuk memenuhi kebutuhan hidupnya. Ada pekerjaan yang menghasilkan barang dan ada yang jasa.</p>`,
                example: {
                    question: 'Seorang Guru adalah pekerjaan yang menghasilkan?',
                    steps: ['Guru membagikan ilmu.', 'Ilmu bukan benda fisik tapi manfaat.', 'Jasa.'],
                    answer: 'Jasa'
                },
                questions: [
                    { q: 'Petani adalah pekerjaan yang menghasilkan...', options: ['Barang', 'Jasa', 'Ilmu', 'Rahasia'], answer: 'Barang' },
                    { q: 'Pekerjaan yang memberikan pelayanan seperti Dokter disebut...', options: ['Produsen Benda', 'Pemberi Jasa', 'Distributor Pupuk', 'Karyawan'], answer: 'Pemberi Jasa' },
                    { q: 'Nelayan bekerja di laut untuk menghasilkan...', options: ['Kayu', 'Ikan', 'Besi', 'Semu'], answer: 'Ikan' },
                    { q: 'Siapa yang bertugas menjaga keamanan lingkungan di perumahan?', options: ['Koki', 'Satpam', 'Montir', 'Masinis'], answer: 'Satpam' },
                    { q: 'Montir adalah orang yang bekerja di bidang...', options: ['Pendidikan', 'Kesehatan', 'Bengkel/Mesin', 'Pertanian'], answer: 'Bengkel/Mesin' }
                ]
            },
            {
                id: 'eco-sd-fungsi-uang',
                name: 'Pengertian & Fungsi Uang',
                icon: '💵',
                concept: `<h3 class="text-xl font-bold mb-4">Apa Itu Uang?</h3>
                <p class="mb-4">Uang adalah alat pembayaran yang sah. Tanpa uang, dulu orang tukar barang (Barter).</p>
                <p class="text-indigo-400 font-bold">Fungsi Utama: Alat Tukar.</p>`,
                example: {
                    question: 'Apa alat pembayaran yang paling umum digunakan sekarang?',
                    steps: ['Barter sudah jarang.', 'Kita pakai Rupiah di Indonesia.'],
                    answer: 'Uang'
                },
                questions: [
                    { q: 'Fungsi utama uang adalah sebagai alat...', options: ['Koleksi', 'Mainan', 'Tukar/Bayar', 'Hiasan'], answer: 'Tukar/Bayar' },
                    { q: 'Sebelum ada uang, manusia bertukar barang yang disebut...', options: ['Bonus', 'Barter', 'Kredit', 'Gratis'], answer: 'Barter' },
                    { q: 'Uang di Indonesia namanya...', options: ['Dollar', 'Yen', 'Rupiah', 'Ringgit'], answer: 'Rupiah' },
                    { q: 'Syarat uang haruslah bersifat...', options: ['Mudah rusak', 'Nilainya tetap/stabil', 'Berat sekali', 'Bau busuk'], answer: 'Nilainya tetap/stabil' },
                    { q: 'Uang logam dan uang kertas dikeluarkan oleh...', options: ['Warung', 'Sekolah', 'Bank Indonesia', 'Pabrik Mainan'], answer: 'Bank Indonesia' }
                ]
            },
            {
                id: 'eco-sd-menabung',
                name: 'Manfaat Menabung',
                icon: '🐷',
                concept: `<h3 class="text-xl font-bold mb-4">Ayo Menabung!</h3>
                <p class="mb-4">Menabung adalah menyisihkan sebagian uang saku untuk masa depan atau membeli barang yang diinginkan nanti.</p>
                <ul class="text-sm list-disc pl-5 text-gray-400">
                    <li>Belajar hidup hemat.</li>
                    <li>Punya simpanan saat darurat.</li>
                    <li>Bisa beli barang mahal tanpa berhutang.</li>
                </ul>`,
                example: {
                    question: 'Andi dapat uang saku 10rb, dia jajan 7rb. Berapa yang bisa ditabung?',
                    steps: ['Sisa = 10rb - 7rb.', '3rb bisa dimasukkan celengan.'],
                    answer: '3.000 Rupiah'
                },
                questions: [
                    { q: 'Menabung paling baik dilakukan di...', options: ['Jalan raya', 'Celengan atau Bank', 'Tempat sampah', 'Mana saja'], answer: 'Celengan atau Bank' },
                    { q: 'Manfaat menabung adalah belajar hidup...', options: ['Boros', 'Malas', 'Hemat', 'Marah'], answer: 'Hemat' },
                    { q: 'Uang yang kita sisihkan untuk ditabung diambil dari...', options: ['Uang teman', 'Uang Saku/Pendapatan', 'Uang mainan', 'Pencurian'], answer: 'Uang Saku/Pendapatan' },
                    { q: 'Salah satu tujuan menabung adalah...', options: ['Habiskan uang', 'Banyak hutang', 'Persediaan masa depan', 'Biar sombong'], answer: 'Persediaan masa depan' },
                    { q: 'Pepatah "Sedikit demi sedikit, lama-lama menjadi..." cocok untuk menabung?', options: ['Hilang', 'Banyak/Bukit', 'Lelah', 'Bosan'], answer: 'Banyak/Bukit' }
                ]
            },
            {
                id: 'eco-sd-harga-nilai',
                name: 'Harga & Nilai Barang',
                icon: '🏷️',
                concept: `<h3 class="text-xl font-bold mb-4">Harga & Nilai</h3>
                <p class="mb-4">Harga adalah jumlah uang yang harus dibayar. Nilai adalah kegunaan barang bagi kita.</p>`,
                example: {
                    question: 'Kenapa harga tas lebih mahal dari pensil?',
                    steps: ['Bahan tas lebih banyak.', 'Membuat tas lebih sulit.'],
                    answer: 'Biaya produksinya lebih besar'
                },
                questions: [
                    { q: 'Jumlah uang yang harus dibayar untuk dapat barang disebut...', options: ['Gaji', 'Harga', 'Hadiah', 'Sumbangan'], answer: 'Harga' },
                    { q: 'Barang yang sulit dicari biasanya harganya akan...', options: ['Turun', 'Gratis', 'Mahal/Naik', 'Standar'], answer: 'Mahal/Naik' },
                    { q: 'Besar kecilnya harga ditentukan oleh...', options: ['Warna barang saja', 'Kualitas & Kelangkaan', 'Nama pasar', 'Bau barang'], answer: 'Kualitas & Kelangkaan' },
                    { q: 'Tempat untuk melihat daftar harga di supermarket adalah...', options: ['Kasir', 'Label Harga', 'Gudang', 'Lantai'], answer: 'Label Harga' },
                    { q: 'Nilai barang ditentukan oleh seberapa besar...', options: ['Beratnya', 'Warnanya', 'Manfaatnya', 'Lamanya'], answer: 'Manfaatnya' }
                ]
            },
            {
                id: 'eco-sd-pasar',
                name: 'Pasar Tradisional vs Modern',
                icon: '🏪',
                concept: `<h3 class="text-xl font-bold mb-4">Pasar Tradisional vs Modern</h3>
                <div class="grid grid-cols-2 gap-4 text-xs">
                    <div class="card-glass p-2 border-emerald-500/30">
                        <p class="font-bold">🏘️ Tradisional:</p>
                        <p>Bisa tawar-menawar, terbuka, becek.</p>
                    </div>
                    <div class="card-glass p-2 border-indigo-500/30">
                        <p class="font-bold">🏙️ Modern:</p>
                        <p>Harga pas, AC, tertata rapi.</p>
                    </div>
                </div>`,
                example: {
                    question: 'Ibu membeli sayur sambil menawar harga. Ibu di pasar mana?',
                    steps: ['Menawar adalah ciri pasar...', 'Tradisional.'],
                    answer: 'Pasar Tradisional'
                },
                questions: [
                    { q: 'Ciri khas pasar tradisional adalah pembeli bisa...', options: ['Marah', 'Menawar Harga', 'Makan gratis', 'Mengambil barang'], answer: 'Menawar Harga' },
                    { q: 'Supermarket dan Minimarket termasuk jenis pasar...', options: ['Ghoib', 'Tradisional', 'Modern', 'Pusat'], answer: 'Modern' },
                    { q: 'Kelebihan belanja di pasar modern adalah...', options: ['Bisa menawar', 'Tempatnya nyaman/bersih', 'Harga berubah-ubah', 'Bisa barter'], answer: 'Tempatnya nyaman/bersih' },
                    { q: 'Contoh pasar tradisional adalah...', options: ['Alfamart', 'Indomaret', 'Pasar Kaget/Pasar Desa', 'Mall'], answer: 'Pasar Kaget/Pasar Desa' },
                    { q: 'Pasar swalayan artinya pembeli dapat...', options: ['Tawar menawar', 'Ambil barang sendiri', 'Tidak usah bayar', 'Diberi hadiah'], answer: 'Ambil barang sendiri' }
                ]
            },
            {
                id: 'eco-sd-kerjasama-keluarga',
                name: 'Kerja Sama Ekonomi Keluarga',
                icon: '👨‍👩-2',
                concept: `<h3 class="text-xl font-bold mb-4">Kerja Sama di Rumah</h3>
                <p class="mb-4">Keluarga bekerja sama mencari nafkah dan mengatur pengeluaran agar semua kebutuhan tercukupi.</p>`,
                example: {
                    question: 'Ayah bekerja, Ibu mengatur uang makan, anak membantu hemat listrik. Ini contoh?',
                    steps: ['Semua anggota bekerja sama.', 'Tujuannya ekonomi keluarga stabil.'],
                    answer: 'Kerja sama ekonomi keluarga'
                },
                questions: [
                    { q: 'Tujuan utama keluarga bekerja sama dalam ekonomi adalah agar...', options: ['Bisa beli mobil terus', 'Kebutuhan tercukupi', 'Tetangga iri', 'Tidak usah sekolah'], answer: 'Kebutuhan tercukupi' },
                    { q: 'Siapa yang bertugas mencari nafkah utama biasanya?', options: ['Anak', 'Kucing', 'Orang Tua', 'Tetangga'], answer: 'Orang Tua' },
                    { q: 'Bagaimana peran anak dalam ekonomi keluarga?', options: ['Minta uang terus', 'Belajar sungguh-sungguh & hemat', 'Kerja paksa', 'Beli mainan tiap hari'], answer: 'Belajar sungguh-sungguh & hemat' },
                    { q: 'Kebiasaan mematikan lampu saat tidak dipakai membantu keluarga untuk...', options: ['Hemat pengeluaran listrik', 'Biar gelap', 'Takut hantu', 'Menabung air'], answer: 'Hemat pengeluaran listrik' },
                    { q: 'Membeli barang sesuai daftar kebutuhan Ibu adalah bentuk...', options: ['Kebencian', 'Pengeluaran bijak', 'Pemborosan', 'Kesalahan'], answer: 'Pengeluaran bijak' }
                ]
            },
            {
                id: 'eco-sd-barang-jasa',
                name: 'Barang vs Jasa',
                icon: '📦',
                concept: `<h3 class="text-xl font-bold mb-4">Perbedaan Barang & Jasa</h3>
                <p class="mb-4"><b>Barang:</b> Bisa dilihat dan dipegang (Sepatu).<br><b>Jasa:</b> Dirasakan manfaatnya tapi tidak berwujud benda (Potong rambut).</p>`,
                example: {
                    question: 'Saat kamu naik Gojek, yang kamu beli adalah?',
                    steps: ['Motor tetap punya abangnya.', 'Kamu cuma diantar sampai tujuan.', 'Manfaat perjalanan = Jasa.'],
                    answer: 'Jasa'
                },
                questions: [
                    { q: 'Manakah yang termasuk produk jasa?', options: ['Buku', 'Baju', 'Les Privat/Mengajar', 'Pensil'], answer: 'Les Privat/Mengajar' },
                    { q: 'Barang adalah produk yang memiliki...', options: ['Bayangan', 'Wujud fisik', 'Nyawa', 'Mata'], answer: 'Wujud fisik' },
                    { q: 'Tukang cukur rambut memberikan pelayanan berupa...', options: ['Barang', 'Jasa', 'Uang', 'Makanan'], answer: 'Jasa' },
                    { q: 'Sepatu, tas, dan penggaris adalah contoh...', options: ['Jasa', 'Barang', 'Perasaan', 'Hobi'], answer: 'Barang' },
                    { q: 'Bengkel mobil melayani perbaikan kendaraan, artinya menjual...', options: ['Mobil baru', 'Jasa perbaikan', 'Makanan ringan', 'Pakaian montir'], answer: 'Jasa perbaikan' }
                ]
            },
            {
                id: 'eco-sd-skala-prioritas',
                name: 'Skala Prioritas',
                icon: '🔝',
                concept: `<h3 class="text-xl font-bold mb-4">Urutan Kepentingan</h3>
                <p class="mb-4">Memilih mana yang harus dibeli duluan berdasarkan tingkat kepentingan.</p>`,
                example: {
                    question: 'Andi butuh buku tulis (besok sekolah) dan mainan robot (sedang tren). Mana prioritasnya?',
                    steps: ['Sekolah adalah masa depan.', 'Buku wajib ada besok.', 'Mainan bisa nanti.'],
                    answer: 'Buku Tulis'
                },
                questions: [
                    { q: 'Mendahulukan hal yang paling penting disebut...', options: ['Boros', 'Prioritas/Skala Prioritas', 'Malas', 'Hadiah'], answer: 'Prioritas/Skala Prioritas' },
                    { q: 'Apa yang harus dibeli pertama kali?', options: ['Mainan', 'Makanan Pokok', 'Baju Pesta', 'Game Console'], answer: 'Makanan Pokok' },
                    { q: 'Skala prioritas dibuat agar uang kita...', options: ['Cepat habis', 'Digunakan dengan bijak', 'Diambil orang', 'Tidak laku'], answer: 'Digunakan dengan bijak' },
                    { q: 'Kebutuhan yang tidak mendesak sebaiknya...', options: ['Dibeli segera', 'Ditunda', 'Dipakai', 'Dibuang'], answer: 'Ditunda' },
                    { q: 'Jika uang hanya cukup untuk satu: Beras atau Coklat?', options: ['Beras', 'Coklat', 'Dua-duanya', 'Tidak beli'], answer: 'Beras' }
                ]
            },
            {
                id: 'eco-sd-hemat-bijak',
                name: 'Sikap Hemat & Bijak',
                icon: '💡',
                concept: `<h3 class="text-xl font-bold mb-4">Bijak Berbelanja</h3>
                <p class="mb-4">Hemat artinya menggunakan sesuatu secukupnya, tidak berlebihan.</p>`,
                example: {
                    question: 'Kenapa kita harus mematikan air keran jika sudah penuh?',
                    steps: ['Agar air tidak terbuang.', 'Agar tagihan air tidak mahal.', 'Hemat sumber daya.'],
                    answer: 'Menghindari pemborosan'
                },
                questions: [
                    { q: 'Kebalikan dari hidup hemat adalah...', options: ['Rajin', 'Kikir', 'Boros', 'Pandai'], answer: 'Boros' },
                    { q: 'Cara bijak berbelanja adalah dengan...', options: ['Beli semua yang bagus', 'Membuat daftar belanja', 'Membawa semua uang', 'Marah pada pedagang'], answer: 'Membuat daftar belanja' },
                    { q: 'Gunakan barang yang masih layak pakai adalah perilaku...', options: ['Pelit', 'Hemat', 'Miskin', 'Aneh'], answer: 'Hemat' },
                    { q: 'Anak yang hemat akan banyak memiliki...', options: ['Musuh', 'Simpanan/Tabungan', 'Mainan rusak', 'Masalah'], answer: 'Simpanan/Tabungan' },
                    { q: 'Hemat pangkal...', options: ['Miskin', 'Kaya', 'Lapar', 'Marah'], answer: 'Kaya' }
                ]
            },
            {
                id: 'eco-sd-peran-keluarga',
                name: 'Peran Anggota Keluarga',
                icon: '🏡',
                concept: `<h3 class="text-xl font-bold mb-4">Peran di Rumah</h3>
                <p class="mb-4">Orang tua berperan sebagai pencari nafkah, anak membantu dengan cara belajar dan rajin menjaga barang milik sendiri.</p>`,
                example: {
                    question: 'Membantu Ibu menyiapkan masakan di rumah menghemat?',
                    steps: ['Mengurangi biaya makan di luar.', 'Kerjasama keluarga.'],
                    answer: 'Biaya pengeluaran makan'
                },
                questions: [
                    { q: 'Siapa yang bertanggung jawab mengatur keuangan rumah tangga biasanya?', options: ['Ayah/Ibu', 'Pembantu', 'Anak bayi', 'Kakek'], answer: 'Ayah/Ibu' },
                    { q: 'Tugas anak di rumah untuk membantu ekonomi adalah kerna...', options: ['Bekerja di pabrik', 'Rajin belajar & rawat barang', 'Minta jajan mahal', 'Bermain terus'], answer: 'Rajin belajar & rawat barang' },
                    { q: 'Ayah bekerja sebagai pilot untuk...', options: ['Bersenang-senang saja', 'Mencari nafkah keluarga', 'Terbang bebas', 'Tidur di pesawat'], answer: 'Mencari nafkah keluarga' },
                    { q: 'Kerjasama keluarga dalam menghemat listrik adalah peran...', options: ['PLN', 'Semua anggota keluarga', 'Ibu saja', 'Ayah saja'], answer: 'Semua anggota keluarga' },
                    { q: 'Kebahagiaan keluarga akan terjaga jika kebutuhan...', options: ['Tidak terpenuhi', 'Banyak hutang', 'Terpenuhi dengan baik', 'Sangat mewah'], answer: 'Terpenuhi dengan baik' }
                ]
            },
            {
                id: 'eco-sd-rupiah',
                name: 'Mengenal Mata Uang Rupiah',
                icon: '🇮🇩',
                concept: `<h3 class="text-xl font-bold mb-4">Uang Rupiah</h3>
                <p class="mb-4">Mata uang resmi Indonesia adalah Rupiah (Rp). Ada dua jenis: Logam dan Kertas.</p>`,
                example: {
                    question: 'Berapa nilai dua lembar uang lima ribuan?',
                    steps: ['5.000 + 5.000 = 10.000.'],
                    answer: 'Sepuluh Ribu Rupiah'
                },
                questions: [
                    { q: 'Singkatan resmi mata uang Rupiah adalah...', options: ['RU', 'RI', 'IDR/Rp', 'RPN'], answer: 'IDR/Rp' },
                    { q: 'Berapa nilai uang logam paling kecil yang umum saat ini?', options: ['Rp1', 'Rp50', 'Rp100', 'Rp500'], answer: 'Rp100' },
                    { q: 'Uang kertas senilai 50.000 berwarna dominan...', options: ['Merah', 'Biru', 'Hijau', 'Ungu'], answer: 'Biru' },
                    { q: 'Siapa pahlawan di uang Rp100.000 lama?', options: ['Ir. Soekarno & Moh. Hatta', 'Ki Hajar Dewantara', 'Diponegoro', 'Pattimura'], answer: 'Ir. Soekarno & Moh. Hatta' },
                    { q: 'Tempat menukarkan uang yang rusak secara resmi adalah...', options: ['Pasar', 'Bank Indonesia', 'Warnet', 'Kantin'], answer: 'Bank Indonesia' }
                ]
            }
        ]
    },
    smp: {
        name: 'SMP',
        color: 'sky',
        icon: '📈',
        topics: [
            {
                id: 'eco-smp-kelangkaan',
                name: 'Kelangkaan (Scarcity)',
                icon: '📉',
                concept: `<h3 class="text-xl font-bold mb-4">Masalah Kelangkaan</h3>
                <p class="mb-4">Kelangkaan adalah kondisi di mana kebutuhan manusia tidak terbatas, sedangkan alat pemuas kebutuhan (barang dan jasa) jumlahnya terbatas.</p>
                <p class="text-red-400 font-bold mb-2">Penyebab Kelangkaan:</p>
                <ul class="text-sm list-disc pl-5 text-gray-400">
                    <li>Pertumbuhan penduduk yang cepat.</li>
                    <li>Keterbatasan kemampuan produksi.</li>
                    <li>Bencana alam.</li>
                    <li>Keserakahan manusia.</li>
                </ul>`,
                example: {
                    question: 'Di sebuah desa kecil, air bersih sangat sulit didapat saat musim kemarau panjang. Apa yang harus dilakukan warga?',
                    steps: ['Menggunakan air hanya untuk kebutuhan pokok.', 'Mencari sumber air alternatif.', 'Melakukan penghematan (skala prioritas).'],
                    answer: 'Melakukan penghematan dan menentukan skala prioritas penggunaan air'
                },
                questions: [
                    { q: 'Inti dari masalah ekonomi adalah...', options: ['Uang yang sedikit', 'Kelangkaan', 'Harga yang mahal', 'Banyaknya pedagang'], answer: 'Kelangkaan' },
                    { q: 'Kebutuhan manusia sifatnya...', options: ['Terbatas', 'Tidak terbatas', 'Sedikit', 'Mudah terpenuhi'], answer: 'Tidak terbatas' },
                    { q: 'Salah satu penyebab kelangkaan sumber daya alam adalah...', options: ['Reboisasi', 'Eksploitasi berlebihan', 'Konservasi', 'Menabung'], answer: 'Eksploitasi berlebihan' },
                    { q: 'Cara paling tepat mengatasi kelangkaan akibat terbatasnya alat pemuas adalah...', options: ['Membeli sebanyak-banyaknya', 'Menentukan skala prioritas', 'Hura-hura', 'Mengabaikan kebutuhan'], answer: 'Menentukan skala prioritas' },
                    { q: 'Yang bukan penyebab kelangkaan adalah...', options: ['Bencana alam', 'Pertumbuhan penduduk', 'Kemajuan teknologi produksi', 'Keterbatasan SDA'], answer: 'Kemajuan teknologi produksi' }
                ]
            },
            {
                id: 'eco-smp-sistem-ekonomi',
                name: 'Sistem Ekonomi',
                icon: '🏗️',
                concept: `<h3 class="text-xl font-bold mb-4">Mengenal Sistem Ekonomi</h3>
                <div class="space-y-4 text-sm">
                    <p><b>1. Tradisional:</b> Berdasarkan adat istiadat dan barter.</p>
                    <p><b>2. Pasar (Liberal):</b> Diatur oleh permintaan dan penawaran (swasta bebas).</p>
                    <p><b>3. Komando (Sosialis):</b> Diatur sepenuhnya oleh pemerintah.</p>
                    <p><b>4. Campuran:</b> Gabungan antara pemerintah dan swasta.</p>
                </div>`,
                example: {
                    question: 'Sistem ekonomi yang memberikan kebebasan penuh kepada masyarakat untuk memiliki faktor produksi disebut?',
                    steps: ['Kebebasan penuh = Liberal.', 'Nama lainnya adalah sistem ekonomi pasar.'],
                    answer: 'Sistem Ekonomi Pasar'
                },
                questions: [
                    { q: 'Sistem ekonomi yang masih menggunakan cara barter adalah...', options: ['Pasar', 'Komando', 'Tradisional', 'Campuran'], answer: 'Tradisional' },
                    { q: 'Di sistem ekonomi komando, siapa yang paling dominan?', options: ['Swasta', 'Pedagang', 'Pemerintah', 'Konsumen'], answer: 'Pemerintah' },
                    { q: 'Nama lain sistem ekonomi pasar adalah...', options: ['Sosialis', 'Liberal', 'Adat', 'Pusat'], answer: 'Liberal' },
                    { q: 'Kelebihan sistem ekonomi pasar adalah...', options: ['Tidak ada pengangguran', 'Kreativitas tinggi', 'Pemerintah berkuasa', 'Barang murah'], answer: 'Kreativitas tinggi' },
                    { q: 'Indonesia menganut sistem ekonomi...', options: ['Pasar Murni', 'Komando Murni', 'Demokrasi Ekonomi (Campuran)', 'Tradisional'], answer: 'Demokrasi Ekonomi (Campuran)' }
                ]
            },
            {
                id: 'eco-smp-pelaku-ekonomi',
                name: 'Pelaku Ekonomi',
                icon: '👥',
                concept: `<h3 class="text-xl font-bold mb-4">Siapa Saja Pelaku Ekonomi?</h3>
                <div class="grid md:grid-cols-3 gap-3 text-xs">
                    <div class="card-glass p-2 border-indigo-500/20">
                        <p class="font-bold">🏠 RTK:</p>
                        <p>Rumah Tangga Konsumsi (Konsumen & penyedia faktor produksi).</p>
                    </div>
                    <div class="card-glass p-2 border-emerald-500/20">
                        <p class="font-bold">🏭 RTP:</p>
                        <p>Rumah Tangga Produksi (Produsen penghasil barang/jasa).</p>
                    </div>
                    <div class="card-glass p-2 border-purple-500/20">
                        <p class="font-bold">🏛️ Pemerintah:</p>
                        <p>Pengatur kebijakan dan penyedia fasilitas publik.</p>
                    </div>
                </div>`,
                example: {
                    question: 'Keluarga Andi menyewakan tanahnya untuk dijadikan pabrik. Dalam hal ini RTK menerima?',
                    steps: ['RTK menyediakan faktor produksi (tanah).', 'Balas jasanya adalah Sewa (Rent).'],
                    answer: 'Sewa (Rent)'
                },
                questions: [
                    { q: 'Pelaku ekonomi yang menyediakan faktor produksi adalah...', options: ['RTK', 'RTP', 'Pemerintah', 'Luar Negeri'], answer: 'RTK' },
                    { q: 'Balas jasa yang diterima RTK karena bekerja di sebuah perusahaan adalah...', options: ['Bunga', 'Gaji/Upah', 'Sewa', 'Laba'], answer: 'Gaji/Upah' },
                    { q: 'Tugas utama RTP adalah...', options: ['Memakai barang', 'Membuat/Menghasilkan barang', 'Memungut pajak', 'Membayar gaji'], answer: 'Membuat/Menghasilkan barang' },
                    { q: 'Pelaku ekonomi yang bertugas sebagai regulator (pengatur) adalah...', options: ['Konsumen', 'Produsen', 'Pemerintah', 'Bank'], answer: 'Pemerintah' },
                    { q: 'Pajak yang dibayarkan masyarakat digunakan oleh pemerintah untuk...', options: ['Gaji presiden saja', 'Pembangunan fasilitas umum', 'Membeli senjata pribadi', 'Simpanan bank'], answer: 'Pembangunan fasilitas umum' }
                ]
            },
            {
                id: 'eco-smp-permintaan',
                name: 'Konsep Permintaan',
                icon: '🛒',
                concept: `<h3 class="text-xl font-bold mb-4">Hukum Permintaan</h3>
                <p class="mb-4">"Jika harga naik, maka jumlah barang yang diminta akan turun. Jika harga turun, maka jumlah barang yang diminta akan naik."</p>
                <p class="text-indigo-400 font-bold">Faktor yang Mempengaruhi:</p>
                <ul class="text-sm list-disc pl-5 text-gray-400">
                    <li>Harga barang itu sendiri.</li>
                    <li>Pendapatan masyarakat.</li>
                    <li>Selera konsumen.</li>
                    <li>Harga barang lain (substitusi/komplementer).</li>
                </ul>`,
                example: {
                    question: 'Kenapa saat hari raya harga baju naik tapi permintaannya juga ikut naik?',
                    steps: ['Ini karena faktor selera dan kebutuhan mendesak.', 'Hukum permintaan berlaku jika faktor lain (ceteris paribus) tetap.'],
                    answer: 'Karena faktor selera (keinginan kuat) mengalahkan faktor harga'
                },
                questions: [
                    { q: 'Jika harga suatu barang naik, maka jumlah permintaannya...', options: ['Bertambah', 'Berkurang', 'Tetap', 'Hilang'], answer: 'Berkurang' },
                    { q: 'Kurva permintaan miring dari...', options: ['Kiri bawah ke kanan atas', 'Kiri atas ke kanan bawah', 'Horizontal', 'Vertikal'], answer: 'Kiri atas ke kanan bawah' },
                    { q: 'Faktor yang menyebabkan permintaan naik selain harga adalah...', options: ['Pendapatan turun', 'Selera meningkat', 'Harga barang pengganti turun', 'Pajak naik'], answer: 'Selera meningkat' },
                    { q: 'Barang substitusi adalah barang yang...', options: ['Saling melengkapi', 'Saling menggantikan', 'Harus ada', 'Sampingan'], answer: 'Saling menggantikan' },
                    { q: 'Jika pendapatan seseorang naik, biasanya permintaannya akan...', options: ['Turun', 'Naik', 'Tetap', 'Tidak pasti'], answer: 'Naik' }
                ]
            },
            {
                id: 'eco-smp-penawaran',
                name: 'Konsep Penawaran',
                icon: '📦',
                concept: `<h3 class="text-xl font-bold mb-4">Hukum Penawaran</h3>
                <p class="mb-4">"Jika harga naik, maka jumlah barang yang ditawarkan naik. Jika harga turun, maka jumlah barang yang ditawarkan akan turun."</p>
                <p class="text-emerald-400 font-bold">Faktor yang Mempengaruhi:</p>
                <ul class="text-sm list-disc pl-5 text-gray-400">
                    <li>Biaya produksi.</li>
                    <li>Teknologi.</li>
                    <li>Harapan keuntungan.</li>
                    <li>Pajak.</li>
                </ul>`,
                example: {
                    question: 'Pabrik tempe menaikkan harga jualnya karena harga kedelai naik. Ini dipengaruhi oleh?',
                    steps: ['Kedelai adalah bahan baku.', 'Kenaikan bahan baku = Kenaikan biaya produksi.'],
                    answer: 'Biaya Produksi'
                },
                questions: [
                    { q: 'Hukum penawaran berbanding lurus dengan...', options: ['Harga', 'Permintaan', 'Bencana', 'Kebutuhan'], answer: 'Harga' },
                    { q: 'Jika biaya produksi naik, maka jumlah penawaran cenderung...', options: ['Bertambah', 'Berkurang', 'Stabil', 'Naik drastis'], answer: 'Berkurang' },
                    { q: 'Teknologi yang semakin canggih akan membuat penawaran...', options: ['Menurun', 'Meningkat', 'Tetap', 'Macet'], answer: 'Meningkat' },
                    { q: 'Kurva penawaran bergerak dari...', options: ['Kiri bawah ke kanan atas', 'Kiri atas ke kanan bawah', 'Kanan ke kiri', 'Atas ke bawah'], answer: 'Kiri bawah ke kanan atas' },
                    { q: 'Siapa yang melakukan penawaran di pasar?', options: ['Konsumen', 'Produsen/Penjual', 'Pemerintah', 'Anak sekolah'], answer: 'Produsen/Penjual' }
                ]
            },
            {
                id: 'eco-smp-harga-keseimbangan',
                name: 'Harga Keseimbangan',
                icon: '⚖️',
                concept: `<h3 class="text-xl font-bold mb-4">Ekuilibrium Pasar</h3>
                <p class="mb-4">Harga keseimbangan terbentuk saat jumlah barang yang diminta sama dengan jumlah barang yang ditawarkan.</p>
                <img src="blob:..." alt="Grafik Keseimbangan" class="w-full h-32 bg-gray-800 rounded mb-4 flex items-center justify-center text-[10px] text-gray-500 italic">`,
                example: {
                    question: 'Di pasar, pembeli minta harga 10rb, penjual mau 20rb. Akhirnya sepakat di 15rb. Ini disebut?',
                    steps: ['Kesepakatan harga antara penjual dan pembeli.', 'Titik temu tawaran.'],
                    answer: 'Harga Keseimbangan (Ekuilibrium)'
                },
                questions: [
                    { q: 'Keseimbangan pasar terjadi saat...', options: ['Pd = Ps', 'Qd = Qs', 'Pd > Ps', 'Qd < Qs'], answer: 'Qd = Qs' },
                    { q: 'Nama lain harga keseimbangan adalah...', options: ['Harga Jual', 'Ekuilibrium', 'Harga Pokok', 'Inflasi'], answer: 'Ekuilibrium' },
                    { q: 'Titik potong antara kurva permintaan dan penawaran disebut...', options: ['Titik Mati', 'Titik Keseimbangan', 'Titik Puncak', 'Titik Dasar'], answer: 'Titik Keseimbangan' },
                    { q: 'Jika Qd > Qs (Permintaan lebih banyak dari stok), maka harga akan...', options: ['Turun', 'Naik', 'Tetap', 'Hilang'], answer: 'Naik' },
                    { q: 'Siapa yang paling diuntungkan dari harga keseimbangan?', options: ['Penjual saja', 'Pembeli saja', 'Keduanya', 'Tidak ada'], answer: 'Keduanya' }
                ]
            },
            {
                id: 'eco-smp-jenis-pasar',
                name: 'Jenis-Jenis Pasar',
                icon: '🏪',
                concept: `<h3 class="text-xl font-bold mb-4">Klasifikasi Pasar</h3>
                <div class="space-y-3 text-sm">
                    <p><b>1. Wujud:</b> Konkret (Terlihat, pasar induk) & Abstrak (Online, Shopee).</p>
                    <p><b>2. Struktur:</b> Persaingan Sempurna (Banyak penjual barang sama) & Persaingan Tidak Sempurna (Monopoli, Oligopoli).</p>
                </div>`,
                example: {
                    question: 'Pasar yang hanya terdiri dari satu perusahaan penyedia air minum di satu wilayah disebut?',
                    steps: ['Hanya satu penjual.', 'Penjual memegang kendali penuh.'],
                    answer: 'Pasar Monopoli'
                },
                questions: [
                    { q: 'Contoh pasar abstrak adalah...', options: ['Pasar Tradisional', 'Toko Online/Bursa Efek', 'Pekan Raya Jakarta', 'Indomaret'], answer: 'Toko Online/Bursa Efek' },
                    { q: 'Pasar yang hanya terdapat satu penjual disebut...', options: ['Oligopoli', 'Monopoli', 'Monopsoni', 'Persaingan Sempurna'], answer: 'Monopoli' },
                    { q: 'Contoh barang di pasar persaingan sempurna adalah...', options: ['Beras', 'Mobil Mewah', 'HP iPhone', 'Listrik'], answer: 'Beras' },
                    { q: 'Pasar yang menjual faktor-faktor produksi disebut pasar...', options: ['Barang', 'Input', 'Output', 'Konsumsi'], answer: 'Input' },
                    { q: 'Oligopoli adalah pasar dengan...', options: ['Satu penjual', 'Banyak penjual barang homogen', 'Beberapa penjual besar', 'Satu pembeli'], answer: 'Beberapa penjual besar' }
                ]
            },
            {
                id: 'eco-smp-sejarah-uang',
                name: 'Uang Modern',
                icon: '🪙',
                concept: `<h3 class="text-xl font-bold mb-4">Evolusi Uang</h3>
                <p class="mb-4">Barter -> Barang (Garam, Kerang) -> Logam Mulia -> Uang Kertas -> Uang Elektronik (Digital).</p>
                <div class="card-glass p-3 border-indigo-500/20 text-xs text-indigo-400">
                    Fungsi Asli: Alat Tukar & Satuan Hitung.<br>
                    Fungsi Turunan: Alat Penimbun Kekayaan, Pembayar Utang.
                </div>`,
                example: {
                    question: 'Uang yang ada di dalam tabungan bank dan bisa dikeluarkan pakai cek disebut?',
                    steps: ['Uang yang tidak nampak langsung di dompet.', 'Uang giral.'],
                    answer: 'Uang Giral'
                },
                questions: [
                    { q: 'Ciri utama sistem barter adalah...', options: ['Pakai koin', 'Tukar barang dengan barang', 'Bayar lewat HP', 'Utang dulu'], answer: 'Tukar barang dengan barang' },
                    { q: 'Uang kartal terdiri dari...', options: ['Cek dan Bilyet Giro', 'Uang Kertas dan Logam', 'Simpanan Bank', 'Saham'], answer: 'Uang Kertas dan Logam' },
                    { q: 'Fungsi asli uang adalah sebagai...', options: ['Alat pamer', 'Alat tukar dan Satuan hitung', 'Alat bayar pajak', 'Alat pemindah kekayaan'], answer: 'Alat tukar dan Satuan hitung' },
                    { q: 'Uang giral adalah uang dalam bentuk...', options: ['Koin perak', 'Saldo bank/Cek/Giro', 'Emas batangan', 'Kertas berwarna'], answer: 'Saldo bank/Cek/Giro' },
                    { q: 'Lembaga yang berhak mencetak uang Rupiah adalah...', options: ['Bank Umum', 'Bank Indonesia', 'Percetakan Pribadi', 'Toko Kelontong'], answer: 'Bank Indonesia' }
                ]
            },
            {
                id: 'eco-smp-bank',
                name: 'Lembaga Keuangan (Bank)',
                icon: '🏦',
                concept: `<h3 class="text-xl font-bold mb-4">Perbankan di Indonesia</h3>
                <ul class="space-y-3 text-sm">
                    <li><b class="text-indigo-400">1. Bank Sentral (BI):</b> Mengatur kebijakan moneter & stabilitas Rupiah.</li>
                    <li><b class="text-blue-400">2. Bank Umum:</b> Melayani jasa simpanan, pinjaman, dan transfer (Mandiri, BRI, dll).</li>
                    <li><b class="text-emerald-400">3. BPR:</b> Bank skala lebih kecil untuk pedesaan/UMKM.</li>
                </ul>`,
                example: {
                    question: 'Jika kamu ingin menabung uang saku setiap bulan, kamu pergi ke?',
                    steps: ['Mencari bank yang melayani masyarakat umum.', 'Bank Umum.'],
                    answer: 'Bank Umum'
                },
                questions: [
                    { q: 'Bank Sentral Indonesia adalah...', options: ['Bank Mandiri', 'BRI', 'Bank Indonesia', 'BCA'], answer: 'Bank Indonesia' },
                    { q: 'Tugas utama Bank Indonesia adalah...', options: ['Memberi pinjaman ke warga', 'Menjaga kestabilan nilai Rupiah', 'Membayar gaji PNS', 'Menjual barang'], answer: 'Menjaga kestabilan nilai Rupiah' },
                    { q: 'Bank yang kegiatannya melayani simpanan masyarakat disebut...', options: ['Bank Umum', 'Bank Syariah', 'BPR', 'Semua benar'], answer: 'Semua benar' },
                    { q: 'Singkatan BPR adalah...', options: ['Bank Pembangunan Rakyat', 'Bank Perkreditan Rakyat', 'Bank Pusat Rakyat', 'Bank Paling Rame'], answer: 'Bank Perkreditan Rakyat' },
                    { q: 'Kegiatan mengumpulkan dana dari masyarakat dalam bank disebut...', options: ['Kredit', 'Simpanan/Funding', 'Investasi', 'Distribusi'], answer: 'Simpanan/Funding' }
                ]
            },
            {
                id: 'eco-smp-nonbank',
                name: 'Lembaga Keuangan Non-Bank',
                icon: '🏥',
                concept: `<h3 class="text-xl font-bold mb-4">Bukan Sekedar Bank</h3>
                <p class="mb-4">Lembaga yang menghimpun dana tapi tidak melalui simpanan tabungan langsung seperti bank.</p>
                <div class="grid grid-cols-2 gap-3 text-[10px]">
                    <div class="card-glass p-2"><b>🛡️ Asuransi:</b> Proteksi risiko.</div>
                    <div class="card-glass p-2"><b>💍 Pegadaian:</b> Pinjaman jaminan barang.</div>
                    <div class="card-glass p-2"><b>👴 Dana Pensiun:</b> Tabungan masa tua.</div>
                    <div class="card-glass p-2"><b>🤝 KSP:</b> Koperasi simpan pinjam.</div>
                </div>`,
                example: {
                    question: 'Pak Andi perlu uang cepat untuk berobat dengan menjaminkan motornya. Pak Andi ke?',
                    steps: ['Pinjaman dengan jaminan barang (gadai).', 'Pegadaian.'],
                    answer: 'Pegadaian'
                },
                questions: [
                    { q: 'Lembaga yang memberikan perlindungan atas risiko kerugian adalah...', options: ['Bank', 'Asuransi', 'Kasir', 'Pasar'], answer: 'Asuransi' },
                    { q: 'Semboyan Pegadaian adalah...', options: ['Hemat pangkal kaya', 'Menyelesaikan masalah tanpa masalah', 'Ayo menabung', 'Hidup sehat'], answer: 'Menyelesaikan masalah tanpa masalah' },
                    { q: 'Lembaga yang mengelola dana untuk masa tua karyawan disebut...', options: ['Pegadaian', 'Dana Pensiun', 'Koperasi', 'Leasing'], answer: 'Dana Pensiun' },
                    { q: 'Koperasi yang anggotanya menaruh dan meminjam uang disebut Koperasi...', options: ['Konsumsi', 'Produksi', 'Simpan Pinjam', 'Serba Usaha'], answer: 'Simpan Pinjam' },
                    { q: 'Perusahaan yang membiayai pembelian barang modal seperti mobil secara cicilan disebut...', options: ['Bank', 'Leasing (Sewa Guna Usaha)', 'Asuransi', 'Pasar'], answer: 'Leasing (Sewa Guna Usaha)' }
                ]
            },
            {
                id: 'eco-smp-inflasi',
                name: 'Inflasi',
                icon: '🎈',
                concept: `<h3 class="text-xl font-bold mb-4">Kenaikan Harga Umum</h3>
                <p class="mb-4">Inflasi adalah kenaikan harga barang dan jasa secara terus menerus dalam waktu tertentu.</p>
                <p class="text-red-400 text-xs">Penyebab: Uang beredar terlalu banyak, biaya produksi naik, atau permintaan tinggi.</p>`,
                example: {
                    question: 'Tahun lalu harga bakso 10rb, sekarang jadi 15rb. Ini disebut?',
                    steps: ['Kenaikan harga barang secara umum.', 'Penurunan daya beli uang.'],
                    answer: 'Inflasi'
                },
                questions: [
                    { q: 'Inflasi ditandai dengan...', options: ['Harga turun', 'Harga naik terus menerus', 'Uang jarang', 'Barang melimpah'], answer: 'Harga naik terus menerus' },
                    { q: 'Dampak negatif inflasi bagi penabung di rumah adalah...', options: ['Uang bertambah', 'Nilai riil uang menurun', 'Semangat belanja', 'Senang'], answer: 'Nilai riil uang menurun' },
                    { q: 'Siapa yang paling dirugikan saat inflasi tinggi?', options: ['Orang yang punya utang tetap', 'Pegawai bergaji tetap', 'Eksportir', 'Spekulan'], answer: 'Pegawai bergaji tetap' },
                    { q: 'Upaya pemerintah mengatasi inflasi adalah...', options: ['Mencetak uang banyak', 'Menaikkan suku bunga bank', 'Menurunkan pajak', 'Memberi hadiah'], answer: 'Menaikkan suku bunga bank' },
                    { q: 'Inflasi karena biaya produksi naik disebut...', options: ['Demand pull inflation', 'Cost push inflation', 'Hyper inflation', 'Low inflation'], answer: 'Cost push inflation' }
                ]
            },
            {
                id: 'eco-smp-manajemen-keuangan',
                name: 'Manajemen Keuangan',
                icon: '📅',
                concept: `<h3 class="text-xl font-bold mb-4">Mengelola Keuangan</h3>
                <p class="mb-4">Mengatur agar pendapatan lebih besar atau sama dengan pengeluaran.</p>
                <div class="card-glass p-3 border-emerald-500/20 text-xs text-emerald-400">
                    Tips: Catat pengeluaran, Bedakan kebutuhan/keinginan, Miliki dana darurat.
                </div>`,
                example: {
                    question: 'Andi menerima uang saku mingguan. Apa langkah pertama yang harus dilakukan?',
                    steps: ['Membuat daftar rencana pengeluaran.', 'Budgeting.'],
                    answer: 'Membuat anggaran (Budgeting)'
                },
                questions: [
                    { q: 'Langkah awal mengelola keuangan keluarga adalah...', options: ['Belanja sepuasnya', 'Membuat daftar kebutuhan & anggaran', 'Meminjam uang', 'Menunggu gajian'], answer: 'Membuat daftar kebutuhan & anggaran' },
                    { q: 'Jika pengeluaran lebih besar dari pendapatan disebut...', options: ['Surplus', 'Defisit', 'Laba', 'Investasi'], answer: 'Defisit' },
                    { q: 'Uang yang disiapkan untuk kejadian mendadak disebut...', options: ['Uang mainan', 'Dana Darurat', 'Dana Hibah', 'Pajak'], answer: 'Dana Darurat' },
                    { q: 'Prinsip utama manajemen keuangan yang sehat adalah...', options: ['Besar pasak daripada tiang', 'Besar pendapatan daripada pengeluaran', 'Habiskan hari ini', 'Cari utang terus'], answer: 'Besar pendapatan daripada pengeluaran' },
                    { q: 'Membeli barang impulsif (tiba-tiba tanpa rencana) biasanya merusak...', options: ['Barang tersebut', 'Anggaran keuangan', 'Kesehatan teman', 'Toko'], answer: 'Anggaran keuangan' }
                ]
            },
            {
                id: 'eco-smp-koperasi',
                name: 'Koperasi Indonesia',
                icon: '🤝',
                concept: `<h3 class="text-xl font-bold mb-4">Gotong Royong Ekonomi</h3>
                <p class="mb-4">Koperasi adalah badan usaha yang beranggotakan orang-orang dengan asas kekeluargaan.</p>
                <p class="text-yellow-400 font-bold text-xs uppercase mb-2">Prinsip Koperasi:</p>
                <ul class="text-xs space-y-1 text-gray-400">
                    <li>Keanggotaan sukarela.</li>
                    <li>Pengelolaan demokratis.</li>
                    <li>Pembagian SHU adil.</li>
                </ul>`,
                example: {
                    question: 'Keuntungan koperasi yang dibagikan kepada anggota disebut?',
                    steps: ['Laba di PT disebut dividen.', 'Di koperasi disebut SHU.'],
                    answer: 'SHU (Sisa Hasil Usaha)'
                },
                questions: [
                    { q: 'Landasan idiil koperasi di Indonesia adalah...', options: ['Pancasila', 'UUD 1945', 'Kekeluargaan', 'Pasar'], answer: 'Pancasila' },
                    { q: 'Pemegang kekuasaan tertinggi dalam koperasi adalah...', options: ['Ketua', 'Manajer', 'Rapat Anggota', 'Pengawas'], answer: 'Rapat Anggota' },
                    { q: 'Modal koperasi yang dibayar sekali saat menjadi anggota disebut simpanan...', options: ['Wajib', 'Pokok', 'Sukarela', 'Hibah'], answer: 'Simpanan Pokok' },
                    { q: 'Bapak Koperasi Indonesia adalah...', options: ['Soekarno', 'Moh. Hatta', 'Ki Hajar Dewantara', 'Megawati'], answer: 'Moh. Hatta' },
                    { q: 'SHU singkatan dari...', options: ['Simpanan Hari Utama', 'Sisa Hasil Usaha', 'Simpanan Hasil Umum', 'Semua Hasil Usaha'], answer: 'Sisa Hasil Usaha' }
                ]
            },
            {
                id: 'eco-smp-perdagangan',
                name: 'Perdagangan Internasional',
                icon: '🚢',
                concept: `<h3 class="text-xl font-bold mb-4">Ekspor & Impor</h3>
                <p class="mb-4">Perdagangan antar negara terjadi karena perbedaan SDA, teknologi, dan kebutuhan.</p>
                <div class="space-y-2 text-sm">
                    <p><b class="text-blue-400">Ekspor:</b> Menjual barang ke luar negeri.</p>
                    <p><b class="text-red-400">Impor:</b> Membeli barang dari luar negeri.</p>
                </div>`,
                example: {
                    question: 'Indonesia menjual kelapa sawit ke India. Transaksi ini bagi Indonesia disebut?',
                    steps: ['Menjual barang ke negara lain.', 'Menghasilkan devisa.'],
                    answer: 'Ekspor'
                },
                questions: [
                    { q: 'Membeli gandum dari Australia karena di Indonesia tidak tumbuh disebut...', options: ['Ekspor', 'Impor', 'Subsidi', 'Proteksi'], answer: 'Impor' },
                    { q: 'Alat pembayaran luar negeri disebut...', options: ['Rupiah', 'Devisa', 'Investasi', 'Barter'], answer: 'Devisa' },
                    { q: 'Kebijakan membatasi jumlah barang impor disebut...', options: ['Tarif', 'Kuota', 'Subsidi', 'Dumping'], answer: 'Kuota' },
                    { q: 'Menjual barang di luar negeri lebih murah dari di dalam negeri disebut...', options: ['Proteksi', 'Dumping', 'Polis', 'Distribusi'], answer: 'Dumping' },
                    { q: 'Manfaat perdagangan internasional adalah...', options: ['Mematikan industri lokal saja', 'Memperoleh barang yang tidak diproduksi sendiri', 'Menambah utang saja', 'Menutup diri'], answer: 'Memperoleh barang yang tidak diproduksi sendiri' }
                ]
            },
            {
                id: 'eco-smp-globalisasi',
                name: 'Globalisasi Ekonomi',
                icon: '🌐',
                concept: `<h3 class="text-xl font-bold mb-4">Dunia Tanpa Batas</h3>
                <p class="mb-4">Globalisasi ekonomi membuat pasar antar negara semakin terintegrasi.</p>
                <ul class="text-xs list-disc pl-5 text-gray-400">
                    <li>Produk luar negeri mudah dicari.</li>
                    <li>Perusahaan multinasional (MCD, Gojek, dll).</li>
                    <li>Persaingan tenaga kerja global.</li>
                </ul>`,
                example: {
                    question: 'Dampak negatif globalisasi jika produk lokal tidak bisa bersaing adalah?',
                    steps: ['Konsumen lebih pilih produk luar.', 'Industri dalam negeri bisa bangkrut.'],
                    answer: 'Matinya usaha kecil/lokal yang tidak kompetitif'
                },
                questions: [
                    { q: 'Globalisasi ekonomi ditandai dengan...', options: ['Pasar tertutup', 'Perdagangan bebas', 'Larangan impor', 'Masyarakat primitif'], answer: 'Perdagangan bebas' },
                    { q: 'Contoh dampak positif globalisasi bagi konsumen adalah...', options: ['Barang sulit dicari', 'Pilihan barang beragam dan berkualitas', 'Harga barang naik terus', 'Lapangan kerja hilang'], answer: 'Pilihan barang beragam dan berkualitas' },
                    { q: 'Sikap kita menghadapi globalisasi sebaiknya...', options: ['Menolak semua', 'Menerima tanpa filter', 'Selektif dan meningkatkan kualitas diri', 'Menutup diri'], answer: 'Selektif dan meningkatkan kualitas diri' },
                    { q: 'Perusahaan yang beroperasi di banyak negara disebut...', options: ['UMKM', 'BUMN', 'MNC (Multinational Corporation)', 'Koperasi'], answer: 'MNC (Multinational Corporation)' },
                    { q: 'Apa itu e-commerce dalam globalisasi?', options: ['Perdagangan lewat internet', 'Pasar tradisional', 'Tukar menawar di jalan', 'Bank keliling'], answer: 'Perdagangan lewat internet' }
                ]
            },
            {
                id: 'eco-smp-wirausaha',
                name: 'Kewirausahaan Dasar',
                icon: '🚀',
                concept: `<h3 class="text-xl font-bold mb-4">Menjadi Wirausaha</h3>
                <p class="mb-4">Wirausaha adalah orang yang berani mengambil risiko untuk menciptakan usaha baru.</p>
                <p class="text-orange-400 font-bold text-xs uppercase">Ciri Wirausaha:</p>
                <p class="text-xs text-gray-400">Kreatif, Inovatif, Berani, Pantang Menyerah, Kepemimpinan.</p>`,
                example: {
                    question: 'Andi membuat kerajinan dari limbah plastik dan menjualnya secara online. Andi adalah?',
                    steps: ['Melihat peluang dari barang tak terpakai.', 'Kreatif menciptakan nilai.'],
                    answer: 'Wirausaha'
                },
                questions: [
                    { q: 'Karakteristik utama seorang wirausaha adalah...', options: ['Takut rugi', 'Kreatif dan inovatif', 'Menunggu perintah', 'Pemalas'], answer: 'Kreatif dan inovatif' },
                    { q: 'Inovatif artinya...', options: ['Mudah menyerah', 'Menciptakan hal baru atau cara baru', 'Meniru orang lain 100%', 'Berdiam diri'], answer: 'Menciptakan hal baru atau cara baru' },
                    { q: 'Langkah pertama memulai usaha kecil adalah...', options: ['Pinjam bank milyaran', 'Melihat peluang dan riset pasar sederhana', 'Berhenti sekolah', 'Beli mobil mewah'], answer: 'Melihat peluang dan riset pasar sederhana' },
                    { q: 'Wirausaha membantu negara dalam hal...', options: ['Menambah pengangguran', 'Mengurangi lapangan kerja', 'Menciptakan lapangan kerja', 'Menaikkan pajak saja'], answer: 'Menciptakan lapangan kerja' },
                    { q: 'Sikap yang harus dimiliki saat usaha gagal adalah...', options: ['Putus asa', 'Berhenti total', 'Evaluasi dan mencoba lagi', 'Marah-marah'], answer: 'Evaluasi dan mencoba lagi' }
                ]
            },
            {
                id: 'eco-smp-literasi-keuangan',
                name: 'Literasi Keuangan Pribadi',
                icon: '💡',
                concept: `<h3 class="text-xl font-bold mb-4">Cerdas Mengelola Uang</h3>
                <p class="mb-4">Literasi keuangan adalah pemahaman agar kita bijak menggunakan uang.</p>
                <div class="card-glass p-3 border-purple-500/20 text-xs text-purple-400">
                    Hindari Utang Konsumtif (Beli HP mahal cicil tapi tidak butuh).<br>
                    Utamakan Menabung & Investasi diri (Buku/Kursus).
                </div>`,
                example: {
                    question: 'Andi ingin beli sepatu gaya terbaru seharga 1jt, tapi tabungannya cuma 1,1jt untuk biaya sekolah bulan depan. Apa tindakan bijak Andi?',
                    steps: ['Uang 1,1jt adalah untuk prioritas sekolah.', 'Sepatu gaya adalah keinginan.', 'Menahan diri.'],
                    answer: 'Menunda beli sepatu dan utamakan uang sekolah'
                },
                questions: [
                    { q: 'Budgeting adalah...', options: ['Menghabiskan uang', 'Merencanakan pemasukan dan pengeluaran', 'Pura-pura kaya', 'Meminta uang'], answer: 'Merencanakan pemasukan dan pengeluaran' },
                    { q: 'Utang yang digunakan untuk membeli barang mewah yang terus turun nilainya disebut utang...', options: ['Produktif', 'Konsumtif', 'Komersial', 'Utama'], answer: 'Konsumtif' },
                    { q: 'Investasi terbaik untuk anak sekolah adalah...', options: ['Beli emas', 'Edukasi/Ilmu/Keterampilan', 'Beli tanah', 'Main game terus'], answer: 'Edukasi/Ilmu/Keterampilan' },
                    { q: 'Prinsip 50/30/20 dalam keuangan berarti 20% untuk...', options: ['Kebutuhan', 'Keinginan', 'Tabungan/Investasi', 'Jajan'], answer: 'Tabungan/Investasi' },
                    { q: 'Maksud dari "Pay yourself first" dalam keuangan adalah...', options: ['Beli makan enak dulu', 'Tabungan disisihkan di awal sebelum belanja', 'Gaji untuk teman', 'Minta jajan lebih'], answer: 'Tabungan disisihkan di awal sebelum belanja' }
                ]
            }
        ]
    },
    sma: {
        name: 'SMA',
        color: 'indigo',
        icon: '🏛️',
        topics: [
            // Kelas 10: Fondasi Teori Ekonomi
            {
                id: 'eco-sma-dasar',
                name: 'Dasar Ilmu Ekonomi',
                icon: '📓',
                concept: `<h3 class="text-xl font-bold mb-4">Kelangkaan & Pilihan</h3>
                <p class="mb-4">Inti masalah ekonomi adalah kelangkaan (scarcity). Karena sumber daya terbatas tapi kebutuhan tidak terbatas, manusia harus membuat pilihan (choice).</p>
                <div class="card-glass p-3 border-indigo-500/20 text-xs text-indigo-400 mb-4">
                    <b>Opportunity Cost (Biaya Peluang):</b> Nilai barang atau jasa yang dikorbankan karena memilih alternatif lain.
                </div>`,
                example: {
                    question: 'Andi punya uang 100rb. Dia bingung beli buku (80rb) atau nonton bioskop (70rb). Jika Andi memilih beli buku, berapa biaya peluangnya?',
                    steps: ['Pilihan A: Buku.', 'Pilihan B: Bioskop.', 'Andi pilih A, maka B yang dikorbankan.'],
                    answer: 'Biaya peluangnya adalah kepuasan menonton bioskop senilai 70rb (nominal) atau aktivitas menontonnya itu sendiri.'
                },
                questions: [
                    { q: 'Masalah inti ekonomi adalah...', options: ['Kekurangan uang', 'Kelangkaan (Scarcity)', 'Harga barang naik', 'Banyaknya pengangguran'], answer: 'Kelangkaan (Scarcity)' },
                    { q: 'Nilai alternatif terbaik yang dikorbankan disebut...', options: ['Biaya Produksi', 'Biaya Peluang', 'Biaya Sehari-hari', 'Biaya Tetap'], answer: 'Biaya Peluang' },
                    { q: 'Pilihan ekonomi harus diambil karena...', options: ['Uang tidak terbatas', 'Keinginan terbatas', 'Sumber daya terbatas', 'Pemerintah memaksa'], answer: 'Sumber daya terbatas' },
                    { q: 'Biaya peluang berbeda dengan biaya sehari-hari karena...', options: ['Selalu berupa uang', 'Tidak harus berupa uang (yang dikorbankan)', 'Hanya untuk pengusaha', 'Dihitung oleh bank'], answer: 'Tidak harus berupa uang (yang dikorbankan)' },
                    { q: 'Ilmu ekonomi berasal dari kata Oikonomia yang berarti...', options: ['Aturan rumah tangga', 'Aturan negara', 'Aturan berdagang', 'Aturan uang'], answer: 'Aturan rumah tangga' }
                ]
            },
            {
                id: 'eco-sma-metodologi',
                name: 'Metodologi Ekonomi',
                icon: '🔍',
                concept: `<h3 class="text-xl font-bold mb-4">Positif vs Normatif</h3>
                <div class="space-y-4 text-sm">
                    <p><b>Ekonomi Positif:</b> Menjelaskan apa yang terjadi berdasarkan fakta (Data). Contoh: "Tingkat pengangguran naik 5%".</p>
                    <p><b>Ekonomi Normatif:</b> Memberikan saran atau apa yang seharusnya dilakukan (Etika/Opini). Contoh: "Pemerintah harus memberi subsidi".</p>
                </div>`,
                example: {
                    question: '"Seharusnya tarif pajak diturunkan untuk meningkatkan daya beli" - Ini contoh ekonomi apa?',
                    steps: ['Kalimat mengandung kata "seharusnya".', 'Bersifat saran/opini.'],
                    answer: 'Ekonomi Normatif'
                },
                questions: [
                    { q: 'Pernyataan ekonomi yang berdasarkan fakta dan data disebut ekonomi...', options: ['Normatif', 'Positif', 'Kualitatif', 'Tradisional'], answer: 'Positif' },
                    { q: 'Pernyataan "Pemerintah sebaiknya menaikkan gaji guru" adalah contoh ekonomi...', options: ['Positif', 'Normatif', 'Mikro', 'Makro'], answer: 'Normatif' },
                    { q: 'Metode berpikir dari hal khusus ke hal umum disebut...', options: ['Deduktif', 'Induktif', 'Spekulatif', 'Asumtif'], answer: 'Induktif' },
                    { q: 'Metode berpikir dari teori umum ke fakta khusus disebut...', options: ['Induktif', 'Deduktif', 'Normatif', 'Positif'], answer: 'Deduktif' },
                    { q: 'Ilmu ekonomi merupakan bagian dari ilmu...', options: ['Alam', 'Sosial', 'Formal', 'Terapan'], answer: 'Sosial' }
                ]
            },
            {
                id: 'eco-sma-elastisitas',
                name: 'Elastisitas',
                icon: '📏',
                concept: `<h3 class="text-xl font-bold mb-4">Kepekaan Permintaan</h3>
                <p class="mb-4">Elastisitas (E) mengukur seberapa besar perubahan jumlah barang akibat perubahan harga.</p>
                <div class="card-glass p-3 border-emerald-500/20 text-xs font-mono text-emerald-400">
                    E = (% Perubahan Jumlah) / (% Perubahan Harga)
                </div>
                <ul class="text-xs space-y-1 mt-4 text-gray-400">
                    <li>E > 1 : Elastis (Sensitif, barang mewah).</li>
                    <li>E < 1 : Inelastis (Kurang sensitif, bahan pokok).</li>
                    <li>E = 1 : Unitary.</li>
                </ul>`,
                example: {
                    question: 'Harga naik 10%, jumlah diminta turun 20%. Berapa E-nya?',
                    steps: ['E = 20% / 10% = 2.', 'Karena 2 > 1, maka bersifat elastis.'],
                    answer: '2 (Elastis)'
                },
                questions: [
                    { q: 'Jika koefisien elastisitas Ed = 0, maka permintaan bersifat...', options: ['Elastis', 'Inelastis Sempurna', 'Unitary', 'Elastisitas'], answer: 'Inelastis Sempurna' },
                    { q: 'Barang kebutuhan pokok (beras, garam) biasanya bersifat...', options: ['Elastis', 'Inelastis', 'Unitary', 'Sempurna'], answer: 'Inelastis' },
                    { q: 'Barang mewah biasanya bersifat...', options: ['Inelastis', 'Elastis', 'Kebutuhan', 'Pokok'], answer: 'Elastis' },
                    { q: 'Faktor utama yang memengaruhi elastisitas permintaan adalah...', options: ['Jumlah penjual', 'Ketersediaan barang substitusi', 'Teknologi', 'Pajak'], answer: 'Ketersediaan barang substitusi' },
                    { q: 'Jika Ed > 1, maka disebut...', options: ['Unitary', 'Elastis', 'Inelastis', 'Nol'], answer: 'Elastis' }
                ]
            },
            {
                id: 'eco-sma-konsumen',
                name: 'Perilaku Konsumen',
                icon: '🛍️',
                concept: `<h3 class="text-xl font-bold mb-4">Utilitas & Indiferens</h3>
                <p class="mb-4">Konsumen bertujuan mencapai kepuasan maksimal (Utilitas) dengan anggaran tertentu.</p>
                <ul class="text-sm space-y-3">
                    <li><b class="text-indigo-400">Kardinal:</b> Kepuasan bisa diukur dengan angka (Satuan util).</li>
                    <li><b class="text-purple-400">Ordinal:</b> Kepuasan diurutkan/dibandingkan (Kurva Indiferens).</li>
                </ul>`,
                example: {
                    question: 'Hukum Gossen I menyatakan kepuasan konsumsi satu barang secara terus menerus akan?',
                    steps: ['Minum gelas ke-1 segar.', 'Gelas ke-5 perut sakit.', 'Kepuasan menurun.'],
                    answer: 'Semakin menurun (The law of diminishing marginal utility)'
                },
                questions: [
                    { q: 'Kepuasan tambahan karena konsumsi 1 unit tambahan disebut...', options: ['Total Utility', 'Marginal Utility', 'Average Utility', 'Profit'], answer: 'Marginal Utility' },
                    { q: 'Kurva yang menunjukkan kombinasi dua barang dengan kepuasan sama disebut...', options: ['Budget Line', 'Indifference Curve', 'Supply Curve', 'Isocost'], answer: 'Indifference Curve' },
                    { q: 'Hukum Gossen II membahas tentang...', options: ['Kepuasan menurun', 'Keseimbangan berbagai macam kebutuhan', 'Biaya peluang', 'Produksi'], answer: 'Keseimbangan berbagai macam kebutuhan' },
                    { q: 'Garis yang menunjukkan batas kemampuan anggaran konsumen disebut...', options: ['Isoquant', 'Budget Line', 'Demand Curve', 'Price Line'], answer: 'Budget Line' },
                    { q: 'Utilitas total akan maksimal saat utilitas marjinal bernilai...', options: ['Positif', 'Negatif', 'Nol', 'Maksimal'], answer: 'Nol' }
                ]
            },
            {
                id: 'eco-sma-produksi',
                name: 'Teori Produksi',
                icon: '🏗️',
                concept: `<h3 class="text-xl font-bold mb-4">Fungsi Produksi</h3>
                <p class="mb-4">Hubungan antara input (faktor produksi) dan output (hasil).</p>
                <div class="card-glass p-3 border-orange-500/20 text-xs text-orange-400">
                    <b>Law of Diminishing Returns:</b> Jika satu input ditambah terus menerus sedangkan input lain tetap, awalnya naik tapi akhirnya tambahan hasilnya menurun.
                </div>`,
                example: {
                    question: 'Pabrik sewa 1 mesin. Tambah 1 pekerja naik 10 unit. Tambah pekerja ke-10 malah macet. Kenapa?',
                    steps: ['Kelebihan tenaga kerja dibanding mesin.', 'Hukum hasil balik menurun mulai berlaku.'],
                    answer: 'Hukum hasil balik yang semakin berkurang (Law of Diminishing Returns)'
                },
                questions: [
                    { q: 'Input tetap dalam produksi jangka pendek contohnya adalah...', options: ['Bahan baku', 'Tenaga kerja', 'Mesin/Gedung', 'Listrik'], answer: 'Mesin/Gedung' },
                    { q: 'Kurva yang menunjukkan kombinasi input untuk hasil sama disebut...', options: ['Isoquant', 'Isocost', 'Indifference', 'Engel'], answer: 'Isoquant' },
                    { q: 'Tambahan produksi karena menambah 1 unit tenaga kerja disebut...', options: ['AP', 'MP', 'TP', 'MC'], answer: 'MP' },
                    { q: 'Tahapan produksi yang rasional bagi produsen adalah tahap...', options: ['I', 'II', 'III', 'IV'], answer: 'II' },
                    { q: 'Factor produksi asli terdiri dari...', options: ['Modal & Skill', 'Alam & Tenaga Kerja', 'Uang & Mesin', 'Tanah & Alat'], answer: 'Alam & Tenaga Kerja' }
                ]
            },
            {
                id: 'eco-sma-biaya',
                name: 'Biaya Produksi',
                icon: '💸',
                concept: `<h3 class="text-xl font-bold mb-4">Struktur Biaya</h3>
                <p class="mb-4">Biaya Ekonomi = Biaya Eksplisit + Biaya Implisit.</p>
                <ul class="text-xs space-y-2 text-gray-400">
                    <li><b class="text-red-400">Fixed Cost (FC):</b> Biaya tetap (Sewa gedung).</li>
                    <li><b class="text-blue-400">Variable Cost (VC):</b> Biaya berubah (Bahan baku).</li>
                    <li><b class="text-yellow-400">Marginal Cost (MC):</b> Tambahan biaya tiap unit baru.</li>
                </ul>`,
                example: {
                    question: 'Pabrik roti produksi 10 roti biaya total 100rb. Produksi 11 roti biaya total 105rb. Berapa MC-nya?',
                    steps: ['MC = (105rb - 100rb) / (11 - 10).', 'MC = 5rb / 1.'],
                    answer: '5.000 Rupiah'
                },
                questions: [
                    { q: 'Biaya yang jumlahnya tetap meskipun produksi nol disebut...', options: ['Variabel Cost', 'Fixed Cost', 'Total Cost', 'Marginal Cost'], answer: 'Fixed Cost' },
                    { q: 'Rumus Total Cost (TC) adalah...', options: ['FC + VC', 'FC - VC', 'FC / Q', 'MC + AC'], answer: 'FC + VC' },
                    { q: 'Biaya rata-rata disebut juga...', options: ['Marginal Cost', 'Average Cost', 'Total Cost', 'Variabel Cost'], answer: 'Average Cost' },
                    { q: 'Biaya peluang bagi wirausaha masuk ke dalam biaya...', options: ['Eksplisit', 'Implisit', 'Tetap', 'Variabel'], answer: 'Implisit' },
                    { q: 'Titik dimana perusahaan tidak untung dan tidak rugi disebut...', options: ['Laba Maksimal', 'Break Even Point (BEP)', 'Shutdown Point', 'Marginal Revenue'], answer: 'Break Even Point (BEP)' }
                ]
            },
            {
                id: 'eco-sma-pasar-sempurna',
                name: 'Pasar Persaingan Sempurna',
                icon: '⚖️',
                concept: `<h3 class="text-xl font-bold mb-4">PPS</h3>
                <p class="mb-4">Pasar ideal di mana harga ditentukan kekuatan pasar, bukan individu.</p>
                <div class="grid grid-cols-2 gap-3 text-xs">
                    <div class="card-glass p-2">Penjual/Pembeli sangat banyak.</div>
                    <div class="card-glass p-2">Barang Homogen (Seragam).</div>
                    <div class="card-glass p-2">Bebas masuk keluar pasar.</div>
                    <div class="card-glass p-2">Informasi sempurna.</div>
                </div>`,
                example: {
                    question: 'Di pasar beras, penjual tidak bisa menaikkan harga tinggi sendiri karena?',
                    steps: ['Banyak penjual lain.', 'Beras yang dijual sama saja.', 'Pembeli tahu harga pasar.'],
                    answer: 'Penjual adalah Price Taker (Penerima Harga)'
                },
                questions: [
                    { q: 'Ciri utama pasar persaingan sempurna adalah...', options: ['Satu penjual', 'Barang homogen', 'Barang terdiferensiasi', 'Harga ditentukan pemerintah'], answer: 'Barang homogen' },
                    { q: 'Dalam PPS, posisi penjual adalah sebagai...', options: ['Price Maker', 'Price Taker', 'Monopolis', 'Regulator'], answer: 'Price Taker' },
                    { q: 'Kurva permintaan yang dihadapi penjual di PPS berbentuk...', options: ['Miring kiri', 'Miring kanan', 'Horizontal sempurna', 'Vertikal'], answer: 'Horizontal sempurna' },
                    { q: 'Laba maksimum tercapai saat...', options: ['MR > MC', 'MR < MC', 'MR = MC', 'P < AC'], answer: 'MR = MC' },
                    { q: 'Contoh pasar yang mendekati PPS adalah...', options: ['Pasar Saham/Pasar Hasil Tanah', 'PLN', 'Pasar Motor', 'Pertamina'], answer: 'Pasar Saham/Pasar Hasil Tanah' }
                ]
            },
            {
                id: 'eco-sma-pasar-tidaksempurna',
                name: 'Pasar Tidak Sempurna',
                icon: '🏰',
                concept: `<h3 class="text-xl font-bold mb-4">Monopoli, Oligopoli, Monopolistik</h3>
                <div class="space-y-3 text-sm">
                    <p><b>1. Monopoli:</b> 1 Penjual, ada hambatan masuk besar (Contoh: PLN).</p>
                    <p><b>2. Oligopoli:</b> Beberapa penjual besar, iklan sangat kuat (Semen, Provider HP).</p>
                    <p><b>3. Monopolistik:</b> Banyak penjual, barang sejenis tapi beda merek (Shampoo, Sabun).</p>
                </div>`,
                example: {
                    question: 'Pasar sabun cuci muka punya banyak merek (Garnier, Pond\'s, dll). Ini masuk kategori?',
                    steps: ['Banyak penjual.', 'Barang fungsinya sama tapi merek/fitur beda (Diferensiasi).'],
                    answer: 'Persaingan Monopolistik'
                },
                questions: [
                    { q: 'Pasar yang hanya ada satu penjual disebut...', options: ['Oligopoli', 'Monopoli', 'Monopsoni', 'Monopolistik'], answer: 'Monopoli' },
                    { q: 'Persaingan melalui iklan sangat ketat terjadi pada pasar...', options: ['PPS', 'Monopoli', 'Oligopoli', 'Monopsoni'], answer: 'Oligopoli' },
                    { q: 'Pasar dimana terdapat banyak penjual barang terdiferensiasi disebut...', options: ['Oligopoli', 'Monopolistik', 'Monopoli', 'PPS'], answer: 'Monopolistik' },
                    { q: 'Hambatan masuk pasar yang paling tinggi ada pada...', options: ['Monopoli', 'Oligopoli', 'Monopolistik', 'PPS'], answer: 'Monopoli' },
                    { q: 'Monopsoni adalah pasar dimana terdapat...', options: ['Satu penjual', 'Satu pembeli', 'Dua penjual', 'Banyak pembeli'], answer: 'Satu pembeli' }
                ]
            },
            // Kelas 11: Ekonomi Makro & Kebijakan
            {
                id: 'eco-sma-pendapatannasional',
                name: 'Pendapatan Nasional',
                icon: '📈',
                concept: `<h3 class="text-xl font-bold mb-4">PDB & PNB</h3>
                <p class="mb-4">Mengukur total nilai barang/jasa suatu negara dalam satu tahun.</p>
                <div class="space-y-2 text-xs">
                    <p><b>GDP (PDB):</b> Wilayah Indonesia (WNI + WNA di sini).</p>
                    <p><b>GNP (PNB):</b> Warga negara Indonesia (Di sini + Di luar negeri).</p>
                </div>`,
                example: {
                    question: 'Jika WNI di luar negeri lebih banyak berpenghasilan daripada WNA di Indonesia, maka?',
                    steps: ['GNP (Produk WNI).', 'GDP (Produk di Wilayah).'],
                    answer: 'GNP > GDP'
                },
                questions: [
                    { q: 'Total barang/jasa yang dihasilkan warga negara di dalam dan luar negeri disebut...', options: ['GDP', 'GNP', 'NNP', 'PI'], answer: 'GNP' },
                    { q: 'Metode perhitungan pendapatan nasional dengan menjumlahkan Sewa, Upah, Bunga, Laba disebut...', options: ['Produksi', 'Konsumsi', 'Pendapatan', 'Pengeluaran'], answer: 'Pendapatan' },
                    { q: 'Rumus metode pengeluaran adalah...', options: ['C + I + G + (X - M)', 'C + S + I', 'w + r + i + p', 'P x Q'], answer: 'C + I + G + (X - M)' },
                    { q: 'Pendapatan yang siap dibelanjakan disebut...', options: ['NNI', 'Disposable Income (DI)', 'Personal Income', 'GDP'], answer: 'Disposable Income (DI)' },
                    { q: 'Pendapatan per kapita adalah...', options: ['Total ekspor', 'Total pajak', 'Pendapatan nasional dibagi jumlah penduduk', 'Pendapatan orang kaya'], answer: 'Pendapatan nasional dibagi jumlah penduduk' }
                ]
            },
            {
                id: 'eco-sma-pembangunan',
                name: 'Pertumbuhan & Pembangunan',
                icon: '🌱',
                concept: `<h3 class="text-xl font-bold mb-4">Pertumbuhan vs Pembangunan</h3>
                <div class="space-y-3 text-sm">
                    <p><b class="text-emerald-400">Pertumbuhan:</b> Kuantitas (Angka PDB naik). Belum tentu rata.</p>
                    <p><b class="text-blue-400">Pembangunan:</b> Kualitas (Struktur ekonomi berubah, pendidikan naik, kemiskinan turun).</p>
                </div>`,
                example: {
                    question: 'Negara A PDB-nya naik pesat karena tambang, tapi rakyatnya masih banyak yang buta huruf. Ini disebut?',
                    steps: ['Angka naik (Kuantitas).', 'Kesejahteraan belum merata (Kualitas).'],
                    answer: 'Pertumbuhan ekonomi tanpa pembangunan ekonomi'
                },
                questions: [
                    { q: 'Indikator utama pertumbuhan ekonomi adalah kenaikan...', options: ['Jumlah penduduk', 'Nilai PDB/GNP riil', 'Harga barang', 'Kekayaan pejabat'], answer: 'Nilai PDB/GNP riil' },
                    { q: 'Salah satu ciri pembangunan ekonomi adalah adanya...', options: ['Inflasi', 'Perubahan struktur ekonomi', 'Penambahan utang', 'Pengangguran'], answer: 'Perubahan struktur ekonomi' },
                    { q: 'Faktor paling dominan dalam pembangunan ekonomi negara berkembang adalah...', options: ['Modal asing saja', 'Kualitas SDM', 'Banyaknya gedung', 'Luas wilayah'], answer: 'Kualitas SDM' },
                    { q: 'Indeks Pembangunan Manusia (IPM) mengukur tiga dimensi, kecuali...', options: ['Kesehatan', 'Pendidikan', 'Standar Hidup Layak', 'Jumlah Mobil'], answer: 'Jumlah Mobil' },
                    { q: 'Teori pertumbuhan ekonomi Rostow membagi tahap menjadi...', options: ['2 tahap', '3 tahap', '4 tahap', '5 tahap'], answer: '5 tahap' }
                ]
            },
            {
                id: 'eco-sma-inflasi-adv',
                name: 'Inflasi Tingkat Lanjut',
                icon: '🔥',
                concept: `<h3 class="text-xl font-bold mb-4">Menghitung Inflasi</h3>
                <p class="mb-4">Dihitung menggunakan Indeks Harga Konsumen (IHK).</p>
                <div class="card-glass p-3 border-red-500/20 text-xs font-mono text-red-400">
                    Laju Inflasi = [(IHK sekarang - IHK lalu) / IHK lalu] x 100%
                </div>`,
                example: {
                    question: 'IHK Des 2023 = 110. IHK Des 2022 = 100. Berapa laju inflasinya?',
                    steps: ['Laju = (110 - 100) / 100 * 100%.', 'Laju = 10%.'],
                    answer: '10%'
                },
                questions: [
                    { q: 'Alat ukur inflasi di Indonesia adalah...', options: ['IHK (CPI)', 'PDB', 'Kurs', 'Suku Bunga'], answer: 'IHK (CPI)' },
                    { q: 'Inflasi di atas 100% per tahun disebut...', options: ['Inflasi Ringan', 'Inflasi Sedang', 'Inflasi Berat', 'Hyper-inflation'], answer: 'Hyper-inflation' },
                    { q: 'Penerima pendapatan tetap paling dirugikan saat inflasi karena...', options: ['Uangnya hilang', 'Daya beli menurun', 'Pajak naik', 'Bunga turun'], answer: 'Daya beli menurun' },
                    { q: 'Kebijakan moneter untuk mengatasi inflasi adalah...', options: ['Cetak uang banyak', 'Naikkan suku bunga (Tight money policy)', 'Turunkan pajak', 'Subsidi bbm'], answer: 'Naikkan suku bunga (Tight money policy)' },
                    { q: 'Penyebab inflasi karena permintaan masyarakat terlalu kuat disebut...', options: ['Cost push inflation', 'Demand pull inflation', 'Imported inflation', 'Domestic inflation'], answer: 'Demand pull inflation' }
                ]
            },
            {
                id: 'eco-sma-tenagakerja',
                name: 'Ketenagakerjaan',
                icon: '👷',
                concept: `<h3 class="text-xl font-bold mb-4">Masalah Kerja</h3>
                <div class="space-y-3 text-xs">
                    <p><b>Angkatan Kerja:</b> Usia kerja (15+) yang bekerja atau mencari kerja.</p>
                    <p><b>Pengangguran Frictional:</b> Berhenti sementara cari kerja yang lebih cocok.</p>
                    <p><b>Pengangguran Cyclical:</b> Karena krisis ekonomi (resesi).</p>
                    <p><b>Pengangguran Structural:</b> Tidak cocok antara skill dan kebutuhan pasar.</p>
                </div>`,
                example: {
                    question: 'Dodo berhenti jadi kasir karena ingin mencari kerja jadi desainer (hobinya). Dodo disebut pengangguran?',
                    steps: ['Berhenti sementara dan punya pilihan.', 'Hanya masalah waktu bertemu lowongan baru.'],
                    answer: 'Pengangguran Friksional'
                },
                questions: [
                    { q: 'Penduduk usia kerja yang tidak sedang mencari kerja disebut...', options: ['Angkatan Kerja', 'Bukan Angkatan Kerja', 'Pengangguran', 'Buruh'], answer: 'Bukan Angkatan Kerja' },
                    { q: 'Pengangguran yang terjadi karena perubahan mesin/teknologi disebut pengangguran...', options: ['Friksional', 'Struktural', 'Konjungtural', 'Musiman'], answer: 'Struktural' },
                    { q: 'Upah minimum yang ditetapkan pemerintah tingkat provinsi disebut...', options: ['UMR', 'UMP', 'UMK', 'Upah Pokok'], answer: 'UMP' },
                    { q: 'Pengangguran yang terjadi saat masa panen selesai disebut...', options: ['Voluntary', 'Musiman', 'Friksional', 'Struktural'], answer: 'Musiman' },
                    { q: 'Dampak ekonomi dari tingginya pengangguran adalah...', options: ['Pendapatan per kapita naik', 'Pendapatan nasional menurun', 'Ekspor naik', 'Tabungan meningkat'], answer: 'Pendapatan nasional menurun' }
                ]
            },
            {
                id: 'eco-sma-teoriuang',
                name: 'Teori Uang',
                icon: '💎',
                concept: `<h3 class="text-xl font-bold mb-4">Kenapa Kita Pegang Uang?</h3>
                <p><b>Teori Keynes (Liquidity Preference):</b></p>
                <ol class="text-sm list-decimal pl-5 space-y-2 mt-2">
                    <li>Motif Transaksi (Beli makan/bayar tagihan).</li>
                    <li>Motif Berjaga-jaga (Biaya tak terduga).</li>
                    <li>Motif Spekulasi (Investasi/main saham).</li>
                </ol>`,
                example: {
                    question: 'Andi simpan uang di bawah kasur untuk biaya kalau tiba-tiba sakit. Motif apa?',
                    steps: ['Biaya tak terduga.', 'Kesiagaan.'],
                    answer: 'Motif Berjaga-jaga'
                },
                questions: [
                    { q: 'Rumus MV = PT (Teori Kuantitas Uang) dikemukakan oleh...', options: ['Adam Smith', 'Irving Fisher', 'Keynes', 'Marshal'], answer: 'Irving Fisher' },
                    { q: 'Dalam rumus MV=PT, M berarti...', options: ['Momentum', 'Money (Jumlah uang beredar)', 'Market', 'Margin'], answer: 'Money (Jumlah uang beredar)' },
                    { q: 'Motif memegang uang untuk investasi/keuntungan disebut motif...', options: ['Transaksi', 'Spekulasi', 'Berjaga-jaga', 'Simpanan'], answer: 'Spekulasi' },
                    { q: 'Jika jumlah uang beredar (M) naik dua kali lipat, maka menurut Fisher harga (P) akan...', options: ['Tetap', 'Turun 50%', 'Naik dua kali lipat', 'Tidak pasti'], answer: 'Naik dua kali lipat' },
                    { q: 'Uang berfungsi sebagai alat hitung, artinya...', options: ['Mudah disimpan', 'Dapat mengukur nilai barang', 'Dapat dibawa kemana saja', 'Tidak mudah rusak'], answer: 'Dapat mengukur nilai barang' }
                ]
            },
            {
                id: 'eco-sma-moneter',
                name: 'Kebijakan Moneter',
                icon: '🏛️',
                concept: `<h3 class="text-xl font-bold mb-4">Instrumen Bank Indonesia</h3>
                <p class="mb-4">Tujuannya menjaga stabilitas uang.</p>
                <div class="space-y-4 text-xs">
                    <p><b>1. Diskonto:</b> Atur suku bunga bank.</p>
                    <p><b>2. Operasi Pasar Terbuka:</b> Jual/beli surat berharga (SBI).</p>
                    <p><b>3. Giro Wajib Minimum (GWM):</b> Atur cadangan kas di bank.</p>
                </div>`,
                example: {
                    question: 'Inflasi tinggi. Bank Indonesia menjual Sertifikat BI (SBI) ke pasar. Apa tujuannya?',
                    steps: ['Masyarakat beli SBI pakai uang.', 'Uang masuk ke Bank Indonesia.', 'Uang beredar berkurang.'],
                    answer: 'Mengurangi jumlah uang beredar untuk menekan inflasi'
                },
                questions: [
                    { q: 'Kebijakan menaikkan suku bunga bank disebut kebijakan...', options: ['Fiskal', 'Diskonto', 'Pasar Terbuka', 'Pajak'], answer: 'Diskonto' },
                    { q: 'Pelaksana kebijakan moneter di Indonesia adalah...', options: ['Kementerian Keuangan', 'Dewan Perwakilan Rakyat', 'Bank Indonesia', 'Presiden'], answer: 'Bank Indonesia' },
                    { q: 'Kebijakan uang ketat (Tight Money Policy) dilakukan saat...', options: ['Resesi', 'Inflasi', 'Deflasi', 'Ekspor rendah'], answer: 'Inflasi' },
                    { q: 'Cadangan kas yang harus ada di bank umum disebut...', options: ['Bunga Bank', 'Kredit Macet', 'Giro Wajib Minimum (Cash Ratio)', 'Deposito'], answer: 'Giro Wajib Minimum (Cash Ratio)' },
                    { q: 'Menjual surat berharga ke masyarakat termasuk dalam instrumen...', options: ['Moneter kualitatif', 'Moneter kuantitatif (Operasi Pasar Terbuka)', 'Fiskal', 'Anggaran'], answer: 'Moneter kuantitatif (Operasi Pasar Terbuka)' }
                ]
            },
            {
                id: 'eco-sma-fiskal',
                name: 'Kebijakan Fiskal',
                icon: '📑',
                concept: `<h3 class="text-xl font-bold mb-4">Pajak & Belanja Negara</h3>
                <p class="mb-4">Dijalankan oleh Pemerintah (Kementerian Keuangan).</p>
                <div class="card-glass p-3 border-blue-500/20 text-xs text-blue-400">
                    <b>Instrumen:</b> Pajak (T) dan Belanja Negara (G).
                </div>
                <p class="text-xs mt-2 text-gray-400">Saat ekonomi lesu: Turunkan pajak & naikkan belanja (Fiskal Ekspansif).</p>`,
                example: {
                    question: 'Pemerintah memberikan subsidi pupuk dan menurunkan pajak UMKM. Ini kebijakan?',
                    steps: ['Mengatur anggaran negara.', 'Fokus pada pembangunan sektor tertentu.'],
                    answer: 'Kebijakan Fiskal Ekspansif'
                },
                questions: [
                    { q: 'Kebijakan yang mengatur pendapatan dan pengeluaran negara disebut...', options: ['Moneter', 'Fiskal', 'Uang', 'Politik'], answer: 'Fiskal' },
                    { q: 'Sumber pendapatan utama negara Indonesia berasal dari...', options: ['Hibah', 'Utang', 'Pajak', 'Cetak Uang'], answer: 'Pajak' },
                    { q: 'Kebijakan fiskal yang dilakukan saat inflasi adalah...', options: ['Naikkan belanja negara', 'Turunkan pajak', 'Kenaikan pajak & kurangi belanja', 'Memberi BLT besar'], answer: 'Kenaikan pajak & kurangi belanja' },
                    { q: 'Fiskal dijalankan oleh...', options: ['Gubernur BI', 'Menteri Keuangan/Pemerintah', 'DPR', 'OJK'], answer: 'Menteri Keuangan/Pemerintah' },
                    { q: 'Defisit anggaran terjadi jika...', options: ['Pendapatan > Belanja', 'Pendapatan < Belanja', 'Pajak turun', 'Ekspor naik'], answer: 'Pendapatan < Belanja' }
                ]
            },
            {
                id: 'eco-sma-apbn',
                name: 'APBN & APBD',
                icon: '🏦-2',
                concept: `<h3 class="text-xl font-bold mb-4">Anggaran Negara</h3>
                <div class="space-y-3 text-sm">
                    <p><b>Fungsi Alokasi:</b> Membagi anggaran untuk fasilitas publik (Jalan, Jembatan).</p>
                    <p><b>Fungsi Distribusi:</b> Meratakan pendapatan (Subsidi, Bantuan Sosial).</p>
                    <p><b>Fungsi Stabilisasi:</b> Menjaga ekonomi tetap stabil.</p>
                </div>`,
                example: {
                    question: 'Pemerintah membangun jalan tol menggunakan dana APBN. Ini fungsi?',
                    steps: ['Mengalokasikan dana ke proyek fisik publik.'],
                    answer: 'Fungsi Alokasi'
                },
                questions: [
                    { q: 'APBN disahkan oleh...', options: ['Presiden sendiri', 'DPR', 'Bank Indonesia', 'Gubernur'], answer: 'DPR' },
                    { q: 'Pajak Penghasilan (PPh) termasuk dalam pos...', options: ['Belanja Negara', 'Pendapatan Dalam Negeri', 'Hutang', 'Hibah'], answer: 'Pendapatan Dalam Negeri' },
                    { q: 'Jika DPR tidak menyetujui RAPBN, maka pemerintah menggunakan...', options: ['Anggaran tahun lalu', 'Utang baru', 'Pajak dinaikkan', 'Tidak ada anggaran'], answer: 'Anggaran tahun lalu' },
                    { q: 'Pendanaan untuk pendidikan minimal 20% dari APBN adalah amanat...', options: ['Presiden', 'UUD 1945/UU', 'Kepala Sekolah', 'DPR'], answer: 'UUD 1945/UU' },
                    { q: 'APBD dikelola oleh...', options: ['Pusat', 'Pemerintah Daerah', 'Bank Mandiri', 'Lurah'], answer: 'Pemerintah Daerah' }
                ]
            },
            // Kelas 12: Aplikasi & Ekonomi Global
            {
                id: 'eco-sma-global',
                name: 'Neraca & Kurs',
                icon: '💱',
                concept: `<h3 class="text-xl font-bold mb-4">Ekonomi Internasional</h3>
                <div class="space-y-3 text-sm">
                    <p><b>Kurs Tengah:</b> Rata-rata kurs jual dan beli.</p>
                    <p><b>Neraca Pembayaran:</b> Catatan transaksi ekonomi penduduk dalam negeri dengan luar negeri.</p>
                    <p><b>Devisa:</b> Semua alat pembayaran luar negeri.</p>
                </div>`,
                example: {
                    question: 'Jika kamu ingin menukar Rupiah ke Dollar untuk jalan-jalan, bank menggunakan kurs?',
                    steps: ['Bank "menjual" dollar ke kamu.', 'Kurs Jual.'],
                    answer: 'Kurs Jual'
                },
                questions: [
                    { q: 'Catatan sistematis transaksi ekonomi antar negara disebut...', options: ['Neraca Dagang', 'Neraca Pembayaran', 'Kurs', 'Devisa'], answer: 'Neraca Pembayaran' },
                    { q: 'Jika ekspor > impor, maka neraca pedagangan mengalami...', options: ['Defisit', 'Surplus', 'Seimbang', 'Kebangkrutan'], answer: 'Surplus' },
                    { q: 'Alat pembayaran yang diterima secara internasional disebut...', options: ['Rupiah', 'Cek', 'Devisa', 'Pulsa'], answer: 'Devisa' },
                    { q: 'Harga mata uang suatu negara terhadap mata uang negara lain disebut...', options: ['Inflasi', 'Kurs', 'Indeks', 'Pajak'], answer: 'Kurs' },
                    { q: 'Kebijakan menurunkan nilai mata uang sendiri terhadap valas disebut...', options: ['Apresiasi', 'Depresiasi', 'Devaluasi', 'Revaluasi'], answer: 'Devaluasi' }
                ]
            },
            {
                id: 'eco-sma-kerjasama',
                name: 'Kerja Sama Internasional',
                icon: '🌍',
                concept: `<h3 class="text-xl font-bold mb-4">Organisasi Dunia</h3>
                <ul class="text-xs space-y-2 text-gray-400">
                    <li><b>WTO:</b> Perdagangan dunia.</li>
                    <li><b>IMF:</b> Moneter internasional & bantuan krisis.</li>
                    <li><b>OPEC:</b> Negara pengekspor minyak.</li>
                    <li><b>ASEAN:</b> Kerja sama regional Asia Tenggara.</li>
                </ul>`,
                example: {
                    question: 'Organisasi yang memberikan pinjaman kepada negara yang mengalami krisis moneter adalah?',
                    steps: ['Fokus pada stabilitas sistem keuangan global.'],
                    answer: 'IMF (International Monetary Fund)'
                },
                questions: [
                    { q: 'MEA (Masyarakat Ekonomi ASEAN) bertujuan untuk...', options: ['Perang', 'Pasar tunggal Asia Tenggara', 'Menguasai dunia', 'Menolak impor'], answer: 'Pasar tunggal Asia Tenggara' },
                    { q: 'Organisasi yang mengurusi perdagangan antar negara adalah...', options: ['WHO', 'WTO', 'UNESCO', 'OPEC'], answer: 'WTO' },
                    { q: 'Kerja sama ekonomi dua negara disebut...', options: ['Regional', 'Bilateral', 'Multilateral', 'Universal'], answer: 'Bilateral' },
                    { q: 'Tujuan utama pendirian OPEC adalah...', options: ['Atur harga emas', 'Atur harga minyak bumi', 'Beri utang', 'Cetak uang'], answer: 'Atur harga minyak bumi' },
                    { q: 'Bank dunia (World Bank) berfokus pada...', options: ['Hanya urusan bank', 'Pembangunan & pengentasan kemiskinan', 'Perang dagang', 'Bisnis properti'], answer: 'Pembangunan & pengentasan kemiskinan' }
                ]
            }
        ]
    }
};
