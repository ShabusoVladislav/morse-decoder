const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    let signsArr = [];
    let k = 0;  //counter for array with . and -
    for (let i = 0; i < expr.length / 10; i++) {    //in every element of signsArr coded letter
        let signsStr = '';
        for (let j = 0; j < 10; j += 2) {
            if (`${expr[10*i+j]}${expr[10*i+j+1]}` === '10') {
                signsStr += '.';
            } else if (`${expr[10*i+j]}${expr[10*i+j+1]}` === '11') {
                signsStr += '-';
            } else if (`${expr[10*i+j]}` === '*') {
                signsStr += ' ';
                j += 8;
            }
        }
        signsArr[k++] = signsStr;
    }

    for (let i = 0; i < signsArr.length; i++) { //write to the str by letters
        if (signsArr[i] === ' ') {  //checking space
            str += ' ';
            continue;
        }
        for (let key in MORSE_TABLE) {
            if (key === signsArr[i]) {
                str += MORSE_TABLE[key];
                break;
            }
        }
    }
    return str;
}

module.exports = {
    decode
}