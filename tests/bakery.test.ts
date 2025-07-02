import {div, echo, getRandomNumber, reverseArray} from "../src/utils/tools";
import {addCategory, isCategoryExist, removeCategory} from "../src/firebase/firebaseDBService";
import { getApps, deleteApp } from 'firebase/app';
import {Category} from "../src/utils/shop-types";

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


describe('BakeryShop.dbService', () => {
    afterAll(async () => {
        await Promise.all(getApps().map(deleteApp));
    });

    test('isCategoryExists', async () => {
        await expect(isCategoryExist('bread')).resolves.toBeTruthy();
        await expect(isCategoryExist('milk')).resolves.not.toBeTruthy();
    })

    test('allCategoriesExist', async () => {
        const categories = ['biscuits', 'bread', 'cake', 'croissants', 'pizza', 'pretzels', 'sweets', 'tart']
        const arrayPromise = await Promise.all(categories.map(category => isCategoryExist(category)))
        console.log(arrayPromise)
        const allExist = arrayPromise.every(Boolean)
        expect(allExist).toBe(true)
    })

    test('removeCategory', async () => {
        const category = 'cake'
        await removeCategory(category)
        await expect(isCategoryExist(category)).resolves.toBe(false)

    })

    test('add category', async () => {
        const category:Category = {category_name: 'cake'}
        await addCategory(category)
        await expect(isCategoryExist(category.category_name)).resolves.toBe(true)


    })
})

