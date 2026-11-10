/* W/L dotyczą bieżącego streamu; WR oblicza się automatycznie. */
const stats = { rank: "PLATINUM 2", rr: 76, wins: 1, losses: 0, kd: "1,29" };
const total = stats.wins + stats.losses;
const winRate = total ? Math.round(stats.wins / total * 100) : 0;
document.getElementById("rank").textContent = stats.rank;
document.getElementById("rr").textContent = stats.rr;
document.getElementById("wins").textContent = stats.wins;
document.getElementById("losses").textContent = stats.losses;
document.getElementById("wr").textContent = winRate + "%";
document.getElementById("kd").textContent = stats.kd;
