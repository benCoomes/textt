const input = document.getElementById('input-plaintext');
const output = document.getElementById('input-modifiedtext');

input.addEventListener('input', updateValue);

function updateValue(e) {
  output.value = transformText(input.value);
}

function transformText(input) {
  let modifiedText = "";
  let ints = input.split(" ");
  
  for (let i = 0; i < ints.length; i++) {
    let charCode = parseInt(ints[i]);
    let char = String.fromCharCode(charCode);
    modifiedText += char;
  } 
  
  return modifiedText
}