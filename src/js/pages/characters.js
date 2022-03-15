import dataGhibli from "../../data/ghibli/ghibli.js"
import {sortArray} from "../../js/data.js"

const cardsContainer = document.createElement("section");
let personagens = sortArray.filterSpecies("")

//O paramentro da funcao nada mais e do que so um exemplo do dado ou seja, oque vc vai tratar, o js realmente vai fazer funcionar quando passar dados de verdade pra ele, linha 35.
 function renderScreen(data) {
  document.getElementById("mainContainer").appendChild(cardsContainer);
  cardsContainer.classList.add("cardsContainer");
  cardsContainer.innerHTML = "";
  console.log(data)
  if (data == undefined) {
    return
  }

     data.map((characters) => {
     const card = document.createElement("ul");
     const name = document.createElement("h1");
     const img = document.createElement("img");
     const divName = document.createElement("div");

     cardsContainer.appendChild(card);
     divName.appendChild(name);
     card.appendChild(divName);
     card.appendChild(name);
     card.appendChild(img);

     card.dataset.modal = characters.id
     img.dataset.modal = characters.id
     name.dataset.modal = characters.id

     card.classList.add("cards");
     name.classList.add("nameCharacters");
     img.classList.add("img");
     divName.classList.add("divname");

      img.src = characters.img;
      name.innerHTML = characters.name;

      card.addEventListener("click", (e) => {
        dataGhibli.films.forEach((itemAtual) => { itemAtual.people.forEach((i)=> {if (i.id == e.target.dataset.modal) {
          renderModal(i); }})});});
  })}

renderScreen(sortArray.searchCharacters(""))

document.getElementById("inputAZ").addEventListener("change", (e) => {
  renderScreen(sortArray.filterCharactersAZ(e.target.value,personagens));

});

document.querySelector("#search").addEventListener("keyup", (e) => {
  document.querySelector("#calculoCharaters").remove()
  InsertCalc(sortArray.searchCharacters(e.target.value).length)
  renderScreen(sortArray.searchCharacters(e.target.value));
  personagens = sortArray.searchCharacters(e.target.value)
});

document.getElementById("inputFilmes").addEventListener("change", (e) => {
  const calculoFilms = sortArray.compareMovies(e.target.value)
  const calculo =  100 * calculoFilms.length / 171
  renderScreen(calculoFilms);
  document.querySelector("#calculoCharaters").remove()
  personagens = calculoFilms
  if(calculoFilms.length != 171){
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters"> ${e.target.value} has ${calculo.toFixed(2)}% characters </p>`)
  } else{
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters">there are ${calculo.toFixed(2)}% characters in total </p>`)
  }

});

document.getElementById("inputSelect").addEventListener("change", (e) => {

  const calculoFilms = sortArray.filterSpecies(e.target.value)
  renderScreen(calculoFilms);
  document.querySelector("#calculoCharaters").remove()
  personagens = calculoFilms
  InsertCalc(calculoFilms.length)

});

const modalContainer = document.querySelector(".modalContainer");

function renderModal(infoFilme) {

  const modal = document.querySelector(".modal");

  const filmes =  dataGhibli.films.filter(itematual => {
    return itematual.people.filter((personagemAtual) => {
      return personagemAtual.id == infoFilme.id
    })
  })
  console.log(filmes)
  modal.innerHTML = "";

  modal.innerHTML = `
  <img class="closeModal" src="./assets/Vector.png" alt="closeButton">
    <h1>${infoFilme.name}</h1>
      <img class="poster" src="${infoFilme.img}">
          <h3>Age:${infoFilme.age}</h3>
          <h3>Gender: ${infoFilme.gender}</h3>
          <h3> Specie: ${infoFilme.specie}</h3>
          <h3>Hair Color: ${infoFilme.hair_color}</h3>
          <h3>Eye Color: ${infoFilme.eye_color}</h3>

  `;
  const buttonCloseModal = document.querySelector(".closeModal");
  buttonCloseModal.addEventListener("click", () => {
    modalContainer.classList.remove("showModal");

  });

  modalContainer.classList.add("showModal");
}






function InsertCalc(calculoFilms){

  let calculo =  100 * calculoFilms / 171

  if(calculo.length == 171){
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters">This species has .${calculo.toFixed(2)}% of characters </p>`)
  } else{
    document.querySelector(".inputContainer").insertAdjacentHTML('afterend', `<p id="calculoCharaters">there are ${calculo.toFixed(2)}% of characters in total </p>`)
  }


}


InsertCalc(sortArray.filterSpecies("").length)


sortArray.filterFilmsDropDown().forEach(function(newFilter){
  document.querySelector('#inputFilmes').insertAdjacentHTML('beforeend', `<option value="${newFilter}" class= "dropdown">${newFilter}`)
})

sortArray.filterSpeciesDropDown().forEach(function(newFilter){
  document.querySelector('#inputSelect').insertAdjacentHTML('beforeend', `<option value="${newFilter}" class= "dropdown">${newFilter}`)
})
