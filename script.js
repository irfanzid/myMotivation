// Set Data
const bbri = 4147000;
const bbca = 4025000;
const bmri = 4657500;
const icbp = 3370000;
const tldn = 1380000;
const asset = {
  saham: bbri + bbca + bmri + icbp + tldn,
  RDN_wallet: 1012437 + 340510,
  bpr: 8000000,
  emas: 9559000 + 6248190,
  komunal: 8600000,
  rdpu: 5144075,
};
const liquid = asset.bpr + asset.komunal + asset.RDN_wallet + asset.rdpu;
const total =
  asset.saham +
  asset.bpr +
  asset.emas +
  asset.komunal +
  asset.RDN_wallet +
  asset.rdpu;
const nonLiquid = total - liquid;
const target = {
  darat: "Done",
  asset1: Math.floor((total / 100000000) * 100),
  asset2: Math.floor((total / 500000000) * 100),
  asset3: Math.floor((total / 1000000000) * 100),
  asset4: Math.floor((total / 2000000000) * 100),
  asset5: Math.floor((total / 3000000000) * 100),
};

const persen_saham = (asset.saham / total) * 100;
const persen_darat = (liquid / total) * 100;
const persen_emas = (asset.emas / total) * 100;

const persen_bbri = (bbri / asset.saham) * 100;
const persen_bbca = (bbca / asset.saham) * 100;
const persen_bmri = (bmri / asset.saham) * 100;
const persen_icbp = (icbp / asset.saham) * 100;
const persen_tldn = (tldn / asset.saham) * 100;

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
  document.getElementById("rdn").textContent =
    asset.RDN_wallet.toLocaleString("id-ID");
  console.log("Updating rdn...");
  document.getElementById("rdpu").textContent =
    asset.rdpu.toLocaleString("id-ID");
  console.log("Updating rdpu...");
  document.getElementById("bbri").textContent = bbri.toLocaleString("id-ID");
  console.log("Updating bbri...");
  document.getElementById("bbca").textContent = bbca.toLocaleString("id-ID");
  console.log("Updating bbca...");
  document.getElementById("bmri").textContent = bmri.toLocaleString("id-ID");
  console.log("Updating bmri...");
  document.getElementById("icbp").textContent = icbp.toLocaleString("id-ID");
  console.log("Updating icbp...");
  document.getElementById("tldn").textContent = tldn.toLocaleString("id-ID");
  console.log("Updating tldn...");

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
  document.getElementById("persen_saham").textContent = persen_saham
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating perseb saham...");
  document.getElementById("persen_darat").textContent = persen_darat
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen darat...");
  document.getElementById("persen_emas").textContent = persen_emas
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen emas...");
  document.getElementById("persen_bbri").textContent = persen_bbri
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen bbri...");
  document.getElementById("persen_bbca").textContent = persen_bbca
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen bbca...");
  document.getElementById("persen_bmri").textContent = persen_bmri
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen bmri...");
  document.getElementById("persen_icbp").textContent = persen_icbp
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen icbp...");
  document.getElementById("persen_tldn").textContent = persen_tldn
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen tldn...");
}

// ----------------------Wheel Chart-----------------------
const xValues = ["Dana Darurat (Juta)", "Emas (Juta)", "Saham (Juta)"];
const yValues = [
  Math.floor((asset.bpr + asset.RDN_wallet + asset.komunal) / 1000000),
  Math.floor(asset.emas / 1000000),
  Math.floor(asset.saham / 1000000),
];
const barColors = ["#437057", "#97B067", "#FFBF78"];
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
