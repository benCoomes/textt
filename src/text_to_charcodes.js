const input = document.getElementById('input-plaintext');
const output = document.getElementById('input-modifiedtext');

input.addEventListener('input', updateValue);

function updateValue(e) {
  output.value = transformText(input.value);
}

function transformText(input) {
  let modifiedText = "";
  
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let charCode = char.charCodeAt(0);
    modifiedText += charCode + " ";
  }

  return modifiedText
}