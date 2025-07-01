// Set Data
const bbri = 425838;
const bbca = 976463;
const asset = {
  saham: bbri + bbca,
  bpr: 8000000,
  emas: 7772300,
  komunal: 16500000,
};
const liquid = asset.bpr + asset.komunal;
const total = asset.saham + asset.bpr + asset.emas + asset.komunal;
const nonLiquid = total - liquid;
const target = {
  darat: "Done",
  asset1: Math.floor((total / 100000000) * 100),
  asset2: Math.floor((total / 500000000) * 100),
  asset3: Math.floor((total / 1000000000) * 100),
  asset4: Math.floor((total / 2000000000) * 100),
  asset5: Math.floor((total / 3000000000) * 100),
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

// Fungsi untuk memperbarui nilai di dalam HTML
function updateAssetDisplay() {
  console.log("Updating values...");
  document.getElementById("bpr").textContent =
    asset.bpr.toLocaleString("id-ID");
  console.log("Updating komunal bpr...");
  document.getElementById("komunal").textContent =
    asset.komunal.toLocaleString("id-ID");
  console.log("Updating bpr...");
  document.getElementById("bbri").textContent = bbri.toLocaleString("id-ID");
  console.log("Updating bbri...");
  document.getElementById("bbca").textContent = bbca.toLocaleString("id-ID");
  console.log("Updating bbca...");
  document.getElementById("liquid").textContent =
    liquid.toLocaleString("id-ID");
  console.log("Updating liquid...");
  document.getElementById("nonLiquid").textContent =
    nonLiquid.toLocaleString("id-ID");
  console.log("Updating non liquid...");
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
  console.log("Updating total...");
  document.getElementById("targetDarat").textContent =
    target.darat.toLocaleString("id-ID");
  console.log("Updating target dana darurat...");
  document.getElementById("targetAsset1").textContent =
    target.asset1.toLocaleString("id-ID");
  console.log("Updating target 100jt...");
  document.getElementById("targetAsset2").textContent =
    target.asset2.toLocaleString("id-ID");
  console.log("Updating target 500jt...");
  document.getElementById("targetAsset3").textContent =
    target.asset3.toLocaleString("id-ID");
  console.log("Updating target 1M...");
  document.getElementById("targetAsset4").textContent =
    target.asset4.toLocaleString("id-ID");
  console.log("Updating target 2M...");
  document.getElementById("targetAsset5").textContent =
    target.asset5.toLocaleString("id-ID");
  console.log("Updating target 3M...");
}

// ----------------------Wheel Chart-----------------------
const xValues = [
  "Deposito (Juta)",
  "Dana Darurat (Juta)",
  "Emas (Juta)",
  "Saham (Juta)",
];
const yValues = [
  Math.floor(asset.komunal / 1000000),
  Math.floor(asset.bpr / 1000000),
  Math.floor(asset.emas / 1000000),
  Math.floor(asset.saham / 1000000),
];
const barColors = ["#2F5249", "#437057", "#97B067", "#FFBF78"];
new Chart("myChart", {
  type: "bar",
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
    legend: { display: false },
    title: {
      display: true,
      text: `My asset in ${months[month]} ${year}`,
    },
  },
});
// ----------------------Wheel Chart-----------------------

// Panggil fungsi untuk memperbarui tampilan
updateAssetDisplay();
