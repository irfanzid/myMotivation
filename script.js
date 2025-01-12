// Set Data
const bbri = 425838;
const bbca = 976463;
const asset = {
  saham: bbri + bbca,
  crypto: 1764710,
  daRat: 7000000,
  emas: 6015000,
};

const d = new Date();
const year = d.getFullYear();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = d.getMonth();

const total = asset.saham + asset.crypto + asset.daRat + asset.emas;

// Fungsi untuk memperbarui nilai di dalam HTML
function updateAssetDisplay() {
  console.log("Updating values...");
  document.getElementById("daRat").textContent =
    asset.daRat.toLocaleString("id-ID");
  console.log("Updating darat...");
  document.getElementById("bbri").textContent = bbri.toLocaleString("id-ID");
  console.log("Updating bbri...");
  document.getElementById("bbca").textContent = bbca.toLocaleString("id-ID");
  console.log("Updating bbca...");
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
  console.log("Updating total...");
}

// ----------------------Wheel Chart-----------------------
const xValues = ["Saham", "Dana Darurat", "Emas", "Crypto"];
const yValues = [asset.saham, asset.daRat, asset.emas, asset.crypto];
const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: `My asset in ${months[month]} ${year}`,
    },
  },
});
// ----------------------Wheel Chart-----------------------

// Panggil fungsi untuk memperbarui tampilan
updateAssetDisplay();
