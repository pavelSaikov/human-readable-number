module.exports = function toReadable(number) {
    let digits = new Map([
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine']
    ]);

    if (number >= 0 && number <= 9) return digits.get(number)

    let simpleDoubleDigits = new Map([
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen']
    ]);

    if (number >= 10 && number <= 19) return simpleDoubleDigits.get(number);

    let doubleDigits = new Map([
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety']
    ]);

    let textRepresentationOfNumber = '';

    let copyNumber = number;

    if (copyNumber % 100 >= 10 && copyNumber % 100 <= 19) {
        textRepresentationOfNumber = simpleDoubleDigits.get(copyNumber % 100);

        copyNumber /= 100;
        copyNumber = Math.trunc(copyNumber);

    } else {
        if (copyNumber % 10 != 0) {
            textRepresentationOfNumber += digits.get(copyNumber % 10);
        }

        copyNumber /= 10;
        copyNumber = Math.trunc(copyNumber);

        if (copyNumber % 10 != 0) {
            if (textRepresentationOfNumber.length != 0) {
                textRepresentationOfNumber = doubleDigits.get((copyNumber % 10) * 10) + ' ' + textRepresentationOfNumber;
            } else {
                textRepresentationOfNumber = doubleDigits.get((copyNumber % 10) * 10);
            }
        }

        copyNumber /= 10;
        copyNumber = Math.trunc(copyNumber);
    }

    if (copyNumber == 0) return textRepresentationOfNumber;

    if (textRepresentationOfNumber.length != 0) {
        textRepresentationOfNumber = digits.get(copyNumber) + ' hundred ' + textRepresentationOfNumber;
    } else {
        textRepresentationOfNumber = digits.get(copyNumber) + ' hundred'
    }

    return textRepresentationOfNumber;
}