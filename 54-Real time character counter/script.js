document
  .getElementById("textInput")
  .addEventListener("input", updateCharacterCount);

function updateCharacterCount() {
  const textInput = document.getElementById("textInput");
  const counter = document.getElementById("counter");

  const characterCount = textInput.value.length;
  counter.innerText = `Characters: ${characterCount}`;
}
