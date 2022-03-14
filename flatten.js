const flatten = function(str) {
  let newPassword = '';
  for (let x = 0; x < str.length; x++) {
    switch(str[x]) {
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
        newPassword += str[x];
    }
  }
  return newPassword;
}
module.exports = flatten;