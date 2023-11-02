document.addEventListener("DOMContentLoaded", function () {
  // Urlden id parametresini alın
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const startParam = id.split("-")[0];
  const endParam = id.split("-")[1];

  // Model içindeki inputlara parametreleri yazın
  document.getElementById("startWord").value = startParam;
  document.getElementById("endWord").value = endParam;
  

  // Şu an oynatılan sesi depolamak için bir değişken oluşturun
  let currentAudio = null;

  fetch("https://hasanbahadirkoca.com/hafiz/kelimeler/assets/json/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Eğer id parametresi varsa, id parametresine göre veriyi getirin
      // id=100-200 ise 100 ile 200 arasındaki verileri getirin
      if (id) {
        const idRange = id.split("-");
        data = data.filter(
          (item) =>
            item.id >= parseInt(idRange[0]) && item.id <= parseInt(idRange[1])
        );
      }

      let tableContent = "";
      data.forEach((item) => {
        tableContent += `
                <tr>
                    <td>${item.id}</td>
                    <td style="white-space: nowrap;" class="play-audio" data-id="${
                      item.id
                    }">${item.arabic}</td>
                    <td>${item.translation.join(", ")}</td>
                </tr>
            `;
      });
      document.getElementById("data-table").innerHTML = tableContent;

      // Tıklama olayını ekleyin
      document.querySelectorAll(".play-audio").forEach((element) => {
        element.addEventListener("click", function () {
          const audioId = this.getAttribute("data-id");
          const audioPath = `https://hasanbahadirkoca.com/hafiz/kelimeler/assets/ps/${audioId}.mp3`;

          // Eğer bir ses zaten oynatılıyorsa ve tıklanan ses şu an oynatılan ses değilse, oynatılan sesi durdurun
          if (currentAudio && currentAudio.src !== audioPath) {
            currentAudio.pause();
            currentAudio = null;
          }

          // Eğer tıklanan ses şu an oynatılan ses değilse, sesi oynatın
          if (!currentAudio || currentAudio.src !== audioPath) {
            currentAudio = new Audio(audioPath);
            currentAudio.play();
          } else {
            // Eğer tıklanan ses şu an oynatılan ses ise, sesi durdurun
            currentAudio.pause();
            currentAudio = null;
          }
        });
      });
    })
    .catch((error) => console.error("Error:", error));

  // Filtrele butonuna basıldığında modalı göster
  function showModal(elementId) {
    let modal = document.getElementById(elementId);
    if (modal) {
      modal.style.display = "block";
      modal.classList.add("show");
    }
  }

  function hideModal(elementId) {
    let modal = document.getElementById(elementId);
    if (modal) {
      modal.style.display = "none";
      modal.classList.remove("show");
    }
  }
  // Filtrele butonuna basıldığında modalı göster
  document.querySelector("#filterButton").addEventListener("click", () => {
    showModal("filterModal");
  });

  // Modal kapatma butonuna basıldığında modalı gizle
  document.querySelector(".close").addEventListener("click", () => {
    hideModal("filterModal");
  });

  // Görüntüle butonuna veya Enter'a basıldığında sayfayı belirtilen parametrelerle yenile
  document.getElementById("applyFilter").addEventListener("click", applyFilter);
  document
    .getElementById("filterForm")
    .addEventListener("submit", function (event) {
      // Eğer start>stop ise hata ver
      const startWord = document.getElementById("startWord").value;
      const endWord = document.getElementById("endWord").value;
      if (startWord > endWord) {
        alert("Başlangıç kelimesi bitiş kelimesinden büyük olamaz!");
        return;
      }
      event.preventDefault();
      applyFilter();
    });

  function applyFilter() {
    const startWord = document.getElementById("startWord").value;
    const endWord = document.getElementById("endWord").value;
    window.location.href = `?id=${startWord}-${endWord}`;
  }
});


// If quizButton is pressed, redirect to quiz page with start and stop parameters on inputs
document.getElementById("quizButton").addEventListener("click", () => {
  const startWord = document.getElementById("startWord").value;
  const endWord = document.getElementById("endWord").value;
  window.location.href = `https://hasanbahadirkoca.com/hafiz/kelimeler/test/?start=${startWord}&stop=${endWord}`;
});