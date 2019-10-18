var pokemonRepository = (function() {
  var repository = [
    { name: "Bulbasaur", height: 2.4, types: ["Grass"] },
    { name: "Charizard", height: 5.7, types: ["Fire"] },
    { name: "Wigglytuff", height: 3.3, types: ["Fairy"] },
    { name: "Blastoise", height: 5.3, types: ["Water"] }
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon = {}) {
    var pokemonList = document.querySelector(".pokemon-list");
    var $listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("my-class");
    $listItem.appendChild(button);
    pokemonList.appendChild($listItem);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 1.4, types: ["Electric"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(item) {
  var size;
  if (item.height > 4.9) {
    size = "<b>Wow, that’s big!</b>";
  } else {
    size = "<i>It's a small Pokemon.</i>";
  }

  var result;
  item.types.forEach(function(itemType) {
    if (itemType == "Grass") {
      result = '<span style="color:green;"> ';
    } else if (itemType == "Fire") {
      result = '<span style="color:red;"> ';
    } else if (itemType == "Fairy") {
      result = '<span style="color:purple;"> ';
    } else if (itemType == "Water") {
      result = '<span style="color:blue;"> ';
    } else if (itemType == "Electric") {
      result = '<span style="color:orange;"> ';
    }
  });

  pokemonRepository.addListItem(item);
});
