

import {add} from "../src/lib/mylib.mjs"

describe('testing mylib', () => {
    test('it can add', () => {
        expect(add(2,2)).toBe(4);
    })
})
