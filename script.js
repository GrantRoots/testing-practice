function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split('').reverse().join('')
}

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    divide(a, b) {
        return a / b
    },
    multiply(a, b) {
        return a * b
    }
}

function caesarCipher(string, shiftFactor) {
    //get ascii values
    function isLetter(char) {
        const charCode = char.charCodeAt(0);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            return true
        }
        return false
    }
    let shiftedString = ''
    for (let i = 0; i < string.length; i++) {
        if (isLetter(string[i]) === true) {
            let asciiValue = string.charCodeAt(i)
            if (asciiValue >= 65 && asciiValue <= 90) {
                for (let i = 0; i < shiftFactor; i++) {
                    if (asciiValue + 1 > 90) {
                        asciiValue = 64
                    }
                    asciiValue += 1
                }
                shiftedString += String.fromCharCode(asciiValue)
            }
            if (asciiValue >= 97 && asciiValue <= 122) {
                for (let i = 0; i < shiftFactor; i++) {
                    if (asciiValue + 1 > 122) {
                        asciiValue = 96
                    }
                    asciiValue += 1
                }
                shiftedString += String.fromCharCode(asciiValue)
            }
        }
        else { shiftedString += string[i] }
    }
    return shiftedString
}

function analyzeArray(array) {
    function average(array) {
        let total = 0
        array.forEach(num => {
            total += num
        })
        return total / array.length
    }
    function min(array) {
        let minValue = array[0]
        array.forEach(num => {
            if (num < minValue) {
                minValue = num
            }
        })
        return minValue
    }
    function max() {
        let maxValue = array[0]
        array.forEach(num => {
            if (num > maxValue) {
                maxValue = num
            }
        })
        return maxValue
    }
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length,
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }