const input = document.getElementById('input-plaintext');
const password = document.getElementById('input-password');
const output = document.getElementById('input-modifiedtext');

input.addEventListener('input', updateValue);
password.addEventListener('input', updateValue);

function updateValue(e) {
  output.value = transformText(input.value, password.value);
}

function transformText(input, password) {
  // todo: what if password is blank?
  let encrypted = ""

   for (let index = 0; index < input.length; index++) {
    let char = input.charCodeAt(index)
    let pwdChar = password.charCodeAt(index%password.length)

    let encChar = ''
    if (char >=48 && char <= 57) {
      encChar = encryptNumber(char, pwdChar)
    } else if (char >= 65 && char <= 90) {
      encChar = encryptUppercase(char, pwdChar)
    } else if (char >= 97 && char <= 122) {
      encChar = encryptLowercase(char, pwdChar)
    } else {
      encChar = encryptSymbol(char, pwdChar)
    }

    encrypted += String.fromCharCode(encChar)
   }

   return encrypted
}

function encryptUppercase(char, pwdChar) {
  // return another uppercase letter (A = 65)
  return (char + pwdChar) % 26 + 65
}

function encryptLowercase(char, pwdChar) {
  return (char + pwdChar) % 26 + 97
}

function encryptNumber(char, pwdChar) {
  return (char + pwdChar) % 10 + 48
}

function encryptSymbol(char, pwdChar) {
  if (char >= 32 && char <= 47) {
    return (char + pwdChar) % 16 + 32
  } else if (char >= 58 && char <= 64) {
    return (char + pwdChar) % 7 + 58
  } else if (char >=  91 && char <= 96) {
    return (char + pwdChar) % 6 + 91
  } else if (char >= 123 && char <= 126) {
    return (char + pwdChar) % 4 + 123
  } else {
    // we don't know what to do, return original
    return char
  }
}
  