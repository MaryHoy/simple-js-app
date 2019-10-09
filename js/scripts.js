var repository = [
  { name: "Bulbasaur", height: 2.4, types: ["Grass"] },
  { name: "Charizard", height: 5.7, types: ["Fire"] },
  { name: "Wigglytuff", height: 3.3, types: ["Fairy"] },
  { name: "Blastoise", height: 5.3, types: ["Water"] }
];

for (var item = 0; item < repository.length; item++) {
  var size;
  if (repository[item].height > 3.9) {
    size = "<b>Wow, that’s big!</b>";
  } else {
    size = "<i>It's a small Pokemon.</i>";
  }

  var result;
  for (var typeItem = 0; typeItem < repository[item].types.length; typeItem++) {
    if (repository[item].types[typeItem] == "Grass") {
      result = '<span style="color:green;"> ';
    } else if (repository[item].types[typeItem] == "Fire") {
      result = '<span style="color:red;"> ';
    } else if (repository[item].types[typeItem] == "Fairy") {
      result = '<span style="color:pink;"> ';
    } else if (repository[item].types[typeItem] == "Water") {
      result = '<span style="color:blue;"> ';
    }
  }

  document.write(
    '<div class="box">' +
      repository[item].name +
      " (Height: " +
      repository[item].height +
      ")" +
      "<br>" +
      size +
      result +
      "<br>" +
      repository[item].types +
      "<p>" +
      "</div>"
  );
}
