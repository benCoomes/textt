const input = document.getElementById('input-plaintext');
const password = document.getElementById('input-password');
const output = document.getElementById('input-modifiedtext');

input.addEventListener('input', updateValue);
password.addEventListener('input', updateValue);

function updateValue(e) {
  output.value = transformText(input.value, password.value);
}

function transformText(input, password) {
  if (password.length <= 0) {
    return input
  }

  let encrypted = ""

   for (let index = 0; index < input.length; index++) {
    let char = input.charCodeAt(index)
    let shift = password.charCodeAt(index%password.length) - 97 + 1

    let encChar = ''
    if (char >=48 && char <= 57) {
      encChar = encryptNumber(char, shift)
    } else if (char >= 65 && char <= 90) {
      encChar = encryptUppercase(char, shift)
    } else if (char >= 97 && char <= 122) {
      encChar = encryptLowercase(char, shift)
    } else {
      encChar = encryptSymbol(char, shift)
    }

    encrypted += String.fromCharCode(encChar)
   }

   return encrypted
}

function encryptUppercase(char, shift) {
  return encrypt(char, shift, 26, 65)
}

function encryptLowercase(char, shift) {
  return encrypt(char, shift, 26, 97)
}

function encryptNumber(char, shift) {
  return encrypt(char, shift, 10, 48)
}

function encryptSymbol(char, shift) {
  if (char >= 32 && char <= 47) {
    return encrypt(char, shift, 15, 32)
  } else if (char >= 58 && char <= 64) {
    return encrypt(char, shift, 7, 58)
  } else if (char >=  91 && char <= 96) {
    return encrypt(char, shift, 6, 91)
  } else if (char >= 123 && char <= 126) {
    return encrypt(char, shift, 4, 123)
  } else {
    // we don't know what to do, return original
    return char
  }
}
  
function encrypt(char, shift, len, start) {
  return ((char + (shift%len) - start) % len) + start
}