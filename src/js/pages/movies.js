import dataGhibli from "../../data/ghibli/ghibli.js";
import { sortArray } from "../data.js";

const cardsContainer = document.createElement("section");

sortArray.search("Castle");
export function renderScreen(data) {
  document.getElementById("mainContainer").appendChild(cardsContainer);
  cardsContainer.classList.add("cardsContainer");
  cardsContainer.innerHTML = "";
  console.log(data.films);
  if (data.films != undefined) {
    data = data.films;
  }
  data.map((items) => {
    const card = document.createElement("ul");
    const title = document.createElement("h1");
    const poster = document.createElement("img");
    const divTitle = document.createElement("div");

    divTitle.appendChild(title);
    card.appendChild(poster);
    card.appendChild(divTitle);
    cardsContainer.appendChild(card);

    card.classList.add("cards");
    title.classList.add("titleWithinCard");
    poster.classList.add("poster");
    divTitle.classList.add("divTitle");
    poster.src = items.poster;
    poster.title = items.title;
    title.innerHTML = items.title;
  });
}
renderScreen(dataGhibli);
document.querySelector("#search").addEventListener("keyup", (e) => {
  console.log(e.target.value);
  renderScreen(sortArray.search(e.target.value));
});

document.getElementById("inputSelect").addEventListener("change", (e) => {
  renderScreen(sortArray.filterArray(e.target.value));
});
