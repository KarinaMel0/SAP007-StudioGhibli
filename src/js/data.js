import dataGhibli from "../data/ghibli/ghibli.js";





export const MoviesPageFunctions = {

  filterArray(inputValue,data) {
    let selectValueDropDown = inputValue;

    data.films.sort((a, b) => {
      let titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase(),
        ratingA = parseInt(a.rt_score),
        ratingB = parseInt(b.rt_score),
        DataA = parseInt(a.release_date),
        DataB = parseInt(b.release_date);

      if (selectValueDropDown == "A-Z") {
        return globalFunctions.order(titleA, titleB);
      }
      if (selectValueDropDown == "Z-A") {
        return globalFunctions.orderInverse(titleA, titleB);
      }
      if (selectValueDropDown == "highestScore") {
        return globalFunctions.orderInverse(ratingA, ratingB);
      }
      if (selectValueDropDown == "lowestScore") {
        return globalFunctions.order(ratingA, ratingB);
      }
      if (selectValueDropDown == "Newest") {
        return globalFunctions.orderInverse(DataA, DataB);
      }
      if (selectValueDropDown == "Oldest") {
        return globalFunctions.order(DataA, DataB);
      }
    });

    return data;
  },

  search(valueInput,data) {
    const Filtro = data.films.filter((value) => {
      return value.title.toLowerCase().indexOf(valueInput.toLowerCase()) > -1;
    });

    return Filtro;
  },

 filterCreatorProducerAndDirector(typeInfo,data){
  let filterArray = []
  const arraymap = data.films.map((items) => { return items[typeInfo] } )

  arraymap.forEach(function (genderValueof){
    filterArray = filterArray.concat(genderValueof)
  })


  // eslint-disable-next-line no-undef
  const filter = [...new Set(filterArray)]


  return filter
},

 toComparerProducerAndDirector(value,typeInfo,data){
  let filterArray = []
  let inputValue = value;
  const dadosArray = data.films.map((items) => { return items} )

  dadosArray.forEach(function (Value){
    filterArray = filterArray.concat(Value)
  })

  if(inputValue == "" ){
    return filterArray
  }

  const newArray = filterArray.filter((itemAtual)=>{
    return itemAtual[typeInfo].toLowerCase() == inputValue.toLowerCase()
  })

  return newArray
},

}

export const charactersPageFunctions = {

  filterSpeciesDropDown(data){
    let filterArray = []
    const charactersType = data.films.map((items) => { return items.people.map((itemAtual) => { return itemAtual.specie})} )

    charactersType.forEach(function (specie){
      filterArray = filterArray.concat(specie)
    })


    // eslint-disable-next-line no-undef
    const filter = [...new Set(filterArray)]

    return filter
  },

  searchCharacters(valueInput,data){
    const characters = data.films.map((item)=>{ return item.people.map((NameCharacters) => {
      return NameCharacters
    })})

    const Filter = characters.flat().filter((character) =>{
      return character.name.toLowerCase().indexOf(valueInput.toLowerCase()) > -1
    })

    return Filter
  },

  filterSpecies(valorinput){
    let filterArray = []
    let inputValue = valorinput;
    const dadosArray = dataGhibli.films.map((items) => { return items.people.map((itemAtual) => { return itemAtual})} )

    dadosArray.forEach(function (genderValueof){
      filterArray = filterArray.concat(genderValueof)
    })

    if(inputValue == "" ){
      return filterArray
    }

    const newArray = filterArray.filter((itemAtual)=>{
      return itemAtual.specie.toLowerCase() == inputValue.toLowerCase()
    })

    return newArray
  },

  filterCharactersAZ(valorinput,characters,data){

    let filterArray = []
    let inputValue = valorinput
    const dataArray = data.films.map((items) => { return items.people.map((itemAtual) => { return itemAtual})} )

      dataArray.forEach(function (character){
        filterArray = filterArray.concat(character)
      })

      const newArray = characters.sort((a, b) => {
        let titleA = a.name.toLowerCase(),
          titleB = b.name.toLowerCase();


          switch(inputValue){

            case 'A-Z':
            return globalFunctions.order(titleA, titleB);

            case 'Z-A':
            return globalFunctions.orderInverse(titleA, titleB);

            }
      });

     return newArray

  },

  filterFilmsDropDown(data){
    let filterArray = []
    const films = data.films.map((items) => { return items.title} )

    films.forEach(function (genderValueof){
      filterArray = filterArray.concat(genderValueof)
    })


    // eslint-disable-next-line no-undef
    const filter = [...new Set(filterArray)]


    return filter
   },

   compareMovies(value,data){
    let filterArray = []
    let inputValue = value;
    const dadosArray = data.films.map((items) => { return items} )

    let ArrayPadrao = []
    dadosArray.forEach(function (movies){
      filterArray = filterArray.concat(movies)
      ArrayPadrao = ArrayPadrao.concat(movies.people)
    })

    if(inputValue == "" ){

      return ArrayPadrao
    }

    const newArray = filterArray.filter((movies)=>{
      return movies.title.toLowerCase() == inputValue.toLowerCase()
    })



    return newArray[0].people

  },

}


export const globalFunctions = {

  calc(calculoFilms){
  let calculo =  100 * calculoFilms / 171

    return calculo
  },

  order(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  },

  orderInverse(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  },


}

