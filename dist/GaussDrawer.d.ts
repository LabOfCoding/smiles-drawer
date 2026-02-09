import { Vector2 } from "./Vector2";
type ColorMapType = string[] | null;
export declare class GaussDrawer {
    private points;
    private weights;
    private width;
    private height;
    private sigma;
    private interval;
    private colormap;
    private opacity;
    private normalized;
    private canvas;
    private context;
    /**
     * The constructor of the class Graph.
     *
     * @param {Vector2[]} points The centres of the gaussians.
     * @param {number[]} weights The weights / amplitudes for each gaussian.
     */
    constructor(points: Vector2[], weights: number[], width: number, height: number, sigma?: number, interval?: number, colormap?: ColorMapType, opacity?: number, normalized?: boolean);
    setFromArray(arr_points: [number, number][], arr_weights: number[]): void;
    /**
     * Compute and draw the gaussians.
     */
    draw(): void;
    /**
     * Get the canvas as an HTML image.
     *
     * @param {(image: HTMLImageElement) => void} callback
     */
    getImage(callback?: (image: HTMLImageElement) => void): void;
    /**
     * Get the canvas as an SVG element.
     *
     * @returns {string} The SVG representation of the canvas
     */
    getSVG(): SVGElement | null;
    /**
     * Set the colour at a specific point on the canvas.
     *
     * @param {Vector2} vec The pixel position on the canvas.
     * @param {number} r The red colour-component.
     * @param {number} g The green colour-component.
     * @param {number} b The blue colour-component.
     */
    private setPixel;
}
export {};
//# sourceMappingURL=GaussDrawer.d.ts.map