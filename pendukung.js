// Materi pendukung soal: gambar SVG (genogram, three-circle, simbol) dan teks kasus.
// Pemakaian di bank soal:
//   fig: "geno"            → genogram Keluarga Santoso lengkap
//   fig: "geno:bambang"    → genogram dengan simbol Bambang disembunyikan ("?")
//   fig: "venn" / "venn:num" → Three-Circle Model (tanpa / dengan nomor sektor 1–7)
//   fig: "pq"              → dua simbol dasar (P dan Q)
//   fig: "rel:<jenis>"     → garis hubungan (married, separated, divorced, cohab, conflict, close, cutoff)
//   optFigs: ["sym:<jenis>", ...] → ikon kecil di setiap pilihan jawaban (urutan sesuai options)
(function () {
  "use strict";

  function svg(w, h, body, label, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h +
      '" role="img" aria-label="' + (label || "") + '" xmlns="http://www.w3.org/2000/svg">' + body + "</svg>";
  }
  function line(x1, y1, x2, y2, cls) {
    return '<line class="' + (cls || "g-ln") + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
  }
  function text(x, y, s, cls) {
    return '<text class="' + cls + '" x="' + x + '" y="' + y + '">' + s + "</text>";
  }

  // Simbol satu orang. kind: m = laki-laki, f = perempuan, u = jenis kelamin tidak disebutkan.
  function person(kind, cx, cy, o) {
    o = o || {};
    var s = o.s || 40, h = s / 2, out = "";
    if (o.hidden) {
      return '<rect class="g-hole" x="' + (cx - h - 4) + '" y="' + (cy - h - 4) + '" width="' + (s + 8) + '" height="' + (s + 8) + '" rx="6"/>' +
        '<text class="g-qm" x="' + cx + '" y="' + (cy + 8) + '">?</text>';
    }
    var cls = "g-sym" + (o.work ? " g-work" : "") + (o.own ? " g-own" : "") + (o.shade ? " g-shade" : "");
    if (kind === "m") {
      out += '<rect class="' + cls + '" x="' + (cx - h) + '" y="' + (cy - h) + '" width="' + s + '" height="' + s + '" rx="2"/>';
      if (o.index) out += '<rect class="g-sym" x="' + (cx - h + 5) + '" y="' + (cy - h + 5) + '" width="' + (s - 10) + '" height="' + (s - 10) + '" rx="1"/>';
      if (o.dead) out += line(cx - h, cy - h, cx + h, cy + h, "g-x") + line(cx - h, cy + h, cx + h, cy - h, "g-x");
    } else if (kind === "f") {
      out += '<circle class="' + cls + '" cx="' + cx + '" cy="' + cy + '" r="' + h + '"/>';
      if (o.index) out += '<circle class="g-sym" cx="' + cx + '" cy="' + cy + '" r="' + (h - 5) + '"/>';
      var d = h * 0.7;
      if (o.dead) out += line(cx - d, cy - d, cx + d, cy + d, "g-x") + line(cx - d, cy + d, cx + d, cy - d, "g-x");
    } else {
      var k = h + 3;
      out += '<polygon class="' + cls + '" points="' + cx + "," + (cy - k) + " " + (cx + k) + "," + cy + " " + cx + "," + (cy + k) + " " + (cx - k) + "," + cy + '"/>' +
        '<text class="g-mut" x="' + cx + '" y="' + (cy + 5) + '">?</text>';
    }
    if (o.household) out += '<rect class="g-ln g-dash" x="' + (cx - h - 9) + '" y="' + (cy - h - 9) + '" width="' + (s + 18) + '" height="' + (s + 18) + '" rx="10"/>';
    return out;
  }

  // Tanda di tengah garis pernikahan
  function slashes(x, y, n) {
    var out = "";
    for (var i = 0; i < n; i++) { var dx = x + i * 9 - (n - 1) * 4.5; out += line(dx - 5, y + 10, dx + 5, y - 10, "g-x"); }
    return out;
  }

  /* ---------- Genogram Keluarga Santoso ---------- */
  function geno(hide) {
    var P = {
      bambang: { k: "m", x: 330, y: 45, name: "Bambang", sub: "(alm.)", dead: true },
      rina:    { k: "f", x: 450, y: 45, name: "Ibu Rina", sub: "50%", own: true },
      andi:    { k: "m", x: 160, y: 165, name: "Andi", sub: "25%", own: true, work: true },
      maya:    { k: "f", x: 270, y: 165, name: "Maya" },
      budi:    { k: "m", x: 440, y: 165, name: "Budi" },
      sari:    { k: "f", x: 560, y: 165, name: "Sari", sub: "25%", own: true, work: true },
      rudi:    { k: "m", x: 680, y: 165, name: "Rudi" },
      lina:    { k: "f", x: 50, y: 290, name: "Lina" },
      doni:    { k: "m", x: 160, y: 290, name: "Doni", work: true },
      dina:    { k: "f", x: 270, y: 290, name: "Dina", work: true },
      eka:     { k: "u", x: 505, y: 290, name: "Eka" },
      fani:    { k: "u", x: 620, y: 290, name: "Fani" },
      gio:     { k: "u", x: 105, y: 395, name: "Gio" }
    };
    var b = "";
    // G1 → G2
    b += line(350, 45, 430, 45) + line(390, 45, 390, 122) + line(160, 122, 560, 122) + line(160, 122, 160, 145) + line(560, 122, 560, 145);
    // Andi–Maya → Doni, Dina
    b += line(180, 165, 250, 165) + line(215, 165, 215, 245) + line(160, 245, 270, 245) + line(160, 245, 160, 270) + line(270, 245, 270, 270);
    // Budi–Sari (cerai) → Eka
    b += line(460, 165, 540, 165) + slashes(482, 165, 2) + line(505, 165, 505, 267);
    // Sari–Rudi → Fani
    b += line(580, 165, 660, 165) + line(620, 165, 620, 267);
    // Lina–Doni → Gio
    b += line(70, 290, 140, 290) + line(105, 290, 105, 372);
    Object.keys(P).forEach(function (key) {
      var p = P[key], hidden = hide === key;
      b += person(p.k, p.x, p.y, { dead: p.dead, own: p.own, work: p.work, hidden: hidden });
      var ny = p.y + (p.k === "u" ? 41 : 38);
      b += text(p.x, ny, p.name, "g-name");
      if (p.sub && !hidden) b += text(p.x, ny + 17, p.sub, "g-sub");
    });
    ["G1", "G2", "G3", "G4"].forEach(function (g, i) { b += text(735, [50, 170, 295, 400][i], g, "g-gen"); });
    // Legenda
    var L = "", y1 = 482, y2 = 512;
    L += line(10, 455, 760, 455, "g-sep");
    L += person("m", 28, y1, { s: 16 }) + text(42, y1 + 5, "Laki-laki", "g-leg");
    L += person("f", 138, y1, { s: 16 }) + text(152, y1 + 5, "Perempuan", "g-leg");
    L += '<polygon class="g-sym" points="262,' + (y1 - 10) + " 272," + y1 + " 262," + (y1 + 10) + " 252," + y1 + '"/>' + text(280, y1 + 5, "Jenis kelamin tidak disebutkan", "g-leg");
    L += person("m", 518, y1, { s: 16, dead: true }) + text(532, y1 + 5, "Meninggal dunia", "g-leg");
    L += line(14, y2, 58, y2) + slashes(36, y2, 2) + text(66, y2 + 5, "Cerai (dua garis miring)", "g-leg");
    L += person("m", 256, y2, { s: 16, own: true }) + text(272, y2 + 5, "Garis tebal = pemegang saham", "g-leg");
    L += person("m", 518, y2, { s: 16, work: true }) + text(532, y2 + 5, "Bekerja di bisnis keluarga", "g-leg");
    return svg(770, 528, b + L, "Genogram Keluarga Santoso", "wide");
  }

  /* ---------- Three-Circle Model ---------- */
  function venn(num) {
    var r = 112, b = "";
    b += '<circle class="g-vo" cx="250" cy="120" r="' + r + '"/>';
    b += '<circle class="g-vf" cx="185" cy="225" r="' + r + '"/>';
    b += '<circle class="g-vb" cx="315" cy="225" r="' + r + '"/>';
    b += text(250, 38, "Ownership", "g-vlab") + text(150, 308, "Family", "g-vlab") + text(350, 308, "Business", "g-vlab");
    if (num) {
      var S = { 1: [125, 255], 2: [250, 74], 3: [375, 255], 4: [190, 155], 5: [310, 155], 6: [250, 282], 7: [250, 197] };
      Object.keys(S).forEach(function (n) {
        var p = S[n];
        b += '<circle class="g-numbg" cx="' + p[0] + '" cy="' + p[1] + '" r="13"/>' + text(p[0], p[1] + 5, n, "g-num");
      });
    }
    return svg(500, 345, b, "Three-Circle Model");
  }

  /* ---------- Simbol & garis hubungan ---------- */
  function pq() {
    return svg(260, 110, person("m", 80, 45, { s: 46 }) + person("f", 180, 45, { s: 46 }) +
      text(80, 100, "P", "g-name") + text(180, 100, "Q", "g-name"), "Simbol P dan Q");
  }
  function sym(kind) {
    var map = {
      "male": ["m", {}], "female": ["f", {}], "unknown": ["u", {}],
      "male-dead": ["m", { dead: true }], "female-dead": ["f", { dead: true }],
      "male-index": ["m", { index: true }], "male-shaded": ["m", { shade: true }],
      "male-household": ["m", { household: true, s: 26 }]
    };
    var m = map[kind];
    if (!m) return "";
    var o = m[1]; if (!o.s) o.s = 30;
    return svg(64, 48, person(m[0], 32, 24, o), kind, "icon");
  }
  function rel(kind, big) {
    var w = big ? 240 : 120, x1 = big ? 36 : 18, x2 = w - x1, y = big ? 36 : 22, s = big ? 40 : 22;
    var a = x1 + s / 2, z = x2 - s / 2, mid = (a + z) / 2, b = "";
    b += person("m", x1, y, { s: s }) + person("f", x2, y, { s: s });
    if (kind === "married") b += line(a, y, z, y);
    else if (kind === "separated") b += line(a, y, z, y) + slashes(mid, y, 1);
    else if (kind === "divorced") b += line(a, y, z, y) + slashes(mid, y, 2);
    else if (kind === "cohab") b += line(a, y, z, y, "g-ln g-dash");
    else if (kind === "conflict") {
      var pts = [], n = big ? 10 : 6, step = (z - a) / n;
      for (var i = 0; i <= n; i++) pts.push((a + i * step).toFixed(1) + "," + (i === 0 || i === n ? y : (i % 2 ? y - 7 : y + 7)));
      b += '<polyline class="g-ln" points="' + pts.join(" ") + '"/>';
    } else if (kind === "close") b += line(a, y - 5, z, y - 5) + line(a, y, z, y) + line(a, y + 5, z, y + 5);
    else if (kind === "cutoff") b += line(a, y, mid - 8, y) + line(mid + 8, y, z, y) + line(mid - 8, y - 7, mid - 8, y + 7) + line(mid + 8, y - 7, mid + 8, y + 7);
    return svg(w, big ? 72 : 44, b, "Garis hubungan: " + kind, big ? "" : "icon wide-icon");
  }

  window.FIG = function (spec) {
    if (!spec) return "";
    var p = String(spec).split(":");
    switch (p[0]) {
      case "geno": return geno(p[1]);
      case "venn": return venn(p[1] === "num");
      case "pq": return pq();
      case "sym": return sym(p[1]);
      case "rel": return rel(p[1], p[2] === "big");
      default: return "";
    }
  };

  window.KASUS = {
    santoso: {
      title: "Kasus Keluarga Santoso (Tugas 1)",
      text:
        "Rina Department Store (toko fashion & perlengkapan rumah tangga) didirikan Pak Bambang Santoso bersama istrinya, Ibu Rina. Pak Bambang sudah meninggal dunia, sehingga Ibu Rina kini anggota tertua keluarga.\n" +
        "Kepemilikan: Ibu Rina 50%, Andi 25%, Sari 25%. Ibu Rina tidak lagi terlibat operasional harian.\n" +
        "• Andi (anak Bambang–Rina) menikah dengan Maya; anak mereka Doni (anak pertama) dan Dina. Andi = pengelola utama toko (pembelian, karyawan, penjualan). Maya tidak terlibat di toko.\n" +
        "• Doni menikah dengan Lina dan punya anak Gio (masih kecil). Doni = manajer operasional; Dina (belum menikah) bekerja di bagian pemasaran. Doni dan Dina tidak memiliki saham.\n" +
        "• Sari (anak Bambang–Rina) menikah dengan Budi dan punya anak Eka, lalu bercerai. Sari menikah lagi dengan Rudi dan punya anak Fani. Sari membantu mengelola keuangan toko. Budi dan Rudi tidak pernah terlibat di bisnis. Eka masih kuliah, Fani masih sekolah."
    }
  };
})();
