module.exports = function check(str, bracketsConfig) {
    const openedBrackets = [];
    const closedBrackets =[]; 
     for (let i = 0; i < bracketsConfig.length; i++) {
      openedBrackets.push(bracketsConfig[i][0]);
      closedBrackets.push(bracketsConfig[i][1]);
    } 
    
    for (let i = 0; i < bracketsConfig.length; i++) {
        if(str[0] === bracketsConfig[i][1]) {
      return false;
      }
    }
    
    const toBeClosed = [];
     
    for (let i = 0; i < str.length; i++) {
      if(openedBrackets.indexOf(str[i]) !== -1) {
        toBeClosed.push(str[i]);
      } 
      else {
        let lastNotClosed = toBeClosed.pop();
        const openedBracketIndex = openedBrackets.indexOf(lastNotClosed);
        if(closedBrackets[openedBracketIndex] !== str[i]) {
          return false;
        }
      }   
    }
    if(toBeClosed.length > 0) {
      return false;
    }
    else {
    return true;
    }  
}
