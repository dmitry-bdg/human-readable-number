module.exports = function toReadable(number) {
    const numbersToWords = {
        firstBlock: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        secondBlock: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        thirdBlock: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundredths: 'hundred'
    };
    const findNumber = Array.from(String(number));

    const getOneNine = (number) => {
        return numbersToWords.firstBlock[number % 10];
    };
    const getTenNineteenNine = (number) => {
        if (Number(findNumber[1]) === 0) {
            return numbersToWords.thirdBlock[Number(findNumber[0])]
        } else {
            return numbersToWords.thirdBlock[Number(findNumber[0])] + ' ' + numbersToWords.firstBlock[number % 10];
        }
    };


    if (findNumber.length === 1) {
        return getOneNine(number);
    }
    if (findNumber.length === 2 && Number(findNumber[0]) === 1) {
        return numbersToWords.secondBlock[number % 10];
    } else if (findNumber.length === 2) {
        return getTenNineteenNine(number);
    }
    if (findNumber.length === 3) {
        if (Number(findNumber[1]) === 0 && Number(findNumber[2]) === 0) {
            return numbersToWords.firstBlock[Number(findNumber[0])] + ' ' + numbersToWords.hundredths;
        } else if (Number(findNumber[1]) === 0) {
            return numbersToWords.firstBlock[Number(findNumber[0])] + ' ' + numbersToWords.hundredths + ' ' + numbersToWords.firstBlock[Number(findNumber[2])];
        } else if (Number(findNumber[1]) === 1) {
            return numbersToWords.firstBlock[Number(findNumber[0])] + ' ' + numbersToWords.hundredths + ' ' + numbersToWords.secondBlock[number % 10];
        } else if (Number(findNumber[2]) === 0) {
            return numbersToWords.firstBlock[Number(findNumber[0])] + ' ' + numbersToWords.hundredths + ' ' + numbersToWords.thirdBlock[Number(findNumber[1])]
        } else {
            return numbersToWords.firstBlock[Number(findNumber[0])] + ' ' + numbersToWords.hundredths + ' ' + numbersToWords.thirdBlock[Number(findNumber[1])] + ' ' + numbersToWords.firstBlock[number % 10];
        }
    }
};
