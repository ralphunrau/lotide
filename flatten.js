let password = process.argv.slice(2);

function obfuscate(str) {
  let newPassword = '';
  let password = str[0];
  for (let x = 0; x < password.length; x++) {
    switch(password[x]) {
      case 'a':
        newPassword += '4';
        break;
      case 'e':
        newPassword +='3';
        break;
      case 'o':
        newPassword +='0';
        break;
      case 'l':
        newPassword +='1';
        break;
      default:
        newPassword += password[x];
    }
  }
  return newPassword;
}

console.log(obfuscate(password));