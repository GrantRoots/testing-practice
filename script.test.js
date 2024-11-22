import { capitalize, reverseString } from './script.js'

test('capitalize', () => {
    expect(capitalize('apple')).toBe('Apple')
})

test('reverse sring', () => {
    expect(reverseString('elephant')).toBe('tnahpele')
})