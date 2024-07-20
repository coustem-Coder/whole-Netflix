let movieList = document.querySelector(".movielist");
let yt = [
  "https://youtu.be/6Pf6RUmq7S0?si=UAOdh5xwRL-FJvAh",
  "https://youtu.be/A_HQdwRDRrw?si=e_SOcrn-4C3Lj8va",
  "https://youtu.be/8FkLRUJj-o0?si=6yQz3PQUAL7TRz_m",
  "https://youtu.be/prWBrMJOg2k?si=rmGt4FUPGkyo2JrI",
  "https://youtu.be/JfVOs4VSpmA?si=ywHpn6nhV8V-gpeu",
  "https://youtu.be/MWOlnZSnXJo?si=x5Kq5mMYSos3sTYW",
  "https://youtu.be/Y6ZKXqM7HNQ?si=PxbtB0M_DMRTMs2R",
];
let imgLink = [
  "https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUxSP5a7lYw5yp5wAJdN63WVNHatpkzVj1Slo1HnAcaR27tHz5RjP268t-oHpz08qb_Bh4fTcPtp7wlZpGKlb_I5QI05QWC_c9FiIjjf7t4pYYGOKVOG0XTr6oZeZAcXwZOP-nhWPv5Ot38lUA6gNNeOJXoM2_atHyI.jpg?r=87a",

  "https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdriWOxNHRhi9gJaSh9IPe9qyLLQJz0vLYz0hKI-jhS0F9ToMR-Y3h8ihoSdWUET0u_zy-cD5-Efq35p7qaVr1rvTi1Z6z_NUaE6655wOtUaNcRNWDQYvPENvzYQNP5pJ3RdzRwzwxTdFpAGnsEGwz4wozYVXFQYTWc.jpg?r=f75",

  "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeYOwt43Qbc_MdUj7_ijb7rWI4t9INWI8Gzlh36Bgd3jlQiNWT3lt2cxKmXfysTMgRfHSbjLbt62U0s9I_W8Lbu-JFZXuG6N0dE.jpg?r=434 ",

  "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWXTD1tC5w3s7T1p-A4Q_1RcZybPr_TQ9ZrGztN7ad1uoFLG-TrtG2EIU8Qq5-sTcDvF7ZCGMOMnJ2Yszy-Zwmghg8p3PVngcxo.jpg?r=860",

  "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfqe9kKVd9FNasX73KPSq5kM_0qBYnS2adRNHE3wk05DI_a1Lmlq1PuxFcozaTk1a9WwBfUHlbeq9g7UukGxS0SOnAHlblXfslk.jpg?r=8d0",

  "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABetoGk0CLIkPxKr6MMuFswl25hF_gsw1TIvJakiPx32KBAPxk4wVqHDMPX2vPjBXdHr45GtWlm7ARQUlBfkMhQZ6v1akZbdncW8.jpg?r=cfe",

  "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeuxairVzLlMC2hvzQ00VUkzHfpWpewSc8729B_xvkRUsGV4rBVlc718ugnKnk7zbbyADvCIztxD7fTcnJyhYfroAMZny1aGTXA.jpg?r=62d",
];
let movieName = [
  "Artical 370 ",
  "Shaitaan",
  "Animal",
  "The boss baby",
  "Spider man no way home",
  "Jawan",
  "OMG 2",
];
let str = "";
for (let i = 0; i < 7; i++) {
  str += `<div class="movieNL">
<div class="movieimg"> <a href="${yt[i]}" target="_blank"><img src="${imgLink[i]}"> </a> </div>
<div class="movieName">${movieName[i]}</div> </div>`;
}
movieList.innerHTML = str;
