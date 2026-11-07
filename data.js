// Podaci preuzeti sa https://semafor.hns.family/klubovi/592/nk-vrapce/ (stanje: 07.11.2026.)
// Statistika igrača = sezona 2026/27 (liga + kup).
// Pozicija nije navedena na semaforu: vratari su označeni, ostali su "Igrač".
window.VRAPCE = (function () {
  // [hnsId, slug, ime, vratar, datum rođenja, mjesto rođenja, nast., start, zamj., golovi, žuti, crveni, minute|null]
  const rows = [
    [399151, "mario-crncevic", "Mario Crnčević", 1, "2009-11-12", "Zagreb", 8, 7, 1, 0, 1, 0, null],
    [169394, "luka-ivan-lukic", "Luka Ivan Lukić", 1, "2001-09-13", "Zagreb", 10, 10, 0, 0, 0, 0, 900],
    [331727, "noa-petrovic", "Noa Petrović", 1, "2007-06-18", "Zagreb", 3, 3, 0, 0, 0, 0, 270],
    [187623, "vilim-blagoev", "Vilim Blagoev", 0, "1998-11-30", "Zagreb", 12, 8, 4, 6, 4, 0, null],
    [176275, "gabriel-budimir", "Gabriel Budimir", 0, "2001-05-14", "Visp", 10, 10, 0, 0, 3, 1, 899],
    [233411, "adon-butkovic", "Adon Butković", 0, "2006-05-30", "Zagreb", 11, 11, 0, 0, 2, 1, 982],
    [107007, "matej-cosic", "Matej Ćosić", 0, "1996-08-19", "Zagreb", 12, 7, 5, 0, 3, 0, null],
    [438683, "sime-duvnjak", "Šime Duvnjak", 0, "2007-04-03", "Split", 12, 10, 2, 0, 3, 0, null],
    [397136, "ivan-gagulic", "Ivan Gagulić", 0, "2007-05-30", "Zagreb", 10, 8, 2, 2, 2, 0, 779],
    [197858, "mateo-jurisic", "Mateo Jurišić", 0, "2003-06-14", "Zagreb", 10, 8, 2, 6, 5, 0, 700],
    [393419, "filip-katavic", "Filip Katavić", 0, "2008-03-31", "Zagreb", 19, 13, 6, 1, 5, 0, null],
    [18450, "matej-kelava", "Matej Kelava", 0, "1995-12-31", "Zagreb", 11, 11, 0, 1, 2, 0, 789],
    [164323, "kristijan-kopljar", "Kristijan Kopljar", 0, "2001-07-07", "Zagreb", 5, 3, 2, 1, 0, 0, null],
    [1196737, "benedikt-kostan", "Benedikt Koštan", 0, "2006-06-03", "Wiesbaden", 2, 2, 0, 0, 0, 0, null],
    [210819, "luka-maric", "Luka Marić", 0, "2004-07-19", "Zagreb", 8, 6, 2, 0, 0, 0, null],
    [165737, "victor-maric", "Victor Marić", 0, "2001-04-17", "Zagreb", 10, 8, 2, 0, 2, 0, 639],
    [378065, "mario-matic", "Mario Matić", 0, "2006-06-06", "Zagreb", 11, 7, 4, 0, 1, 0, null],
    [18722, "kresimir-matovina", "Krešimir Matovina", 0, "1992-06-29", "Zagreb", 11, 7, 4, 1, 3, 0, 710],
    [218973, "luka-mrvicin", "Luka Mrvičin", 0, "2004-09-12", "Zagreb", 12, 6, 6, 2, 2, 0, null],
    [1190783, "michel-njoh", "Michel Njoh", 0, "2003-06-16", "Douala", 6, 1, 5, 0, 0, 1, 197],
    [331545, "stjepan-opacak", "Stjepan Opačak", 0, "2006-07-26", "Zagreb", 2, 1, 1, 0, 0, 0, 58],
    [195994, "ivan-padjen", "Ivan Pađen", 0, "2002-10-25", "Zagreb", 6, 3, 3, 0, 1, 0, null],
    [1176195, "oleksii-popov", "Oleksii Popov", 0, "2007-03-02", "Krasyliv", 6, 3, 3, 1, 1, 0, null],
    [331547, "luka-rubinic", "Luka Rubinić", 0, "2007-10-29", "Zagreb", 3, 1, 2, 0, 0, 0, null],
    [170377, "andrej-saronja", "Andrej Šaronja", 0, "2001-04-19", "Zagreb", 11, 11, 0, 9, 1, 0, 984],
    [376781, "max-sereg", "Max Šereg", 0, "2007-12-16", "Zagreb", 6, 3, 3, 1, 2, 0, null],
    [332811, "david-terlevic", "David Terlević", 0, "2007-08-18", "Pula", 2, 1, 1, 0, 0, 0, null],
    [75226, "marin-tomsic", "Marin Tomšić", 0, "1993-10-17", "Sisak", 12, 11, 1, 3, 4, 0, null],
    [228715, "ivor-zakic", "Ivor Žakić", 0, "2005-11-28", "Zagreb", 1, 0, 1, 0, 0, 0, null]
  ];

  const players = rows.map(r => ({
    id: r[1], hnsId: r[0], name: r[2], gk: !!r[3], dob: r[4], born: r[5],
    apps: r[6], starts: r[7], subs: r[8], goals: r[9], yellow: r[10], red: r[11], minutes: r[12],
    position: r[3] ? "Vratar" : "Igrač",
    category: "seniori"
  }));

  const categories = [
    { id: "seniori", name: "Seniori" },
    { id: "veterani", name: "Veterani" },
    { id: "juniori", name: "Juniori (U-19)" },
    { id: "kadeti", name: "Kadeti (U-17)" },
    { id: "stariji-pioniri", name: "Stariji pioniri (U-15)" },
    { id: "mladji-pioniri", name: "Mlađi pioniri (U-13)" },
    { id: "pocetnici", name: "Početnici (U-11)" },
    { id: "prednatjecatelji", name: "Prednatjecatelji i mlađi (U-9)" }
  ];

  // Treća NL Centar 26/27 – [klub, odigrano, P, N, I, GD, GP, bodovi]
  const table = [
    ["NK Samobor", 11, 7, 2, 2, 24, 11, 23],
    ["NK Vrapče", 11, 6, 3, 2, 23, 12, 21],
    ["GNK Tigar Sveta Nedelja", 11, 6, 2, 3, 25, 15, 20],
    ["NK Kurilovec", 11, 6, 2, 3, 18, 11, 20],
    ["NK Zagreb City", 11, 6, 1, 4, 18, 18, 19],
    ["NK HAŠK 1903", 11, 5, 3, 3, 21, 16, 18],
    ["NK Trešnjevka", 11, 5, 3, 3, 16, 12, 18],
    ["NK Gaj Mače", 12, 5, 2, 5, 19, 18, 17],
    ["NK Ponikve", 11, 5, 1, 5, 17, 14, 16],
    ["NK Bistra", 11, 5, 1, 5, 13, 15, 16],
    ["NK Maksimir", 11, 4, 3, 4, 17, 14, 15],
    ["NK Prečko", 11, 3, 5, 3, 17, 20, 14],
    ["ŠNM NK Naftaš Ivanić", 11, 3, 2, 6, 11, 18, 11],
    ["NK Dinamo Odranski Obrež", 11, 3, 1, 7, 18, 27, 10],
    ["NK Zagorec (Kr)", 12, 3, 1, 8, 9, 20, 10],
    ["GSNK Mladost Petrinja", 11, 0, 2, 9, 5, 30, 2]
  ];

  // Nadolazeće utakmice (domaće igra Vrapče na Stadionu Vrapče; za gostovanja je domaćin naveden po klubu)
  const HOME = "Stadion Vrapče, Aleja Bologne 2, Zagreb";
  const fixtures = [
    { date: "07.11.2026.", time: "14:00", home: "Vrapče", away: "Prečko", venue: HOME },
    { date: "15.11.2026.", time: "11:30", home: "Gaj Mače", away: "Vrapče", venue: "Gostovanje – igralište domaćina (NK Gaj Mače)" },
    { date: "21.11.2026.", time: "13:30", home: "Vrapče", away: "Kurilovec", venue: HOME },
    { date: "28.11.2026.", time: "13:30", home: "Trešnjevka", away: "Vrapče", venue: "Gostovanje – igralište domaćina (NK Trešnjevka)" }
  ];

  // Cijeli raspored (1.–15. kolo) – [kolo, datum, vrijeme, domaćin, gost, rezultat|null]
  const schedule = [
    [1, "29.08.2026.", "17:30", "Vrapče", "Dinamo Odranski Obrež", "3:0"],
    [2, "04.09.2026.", "19:00", "Zagorec (Kr)", "Vrapče", "2:4"],
    [3, "12.09.2026.", "17:00", "Vrapče", "Maksimir", "1:1"],
    [4, "19.09.2026.", "17:00", "Vrapče", "Zagreb City", "2:2"],
    [5, "23.09.2026.", "16:30", "Mladost Petrinja", "Vrapče", "1:2"],
    [6, "26.09.2026.", "16:30", "Vrapče", "HAŠK 1903", "3:1"],
    [7, "04.10.2026.", "16:00", "Bistra", "Vrapče", "0:4"],
    [8, "10.10.2026.", "16:00", "Vrapče", "Samobor", "2:0"],
    [9, "17.10.2026.", "15:30", "Tigar Sveta Nedelja", "Vrapče", "3:1"],
    [10, "24.10.2026.", "15:30", "Vrapče", "Naftaš Ivanić", "1:1"],
    [11, "31.10.2026.", "14:30", "Ponikve", "Vrapče", "1:0"],
    [12, "07.11.2026.", "14:00", "Vrapče", "Prečko", null],
    [13, "15.11.2026.", "11:30", "Gaj Mače", "Vrapče", null],
    [14, "21.11.2026.", "13:30", "Vrapče", "Kurilovec", null],
    [15, "28.11.2026.", "13:30", "Trešnjevka", "Vrapče", null]
  ].map(r => {
    const home = r[3] === "Vrapče", score = r[5];
    let cls = "";
    if (score) {
      const [h, a] = score.split(":").map(Number), us = home ? h : a, them = home ? a : h;
      cls = us > them ? "w" : us < them ? "l" : "d";
    }
    return {
      round: r[0], date: r[1], time: r[2], home: r[3], away: r[4], score, cls, played: !!score,
      venue: home ? HOME : `Gostovanje – igralište domaćina (NK ${r[3]})`
    };
  });

  // Odigrane utakmice (najnovije prvo); cls: w = pobjeda, d = neriješeno, l = poraz
  const results = [
    ["31.10.2026.", "Ponikve", "Vrapče", "1:0", "l"],
    ["24.10.2026.", "Vrapče", "Naftaš Ivanić", "1:1", "d"],
    ["17.10.2026.", "Tigar Sveta Nedelja", "Vrapče", "3:1", "l"],
    ["10.10.2026.", "Vrapče", "Samobor", "2:0", "w"],
    ["04.10.2026.", "Bistra", "Vrapče", "0:4", "w"],
    ["26.09.2026.", "Vrapče", "HAŠK 1903", "3:1", "w"],
    ["23.09.2026.", "Mladost Petrinja", "Vrapče", "1:2", "w"],
    ["19.09.2026.", "Vrapče", "Zagreb City", "2:2", "d"],
    ["12.09.2026.", "Vrapče", "Maksimir", "1:1", "d"],
    ["04.09.2026.", "Zagorec (Kr)", "Vrapče", "2:4", "w"],
    ["29.08.2026.", "Vrapče", "Dinamo Odranski Obrež", "3:0", "w"]
  ].map(r => ({ date: r[0], home: r[1], away: r[2], score: r[3], cls: r[4] }));

  // Fotografije igrača: stavi sliku u "Slike klub" pod točnim imenom igrača (npr. "Mario Crnčević.png").
  // Podržano: png, jpg, jpeg, webp. Nova slika se prepozna automatski.
  const photoFiles = import.meta.glob("./Slike klub/*.{png,jpg,jpeg,webp}", { eager: true, query: "?url", import: "default" });
  const norm = s => s.normalize("NFC").toLowerCase().trim();
  const photoByName = {};
  Object.keys(photoFiles).forEach(path => {
    const base = decodeURIComponent(path.split("/").pop()).replace(/\.[^.]+$/, "");
    photoByName[norm(base)] = photoFiles[path];
  });
  // Ako se naziv datoteke razlikuje od imena igrača (npr. tipfeler), upiši ga ovdje.
  const photoAlias = { "luka mrvičin": "luka mrvčin" };
  function photoFor(p) {
    const key = norm(p.name);
    return photoByName[key] || photoByName[photoAlias[key]] || null;
  }

  function age(dob) {
    const d = new Date(dob), n = new Date();
    let a = n.getFullYear() - d.getFullYear();
    if (n < new Date(n.getFullYear(), d.getMonth(), d.getDate())) a--;
    return a;
  }
  function fmtDate(dob) {
    const [y, m, d] = dob.split("-");
    return `${d}.${m}.${y}.`;
  }
  return { players, categories, table, fixtures, schedule, results, age, fmtDate, photoFor };
})();
