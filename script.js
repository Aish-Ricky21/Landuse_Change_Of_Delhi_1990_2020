const data = [
  { "CLASS NAME": "AGRICULTURE", "LOSS": 33365.83387, "GAIN": 32646.54359, "CHANGE INDEX": -0.065877483, "UNCHANGED": 10918.60582 },
  { "CLASS NAME": "FALLOW LAND", "LOSS": 5121.078769, "GAIN": 6027.584905, "CHANGE INDEX": 2.05353255, "UNCHANGED": 441.4374322 },
  { "CLASS NAME": "LOW DENSITY URBAN", "LOSS": 25156.25565, "GAIN": 41318.23696, "CHANGE INDEX": 1.769567046, "UNCHANGED": 9133.296956 },
  { "CLASS NAME": "HIGHLY DENCE URBAN", "LOSS": 19832.22325, "GAIN": 32581.07828, "CHANGE INDEX": 1.054396334, "UNCHANGED": 12091.14127 },
  { "CLASS NAME": "WATER BODY", "LOSS": 952.6520305, "GAIN": 2428.10737, "CHANGE INDEX": 3.205229505, "UNCHANGED": 460.327517 },
  { "CLASS NAME": "SHRAB", "LOSS": 24320.52048, "GAIN": 5195.227439, "CHANGE INDEX": -7.441711056, "UNCHANGED": 2570.01285 },
  { "CLASS NAME": "FOREST", "LOSS": 12360.05117, "GAIN": 8996.336042, "CHANGE INDEX": -1.459626219, "UNCHANGED": 2304.504457 },
  { "CLASS NAME": "VEGITATION", "LOSS": 15231.54437, "GAIN": 7147.044994, "CHANGE INDEX": -8.933359793, "UNCHANGED": 904.9785933 }
];

// Populate Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row["CHANGE INDEX"].toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial render
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});











  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  