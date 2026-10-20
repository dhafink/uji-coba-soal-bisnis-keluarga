// Topik 1 — Genogram
window.QUESTIONS.push(
{
  id: "T1-01", topic: 1, level: "konsep",
  q: "Dalam genogram standar (McGoldrick & Gerson), simbol untuk laki-laki dan perempuan adalah…",
  options: [
    "Kotak untuk laki-laki, lingkaran untuk perempuan",
    "Lingkaran untuk laki-laki, kotak untuk perempuan",
    "Segitiga untuk laki-laki, lingkaran untuk perempuan",
    "Kotak untuk keduanya, dibedakan dengan warna"
  ],
  answer: 0,
  explain: "Konvensi baku genogram: laki-laki = kotak (□), perempuan = lingkaran (○). Segitiga biasanya dipakai untuk kehamilan, bukan jenis kelamin. Simbol yang seragam membuat genogram bisa dibaca siapa pun tanpa penjelasan tambahan.",
  why: [null,
    "Terbalik. Kotak untuk laki-laki, lingkaran untuk perempuan.",
    "Segitiga bukan simbol laki-laki; dalam genogram segitiga lazim dipakai untuk kehamilan.",
    "Jenis kelamin dibedakan lewat bentuk, bukan warna. Warna/arsiran biasanya dipakai untuk informasi tambahan (mis. peran di bisnis)."]
},
{
  id: "T1-02", topic: 1, level: "konsep",
  q: "Bagaimana anggota keluarga yang sudah meninggal ditandai dalam genogram?",
  options: [
    "Simbolnya diarsir hitam penuh",
    "Diberi tanda silang (X) di dalam simbolnya",
    "Simbolnya dikelilingi garis putus-putus",
    "Simbolnya dihapus dari genogram"
  ],
  answer: 1,
  explain: "Anggota yang sudah meninggal ditandai dengan X di dalam kotak/lingkarannya, sering disertai tahun lahir–wafat. Orang yang sudah meninggal tetap digambar karena posisinya penting untuk memahami silsilah dan pewarisan (contoh: Pak Bambang pada kasus Santoso).",
  why: [
    "Arsiran penuh biasanya dipakai untuk menandai kondisi/karakteristik tertentu sesuai legenda, bukan kematian.",
    null,
    "Garis putus-putus yang mengelilingi beberapa orang biasanya menandai satu rumah tangga (household), bukan kematian.",
    "Orang yang sudah meninggal tetap digambar; justru penting untuk melihat asal-usul kepemilikan dan warisan."]
},
{
  id: "T1-03", topic: 1, level: "konsep",
  q: "Hubungan perceraian (divorce) digambarkan dengan…",
  options: [
    "Satu garis miring (/) memotong garis pernikahan",
    "Garis pernikahan putus-putus",
    "Dua garis miring (//) memotong garis pernikahan",
    "Garis zig-zag di antara pasangan"
  ],
  answer: 2,
  explain: "Perceraian = dua garis miring (//) pada garis pernikahan. Satu garis miring (/) berarti berpisah (separation) tetapi belum bercerai resmi. Pada kasus Santoso, garis Sari–Budi diberi //.",
  why: [
    "Satu garis miring berarti perpisahan (separation), belum perceraian resmi.",
    "Garis putus-putus antara pasangan menandakan hidup bersama tanpa menikah (cohabitation/hubungan tidak resmi).",
    null,
    "Zig-zag adalah simbol hubungan emosional yang konflik/bermusuhan, bukan status pernikahan."]
},
{
  id: "T1-04", topic: 1, level: "konsep",
  q: "Pada garis pernikahan terdapat SATU garis miring (/). Apa artinya?",
  options: [
    "Pasangan sudah bercerai secara resmi",
    "Pasangan berpisah (separation) namun belum bercerai resmi",
    "Pernikahan tersebut adalah pernikahan kedua",
    "Salah satu pasangan sudah meninggal"
  ],
  answer: 1,
  explain: "Satu garis miring = separation (pisah ranjang/pisah tempat tinggal) tanpa perceraian resmi. Dua garis miring = perceraian. Perbedaan ini penting dalam bisnis keluarga karena status hukum pernikahan memengaruhi hak waris dan harta bersama.",
  why: [
    "Perceraian resmi ditandai dua garis miring (//).",
    null,
    "Pernikahan kedua digambar sebagai garis pernikahan tambahan, bukan dengan garis miring.",
    "Kematian ditandai X di dalam simbol orangnya, bukan pada garis pernikahan."]
},
{
  id: "T1-05", topic: 1, level: "konsep",
  q: "Bagaimana urutan anak-anak dari satu pasangan digambarkan dalam genogram?",
  options: [
    "Dari kanan (tertua) ke kiri (termuda)",
    "Anak laki-laki di kiri, anak perempuan di kanan",
    "Diurutkan berdasarkan besar kepemilikan saham",
    "Dari kiri (tertua) ke kanan (termuda)"
  ],
  answer: 3,
  explain: "Anak-anak digambar satu tingkat di bawah garis pernikahan orang tuanya, berurutan dari kiri (paling tua) ke kanan (paling muda). Contoh: Doni (anak pertama Andi–Maya) digambar di kiri Dina.",
  why: [
    "Arahnya terbalik; konvensi baku adalah kiri = tertua.",
    "Urutan berdasarkan usia, bukan jenis kelamin.",
    "Genogram menggambarkan silsilah keluarga; saham bisa ditambahkan sebagai keterangan, tetapi tidak menentukan urutan anak.",
    null]
},
{
  id: "T1-06", topic: 1, level: "konsep",
  q: "Garis zig-zag yang menghubungkan dua anggota keluarga dalam genogram menunjukkan…",
  options: [
    "Hubungan yang sangat dekat (fused)",
    "Hubungan konflik/bermusuhan",
    "Hubungan yang terputus (cut-off)",
    "Hubungan kerja di perusahaan"
  ],
  answer: 1,
  explain: "Selain struktur keluarga, genogram bisa memuat garis hubungan emosional. Garis zig-zag = konflik/permusuhan. Informasi ini membantu konsultan bisnis keluarga melihat potensi konflik, misalnya antar-saudara calon penerus.",
  why: [
    "Hubungan sangat dekat/lekat biasanya digambar dengan tiga garis sejajar.",
    null,
    "Hubungan terputus (cut-off) digambar dengan garis yang diputus/diberi celah.",
    "Hubungan kerja bukan simbol emosional baku; peran di bisnis biasanya ditunjukkan lewat legenda (warna/label)."]
},
{
  id: "T1-07", topic: 1, level: "konsep",
  q: "Apa tujuan utama penggunaan genogram dalam konteks bisnis keluarga?",
  options: [
    "Memetakan struktur keluarga, hubungan antaranggota, dan keterlibatan mereka di bisnis lintas generasi",
    "Menghitung valuasi perusahaan keluarga",
    "Menggantikan struktur organisasi (org chart) perusahaan",
    "Menetapkan pembagian warisan secara hukum"
  ],
  answer: 0,
  explain: "Genogram adalah peta visual keluarga lintas generasi. Dalam bisnis keluarga, genogram dipakai untuk melihat siapa saja yang terlibat (pemilik/pengelola), calon penerus, pola antargenerasi (mis. selalu anak sulung yang memimpin), serta sumber potensi konflik.",
  why: [null,
    "Valuasi adalah analisis keuangan; genogram tidak berisi angka nilai perusahaan.",
    "Org chart menggambarkan jabatan di perusahaan; genogram menggambarkan hubungan keluarga. Keduanya saling melengkapi, bukan saling menggantikan.",
    "Genogram membantu memahami siapa ahli waris, tetapi pembagian warisan ditetapkan oleh hukum/wasiat, bukan oleh genogram."]
},
{
  id: "T1-08", topic: 1, level: "konsep",
  q: "Genogram berakar dari teori apa?",
  options: [
    "Teori agensi (Jensen & Meckling)",
    "Three-Circle Model (Tagiuri & Davis)",
    "Teori sistem keluarga (family systems theory) Murray Bowen",
    "Teori stewardship (Davis, Schoorman & Donaldson)"
  ],
  answer: 2,
  explain: "Genogram berkembang dari teori sistem keluarga Murray Bowen, yang memandang keluarga sebagai satu sistem emosional dengan pola yang diwariskan antargenerasi. Monica McGoldrick dan Randy Gerson kemudian membakukan simbol-simbolnya (1985).",
  why: [
    "Teori agensi membahas hubungan prinsipal–agen (pemilik–manajer), bukan pemetaan keluarga.",
    "Three-Circle Model adalah alat terpisah untuk memetakan peran keluarga–kepemilikan–bisnis.",
    null,
    "Teori stewardship membahas motivasi manajer sebagai “pelayan” organisasi, bukan asal-usul genogram."]
},
{
  id: "T1-09", topic: 1, level: "aplikasi",
  q: "Apa perbedaan utama genogram dengan pohon keluarga (family tree) biasa?",
  options: [
    "Genogram hanya boleh memuat dua generasi",
    "Tidak ada perbedaan; keduanya sama persis",
    "Pohon keluarga memakai simbol baku, sedangkan genogram bebas",
    "Genogram juga memuat informasi peristiwa penting dan pola hubungan (cerai, meninggal, konflik, peran di bisnis), bukan hanya silsilah"
  ],
  answer: 3,
  explain: "Pohon keluarga umumnya hanya menunjukkan garis keturunan. Genogram lebih kaya: memakai simbol baku untuk pernikahan, perceraian, kematian, hubungan emosional, dan bisa ditambah informasi peran di bisnis. Karena itu genogram lebih berguna untuk analisis bisnis keluarga.",
  why: [
    "Genogram justru umumnya minimal tiga generasi agar pola antargenerasi terlihat.",
    "Keduanya berbeda dalam kedalaman informasi yang dimuat.",
    "Terbalik — genogramlah yang memiliki simbol baku (McGoldrick & Gerson).",
    null]
},
{
  id: "T1-10", topic: 1, level: "aplikasi",
  q: "Seorang konsultan ingin menunjukkan dalam genogram siapa yang memegang saham dan siapa yang bekerja di perusahaan. Cara yang paling tepat adalah…",
  options: [
    "Menambahkan kode warna/arsiran atau label (mis. % saham, jabatan) pada simbol, lengkap dengan legenda",
    "Membuat genogram terpisah untuk setiap pemegang saham",
    "Menghapus anggota keluarga yang tidak terlibat bisnis agar ringkas",
    "Mengganti simbol kotak/lingkaran dengan nama jabatan"
  ],
  answer: 0,
  explain: "Genogram bisnis keluarga biasanya diberi lapisan informasi tambahan: warna, arsiran, atau label persentase saham dan jabatan, dengan legenda yang jelas. Struktur dan simbol dasarnya tetap dipertahankan.",
  why: [null,
    "Genogram terpisah justru menyulitkan melihat keterkaitan antaranggota; cukup satu genogram dengan lapisan informasi.",
    "Anggota yang tidak terlibat tetap penting (calon pewaris, pasangan, sumber konflik), jadi jangan dihapus.",
    "Simbol dasar harus tetap ada agar genogram bisa dibaca; jabatan ditambahkan sebagai label, bukan pengganti."]
},
{
  id: "T1-11", topic: 1, level: "aplikasi",
  q: "Mengapa anggota keluarga yang TIDAK terlibat dalam bisnis (mis. menantu atau cucu yang masih sekolah) tetap dicantumkan dalam genogram?",
  options: [
    "Karena peraturan hukum mewajibkannya",
    "Karena mereka bisa memengaruhi dinamika keluarga dan berpotensi menjadi pemilik/pengelola di masa depan",
    "Hanya agar genogram terlihat lengkap secara estetika",
    "Karena semua anggota keluarga otomatis menjadi pemegang saham"
  ],
  answer: 1,
  explain: "Pasangan dan anak-anak yang belum terlibat tetap relevan: mereka bisa menjadi ahli waris saham, calon penerus, atau sumber kepentingan dan konflik (mis. menantu yang memengaruhi keputusan pasangannya). Genogram yang lengkap membantu perencanaan suksesi jangka panjang.",
  why: [
    "Tidak ada kewajiban hukum untuk membuat genogram; ini alat analisis.",
    null,
    "Alasannya analitis, bukan estetika.",
    "Tidak semua anggota keluarga otomatis memiliki saham (contoh: Doni dan Dina tidak memiliki saham)."]
},
{
  id: "T1-12", topic: 1, level: "kasus",
  q: "Kasus Keluarga Santoso (Rina Department Store): Pak Bambang & Ibu Rina → Andi & Sari → Doni, Dina, Eka, Fani → Gio. Berapa generasi yang tergambar dalam genogram keluarga ini?",
  options: ["Dua generasi", "Tiga generasi", "Empat generasi", "Lima generasi"],
  answer: 2,
  explain: "G1: Pak Bambang (alm.) & Ibu Rina; G2: Andi & Sari (beserta pasangannya); G3: Doni, Dina, Eka, Fani (beserta pasangan, mis. Lina); G4: Gio (anak Doni & Lina). Jadi ada empat generasi, sesuai perintah tugas.",
  why: [
    "Masih ada generasi cucu (Doni dkk.) dan cicit (Gio).",
    "Gio (anak Doni & Lina) adalah generasi keempat.",
    null,
    "Belum ada keturunan dari Gio, jadi berhenti di generasi keempat."]
},
{
  id: "T1-13", topic: 1, level: "kasus",
  q: "Kasus Santoso: bagaimana Pak Bambang Santoso digambarkan dalam genogram?",
  options: [
    "Kotak dengan garis ganda karena ia pendiri",
    "Lingkaran dengan tanda X",
    "Tidak digambar karena sudah meninggal",
    "Kotak dengan tanda X, terhubung garis pernikahan dengan lingkaran Ibu Rina"
  ],
  answer: 3,
  explain: "Pak Bambang laki-laki (kotak) dan sudah meninggal (X di dalam kotak). Ia tetap dihubungkan dengan garis pernikahan ke Ibu Rina (lingkaran), dan dari garis itu turun garis ke Andi dan Sari.",
  why: [
    "Garis ganda menandai index person (tokoh fokus analisis), bukan status pendiri. Lagi pula kematiannya tetap harus ditandai X.",
    "Lingkaran adalah simbol perempuan; Pak Bambang laki-laki.",
    "Anggota yang meninggal tetap digambar karena posisinya penting dalam silsilah dan pewarisan.",
    null]
},
{
  id: "T1-14", topic: 1, level: "kasus",
  q: "Kasus Santoso: Sari pernah menikah dengan Budi (punya anak Eka), lalu bercerai dan menikah lagi dengan Rudi (punya anak Fani). Penggambaran yang benar adalah…",
  options: [
    "Budi tidak perlu digambar karena sudah bercerai",
    "Eka dan Fani diturunkan dari satu garis pernikahan yang sama",
    "Garis Sari–Budi diberi dua garis miring (//) dan Eka turun dari garis itu; garis Sari–Rudi utuh dan Fani turun dari garis Sari–Rudi",
    "Garis Sari–Budi diberi satu garis miring dan Fani turun dari garis Sari–Budi"
  ],
  answer: 2,
  explain: "Setiap pernikahan digambar dengan garisnya sendiri. Pernikahan yang berakhir cerai diberi //, dan anak diturunkan dari garis pernikahan orang tua kandungnya: Eka dari Sari–Budi, Fani dari Sari–Rudi. Dengan begitu terlihat jelas bahwa Eka dan Fani saudara seibu.",
  why: [
    "Budi tetap digambar karena ia ayah kandung Eka; informasi ini relevan untuk pewarisan.",
    "Eka dan Fani berbeda ayah, jadi harus turun dari garis pernikahan yang berbeda.",
    null,
    "Satu garis miring berarti pisah (belum cerai), dan Fani adalah anak dari pernikahan dengan Rudi, bukan Budi."]
},
{
  id: "T1-15", topic: 1, level: "kasus",
  q: "Kasus Santoso: Doni menikah dengan Lina dan memiliki anak bernama Gio. Pernyataan yang benar tentang cabang Doni dalam genogram adalah…",
  options: [
    "Gio digambar sejajar dengan Doni karena sama-sama laki-laki",
    "Lina tidak perlu digambar karena bukan keturunan darah keluarga Santoso",
    "Gio diturunkan langsung dari garis pernikahan Andi–Maya",
    "Doni dihubungkan garis pernikahan dengan Lina, dan Gio digambar satu tingkat di bawahnya (generasi ke-4) dari garis Doni–Lina"
  ],
  answer: 3,
  explain: "Pasangan yang menikah masuk ke dalam genogram (Lina sebagai menantu), lalu anak mereka diturunkan dari garis pernikahan tersebut satu tingkat lebih rendah. Karena itu Gio berada di generasi keempat.",
  why: [
    "Posisi vertikal menunjukkan generasi, bukan jenis kelamin. Gio satu generasi di bawah Doni.",
    "Menantu tetap digambar; pasangan sering memengaruhi dinamika keluarga dan pewarisan.",
    "Gio adalah anak Doni & Lina, bukan anak Andi & Maya.",
    null]
}
);
