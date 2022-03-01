import { sortArray } from "../src/js/data.js";

describe("Teste do Search", () => {
  it("O filterArray precisa ser uma funcao", () => {
    expect(typeof sortArray.filterArray).toBe("function");
  });

  it("O retorno precisa ser `Castle in the Sky`", () => {
    expect(sortArray.search("Castle in")[0].title).toBe("Castle in the Sky");
  });

  it("O retorno precisa ser `My Neighbor Totoro`", () => {
    expect(sortArray.search("my n")[0].title).toBe("My Neighbor Totoro");
  });
});

// describe("anotherExample", () => {
//   it("is a function", () => {
//     expect(typeof anotherExample).toBe("function");
//   });

//   it("returns `anotherExample`", () => {
//     expect(anotherExample()).toBe("OMG");
//   });
// });
