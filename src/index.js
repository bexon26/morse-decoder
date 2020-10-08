const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrayBinare = [];
    let binare = '';
    count = 0;
    for (let i = 0; i < expr.length; i++) {
        if (count < 9) {
            binare += expr[i];
            count++;
        } else {
            binare += expr[i];
            arrayBinare.push(binare)
            binare = ''
            count = 0;
        }
    }
    let array = arrayBinare.map(item => {
        if (item === '**********') {
            return ' '
        }
        let symbol = '';
        for (let i = 0; i < item.length; i = i + 2) {
            switch (item[i] + item[i + 1]) {
                case '00': break;
                case '10':
                    symbol += '.';
                    break;
                case '11':
                    symbol += '-';
                    break;
            }
        }
        return MORSE_TABLE[symbol]
    })

    return array.join('')
}

module.exports = {
    decode
}