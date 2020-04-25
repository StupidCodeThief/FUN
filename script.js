function randomCoords(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function move(node) {
  let target = Array.from(document.getElementsByClassName(node));

  let elem = target[0];

  let coords = elem.parentNode.getBoundingClientRect();

  let width = coords.width - target[0].getBoundingClientRect().width;
  let height = coords.height - target[0].getBoundingClientRect().height;

  elem.style.left = randomCoords(0, width) + "px";
  elem.style.top = randomCoords(0, height) + "px";
}

