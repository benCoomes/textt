const input = document.getElementById('input-plaintext');
const output = document.getElementById('input-modifiedtext');

input.addEventListener('input', updateValue);

function updateValue(e) {
  output.value = transformText(input.value);
}

function transformText(input) {
  let modifiedText = "";
  let tokens = input.trim().split(/\s+/);

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token === "") continue;
    let charCode = parseInt(token, 2);
    if (isNaN(charCode)) continue;
    modifiedText += String.fromCharCode(charCode);
  }

  return modifiedText;
}
