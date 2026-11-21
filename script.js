function speakHint() {
  const utterance = new SpeechSynthesisUtterance(
    "Hallo, dies ist ein sprechender Würfel. Drücke eine beliebige Taste oder berühre den Touchscreen mittig, um zu würfeln."
  );
  utterance.lang = "de-DE";
  speechSynthesis.speak(utterance);
}

// Hinweis direkt beim Start ansagen:
speakHint();

  const speakone = new SpeechSynthesisUtterance(
    "Eins"
  );
  const speaktwo = new SpeechSynthesisUtterance(
    "Zwei"
  );
  const speakthree = new SpeechSynthesisUtterance(
    "Drei"
  );
  const speakfour = new SpeechSynthesisUtterance(
    "Vier"
  );
  const speakfive = new SpeechSynthesisUtterance(
    "Fünf"
  );
  const speaksix = new SpeechSynthesisUtterance(
    "Sechs"
  );
  speakone.lang = "de-DE";
  speaktwo.lang = "de-DE";
  speakthree.lang = "de-DE";
  speakfour.lang = "de-DE";
  speakfive.lang = "de-DE";
  speaksix.lang = "de-DE";

function roll() {
    var randNum = Math.floor(Math.random()*6 + 1);

    var dice = randNum;

    let button = document.getElementById("dicevalue");
  
    switch(dice) {
      case 1:
      button.textContent = "1";
      speechSynthesis.speak(speakone);
        break;
      case 2:
      button.textContent = "2";
      speechSynthesis.speak(speaktwo);
        break;
      case 3:
      button.textContent = "3";
      speechSynthesis.speak(speakthree);
        break;
      case 4:
      button.textContent = "4";
      speechSynthesis.speak(speakfour);
        break;
      case 5:
      button.textContent = "5";
      speechSynthesis.speak(speakfive);
        break;
      case 6:
      button.textContent = "6";
      speechSynthesis.speak(speaksix);
        break;
      default:
    }
  let wakeLock = null;

async function keepScreenAwake() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("Wake Lock aktiv");
    }
  } catch (err) {
    console.log("Wake Lock konnte nicht aktiviert werden:", err);
  }
}

keepScreenAwake();

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    keepScreenAwake();
  }
});
}
