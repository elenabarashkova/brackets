module.exports = function check(str, bracketsConfig) {
     
  const openedBrackets = [];
  const closedBrackets =[]; 
  // циклом выделить все открытые и все закрытые скобки в отдельныe массивы из параметра bracketsConfig
  for (let i = 0; i < bracketsConfig.length; i++) {
    openedBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
  } 
  
  const toBeClosed = []; //для стека открытых скобок
  
  for (let i = 0; i < str.length; i++) {
  //если скобка закрытая (сравнивается i-тый элемент str со всеми элементами openedBrackets и если совпадения нет, то выдается -1. в противном случае выдастся индекс совпадающего элемента)
    if(closedBrackets.indexOf(str[i]) !== -1 && toBeClosed.length) {
			//Если скобка закрытая, то нужно проверить соответствует ли она последней незакрытой из toBeClosed. 
      //Если да, то сделать pop из toBeClosed
      //Если нет, то начать новую итерацию через continue
      let lastNotClosed = toBeClosed[toBeClosed.length - 1]; //Последний элемент toBeClosed
      // Индекс последнего lastNotClosed в массиве bracketsConfig. 
      // Такой же индекс должен быть у текущего элемента если он соответсвует lastNotClosed
      const openedBracketIndex = openedBrackets.indexOf(lastNotClosed);
      if(closedBrackets[openedBracketIndex] === str[i]) {
        toBeClosed.pop();
        continue;
      }
    }
    // Если скобка либо не соответствует lastNotClosed, либо открытая при проверке
    // Если скобка открыая, то push в toBeClosed 
    if(openedBrackets.indexOf(str[i]) !== -1) {
    	toBeClosed.push(str[i]);
    }
    // Если нет, то вернуть false
    else {
    return false;
    }
  }
  if(toBeClosed.length > 0) {
    return false;
  }
  else {
  return true;
  } 
}
