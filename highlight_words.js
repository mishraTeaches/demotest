const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

//highlight(str, words);

// "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"

const uniqueKeyWord = new Set(words);

const highlightWord = (str, word) => {
  let output = "";
  const strWord = str.split(" ");
  let result = strWord.map((word) => {
    if (uniqueKeyWord.has(word)) {
      output = `<strong>${word}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        const prefx = word.slice(0, i + 1);
        const sufx = word.slice(i + 1);
        if (uniqueKeyWord.has(prefx) && uniqueKeyWord.has(sufx)) {
          output = `<strong>${prefx}${sufx}</strong>`;
          break;
        }
      }
    }
  });
};
