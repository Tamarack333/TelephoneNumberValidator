function telephoneCheck(str) {
  if(/1*-*\s*\(*\d{3}\)*-*\s*\d{3}-*\s*\d{4}/.test(str)){
    var digitCount = str.replace(/[^0-9]/g, '').length;
    if (digitCount === 11){
      if (str[0] !== "1"){
        return false;
      }
    }
    if(digitCount > 11){
      return false
    }
    if("(" === str[0] || "(" === str[1] || "(" === str[2]){
      if (str[str.indexOf("(")+4] !== ")"){
        return false
      }
    }
    if(/\)/.test(str)){
      if (str[str.indexOf(")")-4] !== "("){
        return false
      }
    }
    return true
  }
  return false
}
