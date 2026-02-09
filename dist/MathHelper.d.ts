/**
 * A static class containing helper functions for math-related tasks.
 */
export declare class MathHelper {
    /** The factor to convert degrees to radians. */
    private static get radFactor();
    /** The factor to convert radians to degrees. */
    private static get degFactor();
    /** Two times PI. */
    static get twoPI(): number;
    /**
     * Rounds a value to a given number of decimals.
     *
     * @static
     * @param {number} value A number.
     * @param {number} decimals The number of decimals.
     * @returns {number} A number rounded to a given number of decimals.
     */
    static round(value: number, decimals?: number): number;
    /**
     * Returns the means of the angles contained in an array. In radians.
     *
     * @static
     * @param {number[]} arr An array containing angles (in radians).
     * @returns {number} The mean angle in radians.
     */
    static meanAngle(arr: number[]): number;
    /**
     * Returns the inner angle of a n-sided regular polygon.
     *
     * @static
     * @param {number} n Number of sides of a regular polygon.
     * @returns {number} The inner angle of a given regular polygon.
     */
    static innerAngle(n: number): number;
    /**
     * Returns the circumradius of a n-sided regular polygon with a given side-length.
     *
     * @static
     * @param {number} s The side length of the regular polygon.
     * @param {number} n The number of sides.
     * @returns {number} The circumradius of the regular polygon.
     */
    static polyCircumradius(s: number, n: number): number;
    /**
     * Returns the apothem of a regular n-sided polygon based on its radius.
     *
     * @static
     * @param {number} r The radius.
     * @param {number} n The number of edges of the regular polygon.
     * @returns {number} The apothem of a n-sided polygon based on its radius.
     */
    static apothem(r: number, n: number): number;
    /**
     * Returns the apothem from the side length of a regular polygon.
     *
     * @static
     * @param {number} s The side length.
     * @param {number} n The number of sides.
     * @returns {number} The apothem calculated from the side length.
     */
    static apothemFromSideLength(s: number, n: number): number;
    /**
     * The central angle of a n-sided regular polygon. In radians.
     *
     * @static
     * @param {number} n The number of sides of the regular polygon.
     * @returns {number} The central angle of the n-sided polygon in radians.
     */
    static centralAngle(n: number): number;
    /**
     * Converts radians to degrees.
     *
     * @static
     * @param {number} rad An angle in radians.
     * @returns {number} The angle in degrees.
     */
    static toDeg(rad: number): number;
    /**
     * Converts degrees to radians.
     *
     * @static
     * @param {number} deg An angle in degrees.
     * @returns {number} The angle in radians.
     */
    static toRad(deg: number): number;
    /**
     * Returns the parity of the permutation (1 or -1)
     * @param {(Array<number>|Uint8Array)} arr An array containing the permutation.
     * @returns {number} The parity of the permutation (1 or -1), where 1 means even and -1 means odd.
     */
    static parityOfPermutation(arr: Array<number> | Uint8Array): number;
}
//# sourceMappingURL=MathHelper.d.ts.map