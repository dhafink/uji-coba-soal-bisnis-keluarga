// Topik 1 — Genogram
window.QUESTIONS.push(
{
  id: "T1-01", topic: 1, level: "konsep",
  fig: "pq", figCap: "Dua simbol dasar genogram",
  q: "Perhatikan dua simbol dasar genogram di atas (P = kotak, Q = lingkaran). Pernyataan yang benar adalah…",
  options: [
    "P (kotak) = laki-laki, Q (lingkaran) = perempuan",
    "P (kotak) = perempuan, Q (lingkaran) = laki-laki",
    "P = anggota yang sudah meninggal, Q = anggota yang masih hidup",
    "P = pemegang saham, Q = bukan pemegang saham"
  ],
  answer: 0,
  explain: "Konvensi baku genogram (McGoldrick & Gerson): laki-laki = kotak (□), perempuan = lingkaran (○). Informasi lain seperti kematian (tanda X), kepemilikan saham, atau peran di bisnis ditambahkan PADA simbol tersebut, misalnya lewat tanda, garis tebal, atau warna yang dijelaskan di legenda.",
  why: [null,
    "Terbalik; kotak untuk laki-laki dan lingkaran untuk perempuan.",
    "Bentuk simbol menunjukkan jenis kelamin. Kematian ditandai X di dalam simbol.",
    "Kepemilikan saham bukan arti bentuk dasar simbol; biasanya ditunjukkan lewat tanda tambahan (mis. garis tebal) di legenda."]
},
{
  id: "T1-02", topic: 1, level: "konsep",
  optFigs: ["sym:male-shaded", "sym:male-dead", "sym:male-household", null],
  q: "Pada genogram, anggota keluarga yang sudah meninggal ditandai dengan cara apa?",
  options: [
    "Simbolnya diarsir penuh (diblok)",
    "Simbolnya diberi tanda silang (X) di dalamnya",
    "Simbolnya dikelilingi garis putus-putus",
    "Simbolnya dihapus dari genogram"
  ],
  answer: 1,
  explain: "Anggota yang sudah meninggal ditandai dengan X di dalam kotak/lingkarannya, sering disertai tahun lahir–wafat. Orang yang sudah meninggal TETAP digambar karena posisinya penting untuk memahami silsilah dan pewarisan, contohnya Pak Bambang pada kasus Santoso.",
  why: [
    "Arsiran penuh biasanya dipakai untuk menandai kondisi/karakteristik tertentu sesuai legenda, bukan kematian.",
    null,
    "Garis putus-putus yang mengelilingi orang biasanya menandai satu rumah tangga (tinggal serumah).",
    "Orang yang sudah meninggal tetap digambar; justru penting untuk melihat asal-usul kepemilikan dan warisan."]
},
{
  id: "T1-03", topic: 1, level: "konsep",
  optFigs: ["rel:separated", "rel:cohab", "rel:divorced", "rel:conflict"],
  q: "Gambar garis hubungan mana yang menunjukkan PERCERAIAN (divorce)?",
  options: [
    "Satu garis miring (/) memotong garis pernikahan",
    "Garis pernikahan putus-putus",
    "Dua garis miring (//) memotong garis pernikahan",
    "Garis zig-zag di antara pasangan"
  ],
  answer: 2,
  explain: "Perceraian = dua garis miring (//) pada garis pernikahan. Satu garis miring (/) berarti berpisah (separation) tetapi belum bercerai resmi. Pada kasus Santoso, garis Sari–Budi diberi tanda //.",
  why: [
    "Satu garis miring berarti perpisahan (separation), belum perceraian resmi.",
    "Garis putus-putus antara pasangan menandakan hidup bersama tanpa menikah (kohabitasi).",
    null,
    "Zig-zag adalah simbol hubungan emosional yang konflik/bermusuhan, bukan status pernikahan."]
},
{
  id: "T1-04", topic: 1, level: "konsep",
  fig: "rel:separated:big", figCap: "Garis pernikahan dengan SATU garis miring",
  q: "Perhatikan gambar: pada garis pernikahan terdapat SATU garis miring (/). Apa artinya?",
  options: [
    "Pasangan sudah bercerai secara resmi",
    "Pasangan berpisah (separation) namun belum bercerai resmi",
    "Pernikahan tersebut adalah pernikahan kedua",
    "Salah satu pasangan sudah meninggal"
  ],
  answer: 1,
  explain: "Satu garis miring = separation (pisah tempat tinggal) tanpa perceraian resmi. Dua garis miring = perceraian. Bedanya penting dalam bisnis keluarga, karena status hukum pernikahan memengaruhi hak waris dan harta bersama.",
  why: [
    "Perceraian resmi ditandai dua garis miring (//).",
    null,
    "Pernikahan kedua digambar sebagai garis pernikahan tambahan, bukan dengan garis miring.",
    "Kematian ditandai X di dalam simbol orangnya, bukan pada garis pernikahan."]
},
{
  id: "T1-05", topic: 1, level: "konsep",
  q: "Sepasang suami-istri memiliki tiga anak: lahir tahun 1990, 1993, dan 1997. Bagaimana anak-anak itu diurutkan dalam genogram?",
  options: [
    "Dari kanan ke kiri: 1990 paling kanan, 1997 paling kiri",
    "Anak laki-laki selalu di kiri, anak perempuan di kanan",
    "Diurutkan berdasarkan besar kepemilikan saham",
    "Dari kiri ke kanan: 1990 (tertua) paling kiri, 1997 (termuda) paling kanan"
  ],
  answer: 3,
  explain: "Anak-anak digambar satu tingkat di bawah garis pernikahan orang tuanya, berurutan dari kiri (paling tua) ke kanan (paling muda). Contoh pada kasus Santoso: Doni (anak pertama Andi–Maya) digambar di kiri Dina.",
  why: [
    "Arahnya terbalik; konvensi baku adalah kiri = tertua.",
    "Urutan berdasarkan usia, bukan jenis kelamin.",
    "Genogram menggambarkan silsilah keluarga. Saham bisa ditambahkan sebagai keterangan, tetapi tidak menentukan urutan anak.",
    null]
},
{
  id: "T1-06", topic: 1, level: "konsep",
  fig: "rel:conflict:big", figCap: "Garis zig-zag yang menghubungkan dua anggota keluarga",
  q: "Perhatikan gambar. Garis zig-zag yang menghubungkan dua anggota keluarga dalam genogram menunjukkan…",
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
    "Hubungan terputus (cut-off) digambar dengan garis yang diputus atau diberi celah.",
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
  explain: "Genogram adalah peta visual keluarga lintas generasi. Dalam bisnis keluarga, genogram dipakai untuk melihat siapa saja yang terlibat (pemilik/pengelola), calon penerus, pola antargenerasi (mis. selalu anak sulung yang memimpin), dan sumber potensi konflik.",
  why: [null,
    "Valuasi adalah analisis keuangan; genogram tidak berisi angka nilai perusahaan.",
    "Org chart menggambarkan jabatan; genogram menggambarkan hubungan keluarga. Keduanya saling melengkapi.",
    "Genogram membantu memahami siapa saja ahli warisnya, tetapi pembagian warisan ditetapkan oleh hukum/wasiat."]
},
{
  id: "T1-08", topic: 1, level: "kasus", kasus: "santoso",
  ctx: "Teks kasus tidak menyebutkan jenis kelamin Eka, Fani, dan Gio. Ketiganya hanya disebut “seorang anak”.",
  optFigs: ["sym:unknown", "sym:male", "sym:female", "sym:male-shaded"],
  q: "Simbol apa yang paling tepat untuk menggambarkan Eka, Fani, dan Gio dalam genogram?",
  options: [
    "Belah ketupat (jenis kelamin tidak diketahui/tidak disebutkan), lalu dijelaskan di legenda",
    "Kotak, karena nama mereka terdengar seperti nama laki-laki",
    "Lingkaran, karena semua anak kecil digambar dengan lingkaran",
    "Simbol yang diarsir penuh (diblok)"
  ],
  answer: 0,
  explain: "Kalau datanya tidak menyebutkan jenis kelamin, jangan ditebak dari nama. Konvensi yang lazim (mis. standar pedigree) memakai belah ketupat untuk jenis kelamin yang tidak diketahui, dan artinya dicantumkan di legenda. Prinsipnya: genogram hanya memuat fakta yang diketahui.",
  why: [null,
    "Menebak jenis kelamin dari nama berisiko salah; data kasus tidak menyebutkannya.",
    "Lingkaran berarti perempuan, bukan anak kecil; usia tidak menentukan bentuk simbol.",
    "Arsiran penuh dipakai untuk karakteristik tertentu sesuai legenda, bukan untuk jenis kelamin yang tidak diketahui."]
},
{
  id: "T1-09", topic: 1, level: "aplikasi",
  q: "Apa perbedaan utama genogram dengan pohon keluarga (family tree) biasa?",
  options: [
    "Genogram hanya boleh memuat dua generasi",
    "Tidak ada perbedaan; keduanya sama persis",
    "Pohon keluarga memakai simbol baku, sedangkan genogram bebas",
    "Genogram juga memuat peristiwa penting dan pola hubungan (cerai, meninggal, konflik, peran di bisnis), bukan hanya silsilah"
  ],
  answer: 3,
  explain: "Pohon keluarga umumnya hanya menunjukkan garis keturunan. Genogram lebih kaya: memakai simbol baku untuk pernikahan, perceraian, kematian, dan hubungan emosional, serta bisa ditambah informasi peran di bisnis. Karena itu genogram lebih berguna untuk analisis bisnis keluarga.",
  why: [
    "Genogram justru umumnya minimal tiga generasi agar pola antargenerasi terlihat.",
    "Keduanya berbeda dalam kedalaman informasi yang dimuat.",
    "Terbalik; genogramlah yang memiliki simbol baku (McGoldrick & Gerson).",
    null]
},
{
  id: "T1-10", topic: 1, level: "aplikasi",
  q: "Seorang konsultan ingin menunjukkan dalam genogram siapa yang memegang saham dan siapa yang bekerja di perusahaan. Cara yang paling tepat adalah…",
  options: [
    "Menambahkan kode pada simbol (mis. garis tebal untuk pemegang saham, warna untuk yang bekerja, label % saham), lengkap dengan legenda",
    "Membuat genogram terpisah untuk setiap pemegang saham",
    "Menghapus anggota keluarga yang tidak terlibat bisnis agar ringkas",
    "Mengganti simbol kotak/lingkaran dengan nama jabatan"
  ],
  answer: 0,
  explain: "Genogram bisnis keluarga biasanya diberi lapisan informasi tambahan, seperti garis tebal, warna, arsiran, atau label persentase saham dan jabatan, dengan legenda yang jelas. Struktur dan simbol dasarnya tetap dipertahankan (lihat contoh genogram Santoso pada soal kasus).",
  why: [null,
    "Genogram terpisah menyulitkan melihat keterkaitan antaranggota; cukup satu genogram dengan lapisan informasi.",
    "Anggota yang tidak terlibat tetap penting (calon pewaris, pasangan, sumber konflik), jadi jangan dihapus.",
    "Simbol dasar harus tetap ada agar genogram bisa dibaca; jabatan ditambahkan sebagai label."]
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
  explain: "Pasangan dan anak-anak yang belum terlibat tetap relevan karena bisa menjadi ahli waris saham, calon penerus, atau sumber kepentingan dan konflik (mis. menantu yang memengaruhi keputusan pasangannya). Genogram yang lengkap membantu perencanaan suksesi jangka panjang.",
  why: [
    "Tidak ada kewajiban hukum untuk membuat genogram; ini alat analisis.",
    null,
    "Alasannya analitis, bukan estetika.",
    "Tidak semua anggota keluarga otomatis memiliki saham (contoh: Doni dan Dina tidak memiliki saham)."]
},
{
  id: "T1-12", topic: 1, level: "kasus", kasus: "santoso",
  ctx: "Pendiri: Pak Bambang (alm.) & Ibu Rina. Anak mereka: Andi dan Sari. Anak Andi: Doni dan Dina. Anak Sari: Eka (dari Budi) dan Fani (dari Rudi). Doni menikah dengan Lina dan memiliki anak bernama Gio.",
  q: "Berdasarkan kasus di atas, berapa generasi yang harus digambarkan dalam genogram Keluarga Santoso?",
  options: ["Dua generasi", "Tiga generasi", "Empat generasi", "Lima generasi"],
  answer: 2,
  explain: "G1: Pak Bambang (alm.) & Ibu Rina; G2: Andi & Sari (beserta pasangannya); G3: Doni, Dina, Eka, Fani (beserta pasangan, mis. Lina); G4: Gio (anak Doni & Lina). Jadi ada empat generasi, sesuai perintah Tugas 1.",
  why: [
    "Masih ada generasi cucu (Doni dkk.) dan cicit (Gio).",
    "Gio (anak Doni & Lina) adalah generasi keempat.",
    null,
    "Belum ada keturunan dari Gio, jadi genogram berhenti di generasi keempat."]
},
{
  id: "T1-13", topic: 1, level: "kasus", kasus: "santoso",
  ctx: "Pak Bambang Santoso adalah laki-laki, pendiri Rina Department Store bersama istrinya (Ibu Rina), dan sudah meninggal dunia.",
  fig: "geno:bambang", figCap: "Genogram Keluarga Santoso. Posisi Pak Bambang ditandai “?”",
  optFigs: ["sym:male-dead", "sym:female-dead", "sym:male-index", "sym:male-shaded"],
  q: "Perhatikan genogram di atas. Simbol apa yang tepat untuk Pak Bambang pada posisi bertanda “?”",
  options: [
    "Kotak dengan tanda silang (X) di dalamnya",
    "Lingkaran dengan tanda silang (X) di dalamnya",
    "Kotak bergaris ganda, karena ia pendiri",
    "Kotak yang diarsir penuh (diblok)"
  ],
  answer: 0,
  explain: "Pak Bambang laki-laki (kotak) dan sudah meninggal (X di dalam kotak). Ia tetap dihubungkan dengan garis pernikahan ke Ibu Rina (lingkaran), dan dari garis itulah turun garis keturunan ke Andi dan Sari. Status “pendiri” tidak punya simbol khusus; cukup dituliskan sebagai label.",
  why: [
    null,
    "Lingkaran adalah simbol perempuan, sedangkan Pak Bambang laki-laki.",
    "Garis ganda menandai index person (tokoh yang menjadi fokus analisis), bukan status pendiri. Kematiannya juga tetap harus ditandai X.",
    "Arsiran penuh menandai karakteristik tertentu sesuai legenda, bukan kematian."]
},
{
  id: "T1-14", topic: 1, level: "kasus", kasus: "santoso",
  ctx: "Sari pernah menikah dengan Budi dan memiliki anak bernama Eka, lalu bercerai. Setelah itu Sari menikah lagi dengan Rudi dan memiliki anak bernama Fani.",
  q: "Penggambaran yang BENAR untuk cabang keluarga Sari adalah…",
  options: [
    "Budi tidak perlu digambar karena sudah bercerai",
    "Eka dan Fani diturunkan dari satu garis pernikahan yang sama",
    "Garis Sari–Budi diberi dua garis miring (//) dan Eka turun dari garis itu; garis Sari–Rudi utuh dan Fani turun dari garis Sari–Rudi",
    "Garis Sari–Budi diberi satu garis miring, dan Fani turun dari garis Sari–Budi"
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
  id: "T1-15", topic: 1, level: "kasus", kasus: "santoso",
  ctx: "Doni (anak pertama Andi & Maya) menikah dengan Lina dan memiliki seorang anak bernama Gio yang masih kecil. Lina tidak memiliki hubungan darah dengan keluarga Santoso.",
  q: "Pernyataan yang benar tentang cara menggambarkan cabang keluarga Doni adalah…",
  options: [
    "Gio digambar sejajar dengan Doni karena masih satu rumah tangga",
    "Lina tidak perlu digambar karena bukan keturunan darah keluarga Santoso",
    "Gio diturunkan langsung dari garis pernikahan Andi–Maya",
    "Doni dihubungkan garis pernikahan dengan Lina, dan Gio digambar satu tingkat di bawahnya (generasi ke-4) dari garis Doni–Lina"
  ],
  answer: 3,
  explain: "Pasangan yang menikah masuk ke genogram (Lina sebagai menantu), lalu anak mereka diturunkan dari garis pernikahan tersebut satu tingkat lebih rendah. Karena itu Gio berada di generasi keempat.",
  why: [
    "Posisi vertikal menunjukkan generasi. Tinggal serumah ditandai garis putus-putus yang mengelilingi, bukan dengan menyejajarkan simbol.",
    "Menantu tetap digambar; pasangan sering memengaruhi dinamika keluarga dan pewarisan.",
    "Gio adalah anak Doni & Lina, bukan anak Andi & Maya.",
    null]
}
);
