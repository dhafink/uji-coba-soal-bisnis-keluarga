// Validasi bank soal: node cek_soal.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = path.join(__dirname, "data");
const ctx = { window: { QUESTIONS: [] } };
vm.createContext(ctx);
for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort()) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
}
const Q = ctx.window.QUESTIONS;
const errors = [];
const ids = new Set();
const perTopic = {};
const answerPos = [0, 0, 0, 0];
const levels = {};

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
  perTopic[q.topic] = (perTopic[q.topic] || 0) + 1;
  answerPos[q.answer]++;
  levels[q.level] = (levels[q.level] || 0) + 1;
}

for (let t = 1; t <= 7; t++) if ((perTopic[t] || 0) < 15) errors.push(`Topik ${t}: hanya ${perTopic[t] || 0} soal (target 15)`);

console.log(`Total soal     : ${Q.length}`);
console.log(`Per topik      : ${Object.entries(perTopic).map(([t, n]) => `T${t}=${n}`).join("  ")}`);
console.log(`Per level      : ${Object.entries(levels).map(([l, n]) => `${l}=${n}`).join("  ")}`);
console.log(`Posisi kunci   : A=${answerPos[0]} B=${answerPos[1]} C=${answerPos[2]} D=${answerPos[3]} (diacak lagi saat tampil)`);
if (errors.length) { console.log(`\n${errors.length} masalah:`); errors.forEach(e => console.log(" - " + e)); process.exit(1); }
console.log("\nOK — semua soal valid.");
