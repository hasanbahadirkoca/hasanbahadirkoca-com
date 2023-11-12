// Değişkenler
let startParam = 1;
let stopParam = 1980;
let words = [];
let currentWordIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let partialCount = 0;
let totalCount = 0;

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", function () {
  const startTestButton = document.getElementById("startTestButton");

  // URL'den "stop" parametresini al
  const urlParams = new URLSearchParams(window.location.search);

  startParam = urlParams.get("start") || 1;
  stopParam = urlParams.get("stop");

  if (stopParam !== null && !isNaN(stopParam)) {
    totalCount = stopParam - startParam;
    fetchDataAndStartTest(stopParam, startParam);
    displayWord();
  } else {
    init();
  }
});

// Başlangıç işlemlerini yapan fonksiyon
function init() {
  const startTestButton = document.getElementById("startTestButton");
  startTestButton.onclick = promptWordCount;
}

// Kullanıcıdan kelime sayısını alıp testi başlatan fonksiyon
function promptWordCount() {
  const count = parseInt(document.getElementById("wordCountInput").value);
  fetchDataAndStartTest(count);
}

// API'den veri çekip testi başlatan fonksiyon
function fetchDataAndStartTest(stop, start = 1) {
  totalCount = stop - start + 1;
  console.log("fetchDataAndStartTest", start, stop, totalCount);
  axios
    .get("https://hasanbahadirkoca.com/hafiz/kelimeler/assets/json/data.json")
    /* .get("assets/json/data.json") */
    .then((response) => {
      words = response.data;
      words = shuffleArray(words.slice(start - 1, stop));
      prepareUIForTest();
      displayWord();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Kullanıcı arayüzünü test için hazırlayan fonksiyon
function prepareUIForTest() {
  document.getElementById("wordCountDiv").style.display = "none";
  document.getElementById("quizArea").style.display = "block";
}

// Diziyi karıştıran fonksiyon
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Şuanki kelimeyi ekrana yazdıran fonksiyon
function displayWord() {
  const wordArea = document.getElementById("wordArea");
  const wordId = document.getElementById("wordId");
  wordArea.innerHTML = words[currentWordIndex].arabic;
  wordId.innerHTML = "Kelime Numarası:<br>" + words[currentWordIndex].id;
}

// Türkçe karakterleri normalize eden fonksiyon
function normalizeTurkish(str) {
  var turkishMap = {
    â: "a",
    Â: "A",
    î: "i",
    Î: "I",
    ô: "o",
    Ô: "O",
    û: "u",
    Û: "U",
  };

  return str.replace(/â|Â|î|Î|ô|Ô|û|Û/g, function (match) {
    return turkishMap[match];
  });
}

// Türkçe karakterleri küçük harfe çeviren fonksiyon
function toLowerCaseTurkish(str) {
  var turkishMap = {
    İ: "i",
    I: "ı",
    Ç: "ç",
    Ş: "ş",
    Ğ: "ğ",
    Ü: "ü",
    Ö: "ö",
  };

  return str
    .replace(/İ|I|Ç|Ş|Ğ|Ü|Ö/g, function (match) {
      return turkishMap[match];
    })
    .toLowerCase();
}

// Kullanıcının cevabını kontrol eden fonksiyon
function checkWord() {
  let input = document.getElementById("translationInput").value;
  const translations = words[currentWordIndex].translation;

  input = normalizeTurkish(input);
  input = toLowerCaseTurkish(input);
  const userAnswers = input.split(/[,.]/).map((str) => str.trim());

  const normalizedTranslations = translations.map((translation) => {
    return toLowerCaseTurkish(normalizeTurkish(translation));
  });

  const matchingAnswers = userAnswers.filter((answer) =>
    normalizedTranslations.includes(answer)
  );

  const unmatchedAnswers = userAnswers.filter(
    (answer) => !normalizedTranslations.includes(answer)
  );

  if (matchingAnswers.length === normalizedTranslations.length) {
    correctCount++;
    showAlert("Doğru!");
    nextWordOrFinishTest();
  } else if (matchingAnswers.length > 0) {
    partialCount++;
    showAlert("Eksik! Doğru cevap: " + translations.join(", "), 3);
    console.log("Eksik! Doğru cevap: " + translations.join(", "), words[currentWordIndex].arabic, unmatchedAnswers);
    nextWordOrFinishTest();
  } else {
    wrongCount++;
    showAlert("Yanlış! Doğru cevap: " + translations.join(", "), 3);
    console.log("Yanlış! Doğru cevap: " + translations.join(", "), words[currentWordIndex].arabic);
    nextWordOrFinishTest();
  }

  document.getElementById("translationInput").value = "";
}

// Bir sonraki kelimeye geçen veya testi bitiren fonksiyon
function nextWordOrFinishTest() {
  currentWordIndex++;
  if (currentWordIndex >= totalCount) {
    alert(
      `Test bitti! Doğru sayısı: ${correctCount}, Yanlış sayısı: ${wrongCount}, Eksik sayısı: ${partialCount}`
    );
    return;
  } else {
    displayWord();
  }
}

// Ekranda bildirim gösteren fonksiyon
function showAlert(message, time = 1) {
  const feedback = document.getElementById("feedback");
  feedback.innerHTML = message;
  setTimeout(() => {
    feedback.innerHTML = "";
  }, time * 1000);
}

// Testi sıfırlayan fonksiyon
function resetTest() {
  // Değişkenlerin ve UI'nin sıfırlandığı kısım
  // ...
}

// Enter tuşuna basıldığında cevap kontrolü yapan fonksiyon
document
  .getElementById("translationInput")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      checkWord();
    }
  });

// Geri tuşuna basınca kelimeler listesine dönen fonksiyon
document.getElementById("backButton").addEventListener("click", function () {
  const url =
    "https://hasanbahadirkoca.com/hafiz/kelimeler/?id=" +
    startParam +
    "-" +
    stopParam;
  window.location.href = url;
});
