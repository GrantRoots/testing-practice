function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    let splitString = string.split('')
    let reversed = splitString.reverse()
    return reversed.join('')
}

export { capitalize, reverseString }