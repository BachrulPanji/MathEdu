// Default configuration
const defaultConfig = {
    app_title: 'Matematika Master'
};

// Initialize Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange: async (config) => {
            const title = config.app_title || defaultConfig.app_title;
            document.getElementById('app-title').textContent = title;
            document.title = title;
        },
        mapToCapabilities: (config) => ({
            recolorables: [],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
            ['app_title', config.app_title || defaultConfig.app_title]
        ])
    });
}

// Math Topics Data
const mathTopics = {
    sd: {
        name: 'SD',
        color: 'green',
        icon: '🌱',
        topics: [
            {
                id: 'sd-penjumlahan',
                name: 'Penjumlahan & Pengurangan',
                icon: '➕',
                concept: `<h3 class="text-xl font-bold mb-4">Penjumlahan & Pengurangan</h3>
    <p class="mb-4">Operasi dasar matematika untuk menggabungkan atau mengambil nilai dari suatu kumpulan bilangan.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Rumus & Sifat:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• a + b = c</li>
                <li>• a - b = c</li>
                <li>• a + b = b + a (Komutatif)</li>
                <li>• (a+b)+c = a+(b+c) (Asosiatif)</li>
            </ul>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Tips & Hack:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• <b>Metode Kompensasi:</b> 48 + 35 → (50 + 35) - 2 = 83</li>
                <li>• <b>Kiri ke Kanan:</b> Hitung ratusan dulu, baru puluhan, lalu satuan.</li>
            </ul>
        </div>
    </div>`,
                example: {
                    question: 'Hitunglah: 1.245 + 3.789 - 2.156',
                    steps: [
                        'Langkah 1: Gunakan teknik penjumlahan bersusun untuk 1.245 + 3.789 = 5.034',
                        'Langkah 2: Kurangkan hasilnya dengan 2.156',
                        '5.034 - 2.156 = 2.878',
                        'Hack: Estimasi (1200 + 3800 - 2100 = 2900). Jawaban 2.878 sangat mendekati!'
                    ],
                    answer: 2878
                },
                questions: [
                    { q: '156 + 287 = ?', options: [433, 443, 453, 463], answer: 443 },
                    { q: '850 - 367 = ?', options: [473, 483, 493, 503], answer: 483 },
                    { q: '1.250 + 750 - 500 = ?', options: [1000, 1500, 1750, 2000], answer: 1500 },
                    { q: '2.456 + 1.234 = ?', options: [3680, 3690, 3700, 3710], answer: 3690 },
                    { q: '5.000 - 2.450 = ?', options: [2550, 2650, 2450, 2750], answer: 2550 },
                    { q: '123 + 456 + 789 = ?', options: [1368, 1468, 1268, 1568], answer: 1368 },
                    { q: '9.876 - 4.321 = ?', options: [5555, 5455, 5655, 5355], answer: 5555 },
                    { q: 'Jika x + 450 = 1.000, maka x adalah...', options: [450, 550, 650, 750], answer: 550 },
                    { q: '75 + 125 + 250 + 50 = ?', options: [450, 500, 550, 600], answer: 500 },
                    { q: '10.000 - 3.750 - 1.250 = ?', options: [4000, 5000, 6000, 7000], answer: 5000 },
                    { q: '456 - (123 + 56) = ?', options: [277, 287, 267, 297], answer: 277 },
                    { q: '1.500 + 2.500 + 3.500 = ?', options: [6500, 7500, 8500, 9500], answer: 7500 },
                    { q: '8.400 - 2.100 + 1.500 = ?', options: [7800, 7600, 7400, 7200], answer: 7800 },
                    { q: '25 + 25 + 25 + 25 + 100 = ?', options: [150, 175, 200, 225], answer: 200 },
                    { q: '999 + 999 = ?', options: [1998, 1999, 1898, 1899], answer: 1998 },
                    { q: '3.333 - 1.111 - 222 = ?', options: [2000, 2100, 1900, 2222], answer: 2000 },
                    { q: 'Jika 500 - y = 125, berapakah y?', options: [375, 385, 365, 355], answer: 375 },
                    { q: '12 + 34 + 56 + 78 = ?', options: [170, 180, 190, 200], answer: 180 },
                    { q: '1.001 + 999 = ?', options: [1900, 2000, 2001, 2002], answer: 2000 },
                    { q: '5.250 - 250 - 250 = ?', options: [4750, 4850, 4950, 5000], answer: 4750 }
                ]
            },
            {
                id: 'sd-perkalian',
                name: 'Perkalian & Pembagian',
                icon: '✖️',
                concept: `<h3 class="text-xl font-bold mb-4">Perkalian & Pembagian</h3>
    <p class="mb-4">Perkalian adalah penjumlahan berulang, sedangkan pembagian adalah pengurangan berulang hingga nol.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Aturan Penting:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• a × b = b × a (Komutatif)</li>
                <li>• a × (b + c) = (ab) + (ac) (Distributif)</li>
                <li>• Bilangan genap × 5 selalu berakhiran 0</li>
                <li>• Bilangan ganjil × 5 selalu berakhiran 5</li>
            </ul>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Hack Cerdas:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• <b>Kali 5:</b> Bagi 2, lalu tambah nol. (14 × 5 → 14/2 = 7 → 70)</li>
                <li>• <b>Kali 11:</b> Selipkan jumlah angka di tengah. (12 × 11 → 1 (1+2) 2 = 132)</li>
            </ul>
        </div>
    </div>`,
                example: {
                    question: 'Berapakah 25 × 16 ÷ 4?',
                    steps: [
                        'Hack: Bagi dulu sebelum dikali! 16 ÷ 4 = 4',
                        'Langkah 2: 25 × 4 = 100',
                        'Jika dikali dulu: 25 × 16 = 400, lalu 400 ÷ 4 = 100. Hasilnya sama, tapi lebih cepat jika bagi dulu!'
                    ],
                    answer: 100
                },
                questions: [
                    { q: '12 × 8 = ?', options: [86, 96, 106, 116], answer: 96 },
                    { q: '225 ÷ 15 = ?', options: [13, 14, 15, 16], answer: 15 },
                    { q: '25 × 4 × 7 = ?', options: [600, 700, 800, 900], answer: 700 },
                    { q: '144 ÷ 12 × 2 = ?', options: [12, 24, 36, 48], answer: 24 },
                    { q: '11 × 13 = ?', options: [133, 143, 153, 163], answer: 143 },
                    { q: '625 ÷ 25 = ?', options: [15, 20, 25, 30], answer: 25 },
                    { q: '15 × 6 ÷ 3 = ?', options: [20, 30, 40, 50], answer: 30 },
                    { q: 'Если 8 × x = 120, berapakah x?', options: [12, 14, 15, 16], answer: 15 },
                    { q: '50 × 20 ÷ 100 = ?', options: [5, 10, 15, 20], answer: 10 },
                    { q: '121 ÷ 11 = ?', options: [10, 11, 12, 13], answer: 11 },
                    { q: '35 × 2 = ?', options: [60, 70, 80, 90], answer: 70 },
                    { q: '1000 ÷ 8 = ?', options: [115, 125, 135, 145], answer: 125 },
                    { q: '18 × 5 = ?', options: [80, 85, 90, 95], answer: 90 },
                    { q: '48 ÷ 4 ÷ 2 = ?', options: [4, 6, 8, 12], answer: 6 },
                    { q: '15 × 15 = ?', options: [215, 225, 235, 245], answer: 225 },
                    { q: '256 ÷ 16 = ?', options: [14, 15, 16, 17], answer: 16 },
                    { q: '7 × 7 × 7 = ?', options: [243, 343, 443, 543], answer: 343 },
                    { q: '90 ÷ 5 = ?', options: [16, 17, 18, 19], answer: 18 },
                    { q: '12 × 12 = ?', options: [134, 144, 154, 164], answer: 144 },
                    { q: '81 ÷ 9 × 10 = ?', options: [80, 90, 100, 110], answer: 90 }
                ]
            },
            {
                id: 'sd-pecahan',
                name: 'Pecahan & Desimal',
                icon: '🔢',
                concept: `<h3 class="text-xl font-bold mb-4">Pecahan & Desimal</h3>
    <p class="mb-4">Pecahan mewakili bagian dari satu kesatuan (pembilang/penyebut), sementara desimal adalah sistem angka berbasis persepuluh.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Konversi Cepat:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• 1/2 = 0,5 = 50%</li>
                <li>• 1/4 = 0,25 = 25%</li>
                <li>• 1/5 = 0,2 = 20%</li>
                <li>• 3/4 = 0,75 = 75%</li>
            </ul>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Hack Pecahan:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• <b>Kali Silang:</b> Untuk membandingkan pecahan (e.g., 2/3 vs 3/5 → 2*5(10) vs 3*3(9), maka 2/3 > 3/5).</li>
                <li>• <b>Bagi Pecahan:</b> Balik pecahan kedua, lalu dikali.</li>
            </ul>
        </div>
    </div>`,
                example: {
                    question: 'Berapakah hasil dari 2/5 + 0,75?',
                    steps: [
                        'Langkah 1: Samakan formatnya. Kita ubah ke desimal atau pecahan.',
                        'Format Desimal: 2/5 = 0,4. Jadi 0,4 + 0,75 = 1,15',
                        'Format Pecahan: 2/5 + 3/4 = (8/20) + (15/20) = 23/20 = 1 3/20',
                        'Keduanya benar! Pilih yang paling mudah bagimu.'
                    ],
                    answer: '1,15 atau 23/20'
                },
                questions: [
                    { q: '1/2 + 1/4 = ?', options: ['1/2', '3/4', '1/6', '2/6'], answer: '3/4' },
                    { q: '0,5 × 0,2 = ?', options: ['0,1', '0,01', '1,0', '0,25'], answer: '0,1' },
                    { q: '3/5 dalam persen adalah...', options: ['30%', '50%', '60%', '75%'], answer: '60%' },
                    { q: '2/3 ... 3/4 (Isi dengan tanda yang tepat)', options: ['<', '>', '=', '≠'], answer: '<' },
                    { q: 'Hasil dari 1/2 ÷ 2 = ?', options: ['1', '1/4', '1/2', '4'], answer: '1/4' },
                    { q: 'Nilai desimal dari 7/20 adalah...', options: ['0,35', '0,7', '0,45', '0,25'], answer: '0,35' },
                    { q: '2,5 + 3/4 = ?', options: ['3,25', '3,5', '3,75', '4,25'], answer: '3,25' },
                    { q: 'Pecahan paling sederhana dari 15/60 adalah...', options: ['1/2', '1/3', '1/4', '1/5'], answer: '1/4' },
                    { q: '0,125 sama dengan pecahan...', options: ['1/4', '1/6', '1/8', '1/10'], answer: '1/8' },
                    { q: '2 1/2 + 1,5 = ?', options: ['3', '3,5', '4', '4,5'], answer: '4' },
                    { q: 'Hasil dari 4/5 × 10 = ?', options: [4, 6, 8, 10], answer: 8 },
                    { q: '1 - 0,35 = ?', options: ['0,55', '0,65', '0,75', '0,45'], answer: '0,65' },
                    { q: '3/4 - 1/8 = ?', options: ['5/8', '1/2', '3/8', '2/8'], answer: '5/8' },
                    { q: 'Manakah yang lebih besar: 0,6 atau 5/8?', options: ['0,6', '5/8', 'Sama', 'Tidak tahu'], answer: '5/8' },
                    { q: '20% dari 500 adalah...', options: [50, 80, 100, 120], answer: 100 },
                    { q: 'Pecahan campuran dari 7/3 adalah...', options: ['2 1/3', '1 2/3', '2 2/3', '3 1/3'], answer: '2 1/3' },
                    { q: '0,4 + 0,15 + 0,05 = ?', options: ['0,5', '0,55', '0,6', '0,65'], answer: '0,6' },
                    { q: 'Hasil dari 1/10 + 1/100 = ?', options: ['0,11', '0,2', '1,1', '0,011'], answer: '0,11' },
                    { q: '3/8 ÷ 1/2 = ?', options: ['3/4', '3/16', '1/4', '1/2'], answer: '3/4' },
                    { q: 'Tiga perempat dari 80 adalah...', options: [40, 50, 60, 70], answer: 60 }
                ]
            },
            {
                id: 'sd-keliling',
                name: 'Bangun Datar & Ruang',
                icon: '📐',
                concept: `<h3 class="text-xl font-bold mb-4">Keliling & Luas Bangun Datar</h3>
    <div class="flex flex-wrap gap-4 mb-6">
        <div class="card-glass p-3 rounded-xl text-center">
            <svg width="60" height="60" viewBox="0 0 100 100" class="mx-auto mb-2">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="#22c55e" stroke-width="5"/>
            </svg>
            <p class="text-xs font-bold">Persegi</p>
            <p class="text-[10px] text-gray-400">L = s × s</p>
        </div>
        <div class="card-glass p-3 rounded-xl text-center">
            <svg width="60" height="60" viewBox="0 0 100 100" class="mx-auto mb-2">
                <rect x="10" y="30" width="80" height="40" fill="none" stroke="#3b82f6" stroke-width="5"/>
            </svg>
            <p class="text-xs font-bold">Persegi Pj</p>
            <p class="text-[10px] text-gray-400">L = p × l</p>
        </div>
        <div class="card-glass p-3 rounded-xl text-center">
            <svg width="60" height="60" viewBox="0 0 100 100" class="mx-auto mb-2">
                <polygon points="50,15 90,85 10,85" fill="none" stroke="#ef4444" stroke-width="5"/>
            </svg>
            <p class="text-xs font-bold">Segitiga</p>
            <p class="text-[10px] text-gray-400">L = ½ × a × t</p>
        </div>
        <div class="card-glass p-3 rounded-xl text-center">
            <svg width="60" height="60" viewBox="0 0 100 100" class="mx-auto mb-2">
                <circle cx="50" cy="50" r="35" fill="none" stroke="#eab308" stroke-width="5"/>
            </svg>
            <p class="text-xs font-bold">Lingkaran</p>
            <p class="text-[10px] text-gray-400">L = π × r²</p>
        </div>
    </div>
    
    <div class="card-glass rounded-xl p-4 mb-4 border border-purple-500/30">
        <p class="font-bold text-purple-400 mb-2">📦 Bangun Ruang (Volume):</p>
        <ul class="text-sm space-y-1 text-gray-300">
            <li>• <b>Kubus:</b> V = s³ (sisi × sisi × sisi)</li>
            <li>• <b>Balok:</b> V = p × l × t</li>
            <li>• <b>Tabung:</b> V = π × r² × t</li>
        </ul>
    </div>`,
                example: {
                    question: 'Hitunglah luas gabungan persegi panjang (10x5 cm) dan segitiga di atasnya (alas 10, tinggi 4)!',
                    steps: [
                        'Langkah 1: Hitung luas persegi panjang → 10 × 5 = 50 cm²',
                        'Langkah 2: Hitung luas segitiga → ½ × 10 × 4 = 20 cm²',
                        'Langkah 3: Jumlahkan → 50 + 20 = 70 cm²',
                        'Hack: Ingat satuan luas selalu persegi (cm²) dan volume selalu kubik (cm³).'
                    ],
                    answer: '70 cm²'
                },
                questions: [
                    { q: 'Sisi persegi 12 cm, luasnya adalah...', options: ['48 cm²', '120 cm²', '144 cm²', '160 cm²'], answer: '144 cm²' },
                    { q: 'Sebuah balok p=10, l=5, t=4. Volumenya adalah...', options: ['150 cm³', '200 cm³', '250 cm³', '300 cm³'], answer: '200 cm³' },
                    { q: 'Keliling persegi panjang dengan p=15 and l=8 adalah...', options: ['23 cm', '46 cm', '50 cm', '60 cm'], answer: '46 cm' },
                    { q: 'Luas segitiga dengan alas 14 dan tinggi 10 adalah...', options: ['70 cm²', '140 cm²', '80 cm²', '100 cm²'], answer: '70 cm²' },
                    { q: 'Berapa jumlah rusuk pada kubus?', options: [6, 8, 12, 16], answer: 12 },
                    { q: 'Volume kubus dengan rusuk 5 cm adalah...', options: ['25 cm³', '100 cm³', '125 cm³', '150 cm³'], answer: '125 cm³' },
                    { q: 'Lingkaran dengan jari-jari 7 cm, berapa kelilingnya? (π=22/7)', options: ['22 cm', '44 cm', '88 cm', '154 cm'], answer: '44 cm' },
                    { q: 'Luas jajar genjang dengan alas 10 dan tinggi 8 adalah...', options: ['40 cm²', '60 cm²', '80 cm²', '100 cm²'], answer: '80 cm²' },
                    { q: 'Banyak sisi pada limas segi empat adalah...', options: [4, 5, 6, 8], answer: 5 },
                    { q: 'Diagonal sisi pada kubus ada sebanyak...', options: [6, 8, 12, 24], answer: 12 },
                    { q: 'Luas lingkaran dengan r=10 cm adalah... (π=3,14)', options: ['31,4 cm²', '314 cm²', '62,8 cm²', '628 cm²'], answer: '314 cm²' },
                    { q: 'Keliling persegi dengan luas 64 cm² adalah...', options: ['16 cm', '24 cm', '32 cm', '40 cm'], answer: '32 cm' },
                    { q: 'Lebar balok jika V=240, p=10, t=4 adalah...', options: [4, 6, 8, 10], answer: 6 },
                    { q: 'Luas permukaan kubus dengan sisi 3 cm adalah...', options: ['27 cm²', '36 cm²', '54 cm²', '81 cm²'], answer: '54 cm²' },
                    { q: 'Segitiga siku-siku dengan alas 6 dan tinggi 8, berapa luasnya?', options: ['24 cm²', '48 cm²', '14 cm²', '20 cm²'], answer: '24 cm²' },
                    { q: 'Banyak titik sudut pada prisma segitiga adalah...', options: [4, 5, 6, 9], answer: 6 },
                    { q: 'Sebuah taman berbentuk lingkaran diameter 14 m. Berapa luasnya?', options: ['154 m²', '308 m²', '44 m²', '616 m²'], answer: '154 m²' },
                    { q: 'Volume tabung dengan r=7, t=10 adalah... (π=22/7)', options: ['770 cm³', '1540 cm³', '220 cm³', '154 cm³'], answer: '1540 cm³' },
                    { q: 'Keliling belah ketupat dengan sisi 10 cm adalah...', options: ['20 cm', '30 cm', '40 cm', '50 cm'], answer: '40 cm' },
                    { q: 'Luas trapesium: alas1=10, alas2=14, t=5. Hasilnya...', options: ['60 cm²', '120 cm²', '70 cm²', '50 cm²'], answer: '60 cm²' }
                ]
            },
            {
                id: 'sd-bangunruang',
                name: 'Bangun Ruang Sederhana',
                icon: '📦',
                concept: `<h3 class="text-xl font-bold mb-4">Bangun Ruang Sederhana</h3>
    <p class="mb-4">Bangun ruang adalah bangun tiga dimensi yang memiliki volume.</p>
    <div class="card-glass rounded-xl p-4 mb-4">
        <p class="font-semibold mb-2">Rumus Volume:</p>
        <p class="text-yellow-400">Kubus: V = s³</p>
        <p class="text-yellow-400">Balok: V = p × l × t</p>
        <p class="text-yellow-400">Tabung: V = πr²t</p>
        <p class="text-yellow-400">Kerucut: V = 1/3 × πr²t</p>
    </div>`,
                example: {
                    question: 'Hitunglah volume balok dengan p=6 cm, l=4 cm, t=3 cm!',
                    steps: [
                        'Diketahui: p = 6 cm, l = 4 cm, t = 3 cm',
                        'Rumus volume balok: V = p × l × t',
                        'V = 6 × 4 × 3 = 72 cm³',
                        'Jadi, volume balok adalah 72 cm³'
                    ],
                    answer: '72 cm³'
                },
                questions: [
                    { q: 'Volume kubus dengan sisi 5 cm adalah...', options: ['100 cm³', '125 cm³', '150 cm³', '175 cm³'], answer: '125 cm³' },
                    { q: 'Volume balok dengan p=8, l=5, t=3 adalah...', options: ['100 cm³', '110 cm³', '120 cm³', '130 cm³'], answer: '120 cm³' },
                    { q: 'Kubus memiliki berapa sisi?', options: ['4', '6', '8', '12'], answer: '6' },
                    { q: 'Balok memiliki berapa rusuk?', options: ['8', '10', '12', '14'], answer: '12' },
                    { q: 'Volume kubus dengan sisi 4 cm adalah...', options: ['16 cm³', '32 cm³', '64 cm³', '128 cm³'], answer: '64 cm³' }
                ]
            },
            {
                id: 'sd-kpkfpb',
                name: 'KPK & FPB',
                icon: '🔗',
                concept: `<h3 class="text-xl font-bold mb-4">KPK & FPB</h3>
    <p class="mb-4">Dua konsep penting untuk mencari hubungan antara kelompok bilangan.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">💡 FPB (Faktor):</p>
            <p class="text-sm text-gray-300">Cari angka terbesar yang bisa membagi kedua bilangan. (Tips: Cari selisih angka tersebut, FPB biasanya adalah selisih atau faktor dari selisihnya).</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">🚀 KPK (Kelipatan):</p>
            <p class="text-sm text-gray-300">Cari angka terkecil yang bisa habis dibagi kedua bilangan. (Hack: KPK = (a × b) / FPB).</p>
        </div>
    </div>`,
                example: {
                    question: 'Cari KPK dan FPB dari 24 dan 36!',
                    steps: [
                        'Langkah 1: Faktorisasi Prima.',
                        '24 = 2³ × 3',
                        '36 = 2² × 3²',
                        'FPB (Pangkat terkecil): 2² × 3 = 12',
                        'KPK (Pangkat terbesar): 2³ × 3² = 72',
                        'Hack Selisih: 36 - 24 = 12. Karena 24 dan 36 bisa dibagi 12, maka FPB = 12!'
                    ],
                    answer: 'KPK=72, FPB=12'
                },
                questions: [
                    { q: 'KPK dari 12 dan 15 adalah...', options: [30, 45, 60, 75], answer: 60 },
                    { q: 'FPB dari 20 dan 30 adalah...', options: [5, 10, 15, 20], answer: 10 },
                    { q: 'KPK dari 8 dan 12 adalah...', options: [24, 32, 48, 60], answer: 24 },
                    { q: 'FPB dari 18 dan 24 adalah...', options: [3, 4, 6, 9], answer: 6 },
                    { q: 'KPK dari 10, 15, dan 20 adalah...', options: [30, 45, 60, 90], answer: 60 },
                    { q: 'FPB dari 45 dan 60 adalah...', options: [5, 10, 15, 20], answer: 15 },
                    { q: 'KPK dari 9 dan 6 adalah...', options: [12, 15, 18, 24], answer: 18 },
                    { q: 'FPB dari 100 dan 75 adalah...', options: [5, 15, 25, 50], answer: 25 },
                    { q: 'Jika KPK(a, 6) = 12, maka a terkecil adalah...', options: [4, 6, 8, 12], answer: 4 },
                    { q: 'FPB dari dua bilangan prima yang berbeda adalah...', options: [0, 1, 'Hasil kali keduanya', 'Tidak ada'], answer: 1 },
                    { q: 'KPK dari 14 dan 21 adalah...', options: [28, 35, 42, 49], answer: 42 },
                    { q: 'FPB dari 32 dan 48 adalah...', options: [8, 12, 16, 24], answer: 16 },
                    { q: 'KPK dari 5 dan 7 adalah...', options: [12, 35, 70, 105], answer: 35 },
                    { q: 'FPB dari 50, 75, dan 100 adalah...', options: [5, 15, 25, 50], answer: 25 },
                    { q: 'KPK dari 16 dan 24 adalah...', options: [32, 40, 48, 56], answer: 48 },
                    { q: 'FPB dari 42 dan 56 adalah...', options: [7, 14, 21, 28], answer: 14 },
                    { q: 'Lampu A menyala tiap 4 detik, B tiap 6 detik. Kapan menyala bersama?', options: ['8 detik', '10 detik', '12 detik', '24 detik'], answer: '12 detik' },
                    { q: 'Ibu punya 24 apel dan 30 jeruk. Berapa piring maksimal agar sama rata?', options: [4, 6, 8, 10], answer: 6 },
                    { q: 'KPK dari 2, 4, dan 8 adalah...', options: [8, 16, 24, 32], answer: 8 },
                    { q: 'FPB dari 13 dan 17 adalah...', options: [1, 13, 17, 221], answer: 1 }
                ]
            },
            {
                id: 'sd-soalcerita',
                name: 'Soal Cerita',
                icon: '📖',
                concept: `<h3 class="text-xl font-bold mb-4">Soal Cerita (Logika Dasar)</h3>
    <p class="mb-4">Mengubah masalah dunia nyata menjadi model matematika.</p>
    
    <div class="card-glass rounded-xl p-4 mb-4 border border-green-500/30">
        <p class="font-bold text-green-400 mb-2">📋 Strategi Jitu:</p>
        <ul class="text-sm space-y-1 text-gray-300">
            <li>• <b>Keyword "Sisa":</b> Biasanya berarti pengurangan.</li>
            <li>• <b>Keyword "Setiap/Per":</b> Biasanya berarti perkalian atau pembagian.</li>
            <li>• <b>Keyword "Bersama lagi":</b> Gunakan KPK.</li>
            <li>• <b>Keyword "Membagi sama rata":</b> Gunakan FPB.</li>
        </ul>
    </div>`,
                example: {
                    question: 'Budi membeli 5 box pensil, tiap box berisi 12 pensil. Jika ia memberikan 15 pensil ke temannya, berapa sisa pensil Budi?',
                    steps: [
                        'Langkah 1: Hitung total pensil → 5 box × 12 = 60 pensil',
                        'Langkah 2: Kurangi sisa → 60 - 15 = 45 pensil',
                        'Logika: Total = (Box × Isi) - DIBERIKAN'
                    ],
                    answer: '45 pensil'
                },
                questions: [
                    { q: 'Ani punya 3 kantong isi 15 kelereng. Ia kehilangan 10. Berapa sisanya?', options: [35, 40, 45, 50], answer: 35 },
                    { q: 'Harga 1 buku 5.000. Jika Budi beli 12 buku, berapa totalnya?', options: ['50.000', '60.000', '70.000', '80.000'], answer: '60.000' },
                    { q: 'Sebuah bus memuat 45 orang. Di halte A turun 12 orang dan naik 5. Berapa total sekarang?', options: [33, 38, 40, 42], answer: 38 },
                    { q: 'Ibu punya 2 kg gula. Dipakai 1/2 kg untuk kue. Berapa gram sisanya?', options: [500, 1000, 1500, 2000], answer: 1500 },
                    { q: 'Jarak kota A ke B 120 km. Jika ditempuh 2 jam, berapa kecepatannya?', options: ['50 km/jam', '60 km/jam', '70 km/jam', '80 km/jam'], answer: '60 km/jam' },
                    { q: 'Roni menabung 2.000 tiap hari. Berapa tabungannya setelah 3 minggu?', options: ['42.000', '52.000', '60.000', '30.000'], answer: '42.000' },
                    { q: 'Luas kamar Budi 12 m². Jika dipasang ubin 20x20 cm, berapa ubin?', options: [200, 300, 400, 500], answer: 300 },
                    { q: 'Uang Susi Rp50.000. Beli bakso Rp15.000 dan es Rp5.000. Sisa uangnya?', options: ['20.000', '30.000', '40.000', '10.000'], answer: '30.000' },
                    { q: 'Tiap 3 jam bakteri membelah jadi 2. Jika awal ada 10, berapa setelah 9 jam?', options: [40, 60, 80, 100], answer: 80 },
                    { q: 'Keliling lapangan 400 m. Budi lari 5 putaran. Berapa km jaraknya?', options: ['1 km', '2 km', '3 km', '4 km'], answer: '2 km' },
                    { q: 'Dua buah lampu berkedip tiap 2 dan 5 detik. Kapan detik ke berapa keduanya berkedip bersama?', options: [10, 15, 20, 25], answer: 10 },
                    { q: 'Seorang petani panen 240 kg padi. Dimasukkan ke 8 karung sama rata. Berat tiap karung?', options: [25, 30, 35, 40], answer: 30 },
                    { q: 'Suhu 25°C naik 10°C lalu turun 5°C. Suhu sekarang?', options: [25, 30, 35, 40], answer: 30 },
                    { q: 'Dalam 1 jam ada berapa menit?', options: [30, 60, 90, 120], answer: 60 },
                    { q: 'Berapa jumlah hari dalam 12 minggu?', options: [74, 84, 94, 104], answer: 84 },
                    { q: 'Ibu membagi 1 liter susu ke 4 gelas sama rata. Tiap gelas berisi...', options: ['200 ml', '250 ml', '300 ml', '500 ml'], answer: '250 ml' },
                    { q: 'Setengah dari sepertiga dari 60 adalah...', options: [5, 10, 15, 20], answer: 10 },
                    { q: 'Andi lahir tahun 2012. Tahun berapa ia berusia 17 tahun?', options: [2027, 2028, 2029, 2030], answer: 2029 },
                    { q: 'Sebuah kotak isi 144 telur. Pecah 12. Berapa lusin sisa telur?', options: [9, 10, 11, 12], answer: 11 },
                    { q: 'Jika 3 kg apel harganya 75.000, berapa harga 5 kg?', options: ['100k', '125k', '150k', '175k'], answer: '125k' }
                ]
            }
        ]
    },
    smp: {
        name: 'SMP',
        color: 'blue',
        icon: '🚀',
        topics: [
            {
                id: 'smp-bilbulat',
                name: 'Operasi Bilangan Bulat',
                icon: '🔢',
                concept: `<h3 class="text-xl font-bold mb-4">Operasi Bilangan Bulat</h3>
    <p class="mb-4">Bilangan bulat mencakup seluruh angka positif, nol, dan negatif.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Aturan Tanda:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• (+) × (+) = (+)</li>
                <li>• (-) × (-) = (+) (Ingat: Musuh dari musuh adalah teman)</li>
                <li>• (+) × (-) = (-)</li>
                <li>• (-) × (+) = (-)</li>
            </ul>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Tips Cerdas:</p>
            <p class="text-sm text-gray-300"><b>Pengurangan adalah Penjumlahan dengan Lawannya:</b> a - b = a + (-b). 
            Contoh: 5 - (-3) = 5 + 3 = 8.</p>
        </div>
    </div>`,
                example: {
                    question: 'Hitunglah: [(-12) ÷ 3] + [(-5) × (-4)]',
                    steps: [
                        'Langkah 1: Hitung dalam kurung pertama → -12 ÷ 3 = -4',
                        'Langkah 2: Hitung dalam kurung kedua → -5 × -4 = 20',
                        'Langkah 3: Jumlahkan hasilnya → -4 + 20 = 16',
                        'Hack: Ingat urutan KABATAKU (Kali Bagi Tambah Kurang).'
                    ],
                    answer: 16
                },
                questions: [
                    { q: '(-15) + 20 = ?', options: [-35, -5, 5, 35], answer: 5 },
                    { q: '(-8) × (-7) = ?', options: [-56, -15, 15, 56], answer: 56 },
                    { q: '45 ÷ (-9) = ?', options: [-5, -6, 5, 6], answer: -5 },
                    { q: '(-12) - (-15) = ?', options: [-27, -3, 3, 27], answer: 3 },
                    { q: '(-4)² = ?', options: [-16, -8, 8, 16], answer: 16 },
                    { q: '10 + (-2) × 5 = ?', options: [0, 40, -10, 20], answer: 0 },
                    { q: '(-100) ÷ (-4) = ?', options: [-25, -20, 20, 25], answer: 25 },
                    { q: 'Jika x + (-5) = -12, maka x = ?', options: [-17, -7, 7, 17], answer: -7 },
                    { q: '(-3) × 4 × (-2) = ?', options: [-24, -12, 12, 24], answer: 24 },
                    { q: 'Suhu -5°C naik 12°C. Suhu sekarang?', options: ['-17°C', '7°C', '17°C', '-7°C'], answer: '7°C' },
                    { q: '(-20) ÷ 5 - 3 = ?', options: [-7, -1, 1, 7], answer: -7 },
                    { q: 'Hasil dari 15 - 20 + (-5) = ?', options: [-10, -5, 0, 10], answer: -10 },
                    { q: '(-6)³ = ?', options: [-216, -36, 36, 216], answer: -216 },
                    { q: '25 + (-50) ÷ 2 = ?', options: [0, 25, -12.5, 50], answer: 0 },
                    { q: '(-1) + (-1) - (-1) = ?', options: [-3, -1, 1, 3], answer: -1 },
                    { q: 'Jika 3y = -18, maka y = ?', options: [-6, -4, 4, 6], answer: -6 },
                    { q: '(-8) + 12 - 4 = ?', options: [-4, 0, 4, 8], answer: 0 },
                    { q: '100 - (-50) × 2 = ?', options: [0, 100, 200, 300], answer: 200 },
                    { q: '(-5) × 0 = ?', options: [-5, 0, 1, 5], answer: 0 },
                    { q: '(-10) + (-10) + (-10) = ?', options: [-30, -20, 30, 20], answer: -30 }
                ]
            },
            {
                id: 'smp-aljabar',
                name: 'Bentuk Aljabar',
                icon: '🔤',
                concept: `<h3 class="text-xl font-bold mb-4">Bentuk Aljabar</h3>
    <p class="mb-4">Aljabar menggunakan huruf (variabel) untuk mewakili angka yang belum diketahui.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Istilah Utama:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• <b>Variabel:</b> Huruf (x, y, a)</li>
                <li>• <b>Koefisien:</b> Angka di depan huruf (<b>3</b>x)</li>
                <li>• <b>Konstanta:</b> Angka sendirian</li>
                <li>• <b>Suku Sejenis:</b> Memiliki variabel dan pangkat yang sama.</li>
            </ul>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Tips Operasi:</p>
            <p class="text-sm text-gray-300">Hanya suku sejenis yang bisa dijumlahkan atau dikurangkan.
            Contoh: 3x + 2x = 5x, tapi 3x + 2y tidak bisa disederhanakan.</p>
        </div>
    </div>`,
                example: {
                    question: 'Sederhanakan: 3(2x - 4) + 5x - 7',
                    steps: [
                        'Langkah 1: Gunakan sifat distributif → 3 × 2x = 6x, 3 × -4 = -12',
                        'Langkah 2: Tulis ulang persamaannya → 6x - 12 + 5x - 7',
                        'Langkah 3: Kelompokkan suku sejenis → (6x + 5x) + (-12 - 7)',
                        'Hasil Akhir: 11x - 19'
                    ],
                    answer: '11x - 19'
                },
                questions: [
                    { q: '5x + 3x = ?', options: ['8x', '8x²', '15x', '2x'], answer: '8x' },
                    { q: '3a - 7a = ?', options: ['-4a', '4a', '-10a', '10a'], answer: '-4a' },
                    { q: 'Hasil dari 2(x + 5) adalah...', options: ['2x + 5', '2x + 10', 'x + 10', '2x + 7'], answer: '2x + 10' },
                    { q: 'Koefisien x² pada 3x² - 5x + 7 adalah...', options: [3, -5, 7, 0], answer: 3 },
                    { q: 'Sederhanakan: 4y + 2 - y + 5', options: ['3y + 7', '5y + 7', '3y - 3', '3y + 3'], answer: '3y + 7' },
                    { q: '(x + 2)(x - 2) = ?', options: ['x² + 4', 'x² - 4', 'x² - 2x + 4', '2x - 4'], answer: 'x² - 4' },
                    { q: 'Banyak suku pada 3x² + 4x - 5y + 8 adalah...', options: [2, 3, 4, 5], answer: 4 },
                    { q: 'Sederhanakan: 2a/5 + 3a/5', options: ['a', '5a/5', '6a/25', '5a/10'], answer: 'a' },
                    { q: '3(2p - q) = ?', options: ['6p - q', '6p - 3q', '5p - 3q', '6p + 3q'], answer: '6p - 3q' },
                    { q: 'Konstanta dari 5x - 3y + 12 adalah...', options: [5, -3, 12, 0], answer: 12 },
                    { q: 'Hasil kali (2x) × (3y) adalah...', options: ['6xy', '5xy', '6(x+y)', '23xy'], answer: '6xy' },
                    { q: 'x + x + x = ?', options: ['x³', '3x', 'x + 3', '2x'], answer: '3x' },
                    { q: 'Sederhanakan: 10a² ÷ 2a', options: ['5a', '5a²', '8a', '5'], answer: '5a' },
                    { q: 'Faktorisasi dari x² + 5x + 6 adalah...', options: ['(x+2)(x+3)', '(x+1)(x+6)', '(x-2)(x-3)', '(x-1)(x-6)'], answer: '(x+2)(x+3)' },
                    { q: 'Jika x=2, berapakah nilai 3x - 4?', options: [2, 3, 4, 5], answer: 2 },
                    { q: 'Koefisien dari -y adalah...', options: [0, 1, -1, 'y'], answer: -1 },
                    { q: 'Sederhanakan: 1/2 x + 1/2 x', options: ['1/4 x', 'x', '2x', 'x/4'], answer: 'x' },
                    { q: '5(a + b) - 2(a + b) = ?', options: ['3a + 3b', '3(a-b)', '7a + 7b', '3'], answer: '3a + 3b' },
                    { q: 'Luas persegi panjang dengan p=x+2 dan l=x-2 adalah...', options: ['x²-4', 'x²+4', '2x', '4x'], answer: 'x²-4' },
                    { q: 'Hasil dari (3x)² adalah...', options: ['3x²', '6x²', '9x²', '9x'], answer: '9x²' }
                ]
            },
            {
                id: 'smp-plsv',
                name: 'Persamaan Linear Satu Variabel',
                icon: '⚖️',
                concept: `<h3 class="text-xl font-bold mb-4">Persamaan Linear Satu Variabel (PLSV)</h3>
    <p class="mb-4">Persamaan yang menyatakan kesamaan dua ekspresi dengan satu variabel berpangkat satu.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Langkah Universal:</p>
            <ol class="text-sm space-y-1 text-gray-300">
                <li>1. Hilangkan tanda kurung.</li>
                <li>2. Kelompokkan variabel di kiri, angka di kanan.</li>
                <li>3. Gunakan operasi kebalikan (pindah ruas).</li>
            </ol>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Tips Pindah Ruas:</p>
            <p class="text-sm text-gray-300">Tambah jadi kurang, kali jadi bagi. Ingat untuk memperlakukan kedua sisi secara adil!</p>
        </div>
    </div>`,
                example: {
                    question: 'Selesaikan: 4x - 7 = 13',
                    steps: [
                        'Langkah 1: Pindahkan -7 ke kanan (jadi +7) → 4x = 13 + 7',
                        'Langkah 2: 4x = 20',
                        'Langkah 3: Bagi kedua sisi dengan 4 → x = 20 ÷ 4',
                        'Hasil: x = 5'
                    ],
                    answer: 5
                },
                questions: [
                    { q: 'Jika x + 5 = 12, maka x = ?', options: [5, 7, 12, 17], answer: 7 },
                    { q: 'Jika 3x = 15, maka x = ?', options: [3, 5, 12, 18], answer: 5 },
                    { q: 'Jika 2x - 4 = 10, maka x = ?', options: [3, 5, 7, 9], answer: 7 },
                    { q: 'Jika x/4 = 3, maka x = ?', options: [1, 7, 9, 12], answer: 12 },
                    { q: 'Selesaikan 5x + 3 = 2x + 12!', options: [2, 3, 4, 5], answer: 3 },
                    { q: 'Jika 2(x + 3) = 10, maka x = ?', options: [2, 3, 4, 5], answer: 2 },
                    { q: 'Jika 10 - x = 4, maka x = ?', options: [-6, 6, 14, 4], answer: 6 },
                    { q: 'Jika 3x - 5 = x + 7, maka x = ?', options: [4, 5, 6, 7], answer: 6 },
                    { q: 'Selesaikan 1/2 x = 4!', options: [2, 4, 6, 8], answer: 8 },
                    { q: 'Jika p + 3 = -2, maka p = ?', options: [-5, -1, 1, 5], answer: -5 },
                    { q: 'Jika 4x + 8 = 0, maka x = ?', options: [-2, 2, -4, 4], answer: -2 },
                    { q: 'Jumlah tiga bilangan berurutan adalah 15. Bilangan tengahnya?', options: [4, 5, 6, 7], answer: 5 },
                    { q: 'Jika 3(x-2) = x + 4, maka x = ?', options: [3, 4, 5, 6], answer: 5 },
                    { q: 'Selesaikan x + 2 = 2x - 5!', options: [3, 5, 7, 9], answer: 7 },
                    { q: 'Jika x/2 + 1 = 4, maka x = ?', options: [4, 6, 8, 10], answer: 6 },
                    { q: 'Jika 5 - 2x = 1, maka x = ?', options: [1, 2, 3, 4], answer: 2 },
                    { q: 'Keliling persegi 40 cm. Sisi s adalah solusi dari 4s=40. Jadi s=?', options: [8, 10, 12, 15], answer: 10 },
                    { q: 'Jika 7x = 0, maka x = ?', options: [0, 7, 1, 'Tidak ada'], answer: 0 },
                    { q: 'Jika 2x + 1 = x - 5, maka x = ?', options: [-6, -4, 4, 6], answer: -6 },
                    { q: 'Selesaikan 3x/4 = 9!', options: [6, 9, 12, 15], answer: 12 }
                ]
            },
            {
                id: 'smp-spldv',
                name: 'SPLDV',
                icon: '📉',
                concept: `<h3 class="text-xl font-bold mb-4">Sistem Persamaan Linear Dua Variabel (SPLDV)</h3>
    <p class="mb-4">Mencari nilai x dan y yang memenuhi dua persamaan sekaligus.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Metode Utama:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• <b>Eliminasi:</b> Menghilangkan salah satu variabel.</li>
                <li>• <b>Substitusi:</b> Memasukkan nilai satu variabel ke persamaan lain.</li>
                <li>• <b>Gabungan:</b> Cara tercepat (Eliminasi lalu Substitusi).</li>
            </ul>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Tips Cepat:</p>
            <p class="text-sm text-gray-300">Jika koefisien variabel sudah sama, langsung kurangkan atau jumlahkan untuk eliminasi!</p>
        </div>
    </div>`,
                example: {
                    question: 'Tentukan (x,y) dari: x + y = 7 dan x - y = 3',
                    steps: [
                        'Langkah 1: Gunakan eliminasi (jumlahkan kedua persamaan).',
                        '(x + y) + (x - y) = 7 + 3',
                        '2x = 10 → x = 5',
                        'Langkah 2: Substitusi x=5 ke eq1 → 5 + y = 7',
                        'y = 7 - 5 = 2',
                        'Hasil Akhir: (5, 2)'
                    ],
                    answer: '(5, 2)'
                },
                questions: [
                    { q: 'Himpunan penyelesaian x+y=5 dan x-y=1 adalah...', options: ['(3,2)', '(2,3)', '(4,1)', '(1,4)'], answer: '(3,2)' },
                    { q: 'Jika 2x+y=10 dan x+y=7, berapakah x?', options: [1, 2, 3, 4], answer: 3 },
                    { q: 'Nilai y dari x+2y=8 dan x-y=2 adalah...', options: [1, 2, 3, 4], answer: 2 },
                    { q: 'Hasil x+y jika 2x+3y=13 dan x+y=5 adalah...', options: [4, 5, 6, 7], answer: 5 },
                    { q: 'Titik potong garis y=2x dan y=x+3 adalah...', options: ['(1,2)', '(2,4)', '(3,6)', '(4,8)'], answer: '(3,6)' },
                    { q: 'Jika 3x+2y=12 dan y=3, berapakah x?', options: [1, 2, 3, 4], answer: 2 },
                    { q: 'Himpunan penyelesaian 2x-y=4 dan x+y=5 adalah...', options: ['(3,2)', '(2,3)', '(1,4)', '(4,1)'], answer: '(3,2)' },
                    { q: 'Jika x dan y solusi dari x+y=10 dan 2x-y=8, nilai x adalah...', options: [4, 5, 6, 7], answer: 6 },
                    { q: 'Harga 2 buku & 1 pensil 8rb, 1 buku & 1 pensil 5rb. Harga 1 buku?', options: [2000, 2500, 3000, 3500], answer: 3000 },
                    { q: 'Jika x+y=0 dan x-y=4, berapakah y?', options: [-4, -2, 2, 4], answer: -2 },
                    { q: 'Selesaikan: x=y dan x+y=10. Nilai x?', options: [2, 4, 5, 6], answer: 5 },
                    { q: 'Jika 5x+y=10 dan 4x+y=8, berapakah x?', options: [1, 2, 3, 4], answer: 2 },
                    { q: 'Hasil 2x jika x+y=5 dan 2x+y=8 adalah...', options: [3, 4, 6, 8], answer: 6 },
                    { q: 'Penyelesaian dari 3x-y=5 dan x+y=3 adalah...', options: ['(2,1)', '(1,2)', '(3,0)', '(0,3)'], answer: '(2,1)' },
                    { q: 'Jika 2x+2y=20, berapakah x+y?', options: [5, 10, 15, 20], answer: 10 },
                    { q: 'Jika x=2y dan x+y=9, berapakah x?', options: [3, 4, 6, 8], answer: 6 },
                    { q: 'Selesaikan: y=3x dan 2x+y=15. Nilai x?', options: [2, 3, 4, 5], answer: 3 },
                    { q: 'Nilai y dari 4x+3y=24 dan x=0 adalah...', options: [4, 6, 8, 12], answer: 8 },
                    { q: 'Jika x-y=10 dan x+y=20, berapakah x?', options: [5, 10, 15, 20], answer: 15 },
                    { q: 'Dua bilangan jumlahnya 20, selisihnya 4. Bilangan terkecil?', options: [6, 8, 10, 12], answer: 8 }
                ]
            },
            {
                id: 'smp-pythagoras',
                name: 'Teorema Pythagoras',
                icon: '📐',
                concept: `<h3 class="text-xl font-bold mb-4">Teorema Pythagoras</h3>
    <div class="flex flex-col md:flex-row items-center gap-6 mb-4">
        <svg width="120" height="120" viewBox="0 0 100 100">
            <polygon points="20,80 80,80 20,20" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <rect x="20" y="70" width="10" height="10" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <text x="45" y="95" fill="white" font-size="10">a</text>
            <text x="5" y="55" fill="white" font-size="10">b</text>
            <text x="55" y="45" fill="white" font-size="10">c</text>
        </svg>
        <div class="card-glass p-4 rounded-xl border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Rumus Utama:</p>
            <p class="text-xl font-mono text-center mb-2">a² + b² = c²</p>
            <p class="text-xs text-gray-400">Dimana c adalah sisi miring (hipotenusa).</p>
        </div>
    </div>
    
    <div class="card-glass rounded-xl p-4 mb-4 border border-blue-500/30">
        <p class="font-bold text-blue-400 mb-2">💡 Triple Pythagoras (Wajib Hafal):</p>
        <ul class="text-sm grid grid-cols-2 gap-2 text-gray-300">
            <li>• 3, 4, 5</li>
            <li>• 5, 12, 13</li>
            <li>• 8, 15, 17</li>
            <li>• 7, 24, 25</li>
        </ul>
    </div>`,
                example: {
                    question: 'Sebuah segitiga siku-siku memiliki alas 6 cm dan tinggi 8 cm. Berapa panjang sisi miringnya?',
                    steps: [
                        'Langkah 1: Gunakan rumus c² = a² + b²',
                        'Langkah 2: c² = 6² + 8² = 36 + 64 = 100',
                        'Langkah 3: c = √100 = 10 cm',
                        'Hack: Ini adalah kelipatan dari Triple (3, 4, 5) dikali 2!'
                    ],
                    answer: '10 cm'
                },
                questions: [
                    { q: 'Jika alas 3 dan tinggi 4, sisi miring adalah...', options: [5, 6, 7, 8], answer: 5 },
                    { q: 'Sisi miring 13, alas 12, berapakah tingginya?', options: [4, 5, 6, 7], answer: 5 },
                    { q: 'Manakah yang merupakan Triple Pythagoras?', options: ['3,4,6', '5,10,13', '8,15,17', '7,24,26'], answer: '8,15,17' },
                    { q: 'Jika c=25 and a=7, berapakah b?', options: [20, 22, 24, 26], answer: 24 },
                    { q: 'Diagonal persegi dengan sisi 10 cm adalah...', options: ['10√2', '20', '100', '10'], answer: '10√2' },
                    { q: 'Tangga 10m bersandar di tembok, jarak bawahnya 6m. Tinggi tembok?', options: [6, 7, 8, 9], answer: 8 },
                    { q: 'Jika a=9, b=12, berapakah c?', options: [13, 15, 17, 20], answer: 15 },
                    { q: 'Segitiga dengan sisi 6, 8, 10 adalah segitiga...', options: ['Lancip', 'Tumpul', 'Siku-siku', 'Sama sisi'], answer: 'Siku-siku' },
                    { q: 'Jika c=17 dan b=8, berapakah a?', options: [13, 14, 15, 16], answer: 15 },
                    { q: 'Akar dari 169 adalah...', options: [11, 12, 13, 14], answer: 13 },
                    { q: 'Jika a=5, b=5, maka c=...', options: ['5√2', '10', '25', '50'], answer: '5√2' },
                    { q: 'Lebar TV 40cm, tinggi 30cm. Berapa inch diagonalnya? (1 inch ≈ 2.5cm)', options: ['20 inch', '15 inch', '25 inch', '30 inch'], answer: '20 inch' },
                    { q: 'Triple 9, 40, x. Nilai x adalah...', options: [41, 42, 43, 45], answer: 41 },
                    { q: 'Triple 20, 21, x. Nilai x adalah...', options: [27, 28, 29, 30], answer: 29 },
                    { q: 'Jika c² > a² + b², maka segitiga tersebut...', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Sama kaki'], answer: 'Tumpul' },
                    { q: 'Tinggi segitiga sama sisi dengan sisi 10 cm adalah...', options: ['5', '5√2', '5√3', '10'], answer: '5√3' },
                    { q: 'Diagonal ruang kubus dengan rusuk 6 cm adalah...', options: ['6√2', '6√3', '12', '18'], answer: '6√3' },
                    { q: 'Jarak titik (0,0) ke (3,4) adalah...', options: [3, 4, 5, 7], answer: 5 },
                    { q: 'Jika a=1, b=1, maka c=...', options: [1, 2, '√2', '2√2'], answer: '√2' },
                    { q: 'Triple Pythagoras terkecil adalah...', options: ['1,2,3', '2,3,4', '3,4,5', '4,5,6'], answer: '3,4,5' }
                ]
            },
            {
                id: 'smp-perbandingan',
                name: 'Perbandingan & Skala',
                icon: '⚖️',
                concept: `<h3 class="text-xl font-bold mb-4">Perbandingan & Skala</h3>
    <p class="mb-4">Membandingkan dua besaran atau lebih dengan satuan yang sama.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Perbandingan Senilai:</p>
            <p class="text-xs text-gray-300">Jika satu naik, yang lain naik. (e.g., Harga barang vs jumlah barang).</p>
            <p class="font-mono text-sm mt-2">a1/b1 = a2/b2</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">🔄 Perbandingan Berbalik Nilai:</p>
            <p class="text-xs text-gray-300">Jika satu naik, yang lain turun. (e.g., Kecepatan vs waktu tempuh).</p>
            <p class="font-mono text-sm mt-2">a1 × b1 = a2 × b2</p>
        </div>
    </div>`,
                example: {
                    question: 'Skala peta 1:500.000. Jika jarak pada peta 4 cm, berapa jarak sebenarnya?',
                    steps: [
                        'Langkah 1: Jarak Sebenarnya = Jarak Peta × Skala',
                        'Langkah 2: 4 cm × 500.000 = 2.000.000 cm',
                        'Langkah 3: Ubah ke km → 2.000.000 ÷ 100.000 = 20 km',
                        'Hack: Coret 5 nol untuk mengubah cm ke km secara langsung!'
                    ],
                    answer: '20 km'
                },
                questions: [
                    { q: 'A:B = 2:3. Jika A=10, berapakah B?', options: [12, 15, 18, 20], answer: 15 },
                    { q: 'Skala 1:1.000.000. Jarak 5 cm di peta, maka asli...', options: ['5 km', '50 km', '500 km', '5000 km'], answer: '50 km' },
                    { q: '3 pensil harganya 6rb. Berapa harga 7 pensil?', options: ['12rb', '14rb', '16rb', '18rb'], answer: '14rb' },
                    { q: 'Pekerjaan selesai 10 hari oleh 4 orang. Jika 8 orang, selesai...', options: ['5 hari', '10 hari', '20 hari', '40 hari'], answer: '5 hari' },
                    { q: 'Perbandingan tabungan Andi & Budi 4:5. Total 90rb. Tabungan Andi?', options: ['40rb', '50rb', '60rb', '30rb'], answer: '40rb' },
                    { q: 'Skala 1:200. Tinggi gedung 40m, di gambar jadi...', options: ['10cm', '20cm', '40cm', '80cm'], answer: '20cm' },
                    { q: 'A:B = 5:2. Selisihnya 30. Berapakah A?', options: [40, 50, 60, 70], answer: 50 },
                    { q: 'Kecepatan 60km/jam butuh 4 jam. Jika 80km/jam butuh...', options: ['2 jam', '3 jam', '3.5 jam', '5 jam'], answer: '3 jam' },
                    { q: 'A:B:C = 2:3:5. Jika total 100, berapakah C?', options: [30, 40, 50, 60], answer: 50 },
                    { q: 'Sebuah model mobil panjangnya 20cm (asli 4m). Lebar asli 2m, di model jadi...', options: ['5cm', '10cm', '15cm', '20cm'], answer: '10cm' },
                    { q: 'Uang P:Q = 3:4. Jika uang Q 40rb, uang P?', options: ['25rb', '30rb', '35rb', '45rb'], answer: '30rb' },
                    { q: '1 liter bensin untuk 15 km. Berapa liter untuk 60 km?', options: [2, 3, 4, 5], answer: 4 },
                    { q: 'Skala peta 1:2.000.000. Jarak asli 100km, di peta jadi...', options: ['2cm', '5cm', '10cm', '20cm'], answer: '5cm' },
                    { q: 'Pembagi 24 kue untuk 8 anak. Jika tambah 4 anak, tiap anak dapat...', options: [1, 2, 3, 4], answer: 2 },
                    { q: 'Umur Ayah:Ibu = 6:5. Jika umur Ayah 42, umur Ibu?', options: [30, 35, 40, 45], answer: 35 },
                    { q: 'Perbandingan kelereng 3:4. Selisih 5. Total kelereng?', options: [25, 30, 35, 40], answer: 35 },
                    { q: 'Suhu 40°C dalam Reamur adalah... (C:R = 5:4)', options: [32, 30, 28, 36], answer: 32 },
                    { q: 'Model pesawat skala 1:50. Panjang model 30cm, asli...', options: ['1.5m', '15m', '150m', '1500m'], answer: '15m' },
                    { q: 'A:B = 2:3, B:C = 4:5. Maka A:B:C = ?', options: ['8:12:15', '2:4:5', '6:12:15', '8:10:15'], answer: '8:12:15' },
                    { q: 'Jika 3 pekerja butuh 20 hari, berapa pekerja untuk 12 hari?', options: [4, 5, 6, 8], answer: 5 }
                ]
            },
            {
                id: 'smp-statistik',
                name: 'Statistik Dasar',
                icon: '📊',
                concept: `<h3 class="text-xl font-bold mb-4">Statistik Dasar</h3>
    <p class="mb-4">Menganalisis data kelompok untuk menemukan pola dan nilai pusat.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Ukuran Pemusatan:</p>
            <ul class="text-sm space-y-1 text-gray-300">
                <li>• <b>Mean:</b> Rata-rata (Jumlah data / Banyak data).</li>
                <li>• <b>Median:</b> Nilai tengah (Urutkan dulu!).</li>
                <li>• <b>Modus:</b> Paling sering muncul.</li>
            </ul>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Tips Jangkauan:</p>
            <p class="text-sm text-gray-300"><b>Jangkauan (Range):</b> Data Terbesar - Data Terkecil. Berguna untuk melihat penyebaran data.</p>
        </div>
    </div>`,
                example: {
                    question: 'Data: 6, 8, 5, 8, 9, 7, 8. Tentukan Mean, Median, dan Modusnya!',
                    steps: [
                        'Langkah 1: Urutkan data → 5, 6, 7, 8, 8, 8, 9',
                        'Mean: (5+6+7+8+8+8+9) / 7 = 51 / 7 ≈ 7,28',
                        'Median: Nilai tengah dari 7 data adalah data ke-4 → 8',
                        'Modus: Angka 8 muncul 3 kali (paling banyak) → 8'
                    ],
                    answer: 'Mean=7,28, Med=8, Mod=8'
                },
                questions: [
                    { q: 'Rata-rata dari 4, 5, 6, 7, 8 adalah...', options: [5, 6, 7, 8], answer: 6 },
                    { q: 'Median dari 2, 5, 3, 8, 10 adalah...', options: [3, 5, 8, 10], answer: 5 },
                    { q: 'Modus dari 5, 6, 6, 7, 8, 6, 9 adalah...', options: [5, 6, 7, 8], answer: 6 },
                    { q: 'Jangkauan dari data 10, 2, 5, 20, 15 adalah...', options: [10, 15, 18, 20], answer: 18 },
                    { q: 'Jika rata-rata 4 bilangan adalah 10, jumlah data adalah...', options: [20, 40, 60, 80], answer: 40 },
                    { q: 'Median dari data 4, 6, 8, 10 adalah...', options: [6, 7, 8, 9], answer: 7 },
                    { q: 'Nilai yang paling sering muncul disebut...', options: ['Mean', 'Median', 'Modus', 'Kuartil'], answer: 'Modus' },
                    { q: 'Mean dari 10, 20, 30, 40, 50 adalah...', options: [25, 30, 35, 40], answer: 30 },
                    { q: 'Median dari 7, 8, 9, 10, 11, 12 adalah...', options: [9, 9.5, 10, 10.5], answer: 9.5 },
                    { q: 'Jika median 5 data berurutan adalah 10, maka data ke-3 adalah...', options: [5, 8, 10, 12], answer: 10 },
                    { q: 'Data: 2, 2, 3, 3, 3, 4, 4. Modusnya?', options: [2, 3, 4, 5], answer: 3 },
                    { q: 'Mean dari 8, 8, 8, 8, 8 adalah...', options: [0, 8, 16, 40], answer: 8 },
                    { q: 'Jangkauan interkuartil Q3 - Q1 disebut...', options: ['Simpangan', 'Hamparan', 'Rataan', 'Modus'], answer: 'Hamparan' },
                    { q: 'Dalam histogram, sumbu mendatar mewakili...', options: ['Frekuensi', 'Interval Kelas', 'Mean', 'Modus'], answer: 'Interval Kelas' },
                    { q: 'Banyak data n=10, median terletak di antara data ke...', options: ['4 & 5', '5 & 6', '6 & 7', '7 & 8'], answer: '5 & 6' },
                    { q: 'Rata-rata x, 10, 15 adalah 10. Nilai x?', options: [5, 10, 15, 20], answer: 5 },
                    { q: 'Modus data 1, 2, 3, 4, 5 adalah...', options: [1, 5, 'Tidak ada', 'Semua'], answer: 'Tidak ada' },
                    { q: 'Mean data: 100, 200, 300 adalah...', options: [100, 200, 300, 400], answer: 200 },
                    { q: 'Median dari 0, 0, 1, 1, 2, 2 adalah...', options: [0, 1, 1.5, 2], answer: 1 },
                    { q: 'Jika modus=10 dan mean=10, maka data mungkin...', options: ['Semua 10', 'Beragam', 'Tidak mungkin', 'Hanya satu angka'], answer: 'Semua 10' }
                ]
            },
            {
                id: 'smp-peluang',
                name: 'Peluang Dasar',
                icon: '🎲',
                concept: `<h3 class="text-xl font-bold mb-4">Peluang Dasar</h3>
    <p class="mb-4">Mengukur kemungkinan terjadinya suatu peristiwa dalam sebuah percobaan.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Rumus Peluang:</p>
            <p class="text-sm font-mono text-center">P(A) = n(A) / n(S)</p>
            <p class="text-xs text-gray-400 mt-2">n(A): Kejadian yang diinginkan<br>n(S): Ruang Sampel (Total kemungkinan)</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Tips Logika:</p>
            <p class="text-sm text-gray-300">Peluang pasti (1), Peluang mustahil (0). Semua peluang berada di antara 0 sampai 1.</p>
        </div>
    </div>`,
                example: {
                    question: 'Dua buah koin dilempar bersamaan. Berapa peluang muncul paling sedikit satu Gambar?',
                    steps: [
                        'Langkah 1: Tentukan Ruang Sampel S = {AA, AG, GA, GG} → n(S) = 4',
                        'Langkah 2: Tentukan Kejadian A (paling sedikit 1 G) = {AG, GA, GG} → n(A) = 3',
                        'Langkah 3: P(A) = 3/4',
                        'Hack: Ingat 1 - P(Tidak ada Gambar) = 1 - 1/4 = 3/4.'
                    ],
                    answer: '3/4'
                },
                questions: [
                    { q: 'Peluang muncul angka 5 pada lemparan dadu adalah...', options: ['1/2', '1/3', '1/6', '5/6'], answer: '1/6' },
                    { q: 'Dua koin dilempar, n(S) atau ruang sampelnya adalah...', options: [2, 4, 6, 8], answer: 4 },
                    { q: 'Peluang muncul gambar pada lemparan koin adalah...', options: ['0', '1/2', '1', '2'], answer: '1/2' },
                    { q: 'Dadu dilempar, peluang muncul mata dadu > 4 adalah...', options: ['1/6', '2/6', '3/6', '4/6'], answer: '2/6' },
                    { q: 'Kotak isi 3 bola merah, 2 biru. Peluang ambil merah?', options: ['2/5', '3/5', '1/2', '3/2'], answer: '3/5' },
                    { q: 'Peluang muncul angka prima pada dadu adalah...', options: ['1/6', '2/6', '3/6', '4/6'], answer: '3/6' },
                    { q: 'Peluang hari ini turun salju di gurun Sahara adalah mendekati...', options: [0, 0.5, 0.8, 1], answer: 0 },
                    { q: 'Banyak titik sampel lemparan 3 koin adalah...', options: [3, 6, 8, 9], answer: 8 },
                    { q: 'Peluang kejadian A adalah 0,2. Peluang bukan A adalah...', options: [0.2, 0.5, 0.8, 1], answer: 0.8 },
                    { q: 'Dadu dilempar, peluang muncul angka ganjil adalah...', options: ['1/3', '1/2', '2/3', '1'], answer: '1/2' },
                    { q: 'Separangkat kartu bridge (tanpa joker) berjumlah...', options: [50, 52, 54, 56], answer: 52 },
                    { q: 'Peluang ambil kartu King dari kartu bridge adalah...', options: ['1/52', '4/52', '13/52', '26/52'], answer: '4/52' },
                    { q: 'Banyaknya anggota ruang sampel pelambungan dua dadu adalah...', options: [6, 12, 24, 36], answer: 36 },
                    { q: 'Peluang muncul jumlah 7 pada dua dadu adalah...', options: ['1/6', '1/12', '1/36', '7/36'], answer: '1/6' },
                    { q: 'Jika P(A) = 1, maka kejadian A adalah...', options: ['Mustahil', 'Mungkin', 'Pasti', 'Langka'], answer: 'Pasti' },
                    { q: 'Frekuensi harapan muncul angka 6 jika dadu dilempar 60 kali?', options: [6, 10, 20, 60], answer: 10 },
                    { q: 'Peluang muncul bukan angka 3 pada dadu adalah...', options: ['1/6', '2/6', '3/6', '5/6'], answer: '5/6' },
                    { q: 'Koin dilempar 100 kali, muncul angka 45 kali. Peluang empirik gambar?', options: [0.45, 0.5, 0.55, 1], answer: 0.55 },
                    { q: 'Dalam satu huruf "MATEMATIKA", peluang ambil huruf M adalah...', options: ['1/10', '2/10', '3/10', '4/10'], answer: '2/10' },
                    { q: 'Banyaknya titik sampel dari sebuah dadu dan sebuah koin adalah...', options: [2, 6, 8, 12], answer: 12 }
                ]
            }
        ]
    },
    sma: {
        name: 'SMA',
        color: 'purple',
        icon: '🎯',
        topics: [
            {
                id: 'sma-fungsi',
                name: 'Fungsi & Grafik',
                icon: '📈',
                concept: `<h3 class="text-xl font-bold mb-4">Fungsi & Grafik</h3>
    <p class="mb-4">Fungsi memetakan elemen domain ke range. Memahami grafik fungsi kuadrat dan linear sangat penting di level SMA.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Fungsi Kuadrat:</p>
            <p class="text-sm font-mono mb-1">f(x) = ax² + bx + c</p>
            <p class="text-xs text-gray-300">Titik Puncak (xp, yp):<br>xp = -b/2a<br>yp = D/-4a</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Komposisi Fungsi:</p>
            <p class="text-sm text-gray-300">(f ∘ g)(x) berarti g(x) dimasukkan ke dalam f(x).<br>f(g(x)) adalah urutan pengerjaannya!</p>
        </div>
    </div>`,
                example: {
                    question: 'Jika f(x) = 2x + 1 dan g(x) = x², tentukan (f ∘ g)(3)!',
                    steps: [
                        'Langkah 1: Cari g(3) → 3² = 9',
                        'Langkah 2: Masukkan hasil g(3) ke f(x) → f(9) = 2(9) + 1 = 19',
                        'Hack: (f ∘ g)(x) = 2(x²) + 1'
                    ],
                    answer: 19
                },
                questions: [
                    { q: 'Jika f(x) = 3x - 5, berapakah f(4)?', options: [7, 8, 9, 10], answer: 7 },
                    { q: 'Jika f(x) = x + 2 dan g(x) = 2x, maka (f ∘ g)(x) = ...', options: ['2x + 2', '2x + 4', 'x + 4', '2x - 2'], answer: '2x + 2' },
                    { q: 'Invers dari f(x) = 2x - 4 adalah...', options: ['(x+4)/2', '(x-4)/2', '2x + 4', 'x/2 + 4'], answer: '(x+4)/2' },
                    { q: 'Titik potong sumbu y dari f(x) = 3x² + 5x - 7 adalah...', options: [-7, 0, 3, 5], answer: -7 },
                    { q: 'Sumbu simetri dari f(x) = x² - 6x + 8 adalah...', options: ['x=3', 'x=-3', 'x=6', 'x=-6'], answer: 'x=3' },
                    { q: 'Jika f(x) = x² dan g(x) = x+1, maka (g ∘ f)(2) = ...', options: [4, 5, 9, 3], answer: 5 },
                    { q: 'Range dari f(x) = x² + 1 adalah...', options: ['y ≥ 0', 'y ≥ 1', 'y > 1', 'Semua y'], answer: 'y ≥ 1' },
                    { q: 'Jika f(x) = 2x, maka f(x+h) - f(x) = ...', options: ['2h', '2x', 'h', '2x+h'], answer: '2h' },
                    { q: 'Fungsi f(x) = c disebut fungsi...', options: ['Linear', 'Kuadrat', 'Konstan', 'Identitas'], answer: 'Konstan' },
                    { q: 'Nilai puncak y dari f(x) = -x² + 4x adalah...', options: [2, 4, 8, -4], answer: 4 },
                    { q: 'Jika f(x) = 3x, maka f⁻¹(9) = ...', options: [1, 2, 3, 27], answer: 3 },
                    { q: 'Grafik f(x) = x² + 10 terbuka ke...', options: ['Atas', 'Bawah', 'Kiri', 'Kanan'], answer: 'Atas' },
                    { q: 'Jika (f ∘ g)(x) = x² + 1 dan g(x) = x, maka f(x) = ...', options: ['x²+1', 'x+1', 'x²', '2x'], answer: 'x²+1' },
                    { q: 'f(1)=3, f(2)=5, f(3)=7. Ini adalah pola fungsi...', options: ['f(x)=2x+1', 'f(x)=3x', 'f(x)=x+2', 'f(x)=x²'], answer: 'f(x)=2x+1' },
                    { q: 'Gradien garis y = 4x + 10 adalah...', options: [1, 4, 10, -4], answer: 4 },
                    { q: 'Jika f(x) = x³, maka f(-2) = ...', options: [-8, 8, -6, 6], answer: -8 },
                    { q: 'Fungsi g(x) = |x| selalu bernilai...', options: ['Positif/Nol', 'Negatif', 'Ganjil', 'Genap'], answer: 'Positif/Nol' },
                    { q: 'Jika f(x) = 2x+1, maka f(f(1)) = ...', options: [3, 7, 9, 11], answer: 7 },
                    { q: 'Titik puncak f(x) = (x-2)² + 3 adalah...', options: ['(2,3)', '(-2,3)', '(2,-3)', '(3,2)'], answer: '(2,3)' }
                ]
            },
            {
                id: 'sma-persamaan',
                name: 'Persamaan & Pertidaksamaan',
                icon: '⚖️',
                concept: `<h3 class="text-xl font-bold mb-4">Persamaan & Pertidaksamaan</h3>
    <p class="mb-4">Menyelesaikan nilai variabel pada persamaan kuadrat dan nilai mutlak.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Rumus ABC:</p>
            <p class="text-xs font-mono text-center">x = [-b ± √(b²-4ac)] / 2a</p>
            <p class="text-xs text-gray-400 mt-2">D = b² - 4ac (Diskriminan)</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Sifat Akar:</p>
            <p class="text-sm text-gray-300">x1 + x2 = -b/a<br>x1 × x2 = c/a</p>
        </div>
    </div>`,
                example: {
                    question: 'Tentukan akar-akar dari x² - 5x + 6 = 0',
                    steps: [
                        'Langkah 1: Cari dua angka yang dikali = 6, dijumlah = -5 → (-2 dan -3)',
                        'Langkah 2: (x - 2)(x - 3) = 0',
                        'Langkah 3: x = 2 atau x = 3',
                        'Hack: Pakai rumus ABC jika tidak bisa difaktorkan!'
                    ],
                    answer: '2 atau 3'
                },
                questions: [
                    { q: 'Akar-akar dari x² - 9 = 0 adalah...', options: ['3 dan -3', '9 dan -9', '3 dan 0', 'Tidak ada'], answer: '3 dan -3' },
                    { q: 'Diskriminan dari x² + 2x + 1 = 0 adalah...', options: [0, 4, 8, -4], answer: 0 },
                    { q: 'Jika D > 0, maka persamaan kuadrat memiliki...', options: ['2 akar real beda', '2 akar kembar', 'Tidak punya akar', '1 akar real'], answer: '2 akar real beda' },
                    { q: 'Hasil kali akar x² - 7x + 10 = 0 adalah...', options: [7, 10, -7, -10], answer: 10 },
                    { q: 'Jumlah akar x² - 4x + 3 = 0 adalah...', options: [4, -4, 3, -3], answer: 4 },
                    { q: 'Penyelesaian |x| = 5 adalah...', options: ['5', '-5', '5 atau -5', 'x > 5'], answer: '5 atau -5' },
                    { q: 'Himpunan penyelesaian x² - 4 < 0 adalah...', options: ['x < 2', '-2 < x < 2', 'x > 2', 'x < -2'], answer: '-2 < x < 2' },
                    { q: 'Persamaan kuadrat yang akarnya 2 dan 3 adalah...', options: ['x²-5x+6=0', 'x²+5x+6=0', 'x²-5x-6=0', 'x²-x+6=0'], answer: 'x²-5x+6=0' },
                    { q: 'Nilai x yang memenuhi 2x - 4 > 6 adalah...', options: ['x > 5', 'x > 1', 'x < 5', 'x < 1'], answer: 'x > 5' },
                    { q: 'Jika x² = 25, maka x = ...', options: [5, -5, '±5', '25'], answer: '±5' },
                    { q: 'Persamaan 3x² - x + 5 = 0. Berapakah a + b + c?', options: [7, 8, 9, 3], answer: 7 },
                    { q: 'Jika x1 dan x2 akar x² - 6x + 8 = 0, berapakah x1 + x2?', options: [6, -6, 8, -8], answer: 6 },
                    { q: 'Bentuk umum pertidaksamaan kuadrat adalah...', options: ['ax²+bx+c < 0', 'ax+b=0', 'y=mx+c', 'a=b'], answer: 'ax²+bx+c < 0' },
                    { q: 'Selesaikan: x/2 + 5 = 10', options: [5, 10, 15, 20], answer: 10 },
                    { q: 'Akar kembar terjadi jika D bernilai...', options: [1, 0, -1, 100], answer: 0 },
                    { q: 'Nilai x untuk |x-1| = 2 adalah...', options: ['3 atau -1', '3 atau 1', '1 atau -2', '0'], answer: '3 atau -1' },
                    { q: 'Jika x² + bx + 9 = 0 punya akar kembar, maka b = ...', options: [3, 6, 9, '±6'], answer: '±6' },
                    { q: 'Pertidaksamaan 2x + 1 ≤ 5 memiliki solusi...', options: ['x ≤ 2', 'x ≥ 2', 'x ≤ 3', 'x ≥ 3'], answer: 'x ≤ 2' },
                    { q: 'Hasil dari 5x - 2 = 3x + 8 adalah...', options: [3, 4, 5, 6], answer: 5 },
                    { q: 'Jika a=1, b=0, c=-4 pada ax²+bx+c=0, akarnya?', options: ['±2', '±4', '0', '2'], answer: '±2' }
                ]
            },
            {
                id: 'sma-matriks',
                name: 'Matriks',
                icon: '🔢',
                concept: `<h3 class="text-xl font-bold mb-4">Matriks</h3>
    <p class="mb-4">Susunan angka dalam baris dan kolom yang digunakan untuk menyelesaikan sistem persamaan kompleks.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Determinan 2x2:</p>
            <p class="text-sm font-mono text-center">|A| = ad - bc</p>
            <p class="text-xs text-gray-400 mt-2">Untuk A = [a b; c d]</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Invers Matriks:</p>
            <p class="text-xs text-gray-300">A⁻¹ = (1/|A|) × [d -b; -c a]</p>
            <p class="text-xs text-gray-400 mt-1">Hanya ada jika |A| ≠ 0.</p>
        </div>
    </div>`,
                example: {
                    question: 'Tentukan determinan matriks A = [[4, 2], [1, 3]]',
                    steps: [
                        'Langkah 1: Identifikasi a=4, b=2, c=1, d=3',
                        'Langkah 2: Gunakan rumus ad - bc',
                        'Langkah 3: (4 × 3) - (2 × 1) = 12 - 2 = 10',
                        'Hasil: 10'
                    ],
                    answer: 10
                },
                questions: [
                    { q: 'Determinan matriks [[1, 2], [3, 4]] adalah...', options: [-2, 2, 10, -10], answer: -2 },
                    { q: 'Matriks yang baris dan kolomnya sama disebut...', options: ['Baris', 'Kolom', 'Persegi', 'Identitas'], answer: 'Persegi' },
                    { q: 'Hasil [[1, 2], [3, 4]] + [[0, 1], [1, 0]] adalah...', options: ['[[1, 3], [4, 4]]', '[[1, 1], [1, 1]]', '[[0, 0], [0, 0]]', '[[5, 6], [7, 8]]'], answer: '[[1, 3], [4, 4]]' },
                    { q: 'Jika |A| = 0, matriks disebut...', options: ['Singular', 'Identitas', 'Invers', 'Nol'], answer: 'Singular' },
                    { q: 'Ordo dari matriks dengan 2 baris dan 3 kolom adalah...', options: ['2x3', '3x2', '2x2', '3x3'], answer: '2x3' },
                    { q: 'Transpose dari [[1, 2], [3, 4]] adalah...', options: ['[[1, 3], [2, 4]]', '[[4, 3], [2, 1]]', '[[1, 2], [3, 4]]', '[[2, 1], [4, 3]]'], answer: '[[1, 3], [2, 4]]' },
                    { q: 'Matriks identitas 2x2 adalah...', options: ['[[1, 0], [0, 1]]', '[[0, 1], [1, 0]]', '[[1, 1], [1, 1]]', '[[0, 0], [0, 0]]'], answer: '[[1, 0], [0, 1]]' },
                    { q: 'Jika A = [[2, 0], [0, 2]], maka 3A = ...', options: ['[[6, 0], [0, 6]]', '[[5, 0], [0, 5]]', '[[6, 6], [6, 6]]', '[[2, 3], [3, 2]]'], answer: '[[6, 0], [0, 6]]' },
                    { q: 'Syarat perkalian A x B adalah...', options: ['Baris A = Kolom B', 'Kolom A = Baris B', 'Ordo sama', 'Satu baris saja'], answer: 'Kolom A = Baris B' },
                    { q: 'Determinan [[5, 2], [2, 1]] adalah...', options: [1, 0, 9, -1], answer: 1 },
                    { q: 'Inverse dari [[1, 0], [0, 1]] adalah...', options: ['Dirinya sendiri', '[[0, 1], [1, 0]]', 'Tidak ada', '[[1, 1], [1, 1]]'], answer: 'Dirinya sendiri' },
                    { q: 'Hasil kali [[1, 2]] x [[3], [4]] adalah...', options: ['[11]', '[3, 8]', '[7]', '[14]'], answer: '[11]' },
                    { q: 'Elemen baris 2 kolom 1 dari [[a, b], [c, d]] adalah...', options: ['a', 'b', 'c', 'd'], answer: 'c' },
                    { q: 'Jika A = [[x, 4], [1, 1]] singular, maka x = ...', options: [1, 2, 4, 0], answer: 4 },
                    { q: 'Determinan matriks identitas adalah...', options: [0, 1, -1, 100], answer: 1 },
                    { q: 'A + B = B + A adalah sifat...', options: ['Komutatif', 'Asosiatif', 'Distributif', 'Identitas'], answer: 'Komutatif' },
                    { q: 'Matriks yang semua elemennya nol disebut...', options: ['Singular', 'Nol', 'Identitas', 'Kosong'], answer: 'Nol' },
                    { q: 'Determinan [[3, 0], [0, 3]] = ...', options: [0, 3, 6, 9], answer: 9 },
                    { q: 'A x I = ...', options: ['A', 'I', '0', 'A²'], answer: 'A' },
                    { q: 'Inverse matriks [[3, 5], [1, 2]] determinannya adalah...', options: [1, 2, 3, 5], answer: 1 }
                ]
            },
            {
                id: 'sma-limit',
                name: 'Limit',
                icon: '🎯',
                concept: `<h3 class="text-xl font-bold mb-4">Limit Fungsi</h3>
    <p class="mb-4">Mendekati nilai tertentu namun tidak pernah mencapainya. Dasar dari Kalkulus untuk memahami kemiringan (Turunan) dan luas (Integral).</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Cara Substitusi:</p>
            <p class="text-sm text-gray-300">Masukkan langsung nilai x. Jika hasilnya 0/0, maka harus difaktorkan, dikali sekawan, atau gunakan dalil L'Hopital!</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Limit Tak Hingga:</p>
            <p class="text-sm text-gray-300">Untuk x mendekati tak hingga pada pecahan, bagi semua dengan pangkat tertinggi variabel.</p>
        </div>
    </div>`,
                example: {
                    question: 'Tentukan Nilai dari lim (x→2) (x² - 4) / (x - 2)',
                    steps: [
                        'Langkah 1: Substitusi x=2 → (2² - 4)/(2-2) = 0/0 (Bentuk Tak Tentu)',
                        'Langkah 2: Faktorkan pembilang → (x-2)(x+2)',
                        'Langkah 3: Bagi (x-2)/(x-2) → Sisa (x+2)',
                        'Langkah 4: Masukkan kembali x=2 → 2+2 = 4',
                        'Hack: Ingat selisih kuadrat a² - b² = (a-b)(a+b)'
                    ],
                    answer: 4
                },
                questions: [
                    { q: 'lim (x→3) (2x + 1) = ...', options: [5, 6, 7, 8], answer: 7 },
                    { q: 'lim (x→1) (x² - 1)/(x - 1) = ...', options: [0, 1, 2, 3], answer: 2 },
                    { q: 'lim (x→0) (5x) = ...', options: [0, 5, 1, '∞'], answer: 0 },
                    { q: 'lim (x→∞) (2x + 1)/(x - 3) = ...', options: [1, 2, 3, 0], answer: 2 },
                    { q: 'lim (x→2) (x² - 4) adalah...', options: [0, 4, 2, -4], answer: 0 },
                    { q: 'lim (x→∞) 1/x = ...', options: [0, 1, '∞', -1], answer: 0 },
                    { q: 'lim (x→4) √x = ...', options: [2, 4, 8, 16], answer: 2 },
                    { q: 'Jika hasil substitusi 0/0, langkah selanjutnya adalah...', options: ['Selesai', 'Faktorkan', 'Kali Nol', 'Abaikan'], answer: 'Faktorkan' },
                    { q: 'lim (x→∞) (x²)/(x³ + 1) = ...', options: [1, 0, '∞', 0.5], answer: 0 },
                    { q: 'lim (x→0) (sin x / x) = ...', options: [0, 1, '∞', -1], answer: 1 },
                    { q: 'lim (x→2) 10 = ...', options: [2, 10, 0, 20], answer: 10 },
                    { q: 'lim (x→a) f(x) = L berarti x mendekati...', options: ['L', 'a', '0', '∞'], answer: 'a' },
                    { q: 'lim (x→1) (x³-1)/(x-1) = ...', options: [1, 2, 3, 4], answer: 3 },
                    { q: 'lim (x→∞) (3x²)/(x²) = ...', options: [1, 2, 3, '∞'], answer: 3 },
                    { q: 'lim (x→5) (x-5)/(x²-25) = ...', options: ['1/5', '1/10', '0', '1'], answer: '1/10' },
                    { q: 'lim (x→0) (1 - cos x)/x = ...', options: [0, 1, 0.5, '∞'], answer: 0 },
                    { q: 'lim (x→∞) (x+5) = ...', options: [0, 5, '∞', -5], answer: '∞' },
                    { q: 'lim (x→-1) (x+1) = ...', options: [0, 1, -1, -2], answer: 0 },
                    { q: 'lim (x→3) (x²-9)/(x-3) = ...', options: [3, 6, 9, 12], answer: 6 },
                    { q: 'Limit kiri harus sama dengan limit ... supaya ada nilainya.', options: ['Atas', 'Bawah', 'Kanan', 'Tengah'], answer: 'Kanan' }
                ]
            },
            {
                id: 'sma-turunan',
                name: 'Turunan',
                icon: '📉',
                concept: `<h3 class="text-xl font-bold mb-4">Turunan (Diferensial)</h3>
    <p class="mb-4">Mengukur seberapa cepat suatu fungsi berubah. Digunakan untuk mencari titik maksimum, minimum, dan garis singgung.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Aturan Dasar:</p>
            <p class="text-sm text-gray-300">f(x) = axⁿ → f'(x) = n·axⁿ⁻¹<br>f(x) = c → f'(x) = 0</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Aturan Rantai:</p>
            <p class="text-sm text-gray-300">Untuk fungsi komposisi f(g(x)), turunannya adalah f'(g(x)) · g'(x).</p>
        </div>
    </div>`,
                example: {
                    question: 'Tentukan turunan pertama dari f(x) = 4x³ - 5x² + 7x - 10',
                    steps: [
                        'Langkah 1: Turunkan 4x³ → 3·4x² = 12x²',
                        'Langkah 2: Turunkan -5x² → 2·(-5)x = -10x',
                        'Langkah 3: Turunkan 7x → 7',
                        'Langkah 4: Turunkan konstanta -10 → 0',
                        'Hasil: f\'(x) = 12x² - 10x + 7'
                    ],
                    answer: '12x² - 10x + 7'
                },
                questions: [
                    { q: 'Turunan dari f(x) = x⁵ adalah...', options: ['5x⁴', '4x⁵', 'x⁴', '5x'], answer: '5x⁴' },
                    { q: 'Turunan dari f(x) = 10x adalah...', options: [1, 10, '10x', 0], answer: 10 },
                    { q: 'Turunan dari f(x) = 2x² + 3x adalah...', options: ['4x + 3', '2x + 3', '4x', 'x + 3'], answer: '4x + 3' },
                    { q: 'Jika f(x) = x³, maka f\'(2) = ...', options: [4, 8, 12, 16], answer: 12 },
                    { q: 'Turunan dari f(x) = 100 adalah...', options: [0, 1, 100, 'x'], answer: 0 },
                    { q: 'Aturan turunan f(x) = u·v adalah...', options: ["u'v + uv'", "u'v - uv'", "u'v'", "uv"], answer: "u'v + uv'" },
                    { q: 'Turunan dari sin x adalah...', options: ['cos x', '-cos x', 'sin x', '-sin x'], answer: 'cos x' },
                    { q: 'Turunan dari cos x adalah...', options: ['sin x', '-sin x', 'cos x', '-cos x'], answer: '-sin x' },
                    { q: 'Jika f(x) = (2x+1)², maka f\'(x) = ...', options: ['2(2x+1)', '4(2x+1)', '8x', '4x'], answer: '4(2x+1)' },
                    { q: 'Turunan f(x) = x⁻² adalah...', options: ['-2x⁻³', '2x⁻¹', 'x⁻¹', '-x⁻³'], answer: '-2x⁻³' },
                    { q: 'Jika f(x) = √x, maka f\'(x) = ...', options: ['1/(2√x)', '2√x', '√x', '1/x'], answer: '1/(2√x)' },
                    { q: 'Titik stasioner terjadi saat f\'(x) bernilai...', options: [1, -1, 0, '∞'], answer: 0 },
                    { q: 'Turunan kedua dari f(x) = x³ adalah...', options: ['3x²', '6x', '6', 'x'], answer: '6x' },
                    { q: 'Jika f(x) = 3x² - 4x, tentukan f\'(1)...', options: [2, -2, 4, 1], answer: 2 },
                    { q: 'Turunan dari tan x adalah...', options: ['sec² x', 'cosec² x', 'sec x', 'cot x'], answer: 'sec² x' },
                    { q: 'f(x) = eˣ memiliki turunan...', options: ['eˣ', 'xeˣ⁻¹', 'ln x', '1/x'], answer: 'eˣ' },
                    { q: 'f(x) = ln x memiliki turunan...', options: ['1/x', 'eˣ', 'x', 'ln x'], answer: '1/x' },
                    { q: 'Jika f(x) = 2x³ + 5, maka f\'\'(x) = ...', options: ['6x²', '12x', '12', '0'], answer: '12x' },
                    { q: 'Turunan dari u/v adalah...', options: ["(u'v - uv')/v²", "(u'v + uv')/v²", "u'/v'", "u'v - uv'"], answer: "(u'v - uv')/v²" },
                    { q: 'Notasi turunan dy/dx diciptakan oleh...', options: ['Newton', 'Leibniz', 'Euler', 'Pythagoras'], answer: 'Leibniz' }
                ]
            },
            {
                id: 'sma-integral',
                name: 'Integral',
                icon: '∫',
                concept: `<h3 class="text-xl font-bold mb-4">Integral (Anti-Turunan)</h3>
    <p class="mb-4">Kebalikan dari turunan. Digunakan untuk menghitung luas daerah di bawah kurva, volume benda putar, dan akumulasi nilai.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Integral Tak Tentu:</p>
            <p class="text-sm text-gray-300">∫axⁿ dx = [a/(n+1)]xⁿ⁺¹ + C<br>Jangan lupa tambahkan konstanta C!</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Integral Tentu:</p>
            <p class="text-sm text-gray-300">Memperhitungkan batas atas (b) dan bawah (a). Hasilnya adalah angka nyata: F(b) - F(a).</p>
        </div>
    </div>`,
                example: {
                    question: 'Tentukan hasil dari ∫ (3x² - 4x + 5) dx',
                    steps: [
                        'Langkah 1: Integralkan 3x² → 3·(x³/3) = x³',
                        'Langkah 2: Integralkan -4x → -4·(x²/2) = -2x²',
                        'Langkah 3: Integralkan konstan 5 → 5x',
                        'Langkah 4: Tambahkan konstanta C',
                        'Hasil: x³ - 2x² + 5x + C'
                    ],
                    answer: 'x³ - 2x² + 5x + C'
                },
                questions: [
                    { q: '∫ x⁴ dx = ...', options: ['x⁵/5 + C', '5x⁴ + C', 'x⁶/6 + C', '4x³ + C'], answer: 'x⁵/5 + C' },
                    { q: '∫ 8x dx = ...', options: ['8x² + C', '4x² + C', '2x² + C', '4x + C'], answer: '4x² + C' },
                    { q: '∫ 7 dx = ...', options: ['0', '7', '7x + C', 'C'], answer: '7x + C' },
                    { q: '∫ (x + 2) dx = ...', options: ['x²/2 + 2x + C', 'x² + 2x + C', 'x + 2 + C', '2x + C'], answer: 'x²/2 + 2x + C' },
                    { q: 'Integralkan f(x) = sin x...', options: ['cos x + C', '-cos x + C', 'sin x + C', '-sin x + C'], answer: '-cos x + C' },
                    { q: 'Integralkan f(x) = cos x...', options: ['sin x + C', '-sin x + C', 'cos x + C', 'tan x + C'], answer: 'sin x + C' },
                    { q: '∫ [0,1] 2x dx adalah...', options: [1, 2, 0, 0.5], answer: 1 },
                    { q: 'Simbol ∫ pertama kali diperkenalkan oleh...', options: ['Leibniz', 'Newton', 'Euler', 'Gauss'], answer: 'Leibniz' },
                    { q: '∫ 1/x dx = ...', options: ['ln|x| + C', 'eˣ + C', 'x + C', '-1/x² + C'], answer: 'ln|x| + C' },
                    { q: '∫ eˣ dx = ...', options: ['eˣ + C', 'xeˣ⁻¹ + C', 'ln x + C', 'eˣ'], answer: 'eˣ + C' },
                    { q: '∫ (3x - 1) dx = ...', options: ['1.5x² - x + C', '3x² - x + C', 'x² + C', '3 + C'], answer: '1.5x² - x + C' },
                    { q: '∫ [1,2] dx = ...', options: [1, 2, 3, 0], answer: 1 },
                    { q: '∫ k·f(x) dx = ...', options: ['k ∫ f(x) dx', '∫ f(k·x) dx', 'k/x', 'k+x'], answer: 'k ∫ f(x) dx' },
                    { q: 'Kebalikan dari integral adalah...', options: ['Logaritma', 'Eksponen', 'Turunan', 'Limit'], answer: 'Turunan' },
                    { q: '∫ sec² x dx = ...', options: ['tan x + C', 'cot x + C', 'sin x + C', 'cos x + C'], answer: 'tan x + C' },
                    { q: '∫ [0,2] 3x² dx = ...', options: [4, 8, 12, 16], answer: 8 },
                    { q: 'Hasil dari ∫ 0 dx adalah...', options: ['0', 'x', 'C', '1'], answer: 'C' },
                    { q: '∫ x⁻¹ dx sama dengan...', options: ['ln|x| + C', 'x⁰ + C', '1', '0'], answer: 'ln|x| + C' },
                    { q: 'Metode integral untuk fungsi perkalian u·dv adalah...', options: ['Substitusi', 'Parsial', 'Eksponen', 'Rantai'], answer: 'Parsial' },
                    { q: '∫ 2x(x² + 1) dx paling mudah dicari dengan metode...', options: ['Substitusi', 'Parsial', 'Logaritma', 'Manual'], answer: 'Substitusi' }
                ]
            },
            {
                id: 'sma-trigonometri',
                name: 'Trigonometri',
                icon: '📐',
                concept: `<h3 class="text-xl font-bold mb-4">Trigonometri</h3>
    <p class="mb-4">Mempelajari hubungan sudut dan sisi pada segitiga, serta fungsi periodik yang sangat penting dalam fisika dan teknik.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Identitas Utama:</p>
            <p class="text-xs text-gray-300">sin²θ + cos²θ = 1<br>tan θ = sin θ / cos θ<br>1 + tan²θ = sec²θ</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Aturan Sudut:</p>
            <p class="text-xs text-gray-300">Kuadran I: Semua (+)<br>Kuadran II: Sin (+)<br>Kuadran III: Tan (+)<br>Kuadran IV: Cos (+)</p>
        </div>
    </div>`,
                example: {
                    question: 'Jika sin A = 3/5 dan A di kuadran I, tentukan nilai cos A dan tan A!',
                    steps: [
                        'Langkah 1: Gunakan identitas sin²A + cos²A = 1',
                        'Langkah 2: (3/5)² + cos²A = 1 → 9/25 + cos²A = 1',
                        'Langkah 3: cos²A = 1 - 9/25 = 16/25',
                        'Langkah 4: cos A = √(16/25) = 4/5 (Positif karena kuadran I)',
                        'Langkah 5: tan A = sin A / cos A = (3/5) / (4/5) = 3/4'
                    ],
                    answer: 'cos A = 4/5, tan A = 3/4'
                },
                questions: [
                    { q: 'Nilai dari sin 30° adalah...', options: ['0', '1/2', '√2/2', '1'], answer: '1/2' },
                    { q: 'Nilai dari cos 90° adalah...', options: ['0', '1/2', '√3/2', '1'], answer: '0' },
                    { q: 'sin² 45° + cos² 45° = ...', options: ['0', '1/2', '1', '2'], answer: '1' },
                    { q: 'Nilai tan 45° adalah...', options: ['0', '1/2', '1', '√3'], answer: '1' },
                    { q: 'cosec θ sama dengan...', options: ['1/sin θ', '1/cos θ', '1/tan θ', 'sin/cos'], answer: '1/sin θ' },
                    { q: 'sec θ sama dengan...', options: ['1/sin θ', '1/cos θ', '1/tan θ', 'cos/sin'], answer: '1/cos θ' },
                    { q: 'Di kuadran manakah nilai cos bernilai positif?', options: ['I dan II', 'I dan IV', 'II dan III', 'III dan IV'], answer: 'I dan IV' },
                    { q: 'sin(180° - θ) = ...', options: ['sin θ', '-sin θ', 'cos θ', '-cos θ'], answer: 'sin θ' },
                    { q: 'cos(180° - θ) = ...', options: ['cos θ', '-cos θ', 'sin θ', '-sin θ'], answer: '-cos θ' },
                    { q: 'Nilai dari sin 270° adalah...', options: ['0', '1', '-1', '1/2'], answer: '-1' },
                    { q: 'Jika tan θ = 1, maka θ mungkin bernilai...', options: ['30°', '45°', '60°', '90°'], answer: '45°' },
                    { q: 'Aturan Sinus: a/sin A = ...', options: ['b/sin B', 'b/cos B', 'c/tan C', 'b·sin B'], answer: 'b/sin B' },
                    { q: 'Aturan Cosinus: a² = b² + c² - ...', options: ['2bc cos A', '2bc sin A', 'bc cos A', '2bc'], answer: '2bc cos A' },
                    { q: 'Nilai dari sin 120° adalah...', options: ['1/2', '√2/2', '√3/2', '-1/2'], answer: '√3/2' },
                    { q: 'sin 2A = ...', options: ['2 sin A cos A', 'sin²A - cos²A', '2 sin A', 'cos 2A'], answer: '2 sin A cos A' },
                    { q: 'cos 2A = ...', options: ['cos²A - sin²A', '2 cos A', 'sin²A + cos²A', '2 sin A cos A'], answer: 'cos²A - sin²A' },
                    { q: 'Nilai periodik fungsi sin(x) adalah...', options: ['90°', '180°', '360°', '450°'], answer: '360°' },
                    { q: 'cot θ sama dengan...', options: ['cos/sin', 'sin/cos', '1/cos', '1/sec'], answer: 'cos/sin' },
                    { q: 'Nilai dari cos 0° adalah...', options: ['0', '1', '-1', '∞'], answer: '1' },
                    { q: '1 + cot²θ = ...', options: ['sec²θ', 'cosec²θ', 'tan²θ', 'sin²θ'], answer: 'cosec²θ' }
                ]
            },
            {
                id: 'sma-logaritma',
                name: 'Logaritma',
                icon: '📊',
                concept: `<h3 class="text-xl font-bold mb-4">Logaritma</h3>
    <p class="mb-4">Logaritma (log) adalah operasi matematika yang merupakan kebalikan (invers) dari eksponen atau pemangkatan.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Sifat Operasi:</p>
            <p class="text-xs text-gray-300">log(ab) = log a + log b<br>log(a/b) = log a - log b<br>log aⁿ = n · log a</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Sifat Khusus:</p>
            <p class="text-xs text-gray-300">ᵃlog a = 1<br>ᵃlog 1 = 0<br>ᵃlog b · ᵇlog c = ᵃlog c</p>
        </div>
    </div>`,
                example: {
                    question: 'Tentukan nilai dari ²log 16 - ²log 2 + ²log 4!',
                    steps: [
                        'Langkah 1: ²log 16 = 4 (karena 2⁴ = 16)',
                        'Langkah 2: ²log 2 = 1 (karena 2¹ = 2)',
                        'Langkah 3: ²log 4 = 2 (karena 2² = 4)',
                        'Langkah 4: 4 - 1 + 2 = 5',
                        'Cara Cepat: ²log(16/2 × 4) = ²log(32) = 5'
                    ],
                    answer: 5
                },
                questions: [
                    { q: 'Nilai dari ²log 8 adalah...', options: [1, 2, 3, 4], answer: 3 },
                    { q: 'Nilai dari ³log 81 adalah...', options: [2, 3, 4, 5], answer: 4 },
                    { q: '⁵log 125 = ...', options: [2, 3, 4, 5], answer: 3 },
                    { q: 'ᵃlog a = ...', options: [0, 1, 'a', 'log a'], answer: 1 },
                    { q: 'Jika ²log x = 5, maka x = ...', options: [10, 25, 32, 64], answer: 32 },
                    { q: 'log 1000 = ... (basis 10)', options: [1, 2, 3, 4], answer: 3 },
                    { q: 'ᵃlog 1 = ...', options: [0, 1, 'a', 'tidak ada'], answer: 0 },
                    { q: '²log 4 + ²log 8 = ...', options: [4, 5, 6, 7], answer: 5 },
                    { q: '³log 27 - ³log 9 = ...', options: [1, 2, 3, 4], answer: 1 },
                    { q: '²log 3 · ³log 8 = ...', options: [2, 3, 4, 5], answer: 3 },
                    { q: 'log a + log b sama dengan...', options: ['log(a+b)', 'log(ab)', 'log(a/b)', 'log a · log b'], answer: 'log(ab)' },
                    { q: '²log √2 = ...', options: [1, 0.5, 2, 0.25], answer: 0.5 },
                    { q: 'Jika ᵃlog b = c, maka...', options: ['aᶜ = b', 'bᶜ = a', 'a·c = b', 'a+c = b'], answer: 'aᶜ = b' },
                    { q: 'Nilai dari ⁷log 7²⁰²⁴ adalah...', options: [7, 2024, 1, 49], answer: 2024 },
                    { q: 'log(1/10) = ...', options: [1, 0, -1, 0.1], answer: -1 },
                    { q: '²log 16 + ³log 27 = ...', options: [5, 6, 7, 8], answer: 7 },
                    { q: 'Basis logaritma natural (ln) adalah...', options: ['10', '2', 'e', 'π'], answer: 'e' },
                    { q: 'ᵃlog bⁿ = ...', options: ['n · ᵃlog b', 'ᵃlog(n·b)', 'n + ᵃlog b', 'bⁿ'], answer: 'n · ᵃlog b' },
                    { q: 'Sifat ᵃlog b = 1 / ...', options: ['ᵇlog a', 'ᵃlog b', 'b/a', 'log b'], answer: 'ᵇlog a' },
                    { q: 'Nilai dari ¹⁰log 100 adalah...', options: [1, 2, 10, 100], answer: 2 }
                ]
            },
            {
                id: 'sma-barisan',
                name: 'Barisan & Deret',
                icon: '🔢',
                concept: `<h3 class="text-xl font-bold mb-4">Barisan & Deret</h3>
    <p class="mb-4">Mempelajari pola bilangan yang teratur. Penting untuk memprediksi nilai di masa depan, seperti bunga bank atau pertumbuhan penduduk.</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Aritmatika (Tambah):</p>
            <p class="text-xs text-gray-300">Uₙ = a + (n-1)b<br>Sₙ = n/2 (a + Uₙ)<br>Ada selisih tetap (b).</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Geometri (Kali):</p>
            <p class="text-xs text-gray-300">Uₙ = a · rⁿ⁻¹<br>Sₙ = a(rⁿ - 1) / (r-1)<br>Ada rasio tetap (r).</p>
        </div>
    </div>`,
                example: {
                    question: 'Suku ke-3 barisan aritmatika adalah 10 dan suku ke-7 adalah 22. Tentukan suku pertama (a) dan beda (b)!',
                    steps: [
                        'Langkah 1: U₇ - U₃ = (a + 6b) - (a + 2b) = 4b',
                        'Langkah 2: 22 - 10 = 12 → 4b = 12 → b = 3',
                        'Langkah 3: Substitusi b=3 ke U₃ → a + 2(3) = 10',
                        'Langkah 4: a + 6 = 10 → a = 4',
                        'Hasil: a = 4, b = 3'
                    ],
                    answer: 'a = 4, b = 3'
                },
                questions: [
                    { q: 'Suku ke-n barisan aritmatika adalah 2n + 5. Suku ke-10 adalah...', options: [20, 25, 30, 35], answer: 25 },
                    { q: 'Beda dari barisan 2, 6, 10, 14, ... adalah...', options: [2, 3, 4, 10], answer: 4 },
                    { q: 'Rasio dari barisan 3, 6, 12, 24, ... adalah...', options: [2, 3, 4, 6], answer: 2 },
                    { q: 'Rumus suku ke-n aritmatika adalah...', options: ['a + (n-1)b', 'a + nb', 'a · rⁿ', 'n/2(a+b)'], answer: 'a + (n-1)b' },
                    { q: 'Suku pertama barisan geometri 2, 4, 8, ... adalah...', options: [1, 2, 4, 0], answer: 2 },
                    { q: 'Jumlah 5 suku pertama barisan 1, 2, 3, 4, 5 adalah...', options: [10, 15, 20, 25], answer: 15 },
                    { q: 'Uₙ geometri adalah arⁿ⁻¹. Jika a=3, r=2, maka U₃ = ...', options: [6, 9, 12, 24], answer: 12 },
                    { q: 'Deret geometri tak hingga konvergen jika...', options: ['|r| < 1', '|r| > 1', 'r = 1', 'r = 0'], answer: '|r| < 1' },
                    { q: 'Jumlah n suku pertama disebut...', options: ['Barisan', 'Deret', 'Suku', 'Beda'], answer: 'Deret' },
                    { q: 'Jika a=5, b=2, hitunglah S₃ aritmatika...', options: [15, 21, 25, 10], answer: 21 },
                    { q: 'Suku tengah aritmatika (Ut) rumusnya adalah...', options: ['(a + Un)/2', 'a + b', 'Un - a', 'n/2'], answer: '(a + Un)/2' },
                    { q: 'Barisan 1, 1, 2, 3, 5, 8, ... disebut barisan...', options: ['Aritmatika', 'Geometri', 'Fibonacci', 'Pascal'], answer: 'Fibonacci' },
                    { q: 'Angka 7 pada barisan 1, 4, 7, 10 adalah suku ke...', options: [1, 2, 3, 4], answer: 3 },
                    { q: 'S_tak_hingga = a / (1 - r) adalah rumus...', options: ['Deret Aritmatika', 'Deret Geometri Tak Hingga', 'Suku ke-n', 'Bunga Majemuk'], answer: 'Deret Geometri Tak Hingga' },
                    { q: 'Beda barisan aritmatika bisa bernilai negatif.', options: ['Benar', 'Salah', 'Hanya jika n=1', 'Tidak mungkin'], answer: 'Benar' },
                    { q: 'Jika r = 1 pada deret geometri, maka Sₙ = ...', options: ['n · a', '0', '1', 'a'], answer: 'n · a' },
                    { q: 'U₁₀ barisan 100, 90, 80, ... adalah...', options: [10, 0, 90, 110], answer: 10 },
                    { q: 'Suku ke-4 geometri a=1, r=3 adalah...', options: [3, 9, 27, 81], answer: 27 },
                    { q: 'Deret aritmatika 2+4+6+...+20 memiliki n = ...', options: [10, 20, 5, 2], answer: 10 },
                    { q: 'Pola bilangan persegi adalah n². Suku ke-5 adalah...', options: [10, 15, 25, 50], answer: 25 }
                ]
            },
            {
                id: 'sma-peluanglanjut',
                name: 'Peluang Lanjutan',
                icon: '🎰',
                concept: `<h3 class="text-xl font-bold mb-4">Peluang Lanjutan</h3>
    <p class="mb-4">Mempelajari teknik menghitung kemungkinan kejadian yang lebih kompleks menggunakan aturan pencacahan (Permutasi & Kombinasi).</p>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="card-glass rounded-xl p-4 border border-yellow-500/30">
            <p class="font-bold text-yellow-400 mb-2">📋 Permutasi (Urutan Penting):</p>
            <p class="text-xs text-gray-300">P(n,r) = n! / (n-r)!<br>Contoh: Memilih Juara 1, 2, 3.</p>
        </div>
        <div class="card-glass rounded-xl p-4 border border-blue-500/30">
            <p class="font-bold text-blue-400 mb-2">💡 Kombinasi (Urutan Tak Penting):</p>
            <p class="text-xs text-gray-300">C(n,r) = n! / [r!(n-r)!]<br>Contoh: Memilih tim sepak bola.</p>
        </div>
    </div>`,
                example: {
                    question: 'Dalam sebuah kantong terdapat 5 bola merah dan 3 bola biru. Berapa peluang mengambil 2 bola merah sekaligus?',
                    steps: [
                        'Langkah 1: Hitung semesta n(S) = Kombinasi 2 dari 8 bola → C(8,2) = 8!/(2!6!) = 28',
                        'Langkah 2: Hitung peluang kejadian n(A) = Kombinasi 2 dari 5 bola merah → C(5,2) = 5!/(2!3!) = 10',
                        'Langkah 3: P(A) = n(A) / n(S) = 10 / 28',
                        'Langkah 4: Sederhanakan → 5 / 14',
                        'Hasil: Peluangnya adalah 5/14'
                    ],
                    answer: '5/14'
                },
                questions: [
                    { q: 'Nilai dari 5! adalah...', options: [20, 60, 100, 120], answer: 120 },
                    { q: 'P(5,2) = ...', options: [10, 20, 30, 60], answer: 20 },
                    { q: 'C(5,2) = ...', options: [5, 10, 15, 20], answer: 10 },
                    { q: 'Berapa banyak cara menyusun 3 huruf dari kata "BISA"?', options: [4, 12, 24, 6], answer: 24 },
                    { q: 'Peluang munculnya angka genap pada pelemparan dadu adalah...', options: ['1/2', '1/3', '1/6', '1'], answer: '1/2' },
                    { q: 'Peluang kejadian yang pasti terjadi adalah...', options: [0, 0.5, 1, 10], answer: 1 },
                    { q: 'Komplemen dari peluang 0.3 adalah...', options: [0.3, 0.7, 1, 0], answer: 0.7 },
                    { q: 'Dua dadu dilempar, n(S) atau ruang sampelnya adalah...', options: [6, 12, 36, 64], answer: 36 },
                    { q: 'P(n,n) sama dengan...', options: [0, 1, 'n!', 'n'], answer: 'n!' },
                    { q: 'C(n,n) sama dengan...', options: [0, 1, 'n!', 'n'], answer: 1 },
                    { q: 'Banyaknya susunan duduk melingkar 4 orang (Permutasi Siklis) adalah...', options: [24, 6, 12, 4], answer: 6 },
                    { q: 'Peluang muncul gambar pada koin adalah...', options: ['1/2', '1/4', '0', '1'], answer: '1/2' },
                    { q: 'C(10,1) = ...', options: [1, 5, 10, 100], answer: 10 },
                    { q: 'Nilai 0! didefinisikan sebagai...', options: [0, 1, '∞', 'error'], answer: 1 },
                    { q: 'Dari 4 orang akan dipilih ketua dan wakil. Gunakan...', options: ['Permutasi', 'Kombinasi', 'Logaritma', 'Integral'], answer: 'Permutasi' },
                    { q: 'Dari 5 orang akan dipilih 2 orang delegasi. Gunakan...', options: ['Permutasi', 'Kombinasi', 'Deret', 'Limit'], answer: 'Kombinasi' },
                    { q: 'Keping koin dilempar 100 kali, frekuensi harapan muncul angka jika P=0.5 adalah...', options: [25, 50, 75, 100], answer: 50 },
                    { q: 'Peluang kejadian A dan B saling lepas adalah P(A) + ...', options: ['P(B)', 'P(A∩B)', 'P(A/B)', '0'], answer: 'P(B)' },
                    { q: 'n! / (n-1)! = ...', options: [1, 'n', 'n!', '0'], answer: 'n' },
                    { q: 'Banyak titik sampel pada pelemparan 3 koin adalah...', options: [3, 6, 8, 9], answer: 8 }
                ]
            },
        ]
    }
};

// State Management
let currentLevel = null;
let currentTopic = null;
let currentQuestionIndex = 0;
let quizQuestions = [];
let selectedAnswer = null;
let isExamMode = false;
let examTimer = null;
let examTimeLeft = 0;

// LocalStorage Functions
function loadProgress() {
    const saved = localStorage.getItem('mathMasterProgress');
    return saved ? JSON.parse(saved) : {
        totalScore: 0,
        totalCorrect: 0,
        totalAttempted: 0,
        topicProgress: {},
        scoreHistory: [],
        lastPlayed: null
    };
}

function saveProgress(progress) {
    localStorage.setItem('mathMasterProgress', JSON.stringify(progress));
}

function getTopicScore(topicId) {
    const progress = loadProgress();
    return progress.topicProgress[topicId] || { correct: 0, attempted: 0, bestScore: 0 };
}

function updateTopicScore(topicId, isCorrect) {
    const progress = loadProgress();
    if (!progress.topicProgress[topicId]) {
        progress.topicProgress[topicId] = { correct: 0, attempted: 0, bestScore: 0 };
    }
    progress.topicProgress[topicId].attempted++;
    progress.totalAttempted++;
    if (isCorrect) {
        progress.topicProgress[topicId].correct++;
        progress.totalCorrect++;
        progress.totalScore += 10;
    }
    progress.lastPlayed = new Date().toISOString();
    progress.scoreHistory.push({
        date: progress.lastPlayed,
        score: progress.totalScore,
        topicId
    });
    // Keep only last 30 entries
    if (progress.scoreHistory.length > 30) {
        progress.scoreHistory = progress.scoreHistory.slice(-30);
    }
    saveProgress(progress);
    updateUI();
}

// UI Update Functions
function updateUI() {
    const progress = loadProgress();
    document.getElementById('nav-score').textContent = progress.totalScore;
    document.getElementById('total-score').textContent = progress.totalScore;
    document.getElementById('total-correct').textContent = progress.totalCorrect;
    document.getElementById('total-attempted').textContent = progress.totalAttempted;
    const accuracy = progress.totalAttempted > 0
        ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100)
        : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';

    // Update level progress
    ['sd', 'smp', 'sma'].forEach(level => {
        const levelData = mathTopics[level];
        let completedTopics = 0;
        levelData.topics.forEach(topic => {
            const topicScore = getTopicScore(topic.id);
            if (topicScore.attempted >= 5 && topicScore.correct >= 3) {
                completedTopics++;
            }
        });
        document.getElementById(`${level}-progress`).textContent = completedTopics;
        const progressPercent = (completedTopics / levelData.topics.length) * 100;
        document.getElementById(`${level}-progress-bar`).style.width = progressPercent + '%';
    });
}

// Navigation Functions
function showHome() {
    hideAllScreens();
    document.getElementById('home-screen').classList.remove('hidden');
    updateUI();
}

function hideAllScreens() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('level-screen').classList.add('hidden');
    document.getElementById('topic-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('stats-screen').classList.add('hidden');
    document.getElementById('creator-screen').classList.add('hidden');
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
}

function selectLevel(level) {
    currentLevel = level;
    hideAllScreens();
    const levelData = mathTopics[level];
    const colorMap = { sd: 'green', smp: 'blue', sma: 'purple' };
    const color = colorMap[level];

    let html = `
    <button onclick="showHome()" class="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <span>←</span> Kembali
    </button>
    <div class="flex items-center gap-4 mb-8">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center text-3xl">${levelData.icon}</div>
        <div>
            <h2 class="text-2xl font-bold">Level ${levelData.name}</h2>
            <p class="text-gray-400">${levelData.topics.length} topik tersedia</p>
        </div>
    </div>
    <div class="grid sm:grid-cols-2 gap-4">
        `;

    levelData.topics.forEach(topic => {
        const topicScore = getTopicScore(topic.id);
        const isCompleted = topicScore.attempted >= 5 && topicScore.correct >= 3;
        html += `
        <div class="topic-card card-glass rounded-2xl p-5 cursor-pointer ${isCompleted ? 'border border-green-500/50' : ''}" onclick="selectTopic('${topic.id}')">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500/30 to-${color}-600/30 flex items-center justify-center text-2xl">${topic.icon}</div>
                <div class="flex-1">
                    <h3 class="font-semibold">${topic.name}</h3>
                    <p class="text-sm text-gray-400">${topicScore.attempted} soal dikerjakan</p>
                </div>
                ${isCompleted ? '<span class="text-green-400 text-xl">✓</span>' : ''}
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-${color}-500 to-${color}-400" style="width: ${topicScore.attempted > 0 ? Math.min((topicScore.correct / 5) * 100, 100) : 0}%"></div>
            </div>
        </div>
        `;
    });

    html += '</div>';
    document.getElementById('level-screen').innerHTML = html;
    document.getElementById('level-screen').classList.remove('hidden');
}

function selectTopic(topicId) {
    currentTopic = findTopic(topicId);
    if (!currentTopic) return;

    hideAllScreens();
    const colorMap = { sd: 'green', smp: 'blue', sma: 'purple' };
    const color = colorMap[currentLevel];

    let html = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <button onclick="selectLevel('${currentLevel}')" class="flex items-center gap-2 text-gray-400 hover:text-white transition group w-fit">
            <span class="transform group-hover:-translate-x-1 transition-transform">←</span> Kembali
        </button>
        <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center text-2xl">${currentTopic.icon}</div>
            <h2 class="text-2xl font-bold">${currentTopic.name}</h2>
        </div>
    </div>

    <!-- Tabs -->
    <div class="flex bg-gray-800/50 p-1 rounded-xl mb-6 overflow-x-auto scrollbar-hide">
        <button id="tab-concept" onclick="showTab('concept')" class="flex-1 py-3 px-4 rounded-lg btn-primary font-bold transition whitespace-nowrap">📖 Konsep</button>
        <button id="tab-example" onclick="showTab('example')" class="flex-1 py-3 px-4 rounded-lg btn-secondary font-bold transition whitespace-nowrap">💡 Contoh</button>
        <button id="tab-practice" onclick="showTab('practice')" class="flex-1 py-3 px-4 rounded-lg btn-secondary font-bold transition whitespace-nowrap">✏️ Latihan</button>
    </div>

    <!-- Tab Contents -->
    <div id="tab-content-concept" class="card-glass rounded-2xl p-6">
        ${currentTopic.concept}
    </div>

    <div id="tab-content-example" class="hidden card-glass rounded-2xl p-6">
        <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="text-yellow-400">💡</span> Contoh Soal
        </h3>
        <div class="bg-${color}-500/20 rounded-xl p-4 mb-6">
            <p class="font-semibold text-lg">${currentTopic.example.question}</p>
        </div>
        <h4 class="font-semibold mb-3 text-yellow-400">Pembahasan Step-by-Step:</h4>
        <div class="space-y-3">
            ${currentTopic.example.steps.map((step, i) => `
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-${color}-500/30 flex items-center justify-center text-sm font-bold flex-shrink-0">${i + 1}</div>
                <p class="text-gray-300 pt-1">${step}</p>
              </div>
            `).join('')}
        </div>
        <div class="mt-6 p-4 bg-green-500/20 rounded-xl">
            <p class="font-semibold">✅ Jawaban: <span class="text-green-400">${currentTopic.example.answer}</span></p>
        </div>
    </div>

    <div id="tab-content-practice" class="hidden">
        <div class="card-glass rounded-2xl p-6 text-center">
            <div class="text-6xl mb-4">✏️</div>
            <h3 class="text-xl font-bold mb-2">Siap Latihan?</h3>
            <p class="text-gray-400 mb-6">Kerjakan 5 soal untuk menguasai topik ini</p>
            <button onclick="startQuiz('${topicId}')" class="btn-primary px-8 py-3 rounded-xl font-semibold text-lg">
                Mulai Latihan
            </button>
        </div>
    </div>
    `;

    document.getElementById('topic-screen').innerHTML = html;
    document.getElementById('topic-screen').classList.remove('hidden');
}

function showTab(tabName) {
    // Update tab buttons
    ['concept', 'example', 'practice'].forEach(tab => {
        const btn = document.getElementById(`tab-${tab}`);
        const content = document.getElementById(`tab-content-${tab}`);
        if (tab === tabName) {
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary');
            content.classList.remove('hidden');
        } else {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
            content.classList.add('hidden');
        }
    });
}

function findTopic(topicId) {
    for (const level of Object.values(mathTopics)) {
        const topic = level.topics.find(t => t.id === topicId);
        if (topic) return topic;
    }
    return null;
}

// Quiz Functions
function startQuiz(topicId) {
    isExamMode = false;
    currentTopic = findTopic(topicId);
    quizQuestions = [...currentTopic.questions];
    shuffleArray(quizQuestions);
    currentQuestionIndex = 0;
    selectedAnswer = null;
    showQuizScreen();
}

function startExam() {
    isExamMode = true;
    showLevelModal('exam');
}

function startRandom() {
    isExamMode = false;
    showLevelModal('random');
}

let quizMode = 'random'; // 'random' or 'exam'

function showLevelModal(mode) {
    quizMode = mode;
    document.getElementById('level-modal').classList.remove('hidden');
}

function closeLevelModal() {
    document.getElementById('level-modal').classList.add('hidden');
}

function selectLevelForQuiz(level) {
    closeLevelModal();
    if (quizMode === 'exam') {
        startExamWithLevel(level);
    } else {
        startRandomWithLevel(level);
    }
}

function startExamWithLevel(levelKey) {
    isExamMode = true;
    examTimeLeft = 20 * 60; // 20 minutes
    quizQuestions = [];

    const level = mathTopics[levelKey];
    level.topics.forEach(topic => {
        quizQuestions.push(...topic.questions.map(q => ({ ...q, topicName: topic.name, topicId: topic.id })));
    });

    shuffleArray(quizQuestions);
    quizQuestions = quizQuestions.slice(0, 20);
    currentQuestionIndex = 0;
    selectedAnswer = null;
    showQuizScreen();
    startExamTimer();
}

function startRandomWithLevel(levelKey) {
    isExamMode = false;
    quizQuestions = [];

    const level = mathTopics[levelKey];
    level.topics.forEach(topic => {
        quizQuestions.push(...topic.questions.map(q => ({ ...q, topicId: topic.id, topicName: topic.name })));
    });

    shuffleArray(quizQuestions);
    quizQuestions = quizQuestions.slice(0, 10);
    currentQuestionIndex = 0;
    selectedAnswer = null;
    showQuizScreen();
}

function startExamTimer() {
    examTimer = setInterval(() => {
        examTimeLeft--;
        updateTimerDisplay();
        if (examTimeLeft <= 0) {
            clearInterval(examTimer);
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('exam-timer');
    if (timerEl) {
        const minutes = Math.floor(examTimeLeft / 60);
        const seconds = examTimeLeft % 60;
        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (examTimeLeft < 60) {
            timerEl.classList.add('text-red-400');
        }
    }
}

function showQuizScreen() {
    hideAllScreens();
    renderQuestion();
    document.getElementById('quiz-screen').classList.remove('hidden');
}

function renderQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const colorMap = { sd: 'green', smp: 'blue', sma: 'purple' };
    const color = currentLevel ? colorMap[currentLevel] : 'purple';

    let html = `
    <div class="max-w-2xl mx-auto">
        <div class="flex items-center justify-between mb-8">
            <button onclick="${isExamMode ? 'showHome()' : (currentTopic ? `selectTopic('${currentTopic.id}')` : 'showHome()')}" class="flex items-center gap-2 text-gray-400 hover:text-white transition group">
                <span class="transform group-hover:-translate-x-1 transition-transform">←</span> ${isExamMode ? 'Berhenti' : 'Kembali'}
            </button>
            ${isExamMode ? `
                <div class="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-xl border border-red-500/20">
                  <span class="animate-pulse">⏱️</span>
                  <span id="exam-timer" class="font-mono font-bold tracking-wider text-lg">20:00</span>
                </div>
              ` : ''}
        </div>

        <!-- Question Header & Progress -->
        <div class="mb-8">
            <div class="flex justify-between items-end mb-3">
                <div>
                    <span class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Pertanyaan</span>
                    <h4 class="text-2xl font-black">${currentQuestionIndex + 1}<span class="text-gray-600 font-normal"> / ${quizQuestions.length}</span></h4>
                </div>
                <div class="text-right">
                    ${question.topicName ? `<span class="px-3 py-1 bg-${color}-500/10 text-${color}-400 rounded-lg text-xs font-bold">${question.topicName}</span>` : ''}
                </div>
            </div>
            <div class="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700" style="width: ${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%"></div>
            </div>
        </div>

        <!-- Question Card -->
        <div class="card-glass rounded-3xl p-6 sm:p-10 mb-8 relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors"></div>
            <h3 class="text-xl sm:text-2xl font-bold leading-relaxed relative z-10">${question.q}</h3>
        </div>

        <!-- Options Container -->
        <div class="grid gap-4 mb-10" id="options-container">
            ${question.options.map((opt, i) => `
                <button onclick="selectOption(${i})" class="option-btn group relative card-glass rounded-2xl p-5 text-left transition-all duration-300 border border-transparent hover:border-indigo-500/30 hover:bg-white/5" data-index="${i}">
                    <div class="flex items-center gap-4">
                        <span class="w-10 h-10 rounded-xl bg-gray-800 group-hover:bg-indigo-500 flex items-center justify-center text-gray-400 group-hover:text-white font-bold transition-colors">${String.fromCharCode(65 + i)}</span>
                        <span class="text-gray-300 group-hover:text-white transition-colors font-medium text-lg leading-tight flex-1">${opt}</span>
                    </div>
                </button>
              `).join('')}
        </div>

        <!-- Action Button -->
        <div id="quiz-actions" class="flex justify-center sticky bottom-8 z-20">
            <button id="submit-btn" onclick="submitAnswer()" class="btn-primary px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/20 transform hover:scale-105 active:scale-95 transition-all opacity-50 cursor-not-allowed" disabled>
                Periksa Jawaban
            </button>
        </div>

        <!-- Feedback Area -->
        <div id="feedback-area" class="hidden mt-8 mb-12 transform animate-in fade-in slide-in-from-bottom-4"></div>
    </div>
    `;

    document.getElementById('quiz-screen').innerHTML = html;

    if (isExamMode) {
        updateTimerDisplay();
    }
}

function selectOption(index) {
    selectedAnswer = index;
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

function submitAnswer() {
    const question = quizQuestions[currentQuestionIndex];
    const isCorrect = question.options[selectedAnswer] === question.answer;

    // Update topic progress if not exam mode
    if (currentTopic) {
        updateTopicScore(currentTopic.id, isCorrect);
    } else if (question.topicId) {
        updateTopicScore(question.topicId, isCorrect);
    } else {
        // For random/exam mode without topicId, just update global stats
        const progress = loadProgress();
        progress.totalAttempted++;
        if (isCorrect) {
            progress.totalCorrect++;
            progress.totalScore += 10;
        }
        saveProgress(progress);
        updateUI();
    }

    // Show feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (question.options[i] === question.answer) {
            btn.classList.add('correct');
        } else if (i === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.classList.remove('hidden');
    feedbackArea.innerHTML = `
    <div class="card-glass rounded-2xl p-6 ${isCorrect ? 'border border-green-500/50' : 'border border-red-500/50'}">
        <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">${isCorrect ? '🎉' : '😔'}</span>
            <span class="text-xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}">
                ${isCorrect ? 'Benar! +10 poin' : 'Kurang tepat'}
            </span>
        </div>
        ${!isCorrect ? `<p class="text-gray-300">Jawaban yang benar: <span class="text-green-400 font-semibold">${question.answer}</span></p>` : ''}
    </div>
    `;

    // Update actions
    const actionsArea = document.getElementById('quiz-actions');
    actionsArea.innerHTML = `
    <button onclick="nextQuestion()" class="btn-primary px-8 py-3 rounded-xl font-semibold text-lg">
        ${currentQuestionIndex < quizQuestions.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
    </button>
    `;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        selectedAnswer = null;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }

    const progress = loadProgress();
    hideAllScreens();

    let correctCount = 0;
    quizQuestions.forEach(q => {
        // This is simplified - in a real app you'd track answers
    });

    const html = `
    <div class="max-w-md mx-auto text-center py-8">
        <div class="text-8xl mb-6">🏆</div>
        <h2 class="text-3xl font-bold mb-4">Selesai!</h2>
        <p class="text-gray-400 mb-8">${isExamMode ? 'Ujian selesai!' : 'Latihan selesai!'}</p>

        <div class="card-glass rounded-2xl p-6 mb-8">
            <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                    <div class="text-3xl font-bold text-yellow-400">${progress.totalScore}</div>
                    <div class="text-sm text-gray-400">Total Skor</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-green-400">${Math.round((progress.totalCorrect / Math.max(progress.totalAttempted, 1)) * 100)}%</div>
                    <div class="text-sm text-gray-400">Akurasi</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <button onclick="showHome()" class="btn-primary px-8 py-3 rounded-xl font-semibold text-lg">
                Kembali ke Beranda
            </button>
            ${currentTopic ? `
              <button onclick="startQuiz('${currentTopic.id}')" class="btn-secondary px-8 py-3 rounded-xl font-semibold">
                Ulangi Latihan
              </button>
            ` : ''}
        </div>
    </div>
    `;

    document.getElementById('quiz-screen').innerHTML = html;
    document.getElementById('quiz-screen').classList.remove('hidden');
}

// Stats Screen
function showStats() {
    hideAllScreens();
    const progress = loadProgress();

    let html = `
    <button onclick="showHome()" class="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <span>←</span> Kembali
    </button>

    <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <span>📊</span> Statistik Belajar
    </h2>

    <!-- Overview Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">🎯</div>
            <div class="text-2xl font-bold text-yellow-400">${progress.totalScore}</div>
            <div class="text-sm text-gray-400">Total Skor</div>
        </div>
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">✅</div>
            <div class="text-2xl font-bold text-green-400">${progress.totalCorrect}</div>
            <div class="text-sm text-gray-400">Soal Benar</div>
        </div>
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">📚</div>
            <div class="text-2xl font-bold text-blue-400">${progress.totalAttempted}</div>
            <div class="text-sm text-gray-400">Soal Dikerjakan</div>
        </div>
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">📈</div>
            <div class="text-2xl font-bold text-purple-400">${progress.totalAttempted > 0 ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100) : 0}%</div>
            <div class="text-sm text-gray-400">Akurasi</div>
        </div>
    </div>

    <!-- Progress Chart -->
    <div class="card-glass rounded-2xl p-6 mb-8">
        <h3 class="text-lg font-bold mb-4">📈 Grafik Perkembangan Skor</h3>
        <div class="h-48 flex items-end justify-around gap-2">
            ${renderChart(progress.scoreHistory)}
        </div>
        <div class="flex justify-between mt-2 text-xs text-gray-500">
            <span>Awal</span>
            <span>Terbaru</span>
        </div>
    </div>

    <!-- Topic Progress -->
    <div class="card-glass rounded-2xl p-6">
        <h3 class="text-lg font-bold mb-4">📚 Progress Per Topik</h3>
        <div class="space-y-4 max-h-96 overflow-y-auto scrollbar-thin pr-2">
            `;

    // Add topic progress
    ['sd', 'smp', 'sma'].forEach(level => {
        const levelData = mathTopics[level];
        const colorMap = { sd: 'green', smp: 'blue', sma: 'purple' };
        const color = colorMap[level];

        html += `<div class="mb-4"><h4 class="font-semibold text-${color}-400 mb-2">${levelData.icon} Level ${levelData.name}</h4>`;

        levelData.topics.forEach(topic => {
            const topicScore = getTopicScore(topic.id);
            const percent = topicScore.attempted > 0 ? Math.round((topicScore.correct / topicScore.attempted) * 100) : 0;
            html += `
                <div class="flex items-center gap-3 py-2 border-b border-gray-700/50">
                    <span class="text-xl">${topic.icon}</span>
                    <div class="flex-1">
                        <div class="flex justify-between text-sm mb-1">
                            <span>${topic.name}</span>
                            <span class="text-gray-400">${topicScore.correct}/${topicScore.attempted}</span>
                        </div>
                        <div class="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-${color}-500 to-${color}-400" style="width: ${percent}%"></div>
                        </div>
                    </div>
                    <span class="text-sm font-semibold ${percent >= 60 ? 'text-green-400' : 'text-gray-400'}">${percent}%</span>
                </div>
                `;
        });
        html += '</div>';
    });

    html += '</div></div>';

    document.getElementById('stats-screen').innerHTML = html;
    document.getElementById('stats-screen').classList.remove('hidden');
}

function renderChart(history) {
    if (!history || history.length === 0) {
        return '<div class="w-full h-full flex items-center justify-center text-gray-500">Belum ada data</div>';
    }

    const maxScore = Math.max(...history.map(h => h.score), 100);
    const displayHistory = history.slice(-10);

    return displayHistory.map((h, i) => {
        const height = (h.score / maxScore) * 100;
        const colors = ['from-purple-500', 'from-blue-500', 'from-green-500', 'from-yellow-500', 'from-red-500'];
        const color = colors[i % colors.length];
        return `
    <div class="flex-1 flex flex-col items-center gap-1">
        <div class="text-xs text-gray-500">${h.score}</div>
        <div class="w-full bg-gradient-to-t ${color} to-transparent rounded-t-lg transition-all" style="height: ${height}%"></div>
    </div>
    `;
    }).join('');
}

function resetProgress() {
    const confirmReset = document.createElement('div');
    confirmReset.id = 'reset-modal';
    confirmReset.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
    confirmReset.innerHTML = `
    <div class="card-glass rounded-2xl p-6 max-w-sm w-full text-center">
        <div class="text-5xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold mb-2">Reset Progress?</h3>
        <p class="text-gray-400 mb-6">Semua skor dan progress akan dihapus. Tindakan ini tidak dapat dibatalkan.</p>
        <div class="flex gap-3">
            <button onclick="document.getElementById('reset-modal').remove()" class="flex-1 btn-secondary px-4 py-3 rounded-xl font-semibold">Batal</button>
            <button onclick="confirmResetProgress()" class="flex-1 bg-red-500 hover:bg-red-600 px-4 py-3 rounded-xl font-semibold">Reset</button>
        </div>
    </div>
    `;
    document.body.appendChild(confirmReset);
}

function confirmResetProgress() {
    localStorage.removeItem('mathMasterProgress');
    document.getElementById('reset-modal').remove();
    updateUI();
    showHome();
}

// Utility Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});

// Creator Bio Functions
function showCreatorProfile() {
    hideAllScreens();
    renderCreatorProfile();
    document.getElementById('creator-screen').classList.remove('hidden');
}

function renderCreatorProfile() {
    const html = `
    <div class="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <button onclick="showHome()" class="flex items-center gap-2 text-gray-400 hover:text-white transition group">
            <span class="transform group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Beranda
        </button>
    </div>

    <!-- Hero Section -->
    <div class="grid lg:grid-cols-3 gap-8 mb-12">
        <!-- Left: Visual Profile -->
        <div class="lg:col-span-1">
            <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative card-glass rounded-3xl p-8 flex flex-col items-center text-center">
                    <div class="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-7xl shadow-2xl mb-6 transform hover:scale-105 transition-transform duration-500 overflow-hidden border-4 border-white/10">
                        <img src="./Foto.jpg" 
                             alt="Bachrul Panji G." 
                             class="w-full h-full object-cover rounded-2xl"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                             style="display: block;">
                        <span style="display: none;" class="w-full h-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">BP</span>
                    </div>
                    <h2 class="text-2xl font-bold mb-1">Bachrul Panji G.</h2>
                    <p class="text-indigo-400 font-semibold mb-4">Full Stack Developer & Educator</p>
                    <div class="flex flex-wrap justify-center gap-2 mt-2">
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">Front end web</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">Cyber Security</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right: About & Philosophy -->
        <div class="lg:col-span-2 space-y-6">
            <div class="card-glass rounded-3xl p-8 relative overflow-hidden h-full">
                <div class="absolute top-0 right-0 p-8 opacity-10">
                    <span class="text-8xl font-serif">"</span>
                </div>
                <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg">💡</span>
                    Biografi & Visi
                </h3>
                <p class="text-gray-300 leading-relaxed text-lg mb-6">
                    "Dulu, Bachrul Panji adalah siswa yang selalu kalah setiap kali berhadapan dengan matematika. Nilainya jarang menyentuh 2.0. Ia pernah dicap bodoh di kelasnya sendiri dan kata itu pelan-pelan menghancurkan rasa percaya dirinya. Matematika bukan hanya sulit, tapi menjadi luka. Di titik terendah itu, tidak ada yang datang menyelamatkan. Tidak ada guru khusus. Hanya dirinya sendiri dan satu pertanyaan sederhana "Benarkah aku tidak mampu, atau aku hanya belum menemukan caranya?" Ia mulai dari nol. Belajar pelan-pelan, jatuh bangun, salah berkali-kali. Sampai akhirnya ia sadar yang salah bukan dirinya, tapi metode belajarnya. Dari anak yang takut angka, ia berubah menjadi seseorang yang ingin membantu anak lain agar tidak merasa bodoh hanya karena belum paham. Website belajar matematika yang ia bangun lahir dari luka masa lalunya. Karena ia tahu rasanya jatuh.Dan justru dari jatuh itulah, ia belajar untuk bangkit lalu mengulurkan tangan bagi yang lain."
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <h4 class="font-bold text-white mb-2">Misi Utama</h4>
                        <p class="text-sm text-gray-400">Menyederhanakan konsep kompleks menjadi visualisasi yang intuitif bagi setiap tingkatan pendidikan.</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <h4 class="font-bold text-white mb-2">Target Masa Depan</h4>
                        <p class="text-sm text-gray-400">Mengintegrasikan AI untuk personalisasi pengalaman belajar yang lebih mendalam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Skills & Expertise Grid -->
    <div class="mb-12">
        <div class="flex items-center justify-between mb-8">
            <h3 class="text-2xl font-bold flex items-center gap-3">
                <span class="text-blue-400">⚡</span> Keahlian Utama
            </h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${[
            { icon: '📐', title: 'Microsoft Excel', level: '95%', color: 'indigo' },
            { icon: '⚛️', title: 'Coding', level: '90%', color: 'blue' },
            { icon: '🎨', title: 'Cyber Analisis', level: '85%', color: 'purple' },
            { icon: '🚀', title: 'Fullstack web', level: '88%', color: 'pink' }
        ].map(skill => `
                <div class="card-glass rounded-2xl p-5 border border-${skill.color}-500/20 hover:border-${skill.color}-500/50 transition duration-300 group">
                    <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform">${skill.icon}</div>
                    <h4 class="font-bold mb-3">${skill.title}</h4>
                    <div class="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div class="h-full bg-${skill.color}-500" style="width: ${skill.level}"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <!-- Professional Journey -->
    <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                <span class="text-purple-400">🏢</span> Pengalaman
            </h3>
            <div class="relative space-y-8 pl-6">
                <!-- Timeline line -->
                <div class="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"></div>
                
                ${[
            {
                year: '2024- Now',
                role: 'Lead Architect',
                name: 'Softwere House',
                desc: 'Membangun website untuk UMKM dan perusahaan'
            },
            {
                year: '2025',
                role: 'Cyber Analis',
                name: 'Cyber Agent',
                desc: 'Merancang sistem keamanan untuk perusahaan.'
            }
        ].map(exp => `
                    <div class="relative">
                        <div class="absolute -left-[21px] w-[11px] h-[11px] rounded-full bg-white border-4 border-purple-500"></div>
                        <div class="card-glass rounded-2xl p-6 hover:translate-x-2 transition-transform duration-300">
                            <span class="text-xs font-bold text-purple-400 uppercase tracking-wider">${exp.year}</span>
                            <h4 class="text-lg font-bold mt-1">${exp.role}</h4>
                            <p class="text-gray-400 text-sm mb-2">${exp.name}</p>
                            <p class="text-sm text-gray-300">${exp.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Achievements / Stats Card -->
        <div>
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                <span class="text-yellow-400">🏆</span> Milestone
            </h3>
            <div class="grid grid-cols-1 gap-4">
                <div class="card-glass rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition">
                    <div class="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-3xl group-hover:rotate-12 transition">🏅</div>
                    <div>
                        <h4 class="text-xl font-bold italic">Top 100 Indonesian Innovators</h4>
                        <p class="text-gray-400">Diberikan oleh Future Tech Foundation 2023</p>
                    </div>
                </div>
                <div class="card-glass rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition">
                    <div class="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-3xl group-hover:rotate-12 transition">📊</div>
                    <div>
                        <h4 class="text-xl font-bold">100 Students Mentored</h4>
                        <p class="text-gray-400">Melalui berbagai workshop & platform digital</p>
                    </div>
                </div>
                <div class="card-glass rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition">
                    <div class="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl group-hover:rotate-12 transition">🎓</div>
                    <div>
                        <h4 class="text-xl font-bold">Bachelor of Computer Science</h4>
                        <p class="text-gray-400">University of Indonesia (Spec: Math Alg)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact & Footer -->
    <div class="card-glass rounded-[2rem] p-12 text-center relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
        <h3 class="text-3xl font-bold mb-4">Mari Berkolaborasi</h3>
        <p class="text-gray-400 max-w-xl mx-auto mb-10">Punya pertanyaan tentang materi atau ingin bekerja sama membangun masa depan pendidikan? Kirimkan pesan sekarang.</p>
        <div class="flex flex-wrap justify-center gap-4">
            <a href="mailto:bachrulpanji0038@gmail.com" class="btn-primary py-4 px-8 rounded-2xl font-bold hover:scale-105 transition">Email Saya</a>
            <a href="https://wa.me/6281220463587" class="bg-emerald-500/20 text-emerald-400 py-4 px-8 rounded-2xl font-bold border border-emerald-500/20 hover:bg-emerald-500/30 transition">WhatsApp Direct</a>
        </div>
    </div>
    `;

    document.getElementById('creator-screen').innerHTML = html;
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.log('Service Worker registration failed', err));
    });
}
