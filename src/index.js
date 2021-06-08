module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) {
    return false;
  }
  let length = str.length;
  let count = 0;
  for(let j = 0; j < length / 2; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i].join(''), '');
    }
    count++;
  }
  if(str.length > 0) return false
  else return true
}
