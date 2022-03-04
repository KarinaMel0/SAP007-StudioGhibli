import dataGhibli from "../../data/ghibli/ghibli.js";
import { sortArray } from "../data.js";

const cardsContainer = document.createElement("section");


sortArray.search("Castle");
export function renderScreen(data) {
  document.getElementById("mainContainer").appendChild(cardsContainer);
  cardsContainer.classList.add("cardsContainer");
  cardsContainer.innerHTML = "";

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

  renderScreen(sortArray.search(e.target.value));
});

document.getElementById("inputSelect").addEventListener("change", (e) => {
  renderScreen(sortArray.filterArray(e.target.value));
});

// export function renderScreen(data) {
//   document.getElementById("mainContainer").appendChild(cardsContainer);
//   cardsContainer.classList.add("cardsContainer");
//   cardsContainer.innerHTML = "";
//   data.films.map((items) => {
//     cardsContainer.innerHTML = `
//         <ul class="cards">
//         <img class="poster" src="${items.poster}">
//         <div class="divTitle">
//         <h1 class="titleWithinCard">${items.title}</h1>
//         </div>
//         </ul>

//     `;
//     //const card = document.createElement("ul");
//     //const title = document.createElement("h1");
//     //const poster = document.createElement("img");
//     //const divTitle = document.createElement("div");

//     // divTitle.appendChild(title);
//     //card.appendChild(poster);
//     //card.appendChild(divTitle);
//     //cardsContainer.appendChild(card);

//     card.dataset.modal = items.id;
//     title.dataset.modal = items.id;
//     poster.dataset.modal = items.id;
//     divTitle.dataset.modal = items.id;

//     card.classList.add("cards");
//     title.classList.add("titleWithinCard");
//     poster.classList.add("poster");
//     divTitle.classList.add("divTitle");

//     //poster.src = items.poster;
//     //poster.title = items.title;
//     //title.innerHTML = items.title;

//     card.addEventListener("click", (e) => {
//       dataGhibli.films.forEach((ItemAtual) => {
//         if (ItemAtual.id == e.target.dataset.modal) {
//           renderModal(ItemAtual);
//         }
//       });
//     });
//   });
// }
// renderScreen(dataGhibli);
// document.getElementById("inputSelect").addEventListener("change", (e) => {
//   sortArray.filterArray(e.target.value);
// });

// const modalContainer = document.querySelector(".modalContainer");

// function renderModal(infoFilme) {
//   const modal = document.querySelector(".modal");
//   modal.innerHTML = "";

//   modal.innerHTML = `
//     <h1>${infoFilme.title}</h1>
//       <img src="${infoFilme.poster}">
//         <p>${infoFilme.description}</p>
//           <h3>${infoFilme.director}</h3>
//           <h3>${infoFilme.producer}</h3>
//           <h3>${infoFilme.release_date}</h3>
//           <h3> Score ${infoFilme.rt_score}</h3>
//             <button class="closeModal">Close</button>

//   `;
//   const buttonCloseModal = document.querySelector(".closeModal");
//   buttonCloseModal.addEventListener("click", () => {
//     modalContainer.classList.remove("showModal");
//   });

//   modalContainer.classList.add("showModal");
// }
