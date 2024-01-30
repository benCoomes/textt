const input = document.getElementById('input-plaintext');
const output = document.getElementById('input-modifiedtext');

input.addEventListener('input', updateValue);

function updateValue(e) {
  output.value = transformText(input.value);
}

function transformText(input) {
  let modifiedText = "";
  
  for (let i = 0; i < input.length; i++) {
    if (['a', 'e', 'i', 'o', 'u', 'y'].includes(input[i])) {
      modifiedText += 'o';
    } else if (['A', 'E', 'I', 'O', 'U', 'Y'].includes(input[i])) {
      modifiedText += 'O';
    } else {
      modifiedText += input[i];
    }
  }
  
  return modifiedText
}