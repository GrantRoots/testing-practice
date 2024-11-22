import { capitalize, reverseString, calculator, caesarCipher } from './script.js'

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