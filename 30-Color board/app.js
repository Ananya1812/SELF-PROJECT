const container = document.getElementById("container");
var colors = [
  "#FF0000",
  "#FFFF00",
  "#00FF00",
  "#00FFFF",
  "#0000FF",
  "#FF00FF",
  "#FF4500",
  "#FFA500",
  "#FF1493",
  "#00FF7F",
  "#000000",
  "#0D0D0D",
  "#1A1A1A",
  "#262626",
  "#333333",
  "#404040",
  "#4D4D4D",
  "#595959",
  "#666666",
  "#737373",
  "#808080",
  "#8C8C8C",
  "#999999",
  "#A6A6A6",
  "#B3B3B3",
  "#BFBFBF",
  "#CCCCCC",
  "#D9D9D9",
  "#E6E6E6",
  "#F2F2F2",
  "#FFFFFF",
  "#FF0000",
  "#FF3300",
  "#FF6600",
  "#FF9900",
  "#FFCC00",
  "#FFFF00",
  "#CCFF00",
  "#99FF00",
  "#66FF00",
  "#33FF00",
  "#00FF00",
  "#00FF33",
  "#00FF66",
  "#00FF99",
  "#00FFCC",
  "#00FFFF",
  "#00CCFF",
  "#0099FF",
  "#0066FF",
  "#0033FF",
  "#0000FF",
  "#3300FF",
  "#6600FF",
  "#9900FF",
  "#CC00FF",
  "#FF00FF",
  "#FF00CC",
  "#FF0099",
  "#FF0066",
  "#FF0033",
  "#FF3300",
  "#FF6600",
  "#FF9900",
  "#FFCC00",
  "#FFFF00",
  "#CCFF00",
  "#99FF00",
  "#66FF00",
  "#33FF00",
  "#00FF00",
  "#00FF33",
  "#00FF66",
  "#00FF99",
  "#00FFCC",
  "#00FFFF",
  "#00CCFF",
  "#0099FF",
  "#0066FF",
  "#0033FF",
  "#0000FF",
  "#3300FF",
  "#6600FF",
  "#9900FF",
  "#CC00FF",
  "#FF00FF",
  "#FF00CC",
  "#FF0099",
  "#FF0066",
  "#FF0033",
  "#FF3300",
  "#FF6600",
  "#FF9900",
  "#FFCC00",
  "#FFFF00",
  "#CCFF00",
  "#99FF00",
  "#66FF00",
  "#33FF00",
  "#00FF00",
  "#00FF33",
  "#00FF66",
  "#00FF99",
  "#00FFCC",
  "#00FFFF",
  "#00CCFF",
  "#0099FF",
  "#0066FF",
  "#0033FF",
  "#0000FF",
];
var square = 500;
for (let i = 0; i < square; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => SetColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function SetColor(element) {
  var color = RandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 3px ";
}

function RandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
