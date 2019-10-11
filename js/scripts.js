var repository = [
  { name: "Bulbasaur", height: 2.4, types: ["Grass"] },
  { name: "Charizard", height: 5.7, types: ["Fire"] },
  { name: "Wigglytuff", height: 3.3, types: ["Fairy"] },
  { name: "Blastoise", height: 5.3, types: ["Water"] }
];

function loopBlockFunction(currentItem) {
  console.log(currentItem);
}

for (var i = 0; i < repository.length; i++) {
  var size;
  if (repository[i].height > 3.9) {
    size = "<b>Wow, that’s big!</b>";
  } else {
    size = "<i>It's a small Pokemon.</i>";
  }

  var result;
  for (var iItem = 0; iItem < repository[i].types.length; iItem++) {
    if (repository[i].types[iItem] == "Grass") {
      result = '<span style="color:green;"> ';
    } else if (repository[i].types[iItem] == "Fire") {
      result = '<span style="color:red;"> ';
    } else if (repository[i].types[iItem] == "Fairy") {
      result = '<span style="color:purple;"> ';
    } else if (repository[i].types[iItem] == "Water") {
      result = '<span style="color:blue;"> ';
    }
  }

  document.write(
    '<div class="box">' +
      repository[i].name +
      " (Height: " +
      repository[i].height +
      ")" +
      "<br>" +
      size +
      result +
      "<br>" +
      repository[i].types +
      "<p>" +
      "</div>"
  );
}
