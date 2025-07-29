// Student: Hana Fitria Ganesa

export function kalkulator(angka1, angka2, operator) {
    if (Number.isInteger(angka1) && Number.isInteger(angka2)) {
        switch (operator) {
            case `+`:
                return angka1 + angka2;
            case `-`:
                return angka1 - angka2;
            case `/`:
                return angka1 / angka2;
            case `*`:
                return angka1 * angka2;
            default:
                return `Operator tidak valid!`;
        }
    } else if (Number.isInteger(angka1) == false) {
        return `Angka pertama tidak valid!`;
    } else {
        return `Angka kedua tidak valid!`;
    }
}

// try git revert