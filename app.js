const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"; //word
const search_bar = document.querySelector("input#Search");
const icon = document.querySelector("span#search-icon");
const box = document.querySelector("#cards");

const crt_ele = (h, p) => {
  let div = document.createElement("div");
  div.classList.add("card");
  let card = document.createElement("div");
  card.classList.add("card");
  let h4 = document.createElement("h4");
  h4.classList.add("card-h");
  let para = document.createElement("p");
  para.classList.add("card-p");
  h4.innerText = "Part Of Speech :-" + h;
  para.innerText = p;
  h4.appendChild(para);
  div.appendChild(h4);
  box.append(div);
};

const getData = async (word) => {
  let response = await fetch(`${URL}${word}`);
  let data = await response.json();
  box.innerHTML = "";
  for (let i = 0; i < data["0"]["meanings"].length; i++) {
    crt_ele(
      data["0"]["meanings"][i]["partOfSpeech"],
      data["0"]["meanings"][i]["definitions"]["0"]["definition"]
    );
  }
};

icon.addEventListener("click", () => {
  if (search_bar.value !== "") {
    getData(search_bar.value);
  }
});
