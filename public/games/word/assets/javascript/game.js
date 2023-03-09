var karisik = [
  "KAPI",
  "PENCERE",
  "DUVAR",
  "TABLO",
  "SANDALYE",
  "KOLTUK",
  "MASA",
  "KALEM",
  "DEFTER",
  "KITAP",
  "KAMERA",
  "TELEFON",
  "TELEVIZYON",
  "BILGISAYAR",
  "KLAVYE",
  "FARE",
  "MONITOR",
  "HOPARLOR",
  "MIKROFON",
  "KULAKLIK",
  "YASTIK",
  "BATTANIYE",
  "PERDE",
  "HALI",
  "AYNALIK",
  "ASKI",
  "CEKMECE",
  "SEPET",
  "MUTFAK",
  "BANYO",
  "YATAK",
  "YORGAN",
  "MANTAR",
  "BALIK",
  "TAVUK",
  "KOFTE",
  "KAHVE",
  "CAY",
  "SEKER",
  "TUZ",
  "BIBER",
  "LIMON",
  "PORTAKAL",
  "DOMATES",
  "SALATALIK",
  "PATATES",
  "SOGAN",
  "HAVUC",
  "KIRMIZI",
  "YESIL",
  "SARI",
  "SIYAH",
  "BEYAZ",
  "MAVI",
  "KIRMIZI",
  "TURUNCU",
  "MOR",
  "PEMBE",
  "GRI",
  "KAHVERENGI",
  "ACIK",
  "KAPALI",
  "YUZUK",
  "KOLYE",
  "KUPE",
  "SAAT",
  "GOZLUK",
  "KASK",
  "TERLIK",
  "CIZME",
  "BOT",
  "ATLET",
  "TISORT",
  "KAZAK",
  "MONT",
  "PANTOLON",
  "ETEK",
  "SORT",
  "ELDIVEN",
  "SACAK",
  "FIRCA",
  "SUNGER",
  "SABUN",
  "SIVI",
  "SIVIYAG",
  "TUZLU",
  "TATLI",
  "EKSI",
  "PISIRMEK",
  "KAVURMAK",
  "YEMEK",
  "ICMEK",
  "UYUMAK",
  "UZANMAK",
  "KALKMAK",
  "YURUMEK",
  "KOSMAK",
  "ZIPLAMAK",
  "ATLAMAK",
  "TIRMANMAK",
  "DALMAK",
  "CIKMAK",
  "OTURMAK",
  "AYAKTA",
  "DURMAK",
  "BAKMAK",
  "DINLEMEK",
  "KONUSMAK",
  "OKUMAK",
  "YAZMAK",
  "CIZMEK",
  "BOYAMAK",
  "KESMEK",
  "YAPISTIRMAK",
  "KATLAMAK",
  "OYUNCAK",
  "TOP",
  "YUZMEK",
  "KAYMAK",
  "KAR",
  "YAGMUR",
  "GUNES",
  "AY",
  "YILDIZ",
  "BULUT",
  "DENIZ",
  "NEHIR",
  "GOL",
  "DAG",
  "ORMAN",
  "CICEK",
  "AGAC",
  "HAYVAN",
  "KOPEK",
  "KEDI",
  "KUS",
  "TAVSAN",
  "KELEBEK",
  "ARI",
  "YILAN",
  "ASLAN",
  "ZEBRA",
  "FIL",
  "KANGURU",
  "BALIKCI",
  "YAZAR",
  "SARKICI",
  "OYUNCU",
  "HAKEM",
  "POLIS",
  "DOKTOR",
  "OGRETMEN",
  "OGRENCI",
  "KASIYER",
  "GARSON",
  "MUHENDIS",
  "AVUKAT",
  "SATICI",
  "MUZISYEN",
  "MIMAR",
  "YAYINCI",
  "YONETMEN",
];
var words = [
  "KEDİ",
  "KÖPEK",
  "ASLAN",
  "TAVŞAN",
  "KUŞ",
  "YILAN",
  "FİL",
  "ZEBRA",
  "TİGİ",
  "LEOPAR",
  "SİVRİSİNEK",
  "KARINCA",
  "AĞUSTOSBÖCEĞİ",
  "KELEBEK",
  "HAMSİ",
  "BÖCEK",
  "CİVCİV",
  "KURBAĞA",
  "YENGEÇ",
  "YARASA",
  "BOA",
  "KAMELEON",
  "ATMACA",
  "KARGA",
  "PAPAĞAN",
  "BÜLBÜL",
  "TİLKİ",
  "PENGUEN",
  "GÜVERCİN",
  "DENİZYILDIZI",
  "TATLICAK",
  "BALIKÇIL",
  "FENERBALIĞI",
  "MANDA",
  "KARPUZ",
  "HUMBAK",
  "KUŞU",
  "KANGURU",
  "KAPLAN",
  "ZÜRAFA",
  "KÖSTEBEK",
  "MAYMUN",
  "AKREP",
  "ZİRAFA",
  "ALAKARGA",
  "KUŞU",
  "PENGUEN",
  "TAVUK",
  "KARTAL",
  "TAVUSKUŞU",
  "GÜVE",
  "GÜVEYİ",
  "KOYUN",
  "KEÇİ",
  "KANARYA",
  "CİVANPERÇEMİ",
  "PAPAĞAN",
  "TİAVRU",
  "SUSAMURU",
  "SUKABUĞU",
  "FENERBALIĞI",
  "FİLLERBALIĞI",
  "PAVYONBALIĞI",
  "VATOZ",
  "ISTAKOZ",
  "BALONBALIĞI",
  "SÜSBALIĞI",
  "PİLİÇ",
  "SULTANPAPAĞANI",
  "GÜVERCİN",
  "BALINA",
  "ÇİZGİLİBALIK",
  "KANCABALIĞI",
  "HUMBAK",
  "PENGUEN",
  "RÜZGARGÜVERCİNİ",
  "LEOPAR",
  "MAYMUN",
  "KOMODOEJDERİ",
  "AKREP",
  "KARTAL",
  "KÖSTEBEK",
  "KANGURU",
  "DİNOZOR",
  "KÖPEK",
];

var currentWordIndex = 0;
var attempts = 0;
var guessedLetters = [];
var wins = 0;
var losses = 0;

function onStart() {
  updateDisplay();
  document.addEventListener("keyup", onGuess);
}
function onGuess(event) {
  var keyPressed = event.key.replace(/i/g, "İ").toUpperCase();
  console.log(keyPressed);
  if (isLetterOnly(keyPressed)) {
    if (guessedLetters.indexOf(keyPressed) === -1) {
      guessedLetters.push(keyPressed);
      if (currentWordLetters().indexOf(keyPressed) === -1) {
        attempts++;
      }
      updateDisplay();
      if (isRoundLost()) {
        losses++;
        goToNextWord();
        return;
      } else if (isRoundWon()) {
        wins++;
        goToNextWord();
        return;
      }
    }
  }
}

function getGameboardWord() {
  return currentWordLetters().map(function (letter) {
    if (guessedLetters.indexOf(letter) === -1) {
      return "&nbsp";
    } else {
      return letter;
    }
  });
}

function goToNextWord() {
  currentWordIndex = Math.floor(Math.random() * words.length);
  attempts = 0;
  guessedLetters = [];
  updateDisplay();
}

function isRoundLost() {
  if (getGuessesAllowed() - attempts === 0) {
    alert("KAYBETTİNİZ! Doğru kelime: " + words[currentWordIndex]);
    return true;
  }
  return false;
}
function isRoundWon() {
  var gameboardWord = getGameboardWord();
  if (gameboardWord.indexOf("&nbsp") === -1) {
    var audio = new Audio("assets/sounds/correct.mp3");
    audio.play();
    return true;
  }
  return false;
}

function isLetterOnly(character) {
  if (character.length !== 1) {
    return false;
  }
  var checker = /^[A-ZĞÜŞİÖÇ]+$/i.test(character);
  console.log(checker, character);
  return checker;
}

function updateDisplay() {
  document.getElementById("guessed").innerHTML = guessedLetters.reduce(
    function (list, letter) {
      return list + letter + " ";
    },
    ""
  );
  showGameBoard();
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guesses_remaining").innerHTML =
    getGuessesAllowed() - attempts;
}

function showGameBoard() {
  var container = document.getElementById("game_board_container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  console.log(getGameboardWord());
  getGameboardWord().forEach(function (letter) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "game_board_letter");
    newDiv.innerHTML = letter;
    if (letter !== "&nbsp") {
      newDiv.setAttribute("class", "no_border");
    }
    container.appendChild(newDiv);
  });
}

function currentWordLetters() {
  return words[currentWordIndex].split("");
}

function getGuessesAllowed() {
  return 6;
}

onStart();
