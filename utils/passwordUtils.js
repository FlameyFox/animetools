/*

PASSWORD UTILITIES

*/

export function generatePassword(
  words = [],
  numWords = 3,
  useLeet = true,
  useEnhancements = false,
  useHyphens = true
) {
  let generatedPassword = "";
  let availableWords = [...words]; // Create a copy of the words array to manipulate

  for (let i = 0; i < numWords; i++) {
    if (availableWords.length === 0) {
      console.warn("No more unique words available.");
      break; // Exit the loop if no more unique words are available
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);

    let word = capitalizeFirstLetter(availableWords[randomIndex]);

    if (useLeet) {
      word = toLeetSpeak(word);
    }
    generatedPassword += word;
    if (useHyphens && i < numWords - 1) {
      generatedPassword += "-";
    }

    // Remove the selected word from the available words
    availableWords.splice(randomIndex, 1);
  }

  if (useEnhancements) {
    generatedPassword = randomUppercase(generatedPassword);
    //generatedPassword = shuffleString(generatedPassword);
    generatedPassword =
      getRandomNumber() + generatedPassword + getRandomSpecialCharacter();
  }

  return generatedPassword;
}

// Password generation functions
const leetMapping = {
  a: "4",
  e: "3",
  i: "1",
  o: "0",
  s: "$",
  t: "7",
  l: "|",
};

function toLeetSpeak(str) {
  return str
    .split("")
    .map((char) => {
      return leetMapping[char.toLowerCase()] || char;
    })
    .join("");
}

function capitalizeFirstLetter(string) {
  if (!string || typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomSpecialCharacter() {
  const specialChars = "!@#$%^&*()_+{}[]:;<>,.?~";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

function randomUppercase(str) {
  return str
    .split("")
    .map((char) => {
      return Math.random() > 0.5 ? char.toUpperCase() : char;
    })
    .join("");
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10).toString(); // returns a number between 0 and 9 as a string
}

function shuffleString(str) {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
  }
  return arr.join("");
}

export function evaluatePasswordStrength(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
    password
  );
  const isLengthValid = password.length >= 8;

  const score =
    hasUppercase + hasLowercase + hasNumbers + hasSpecialChars + isLengthValid;

  switch (score) {
    case 5:
      return "very-strong";
    case 4:
      return "strong";
    case 3:
      return "medium";
    case 2:
      return "weak";
    default:
      return "very-weak";
  }
}
