// module.exports = function check(str, bracketsConfig) {
//
//   const openedBrackets = [];
//   const closedBrackets =[];
//   // циклом выделить все открытые и все закрытые скобки в отдельныe массивы из параметра bracketsConfig
//   for (let i = 0; i < bracketsConfig.length; i++) {
//     openedBrackets.push(bracketsConfig[i][0]);
//     closedBrackets.push(bracketsConfig[i][1]);
//   }
//
//   const toBeClosed = []; //для стека открытых скобок
//
//   for (let i = 0; i < str.length; i++) {
//   //если скобка закрытая (сравнивается i-тый элемент str со всеми элементами openedBrackets и если совпадения нет, то выдается -1.
//     // в противном случае выдастся индекс совпадающего элемента)
//     if(closedBrackets.indexOf(str[i]) !== -1 && toBeClosed.length) {
// 			//Если скобка закрытая, то нужно проверить соответствует ли она последней незакрытой из toBeClosed.
//       //Если да, то сделать pop из toBeClosed
//       //Если нет, то начать новую итерацию через continue
//       let lastNotClosed = toBeClosed[toBeClosed.length - 1]; //Последний элемент toBeClosed
//       // Индекс последнего lastNotClosed в массиве bracketsConfig.
//       // Такой же индекс должен быть у текущего элемента если он соответсвует lastNotClosed
//       const openedBracketIndex = openedBrackets.indexOf(lastNotClosed);
//       if(closedBrackets[openedBracketIndex] === str[i]) {
//         toBeClosed.pop();
//         continue;
//       }
//     }
//     // Если скобка либо не соответствует lastNotClosed, либо открытая при проверке
//     // Если скобка открыая, то push в toBeClosed
//     if(openedBrackets.indexOf(str[i]) !== -1) {
//     	toBeClosed.push(str[i]);
//     }
//     // Если нет, то вернуть false
//     else {
//     return false;
//     }
//   }
//   if(toBeClosed.length > 0) {
//     return false;
//   }
//   else {
//   return true;
//   }
// }

module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(let i = 0; i < str.length; i ++) {
    if(str[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      for(let j = 0; j < bracketsConfig.length; j ++) {
        if(str[i] === bracketsConfig[j][0]) {
          stack.push(bracketsConfig[j][1]);
          break;
        } else {
          if(j === bracketsConfig.length - 1) {
            return false;
          }
        }
      }
    }
  }
  return stack.length === 0;
};

// module.exports = function check(str, bracketsConfig) {
//   let open = [];
//   let close = [];
//   let stack = [];
//   bracketsConfig.forEach((item) => {
//     open.push(item[0]);
//     close.push(item[1]);
//   });
//   for(let i = 0; i < str.length; i++) {
//     let closeIndex = close.indexOf(str[i]);
//     if(closeIndex !== -1 && stack.length) {
//       if(stack[stack.length - 1] === open[closeIndex]) {
//         stack.pop();
//       }
//     }
//     else if(open.indexOf(str[i]) !== -1) {
//       stack.push(str[i]);
//     }
//     else {
//       return false;
//     }
//   }
//   return stack.length === 0;
// }