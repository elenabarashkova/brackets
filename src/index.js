module.exports = function check(str, bracketsConfig) {
    // 1 - string check
    if(str[0] === ')' || str[0] === '}' || str[0] === ']') {
        return false;   
    }

    const roundO = '(';
    const roundC = ')';
    const squareO = '[';
    const squareC = ']';
    const figuredO = '{';
    const figuredC = '}';
    let toBeClosed = [];

    for (let i = 0; i < str.length; i++) {
        if(str[i] === roundO || str[i] === squareO || str[i] === figuredO) {
            toBeClosed.push(str[i]);
        } 
        else {
            let lastNotClosed = toBeClosed.pop();
            if(lastNotClosed === roundO && str[i] != roundC || lastNotClosed === squareO && str[i] != squareC || lastNotClosed === figuredO && str[i] != figuredC) {
            return false;
            }
        }
    }
    if(toBeClosed.length > 0) {
        return false;
    } else {
        return true;
    }   
}
