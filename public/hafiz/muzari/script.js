// Kelimeler
let words = [
  "كْتُبُ",
  "عْلَمُ",
  "نْصُرُ",
  "دْخُلُ",
  "خْرُجُ",
  "ذْهَبُ",
  "شْرَبُ",
  "أْكُلُ",
  "شْهَدُ",
  "عْمَلُ",
  "ذْكُرُ",
  "سْجُدُ",
  "جْعَلُ",
  "عْبُدُ",
  "كْفُرُ",
  "فْعَلُ",
  "غْفِرُ",
  "نْظُرُ",
  "حْكُمُ",
  "مْلِكُ",
];


// Kelimeleri rastgele karıştır
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
words = shuffleArray(words)

let currentWordIndex = 0;
const rowDescriptions = ["Gaib", "Gaibe", "Muhatab", "Muhataba", "Mütekellim"];

function displayCurrentWord() {
  triggerFadeAnimation();

  setTimeout(() => {
    const word = words[currentWordIndex];
    const data = Array.from({ length: 5 }, (_, i) =>
      Array.from({ length: 3 }, (_, j) => generateModifiedWord(i, j, word))
    );
    document.querySelector("#veriTablosu tbody").innerHTML = "";
    populateTable(data, rowDescriptions);

    document.querySelector("#ileri").disabled =
      currentWordIndex === words.length - 1;
    document.querySelector("#geri").disabled = currentWordIndex === 0;
    updateCounter();
  }, 300);
}

document.querySelector("#ileri").addEventListener("click", function () {
  if (currentWordIndex < words.length - 1) {
    currentWordIndex++;
  }
  displayCurrentWord();
});

document.querySelector("#geri").addEventListener("click", function () {
  if (currentWordIndex > 0) {
    currentWordIndex--;
  }
  displayCurrentWord();
});

// İlk kelimeyi göster
displayCurrentWord();
document.querySelector("#geri").disabled = true; // İlk başta geri butonunu devre dışı bırak.

// Verilen kelimeyi uygun bir şekilde dönüştürür.
function generateModifiedWord(i, j, word) {
  let prefix = "";
  let modifiedword = word;
  let suffix = "";

  if (i === 4 && j === 1) {
    return "";
  }

  prefix = determinePrefix(i, j);
  suffix = determineSuffix(i, j);

  if (suffix) {
    modifiedword = word.slice(0, -1);
  }

  return prefix + modifiedword + suffix;
}

// İlgili ön eki belirler.
function determinePrefix(i, j) {
  if (i === 0 || (i === 1 && j === 2)) return "يَ";
  if (i === 4 && j === 0) return "أَ";
  if (i === 4 && j === 2) return "نَ";
  return "تَ";
}

// İlgili son eki belirler.
function determineSuffix(i, j) {
  if (j === 1) return "َ" + "انِ";
  if ((j === 2 && i === 0) || (j === 2 && i === 2)) return "ُ" + "ونَ";
  if ((j === 2 && i === 1) || (j === 2 && i === 3)) return "ْنَ";
  if (j === 0 && i === 3) return "ِينَ";
  return "";
}

// HTML tablosunu oluşturur.
function populateTable(data, descriptions) {
  const tableBody = document.querySelector("#veriTablosu tbody");

  data.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    row.reverse().forEach((cell, i) => {
      const cellElement = document.createElement("td");
      if (!(index === 0 && i === 2) && !(index === 4 && i === 1)) {
        cellElement.innerText = "?";
        cellElement.addEventListener("click", function () {
          this.innerText = cell;
        });
      } else {
        cellElement.innerText = cell;
      }
      tableRow.appendChild(cellElement);
    });

    const descCell = document.createElement("td");
    descCell.innerText = descriptions[index];
    tableRow.appendChild(descCell);

    tableBody.appendChild(tableRow);
  });
}

// Animasyonu tetikler.
function triggerFadeAnimation() {
  const tableContainer = document.querySelector(".container");
  tableContainer.classList.add("fade-animation");
  document.querySelector("#ileri").disabled = true; // İlk başta ileri butonunu devre dışı bırak.
  document.querySelector("#geri").disabled = true; // İlk başta geri butonunu devre dışı bırak.

  setTimeout(() => {
    tableContainer.classList.remove("fade-animation");
  }, 1000);
}


// Kelime numarasını göster
function updateCounter() {
  document.getElementById("counter").innerText = `${currentWordIndex + 1} / ${words.length}`;
}
