const CHECKS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

function getDigits(cuit) {
    const digits = [];

    for (i = 0; i < cuit.length; i++) {
        digits.push(Number.parseInt(cuit[i]));
    }

    return digits;
}

function getSumProd(digits) {
    let sumProd = 0;

    for (i = 0; i < CHECKS.length; i++) {
        sumProd = sumProd + ((CHECKS[i] * digits[i]));
    }

    return sumProd;
}

module.exports = (cuit) => {
    // Regex for cuit with dash ^\d{2}\-\d{8}\-\d{1}$
    // Regex for cuit without dash ^\d{11}$
    if (new RegExp(/^\d{2}\-\d{8}\-\d{1}$/).test(cuit) || new RegExp(/^\d{11}$/).test(cuit)) {
        const formatCuit = cuit.replace(/-/gi, '');

        const DIGITS = getDigits(formatCuit);
        const lastDigit = DIGITS[10];
        
        const verificationResult1 = getSumProd(DIGITS);

        const verificationResult2 = Math.floor(verificationResult1 / 11);

        const verificationResult3 = verificationResult1 - (verificationResult2 * 11);

        let verificador = 0;
        
        if (verificationResult3 !== 0) {
            verificador = 11 - verificationResult3;
        }

        return verificador === lastDigit;
    } else {
        throw Error('Formato de CUIT invalido.');
    }
};