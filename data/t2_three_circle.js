// Topik 2 — Three-Circle Model
window.QUESTIONS.push(
{
  id: "T2-01", topic: 2, level: "konsep",
  q: "Siapa yang mengembangkan Three-Circle Model bisnis keluarga?",
  options: [
    "Monica McGoldrick & Randy Gerson",
    "Renato Tagiuri & John Davis",
    "Kelin Gersick dkk.",
    "Michael Jensen & William Meckling"
  ],
  answer: 1,
  explain: "Three-Circle Model dikembangkan Renato Tagiuri dan John Davis di Harvard Business School (1982). Model ini menjadi kerangka paling populer untuk memahami sistem bisnis keluarga dan juga dibahas di slide kuliah Kepemimpinan.",
  why: [
    "McGoldrick & Gerson membakukan simbol genogram.",
    null,
    "Gersick dkk. mengembangkan model perkembangan tiga dimensi (developmental model) yang memperluas Three-Circle Model.",
    "Jensen & Meckling dikenal lewat teori agensi."]
},
{
  id: "T2-02", topic: 2, level: "konsep",
  q: "Tiga lingkaran dalam Three-Circle Model adalah…",
  options: [
    "Family, Management, Board",
    "Founder, Successor, Employee",
    "Family, Ownership, Business",
    "Ownership, Governance, Strategy"
  ],
  answer: 2,
  explain: "Tiga subsistem yang saling beririsan adalah Family (keluarga), Ownership (kepemilikan/pemegang saham), dan Business (bisnis/manajemen dan karyawan). Setiap orang di sistem bisnis keluarga bisa dipetakan ke salah satu area dari ketiga lingkaran ini.",
  why: [
    "Board bukan lingkaran tersendiri; Management termasuk dalam lingkaran Business.",
    "Itu peran dalam suksesi, bukan lingkaran model ini.",
    null,
    "Governance dan Strategy bukan lingkaran dalam model Tagiuri & Davis."]
},
{
  id: "T2-03", topic: 2, level: "konsep",
  fig: "venn", figCap: "Three-Circle Model: Family, Ownership, Business",
  q: "Perhatikan diagram di atas. Berapa jumlah sektor (area) yang terbentuk dari ketiga lingkaran yang saling beririsan?",
  options: ["3 sektor", "6 sektor", "8 sektor", "7 sektor"],
  answer: 3,
  explain: "Tiga lingkaran yang saling beririsan membentuk 7 sektor: (1) Family saja, (2) Ownership saja, (3) Business saja, (4) Family+Ownership, (5) Ownership+Business, (6) Family+Business, (7) irisan ketiganya. Setiap orang hanya menempati SATU sektor.",
  why: [
    "Tiga adalah jumlah lingkarannya, bukan jumlah sektornya.",
    "Ada 3 area tunggal + 3 irisan dua lingkaran + 1 irisan tiga lingkaran = 7.",
    "Area di luar semua lingkaran tidak dihitung sebagai sektor model.",
    null]
},
{
  id: "T2-04", topic: 2, level: "konsep",
  fig: "venn:num", figCap: "Three-Circle Model dengan nomor sektor 1–7",
  q: "Seorang anggota keluarga memiliki saham tetapi TIDAK bekerja di perusahaan. Pada diagram, ia berada di sektor nomor…",
  options: [
    "Sektor 4 (Family + Ownership)",
    "Sektor 6 (Family + Business)",
    "Sektor 2 (Ownership saja)",
    "Sektor 7 (irisan ketiga lingkaran)"
  ],
  answer: 0,
  explain: "Ia anggota keluarga (Family) dan pemegang saham (Ownership), tetapi tidak bekerja di perusahaan (bukan Business), sehingga berada di sektor 4. Kelompok ini biasanya peduli pada dividen, nilai investasi, dan nama baik keluarga.",
  why: [null,
    "Sektor 6 adalah anggota keluarga yang bekerja tetapi tidak punya saham.",
    "Sektor 2 adalah pemegang saham dari luar keluarga yang tidak bekerja di perusahaan.",
    "Sektor 7 hanya untuk anggota keluarga yang memiliki saham DAN bekerja di perusahaan."]
},
{
  id: "T2-05", topic: 2, level: "konsep",
  fig: "venn:num", figCap: "Three-Circle Model dengan nomor sektor 1–7",
  q: "Seorang karyawan yang BUKAN anggota keluarga dan TIDAK memiliki saham berada di sektor nomor…",
  options: [
    "Sektor 6 (Family + Business)",
    "Sektor 3 (Business saja)",
    "Sektor 5 (Ownership + Business)",
    "Tidak masuk diagram karena bukan keluarga"
  ],
  answer: 1,
  explain: "Karyawan/manajer non-keluarga tanpa saham hanya berada di lingkaran Business (sektor 3). Mereka tetap bagian dari sistem bisnis keluarga, dan kepentingannya biasanya berupa karier, kompensasi yang adil, dan kejelasan peran.",
  why: [
    "Ia bukan anggota keluarga, jadi tidak masuk lingkaran Family.",
    null,
    "Ia tidak memiliki saham, jadi tidak masuk lingkaran Ownership.",
    "Karyawan non-keluarga tetap termasuk dalam model, yaitu di sektor 3."]
},
{
  id: "T2-06", topic: 2, level: "konsep",
  q: "Apa manfaat utama Three-Circle Model?",
  options: [
    "Menghitung pembagian dividen secara adil",
    "Menggantikan struktur organisasi perusahaan",
    "Membantu memahami bahwa tiap orang punya peran dan kepentingan berbeda sesuai posisinya, sehingga sumber konflik lebih mudah dipahami",
    "Menentukan siapa pewaris sah secara hukum"
  ],
  answer: 2,
  explain: "Kekuatan model ini terletak pada kesederhanaannya. Dengan memetakan posisi seseorang, kita bisa memahami sudut pandang, kepentingan, dan potensi konflik perannya. Misalnya, pemilik pasif menginginkan dividen, sedangkan keluarga yang bekerja di perusahaan menginginkan reinvestasi. Slide kuliah menyebut tumpang-tindih peran ini sebagai sumber keunggulan sekaligus ketegangan.",
  why: [
    "Model ini tidak berisi rumus keuangan.",
    "Model ini alat analisis peran, bukan bagan struktur jabatan.",
    null,
    "Status ahli waris ditentukan hukum dan wasiat, bukan model ini."]
},
{
  id: "T2-07", topic: 2, level: "aplikasi",
  q: "Konflik apa yang paling khas antara pemilik keluarga yang TIDAK bekerja di perusahaan (sektor 4) dan pemilik keluarga yang menjalankan perusahaan (sektor 7)?",
  options: [
    "Sektor 4 ingin dividen dibagikan, sedangkan sektor 7 ingin laba ditahan untuk reinvestasi/ekspansi",
    "Sektor 4 ingin naik jabatan, sektor 7 ingin turun jabatan",
    "Keduanya selalu memiliki kepentingan yang identik",
    "Sektor 4 ingin menjadi karyawan tetap"
  ],
  answer: 0,
  explain: "Pemilik pasif menikmati bisnis lewat dividen, sehingga cenderung ingin laba dibagikan. Pemilik yang mengelola melihat kebutuhan modal untuk tumbuh (dan sudah memperoleh gaji), sehingga cenderung ingin laba ditahan. Ini konflik klasik yang dijelaskan model tiga lingkaran.",
  why: [null,
    "Pemilik yang tidak bekerja di perusahaan tidak memiliki jabatan untuk naik atau turun.",
    "Justru perbedaan posisi membuat kepentingan mereka sering berbeda.",
    "Tidak ada indikasi itu; isu utamanya adalah return atas kepemilikan."]
},
{
  id: "T2-08", topic: 2, level: "aplikasi",
  fig: "venn:num", figCap: "Three-Circle Model dengan nomor sektor 1–7",
  q: "Seorang manajer profesional non-keluarga (semula di sektor 3) kemudian diberi saham 5%. Posisinya berpindah ke sektor nomor…",
  options: [
    "Sektor 6 (Family + Business)",
    "Tetap sektor 3, karena sahamnya kecil",
    "Sektor 7 (irisan ketiga lingkaran)",
    "Sektor 5 (Ownership + Business)"
  ],
  answer: 3,
  explain: "Kepemilikan saham, berapa pun besarnya, memasukkan seseorang ke lingkaran Ownership. Karena ia tetap bekerja dan bukan anggota keluarga, posisinya menjadi Ownership + Business (sektor 5).",
  why: [
    "Ia tidak menjadi anggota keluarga hanya karena memiliki saham.",
    "Besar kecilnya saham tidak menentukan; yang penting ia sudah menjadi pemilik.",
    "Sektor 7 mensyaratkan ia juga anggota keluarga.",
    null]
},
{
  id: "T2-09", topic: 2, level: "aplikasi",
  q: "Mengapa Tagiuri & Davis memisahkan lingkaran Ownership dari Business (dibanding model dua lingkaran Keluarga–Bisnis yang lebih awal)?",
  options: [
    "Karena hukum perseroan mewajibkan tiga lingkaran",
    "Karena kepemilikan dan manajemen adalah peran berbeda; banyak dilema muncul dari orang yang memiliki tapi tidak mengelola, atau mengelola tapi tidak memiliki",
    "Supaya model terlihat lebih rumit dan akademis",
    "Karena lingkaran keluarga sudah tidak relevan"
  ],
  answer: 1,
  explain: "Model dua lingkaran tidak bisa membedakan pemilik dari pengelola. Padahal seiring bertambahnya generasi, makin banyak anggota keluarga yang memiliki saham tanpa bekerja, dan sebaliknya. Memisahkan Ownership membuat dinamika ini terlihat jelas.",
  why: [
    "Ini kerangka konseptual, bukan kewajiban hukum.",
    null,
    "Alasannya analitis, yaitu membedakan peran pemilik dan pengelola.",
    "Lingkaran keluarga tetap menjadi inti model."]
},
{
  id: "T2-10", topic: 2, level: "konsep",
  q: "Gersick dkk. (1997) memperluas Three-Circle Model menjadi model perkembangan tiga dimensi (developmental model). Apa yang ditambahkan?",
  options: [
    "Lingkaran keempat bernama Governance",
    "Jumlah sektor menjadi sembilan",
    "Dimensi waktu/tahap perkembangan pada sumbu kepemilikan, keluarga, dan bisnis",
    "Mengganti lingkaran dengan piramida hierarki"
  ],
  answer: 2,
  explain: "Gersick dkk. (Generation to Generation) menambahkan dimensi waktu, yaitu setiap subsistem berkembang melalui tahap-tahap. Kepemilikan: controlling owner → sibling partnership → cousin consortium. Keluarga: young business family → entering the business → working together → passing the baton. Bisnis: start-up → expansion/formalization → maturity.",
  why: [
    "Tidak ada lingkaran keempat; yang ditambahkan adalah tahap perkembangan.",
    "Jumlah sektor tidak berubah; yang ditambahkan adalah dimensi waktunya.",
    null,
    "Model tetap memakai tiga subsistem, bukan hierarki piramida."]
},
{
  id: "T2-11", topic: 2, level: "konsep",
  q: "Menurut model perkembangan Gersick dkk., urutan tahap pada dimensi KEPEMILIKAN adalah…",
  options: [
    "Controlling Owner → Sibling Partnership → Cousin Consortium",
    "Sibling Partnership → Controlling Owner → Cousin Consortium",
    "Start-up → Expansion → Maturity",
    "Young Business Family → Entering the Business → Passing the Baton"
  ],
  answer: 0,
  explain: "Kepemilikan biasanya bermula dari satu pemilik pengendali (pendiri), lalu beralih ke kemitraan saudara kandung (generasi kedua), kemudian ke konsorsium sepupu (generasi ketiga dan seterusnya). Pada setiap tahap, jumlah pemilik makin banyak dan makin tersebar.",
  why: [null,
    "Urutannya salah; tahap awal adalah satu pemilik pengendali.",
    "Itu tahap pada dimensi BISNIS.",
    "Itu tahap pada dimensi KELUARGA."]
},
{
  id: "T2-12", topic: 2, level: "kasus", kasus: "santoso",
  ctx: "Ibu Rina memiliki 50% saham tetapi tidak lagi terlibat operasional harian. Maya (istri Andi) tidak memiliki saham dan tidak terlibat dalam pengelolaan toko.",
  fig: "venn:num", figCap: "Three-Circle Model dengan nomor sektor 1–7",
  q: "Pemetaan Ibu Rina dan Maya yang tepat pada diagram adalah…",
  options: [
    "Ibu Rina – sektor 7; Maya – sektor 6",
    "Ibu Rina – sektor 2 (Ownership saja); Maya – sektor 1 (Family saja)",
    "Ibu Rina – sektor 4; Maya – sektor 4",
    "Ibu Rina – sektor 4 (Family + Ownership); Maya – sektor 1 (Family saja)"
  ],
  answer: 3,
  explain: "Ibu Rina adalah keluarga dan pemilik, tetapi tidak bekerja di toko, sehingga berada di sektor 4 (Family + Ownership). Maya adalah anggota keluarga (menantu) tanpa saham dan tanpa peran di toko, sehingga berada di sektor 1 (Family saja).",
  why: [
    "Ibu Rina tidak bekerja di toko, dan Maya tidak terlibat dalam pengelolaan.",
    "Ibu Rina tetap anggota keluarga, jadi tidak mungkin berada di Ownership saja.",
    "Maya tidak memiliki saham, jadi tidak bisa berada di sektor 4.",
    null]
},
{
  id: "T2-13", topic: 2, level: "kasus", kasus: "santoso",
  ctx: "Andi memiliki 25% saham dan menjadi pengelola utama toko. Sari memiliki 25% saham dan membantu mengelola keuangan toko.",
  fig: "venn:num", figCap: "Three-Circle Model dengan nomor sektor 1–7",
  q: "Andi dan Sari berada di sektor nomor…",
  options: [
    "Sektor 4 (Family + Ownership)",
    "Sektor 7 (Family, Ownership, dan Business)",
    "Sektor 5 (Ownership + Business)",
    "Sektor 6 (Family + Business)"
  ],
  answer: 1,
  explain: "Keduanya anggota keluarga, pemegang saham, dan bekerja di toko, sehingga berada di sektor 7 (tengah). Posisi ini paling berpengaruh, tetapi juga paling rentan konflik peran karena mereka memikul tiga “topi” sekaligus: anggota keluarga, pemilik, dan pengelola.",
  why: [
    "Mereka juga bekerja di toko, jadi masuk lingkaran Business.",
    null,
    "Mereka anggota keluarga, jadi masuk lingkaran Family.",
    "Mereka memiliki saham, jadi masuk lingkaran Ownership."]
},
{
  id: "T2-14", topic: 2, level: "kasus", kasus: "santoso",
  ctx: "Doni bekerja sebagai manajer operasional dan Dina bekerja di bagian pemasaran. Keduanya cucu pendiri, tetapi tidak memiliki saham.",
  fig: "venn:num", figCap: "Three-Circle Model dengan nomor sektor 1–7",
  q: "Doni dan Dina berada di sektor nomor…",
  options: [
    "Sektor 3 (Business saja), karena tidak memiliki saham",
    "Sektor 1 (Family saja)",
    "Sektor 6 (Family + Business)",
    "Sektor 7, karena mereka cucu pendiri"
  ],
  answer: 2,
  explain: "Doni dan Dina adalah anggota keluarga yang bekerja di toko tetapi tidak memiliki saham, sehingga berada di sektor 6 (Family + Business). Kepentingan khas sektor ini adalah kejelasan karier, kompensasi, dan kepastian apakah kelak mereka akan memperoleh kepemilikan.",
  why: [
    "Mereka tetap anggota keluarga, jadi tidak hanya di Business.",
    "Mereka bekerja aktif di toko, jadi juga masuk lingkaran Business.",
    null,
    "Menjadi cucu pendiri tidak otomatis memberi saham; mereka tidak memiliki kepemilikan."]
},
{
  id: "T2-15", topic: 2, level: "kasus", kasus: "santoso",
  ctx: "Saat ini Doni adalah manajer operasional tanpa saham (sektor 6). Misalkan kelak Ibu Rina mewariskan sebagian sahamnya kepada Doni, dan Doni tetap bekerja sebagai manajer operasional.",
  fig: "venn:num", figCap: "Three-Circle Model dengan nomor sektor 1–7",
  q: "Setelah menerima saham, Doni akan berpindah ke sektor nomor…",
  options: [
    "Sektor 7 (Family, Ownership, dan Business)",
    "Sektor 4 (Family + Ownership)",
    "Sektor 5 (Ownership + Business)",
    "Tetap sektor 6 (Family + Business)"
  ],
  answer: 0,
  explain: "Dengan memperoleh saham, Doni masuk lingkaran Ownership. Ia tetap anggota keluarga dan tetap bekerja, sehingga pindah ke sektor 7. Ini menunjukkan bahwa posisi dalam model bersifat dinamis dan berubah seiring pewarisan.",
  why: [null,
    "Doni tetap bekerja sebagai manajer, jadi masih di lingkaran Business.",
    "Doni tetap anggota keluarga, jadi masih di lingkaran Family.",
    "Setelah menerima saham, ia sudah menjadi pemilik, sehingga posisinya berubah."]
}
);
