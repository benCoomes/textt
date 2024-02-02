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

  let decrypted = ""

   for (let index = 0; index < input.length; index++) {
    let char = input.charCodeAt(index)
    let shift = password.charCodeAt(index%password.length) - 97 + 1

    let decChar = ''
    if (char >=48 && char <= 57) {
      decChar = decryptNumber(char, shift)
    } else if (char >= 65 && char <= 90) {
      decChar = decryptUppercase(char, shift)
    } else if (char >= 97 && char <= 122) {
      decChar = decryptLowercase(char, shift)
    } else {
      decChar = decryptSymbol(char, shift)
    }

    decrypted += String.fromCharCode(decChar)
   }

   return decrypted
}

function decryptUppercase(char, shift) {
    return decrypt(char, shift, 26, 65)
  }
  
  function decryptLowercase(char, shift) {
    return decrypt(char, shift, 26, 97)
  }
  
  function decryptNumber(char, shift) {
    return decrypt(char, shift, 10, 48)
  }
  
  function decryptSymbol(char, shift) {
    if (char >= 32 && char <= 47) {
      return decrypt(char, shift, 15, 32)
    } else if (char >= 58 && char <= 64) {
      return decrypt(char, shift, 7, 58)
    } else if (char >=  91 && char <= 96) {
      return decrypt(char, shift, 6, 91)
    } else if (char >= 123 && char <= 126) {
      return decrypt(char, shift, 4, 123)
    } else {
      // we don't know what to do, return original
      return char
    }
  }
    
function decrypt(char, shift, len, start) {
    return ((char + (len-(shift%len)) - start) % len) + start
}