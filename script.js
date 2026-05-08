// Set Data
const bbri = 11322000;
const bbca = 6300000;
const icbp = 2870000;
const elty = 7339800;
const viva = 960000;
const pbrx = 420000;
const wbsa = 391500;
const isap = 316000;

// Asset
const asset = {
  saham: bbri + bbca + icbp + elty + viva + pbrx + wbsa + isap,
  RDN_wallet: 30220478,
  emas: 10363000,
  rdpu: 10521030,
};

// liquid asset
const liquid = asset.RDN_wallet + asset.rdpu;
const current_asset = asset.saham + asset.emas + asset.RDN_wallet + asset.rdpu;
const nonLiquid = current_asset - liquid;
const target = {
  darat: "Done",
  asset1: Math.floor((current_asset / 100000000) * 100),
  asset2: Math.floor((current_asset / 500000000) * 100),
  asset3: Math.floor((current_asset / 1000000000) * 100),
  asset4: Math.floor((current_asset / 2000000000) * 100),
  asset5: Math.floor((current_asset / 3000000000) * 100),
};

const persen_saham = (asset.saham / current_asset) * 100;
const persen_darat = (liquid / current_asset) * 100;
const persen_emas = (asset.emas / current_asset) * 100;

const persen_bbri = (bbri / asset.saham) * 100;
const persen_bbca = (bbca / asset.saham) * 100;
const persen_icbp = (icbp / asset.saham) * 100;
const persen_elty = (elty / asset.saham) * 100;
const persen_viva = (viva / asset.saham) * 100;
const persen_pbrx = (pbrx / asset.saham) * 100;
const persen_wbsa = (wbsa / asset.saham) * 100;
const persen_isap = (isap / asset.saham) * 100;

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
  document.getElementById("icbp").textContent = icbp.toLocaleString("id-ID");
  console.log("Updating icbp...");
  document.getElementById("elty").textContent = elty.toLocaleString("id-ID");
  console.log("Updating elty...");
  document.getElementById("viva").textContent = viva.toLocaleString("id-ID");
  console.log("Updating viva...");
  document.getElementById("pbrx").textContent = pbrx.toLocaleString("id-ID");
  console.log("Updating pbrx...");
  document.getElementById("wbsa").textContent = wbsa.toLocaleString("id-ID");
  console.log("Updating wbsa...");
  document.getElementById("isap").textContent = isap.toLocaleString("id-ID");
  console.log("Updating isap...");

  document.getElementById("liquid").textContent =
    liquid.toLocaleString("id-ID");
  console.log("Updating liquid...");
  document.getElementById("nonLiquid").textContent =
    nonLiquid.toLocaleString("id-ID");
  console.log("Updating non liquid...");
  document.getElementById("current_asset").textContent =
    current_asset.toLocaleString("id-ID");
  console.log("Updating current_asset...");
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
  document.getElementById("persen_icbp").textContent = persen_icbp
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen icbp...");

  document.getElementById("persen_elty").textContent = persen_elty
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen elty...");

  document.getElementById("persen_viva").textContent = persen_viva
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen viva...");

  document.getElementById("persen_pbrx").textContent = persen_pbrx
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen pbrx...");

  document.getElementById("persen_wbsa").textContent = persen_wbsa
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen wbsa...");

  document.getElementById("persen_isap").textContent = persen_isap
    .toFixed(2)
    .toLocaleString("id-ID");
  console.log("Updating persen isap...");
}

// ----------------------Wheel Chart-----------------------
const xValues = ["Dana Darurat (Juta)", "Emas (Juta)", "Saham (Juta)"];
const yValues = [
  Math.floor((asset.RDN_wallet + asset.rdpu) / 1000000),
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
