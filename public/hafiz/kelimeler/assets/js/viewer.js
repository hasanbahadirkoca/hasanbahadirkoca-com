// URL'den ID'leri çıkart
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id");
const [startId, endId] = idParam
  ? idParam.split("-").map(Number)
  : [null, null];
console.log(startId, endId);

// JSON dosyasını oku
fetch("assets/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let tableContent = "";
    for (const row of data) {
      const id = row.id;
      if (id >= startId && id <= endId) {
        tableContent += `<tr><td>${row.id}</td><td>${
          row.arabic
        }</td><td>${row.translation.join(", ")}</td></tr>`;
        console.log(row);
      }
    }
    document.getElementById("table-content").innerHTML = tableContent;
  })
  .catch((error) => console.error("Bir hata oluştu:", error));

// If back-button is clicked, go back to panel.html
document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "panel.html";
});

// If hafiz-button is clicked, go back to https://hafiz.thehbk.net/
document.getElementById("hafiz-button").addEventListener("click", () => {
  window.location.href = "https://hafiz.thehbk.net/";
});

// If header-title pressed 3 times, print the page without header
let clickCount = 0;
document.getElementById("header-title").addEventListener("click", () => {
  clickCount++;
  if (clickCount === 3) {
    clickCount = 0; // Sayaçı sıfırla

    document.getElementById("table-header").classList.add("hide-on-print");
    window.print();
    document.getElementById("table-header").classList.remove("hide-on-print");
  }
});
