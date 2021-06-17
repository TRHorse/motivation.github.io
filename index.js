const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const next = document.querySelector(".next");
const wrapper = document.querySelector(".wrapper");

let showData = "";

const nextText = () => {
  let rand = Math.floor(Math.random() * 1640);
  console.log(rand);
  const quotesText = showData[rand].text;
  const quotesAuthor = showData[rand].author;

  quotes.innerHTML = "'' " + quotesText + " ''";
  quotesAuthor === null
    ? (author.innerText = "Unknown")
    : (author.innerText = "BY- " + quotesAuthor);
};

const getData = async () => {
  const api = "quotes.json";

  try {
    let data = await fetch(api);
    showData = await data.json();
    nextText();
  } catch (error) {}
};

let bg = [
  "#9a9a1b",
  "indigo",
  "#169207",
  "#232222",
  "#31174e",
  "orange",
  "#ff607b",
  "purple",
  "salmon",
  "cadetblue",
  "#7e6db3",
  "#625675",
  "#3d4669F",
  "#7f8e30",
  "#0d5d6f",
  "#8f8ae0",
  "#e85685",
  "#567b4f",
  "#7dbfce",
  "#455a5f",
  "#ffbb66",
];

console.log(bg.length);

const clsIndxUP = Math.floor(Math.random() * 21);
wrapper.style.background = bg[clsIndxUP];
next.addEventListener("click", () => {
  nextText();
  const clsIndx = Math.floor(Math.random() * 10);
  wrapper.style.background = bg[clsIndx];
});

getData();
