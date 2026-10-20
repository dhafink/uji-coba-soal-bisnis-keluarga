// Validasi bank soal: node cek_soal.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: { QUESTIONS: [] } };
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: path.basename(f) });
run(path.join(__dirname, "pendukung.js"));
const dir = path.join(__dirname, "data");
for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort()) run(path.join(dir, f));

const { QUESTIONS: Q, FIG, KASUS } = ctx.window;
const errors = [];
const ids = new Set();
const perTopic = {}, levels = {};
const answerPos = [0, 0, 0, 0];
let withFig = 0, withCtx = 0, fromSlide = 0;

for (const q of Q) {
  const tag = q.id || "(tanpa id)";
  if (ids.has(q.id)) errors.push(`${tag}: ID duplikat`);
  ids.add(q.id);
  if (!/^T[1-7]-\d{2}$/.test(q.id)) errors.push(`${tag}: format ID salah`);
  if (+q.id.slice(1, 2) !== q.topic) errors.push(`${tag}: topic tidak cocok dengan ID`);
  if (!["konsep", "aplikasi", "kasus"].includes(q.level)) errors.push(`${tag}: level tidak dikenal (${q.level})`);
  if (!q.q || !q.q.trim()) errors.push(`${tag}: teks soal kosong`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${tag}: harus 4 opsi`);
  else if (new Set(q.options).size !== 4) errors.push(`${tag}: ada opsi kembar`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`${tag}: answer tidak valid`);
  if (!q.explain || q.explain.length < 40) errors.push(`${tag}: pembahasan terlalu pendek/kosong`);
  if (!Array.isArray(q.why) || q.why.length !== 4) errors.push(`${tag}: why harus 4 elemen`);
  else q.why.forEach((w, i) => {
    if (i === q.answer && w) errors.push(`${tag}: why[${i}] harus null (jawaban benar)`);
    if (i !== q.answer && !w) errors.push(`${tag}: why[${i}] kosong`);
  });
  // gambar & kasus
  if (q.fig) { withFig++; if (!FIG(q.fig)) errors.push(`${tag}: fig "${q.fig}" tidak dikenal`); }
  if (q.optFigs) {
    if (q.optFigs.length !== 4) errors.push(`${tag}: optFigs harus 4 elemen`);
    q.optFigs.forEach((f, i) => { if (f && !FIG(f)) errors.push(`${tag}: optFigs[${i}] "${f}" tidak dikenal`); });
  }
  if (q.kasus && !KASUS[q.kasus]) errors.push(`${tag}: kasus "${q.kasus}" tidak dikenal`);
  if (q.level === "kasus" && !q.ctx && !q.kasus) errors.push(`${tag}: soal kasus tanpa konteks (ctx/kasus)`);
  if (q.ctx || q.kasus) withCtx++;
  if (q.src === "slide") fromSlide++;
  if (/^Kasus Santoso:/.test(q.q)) errors.push(`${tag}: konteks kasus masih di teks soal; pindahkan ke ctx`);
  perTopic[q.topic] = (perTopic[q.topic] || 0) + 1;
  answerPos[q.answer]++;
  levels[q.level] = (levels[q.level] || 0) + 1;
}

for (let t = 1; t <= 7; t++) if ((perTopic[t] || 0) < 15) errors.push(`Topik ${t}: hanya ${perTopic[t] || 0} soal (target 15)`);

console.log(`Total soal     : ${Q.length}`);
console.log(`Per topik      : ${Object.entries(perTopic).map(([t, n]) => `T${t}=${n}`).join("  ")}`);
console.log(`Per level      : ${Object.entries(levels).map(([l, n]) => `${l}=${n}`).join("  ")}`);
console.log(`Bergambar      : ${withFig} soal · berkonteks kasus: ${withCtx} · dari slide dosen: ${fromSlide}`);
console.log(`Posisi kunci   : A=${answerPos[0]} B=${answerPos[1]} C=${answerPos[2]} D=${answerPos[3]} (diacak lagi saat tampil)`);
if (errors.length) { console.log(`\n${errors.length} masalah:`); errors.forEach(e => console.log(" - " + e)); process.exit(1); }
console.log("\nOK — semua soal valid.");
