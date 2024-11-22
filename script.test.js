import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './script.js'

test('capitalize', () => {
    expect(capitalize('apple')).toBe('Apple')
})

test('reverse sring', () => {
    expect(reverseString('elephant')).toBe('tnahpele')
})

test('calculator', () => {
    expect(calculator.multiply(1, 3)).toBe(3)
})

test('Caesar Cipher', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('Analyze Array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})