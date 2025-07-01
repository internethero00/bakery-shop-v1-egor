import {div, echo, getRandomNumber, reverseArray} from "../src/utils/tools";
import {isCategoryExist} from "../src/firebase/firebaseDBService";

describe('BakeryShop.tools', () => {

    let arr: number[];
    beforeEach(() => {
        arr = [1, 2, 3];
    })

    test('getRandomNumber test', () => {
        expect(getRandomNumber(1, 1)).toBe(1);
        expect(getRandomNumber(1, 10)).toBeLessThan(10)
        expect(getRandomNumber(1, 10)).not.toBeGreaterThan(10)
        expect(getRandomNumber(9, 10)).toBe(9)
    })

    test('revers array', () => {
        expect(reverseArray(arr)).toEqual([3, 2, 1]);
    })

    test('div', () => {
        expect(div(10, 5)).toBe(2);
        // expect(div(12, 5)).toBe(2);
        expect(() => div(5, 0)).toThrow('Dividing by zero');
    })

    test('async function echo', () => {
        expect(echo('Hello')).resolves.toBe('Hello');
        expect(() => echo('')).rejects.toThrow('Error');
    })

})

// describe('BakeryShop.dbService', () => {
//     test('isCategoryExists', () => {
//         expect(isCategoryExist('bread')).resolves.toBeTruthy();
//         expect(isCategoryExist('milk')).resolves.not.toBeTruthy();
//     })
// })

