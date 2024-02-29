enum Color {
  Red,
  Green,
  Yellow,
  Blue,
}

function printColor(color: Color) {
  switch (color) {
    case Color.Red:
      console.log('red');
      break;
    case Color.Green:
      console.log('green');
      break;
    case Color.Yellow:
      console.log('yellow');
      break;
  }
}

printColor(0);
