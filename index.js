// const myButton = document.getElementById("myButton");
const container = document.querySelector(".container");
const ul = document.querySelector("ul");

setInterval(() => {
  buttonRandomizer();
  addLi();
}, 500);

// myButton.addEventListener("click", clearUl);

function addLi() {
  const li = document.createElement("li");
  randomStr = randomStrFromArr(strArr);
  li.innerHTML = `<b>LOG :</b>  ${randomStr}`;
  ul.appendChild(li);
}

function clearUl() {
  ul.innerHTML = "";
}

function buttonRandomizer() {
  const maxX = container.offsetWidth - myButton.offsetWidth;
  const maxY = container.offsetHeight - myButton.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  myButton.style.left = randomX + "px";
  myButton.style.top = randomY + "px";
  myButton.style.opacity = 1;
}

function randomStrFromArr(strArr) {
  const randomIndex = Math.floor(Math.random() * strArr.length);
  return strArr[randomIndex];
}

const strArr = [
  "Tine, logovi su bitni, nemoj ih brisati!",
  "Tinče, molim te, prestani s brisanjem logova.",
  "Zašto brišeš logove, Tine? To nije u redu.",
  "Tine, SOC te prati, nemoj to raditi.",
  "Logovi su važni za sigurnost, Tine! Nemoj ih brisati.",
  "Tine, prestani uništavati logove!",
  "Ne znam što da ti više kažem, Tin! Prekini s tim!",
  "Tine, ozbiljno, ovo više nije smiješno. Prestani brisati logove.",
  "Ako još jednom obrišeš logove, Tine, bit ćeš u problemu.",
  "Tin je obrisao logove! Opet!",
  "Tine, jesi li ti normalan? Zašto brišeš logove?",
  "Tine, logovi su svetinja! Ne diraj ih!",
  "Tin je kralj brisanja logova.",
  "Tine, logovi te mole da prestaneš.",
  "Tin prestani brisati logove",
  "Nemoj nas brisati Tin",
  "Pls nemoj brisati logove Tin",
  "Ovdje SOC, primjetili smo da želiš obrisati logove",
  "SOC: Izjasni se zašto brišeš logove",
  "Brisaču logova, prestani više dođavola!",
  "Koliko puta moram reći da prestaneš brisati logove?",
  "Marko Grgić: ne mogu više pratiti brisanje logova, pratite si ih sami!",
  "Obriši nas ako se usudiš"
];
