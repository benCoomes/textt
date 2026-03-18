const input = document.getElementById('input-plaintext');
const output = document.getElementById('input-modifiedtext');

input.addEventListener('input', updateValue);

function updateValue(e) {
  output.value = transformText(input.value);
}

function transformText(input) {
  let modifiedText = "";

  for (let i = 0; i < input.length; i++) {
    let charCode = input.charCodeAt(i);
    let binary = charCode.toString(2).padStart(8, '0');
    if (i > 0) modifiedText += " ";
    modifiedText += binary;
  }

  return modifiedText;
}
