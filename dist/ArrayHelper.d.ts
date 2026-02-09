interface ContainsOptions<T> {
    value: any;
    property?: keyof T;
    func?: (item: T) => boolean;
}
interface AtomicNumberItem {
    vertexId: number;
    atomicNumber: string;
}
/**
 * A static class containing helper functions for array-related tasks.
 */
export declare class ArrayHelper {
    /**
     * Clone an array or an object. If an object is passed, a shallow clone will be created.
     *
     * @static
     * @template T
     * @param {T} arr The array or object to be cloned.
     * @returns {T} A clone of the array or object.
     */
    static clone<T>(arr: T): T;
    /**
     * Returns a boolean indicating whether or not the two arrays contain the same elements.
     * Only supports 1d, non-nested arrays.
     *
     * @static
     * @template T
     * @param {T[]} arrA An array.
     * @param {T[]} arrB An array.
     * @returns {boolean} A boolean indicating whether or not the two arrays contain the same elements.
     */
    static equals<T>(arrA: T[], arrB: T[]): boolean;
    /**
     * Returns a string representation of an array. If the array contains objects with an id property, the id property is printed for each of the elements.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @returns {string} A string representation of the array.
     */
    static print<T extends {
        id?: any;
    }>(arr: T[]): string;
    /**
     * Run a function for each element in the array. The element is supplied as an argument for the callback function
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @param {(item: T) => void} callback The callback function that is called for each element.
     */
    static each<T>(arr: T[], callback: (item: T) => void): void;
    /**
     * Return the array element from an array containing objects, where a property of the object is set to a given value.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @param {keyof T} property A property contained within an object in the array.
     * @param {string | number} value The value of the property.
     * @returns {T | undefined} The array element matching the value.
     */
    static get<T>(arr: T[], property: keyof T, value: string | number): T | undefined;
    /**
     * Checks whether or not an array contains a given value.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @param {ContainsOptions<T>} options The options for the contains check.
     * @returns {boolean} A boolean whether or not the array contains a value.
     */
    static contains<T>(arr: T[], options: ContainsOptions<T>): boolean;
    /**
     * Returns an array containing the intersection between two arrays.
     *
     * @static
     * @template T
     * @param {T[]} arrA An array.
     * @param {T[]} arrB An array.
     * @returns {T[]} The intersecting values.
     */
    static intersection<T>(arrA: T[], arrB: T[]): T[];
    /**
     * Returns an array of unique elements contained in an array.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @returns {T[]} An array of unique elements.
     */
    static unique<T extends string | number>(arr: T[]): T[];
    /**
     * Count the number of occurrences of a value in an array.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @param {T} value A value to be counted.
     * @returns {number} The number of occurrences of a value in the array.
     */
    static count<T>(arr: T[], value: T): number;
    /**
     * Toggles the value of an array.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @param {T} value A value to be toggled.
     * @returns {T[]} The toggled array.
     */
    static toggle<T>(arr: T[], value: T): T[];
    /**
     * Remove a value from an array.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @param {T} value A value to be removed.
     * @returns {T[]} A new array with the element with a given value removed.
     */
    static remove<T>(arr: T[], value: T): T[];
    /**
     * Remove a value from an array with unique values.
     *
     * @static
     * @template T
     * @param {T[]} arr An array.
     * @param {T} value A value to be removed.
     * @returns {T[]} An array with the element with a given value removed.
     */
    static removeUnique<T>(arr: T[], value: T): T[];
    /**
     * Remove all elements contained in one array from another array.
     *
     * @static
     * @template T
     * @param {T[]} arrA The array to be filtered.
     * @param {T[]} arrB The array containing elements that will be removed from the other array.
     * @returns {T[]} The filtered array.
     */
    static removeAll<T>(arrA: T[], arrB: T[]): T[];
    /**
     * Merges two arrays and returns the result.
     *
     * @static
     * @template T
     * @param {T[]} arrA An array.
     * @param {T[]} arrB An array.
     * @returns {T[]} The merged array.
     */
    static merge<T>(arrA: T[], arrB: T[]): T[];
    /**
     * Checks whether or not an array contains all the elements of another array.
     *
     * @static
     * @template T
     * @param {T[]} arrA An array.
     * @param {T[]} arrB An array.
     * @returns {boolean} A boolean indicating whether or not both array contain the same elements.
     */
    static containsAll<T>(arrA: T[], arrB: T[]): boolean;
    /**
     * Sort an array of atomic number information.
     *
     * @static
     * @param {AtomicNumberItem[]} arr An array of vertex ids with their associated atomic numbers.
     * @returns {AtomicNumberItem[]} The array sorted by atomic number.
     */
    static sortByAtomicNumberDesc(arr: AtomicNumberItem[]): AtomicNumberItem[];
    /**
     * Copies an n-dimensional array.
     *
     * @static
     * @template T
     * @param {T[]} arr The array to be copied.
     * @returns {T[]} The copy.
     */
    static deepCopy<T>(arr: T[]): T[];
}
export {};
//# sourceMappingURL=ArrayHelper.d.ts.map