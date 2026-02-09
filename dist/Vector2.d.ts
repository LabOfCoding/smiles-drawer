/**
 * A class representing a 2D vector.
 *
 * @property {Number} x The x component of the vector.
 * @property {Number} y The y component of the vector.
 *
 */
export declare class Vector2 {
    x: number;
    y: number;
    /**
     * The constructor of the class Vector2.
     *
     * @param x The initial x coordinate value or, if the single argument, a Vector2 object
     * @param y The initial y coordinate value
     */
    constructor(x?: number | Vector2, y?: number);
    /**
     * Clones this vector and returns the clone.
     */
    clone(): Vector2;
    /**
     * Returns a string representation of this vector.
     */
    toString(): string;
    /**
     * Add the x and y coordinate values of a vector to the x and y coordinate values of this vector.
     */
    add(vec: Vector2): Vector2;
    /**
     * Subtract the x and y coordinate values of a vector from the x and y coordinate values of this vector.
     */
    subtract(vec: Vector2): Vector2;
    /**
     * Divide the x and y coordinate values of this vector by a scalar.
     */
    divide(scalar: number): Vector2;
    /**
     * Multiply the x and y coordinate values of this vector by the values of another vector.
     */
    multiply(v: Vector2): Vector2;
    /**
     * Multiply the x and y coordinate values of this vector by a scalar.
     */
    multiplyScalar(scalar: number): Vector2;
    /**
     * Inverts this vector. Same as multiply(-1.0).
     */
    invert(): Vector2;
    /**
     * Returns the angle of this vector in relation to the coordinate system.
     */
    angle(): number;
    /**
     * Returns the euclidean distance between this vector and another vector.
     */
    distance(vec: Vector2): number;
    /**
     * Returns the squared euclidean distance between this vector and another vector.
     */
    distanceSq(vec: Vector2): number;
    /**
     * Checks whether or not this vector is in a clockwise or counter-clockwise rotation
     */
    clockwise(vec: Vector2): -1 | 0 | 1;
    /**
     * Checks whether or not this vector is in a clockwise or counter-clockwise rotation
     * compared to another vector in relation to an arbitrary third vector.
     */
    relativeClockwise(center: Vector2, vec: Vector2): -1 | 0 | 1;
    /**
     * Rotates this vector by a given number of radians around the origin.
     */
    rotate(angle: number): Vector2;
    /**
     * Rotates this vector around another vector.
     */
    rotateAround(angle: number, vec: Vector2): Vector2;
    /**
     * Rotate a vector around a given center to the same angle as another vector.
     */
    rotateTo(vec: Vector2, center: Vector2, offsetAngle?: number): Vector2;
    /**
     * Rotates the vector away from a specified vector around a center.
     */
    rotateAwayFrom(vec: Vector2, center: Vector2, angle: number): void;
    /**
     * Returns the angle in radians used to rotate this vector away from a given vector.
     */
    getRotateAwayFromAngle(vec: Vector2, center: Vector2, angle: number): number;
    /**
     * Returns the angle in radians used to rotate this vector towards a given vector.
     */
    getRotateTowardsAngle(vec: Vector2, center: Vector2, angle: number): number;
    /**
     * Gets the angles between this vector and another vector around a common center of rotation.
     */
    getRotateToAngle(vec: Vector2, center: Vector2): number;
    /**
     * Checks whether a vector lies within a polygon spanned by a set of vectors.
     */
    isInPolygon(polygon: Vector2[]): boolean;
    /**
     * Returns the length of this vector.
     */
    length(): number;
    /**
     * Returns the square of the length of this vector.
     */
    lengthSq(): number;
    /**
     * Normalizes this vector.
     */
    normalize(): Vector2;
    /**
     * Returns a normalized copy of this vector.
     */
    normalized(): Vector2;
    /**
     * Calculates which side of a line spanned by two vectors this vector is.
     */
    whichSide(vecA: Vector2, vecB: Vector2): number;
    /**
     * Checks whether or not this vector is on the same side of a line as another vector.
     */
    sameSideAs(vecA: Vector2, vecB: Vector2, vecC: Vector2): boolean;
    /**
     * Adds two vectors and returns the result as a new vector.
     */
    static add(vecA: Vector2, vecB: Vector2): Vector2;
    /**
     * Subtracts one vector from another and returns the result as a new vector.
     */
    static subtract(vecA: Vector2, vecB: Vector2): Vector2;
    /**
     * Multiplies two vectors (value by value) and returns the result.
     */
    static multiply(vecA: Vector2, vecB: Vector2): Vector2;
    /**
     * Multiplies a vector by a scalar and returns the result.
     */
    static multiplyScalar(vec: Vector2, scalar: number): Vector2;
    /**
     * Returns the midpoint of a line spanned by two vectors.
     */
    static midpoint(vecA: Vector2, vecB: Vector2): Vector2;
    /**
     * Returns the normals of a line spanned by two vectors.
     */
    static normals(vecA: Vector2, vecB: Vector2): [Vector2, Vector2];
    /**
     * Returns the unit vectors of a line spanned by two vectors.
     */
    static units(vecA: Vector2, vecB: Vector2): [Vector2, Vector2];
    /**
     * Divides a vector by another vector and returns the result as new vector.
     */
    static divide(vecA: Vector2, vecB: Vector2): Vector2;
    /**
     * Divides a vector by a scalar and returns the result as new vector.
     */
    static divideScalar(vecA: Vector2, s: number): Vector2;
    /**
     * Returns the dot product of two vectors.
     */
    static dot(vecA: Vector2, vecB: Vector2): number;
    /**
     * Returns the angle between two vectors.
     */
    static angle(vecA: Vector2, vecB: Vector2): number;
    /**
     * Returns the angle between two vectors based on a third vector in between.
     */
    static threePointAngle(vecA: Vector2, vecB: Vector2, vecC: Vector2): number;
    /**
     * Returns the scalar projection of a vector on another vector.
     */
    static scalarProjection(vecA: Vector2, vecB: Vector2): number;
    /**
     * Returns the average vector (normalized) of the input vectors.
     */
    static averageDirection(vecs: Vector2[]): Vector2;
}
//# sourceMappingURL=Vector2.d.ts.map