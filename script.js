// Set Data
const bbri = 3984000;
const bbca = 3287500;
const bmri = 5115000;
const icbp = 2950000;
const tldn = 8960000;

// Set Data
const ac_bbri = 4516764;
const ac_bbca = 4033541;
const ac_bmri = 4886318;
const ac_icbp = 3397588;
const ac_tldn = 9065578;

// Asset
const asset = {
  saham: bbri + bbca + bmri + icbp + tldn,
  RDN_wallet: 564233 + 328429 + 1652475 + 540810,
  emas: 10078000,
  komunal: 0,
  rdpu: 34234191,
  obligasi: 668037,
};

const ac_asset =
  ac_bbri +
  ac_bbca +
  ac_bmri +
  ac_icbp +
  ac_tldn +
  asset.emas +
  asset.komunal +
  asset.RDN_wallet +
  asset.rdpu +
  asset.obligasi;

// liquid asset
const liquid = asset.komunal + asset.RDN_wallet + asset.rdpu + asset.obligasi;
const current_asset =
  asset.saham +
  asset.emas +
  asset.komunal +
  asset.RDN_wallet +
  asset.rdpu +
  asset.obligasi;
const nonLiquid = current_asset - liquid;
const target = {
  darat: "Done",
  asset1: Math.floor((current_asset / 100000000) * 100),
  asset2: Math.floor((current_asset / 500000000) * 100),
  asset3: Math.floor((current_asset / 1000000000) * 100),
  asset4: Math.floor((current_asset / 2000000000) * 100),
  asset5: Math.floor((current_asset / 3000000000) * 100),
};

// Trading
const gain = 1476820 + 439449;
const lose = 29332;
const realized = gain - lose;
const trading = 5657472;
const persen_trading = (trading / current_asset) * 100;
const total_realized = gain - lose;

const total = current_asset + trading;

const persen_realized = (total_realized / ac_asset) * 100;

const persen_saham = (asset.saham / current_asset) * 100;
const persen_darat = (liquid / current_asset) * 100;
const persen_emas = (asset.emas / current_asset) * 100;

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
  document.getElementById("komunal").textContent =
    asset.komunal.toLocaleString("id-ID");
  console.log("Updating komunal");
  document.getElementById("rdn").textContent =
    asset.RDN_wallet.toLocaleString("id-ID");
  console.log("Updating rdn...");
  document.getElementById("obligasi").textContent =
    asset.obligasi.toLocaleString("id-ID");
  console.log("Updating obligasi...");
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

  document.getElementById("trading").textContent =
    trading.toLocaleString("id-ID");
  console.log("Updating trading...");
  document.getElementById("persen_trading").textContent =
    persen_trading.toLocaleString("id-ID");
  console.log("update persen trading...");

  document.getElementById("gain").textContent = gain.toLocaleString("id-ID");
  console.log("Updating gain...");
  document.getElementById("lose").textContent = lose.toLocaleString("id-ID");
  console.log("update lose...");
  document.getElementById("realized").textContent =
    realized.toLocaleString("id-ID");
  console.log("update realized...");

  document.getElementById("total_realized").textContent =
    total_realized.toLocaleString("id-ID");
  document.getElementById("persen_realized").textContent = persen_realized
    .toFixed(2)
    .toLocaleString("id-ID");
  document.getElementById("liquid").textContent =
    liquid.toLocaleString("id-ID");
  console.log("Updating liquid...");
  document.getElementById("nonLiquid").textContent =
    nonLiquid.toLocaleString("id-ID");
  console.log("Updating non liquid...");
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
  console.log("Updating total...");
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
  Math.floor((asset.RDN_wallet + asset.komunal + asset.rdpu) / 1000000),
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
