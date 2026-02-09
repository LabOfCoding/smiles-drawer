import { Line } from "./Line";
import { Vertex } from "./Vertex";
import { Ring } from "./Ring";
import { ThemeManager } from "./ThemeManager";
/**
 * Drawing options interface for CanvasWrapper
 */
interface DrawingOptions {
    width: number;
    height: number;
    bondThickness: number;
    bondLength: number;
    shortBondLength: number;
    bondSpacing: number;
    padding: number;
    fontSizeLarge: number;
    fontSizeSmall: number;
    halfFontSizeLarge: number;
    fifthFontSizeSmall: number;
    quarterFontSizeLarge: number;
    [key: string]: any;
}
/**
 * A class wrapping a canvas element.
 *
 * @property {HTMLCanvasElement} canvas The HTML element for the canvas associated with this CanvasWrapper instance.
 * @property {CanvasRenderingContext2D} ctx The CanvasRenderingContext2D of the canvas associated with this CanvasWrapper instance.
 * @property {ThemeManager} themeManager Theme manager for getting colors.
 * @property {DrawingOptions} opts The SmilesDrawer options.
 * @property {Number} drawingWidth The width of the canvas.
 * @property {Number} drawingHeight The height of the canvas.
 * @property {Number} offsetX The horizontal offset required for centering the drawing.
 * @property {Number} offsetY The vertical offset required for centering the drawing.
 * @property {String} fontLarge The large font size in pt.
 * @property {String} fontSmall The small font size in pt.
 */
export declare class CanvasWrapper {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private themeManager;
    private opts;
    drawingWidth: number;
    drawingHeight: number;
    offsetX: number;
    offsetY: number;
    private fontLarge;
    private fontSmall;
    private hydrogenWidth;
    private halfHydrogenWidth;
    private halfBondThickness;
    private devicePixelRatio;
    private backingStoreRatio;
    private ratio;
    private colors;
    /**
     * The constructor for the class CanvasWrapper.
     *
     * @param {(String|HTMLElement)} target The canvas id or the canvas HTMLElement.
     * @param {ThemeManager} themeManager Theme manager for setting proper colors.
     * @param {DrawingOptions} options The smiles drawer options object.
     */
    constructor(target: string | HTMLCanvasElement, themeManager: ThemeManager, options: DrawingOptions);
    /**
     * Update the width and height of the canvas
     *
     * @param {Number} width
     * @param {Number} height
     */
    updateSize(width: number, height: number): void;
    /**
     * Sets a provided theme.
     *
     * @param {Object} theme A theme from the smiles drawer options.
     */
    setTheme(theme: Record<string, string>): void;
    /**
     * Scale the canvas based on vertex positions.
     *
     * @param {Vertex[]} vertices An array of vertices containing the vertices associated with the current molecule.
     */
    scale(vertices: Vertex[]): void;
    /**
     * Resets the transform of the canvas.
     */
    reset(): void;
    /**
     * Returns the hex code of a color associated with a key from the current theme.
     *
     * @param {String} key The color key in the theme (e.g. C, N, BACKGROUND, ...).
     * @returns {String} A color hex value.
     */
    getColor(key: string): string;
    /**
     * Draws a circle to a canvas context.
     * @param {Number} x The x coordinate of the circles center.
     * @param {Number} y The y coordinate of the circles center.
     * @param {Number} radius The radius of the circle
     * @param {String} color A hex encoded color.
     * @param {Boolean} [fill=true] Whether to fill or stroke the circle.
     * @param {Boolean} [debug=false] Draw in debug mode.
     * @param {String} [debugText=''] A debug message.
     */
    drawCircle(x: number, y: number, radius: number, color: string, fill?: boolean, debug?: boolean, debugText?: string): void;
    /**
     * Draw a line to a canvas.
     *
     * @param {Line} line A line.
     * @param {Boolean} [dashed=false] Whether or not the line is dashed.
     * @param {Number} [alpha=1.0] The alpha value of the color.
     */
    drawLine(line: Line, dashed?: boolean, alpha?: number): void;
    /**
     * Draw a wedge on the canvas.
     *
     * @param {Line} line A line.
     * @param {Number} width The wedge width.
     */
    drawWedge(line: Line, width?: number): void;
    /**
     * Draw a dashed wedge on the canvas.
     *
     * @param {Line} line A line.
     */
    drawDashedWedge(line: Line): void;
    /**
     * Draws a debug text message at a given position
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     * @param {String} text The debug text.
     */
    drawDebugText(x: number, y: number, text: string): void;
    /**
     * Draw a ball to the canvas.
     *
     * @param {Number} x The x position of the text.
     * @param {Number} y The y position of the text.
     * @param {String} elementName The name of the element (single-letter).
     */
    drawBall(x: number, y: number, elementName: string): void;
    /**
     * Draw a point to the canvas.
     *
     * @param {Number} x The x position of the point.
     * @param {Number} y The y position of the point.
     * @param {String} elementName The name of the element (single-letter).
     */
    drawPoint(x: number, y: number, elementName: string): void;
    /**
     * Draw a text to the canvas.
     *
     * @param {Number} x The x position of the text.
     * @param {Number} y The y position of the text.
     * @param {String} elementName The name of the element (single-letter).
     * @param {Number} hydrogens The number of hydrogen atoms.
     * @param {String} direction The direction of the text in relation to the associated vertex.
     * @param {Boolean} isTerminal A boolean indicating whether or not the vertex is terminal.
     * @param {Number} charge The charge of the atom.
     * @param {Number} isotope The isotope number.
     * @param {Number} vertexCount The number of vertices in the molecular graph.
     * @param {Object} attachedPseudoElement A map with containing information for pseudo elements or concatinated elements. The key is comprised of the element symbol and the hydrogen count.
     * @param {String} attachedPseudoElement.element The element symbol.
     * @param {Number} attachedPseudoElement.count The number of occurences that match the key.
     * @param {Number} attachedPseudoElement.hyrogenCount The number of hydrogens attached to each atom matching the key.
     */
    drawText(x: number, y: number, elementName: string, hydrogens: number, direction: string, isTerminal: boolean, charge: number, isotope: number, vertexCount: number, attachedPseudoElement?: Record<string, any>): void;
    /**
     * Translate the integer indicating the charge to the appropriate text.
     * @param {Number} charge The integer indicating the charge.
     * @returns {String} A string representing a charge.
     */
    getChargeText(charge: number): string;
    /**
     * Draws a dubug dot at a given coordinate and adds text.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordindate.
     * @param {String} [debugText=''] A string.
     * @param {String} [color='#f00'] A color in hex form.
     */
    drawDebugPoint(x: number, y: number, debugText?: string, color?: string): void;
    /**
     * Draws a ring inside a provided ring, indicating aromaticity.
     *
     * @param {Ring} ring A ring.
     */
    drawAromaticityRing(ring: Ring): void;
    /**
     * Clear the canvas.
     *
     */
    clear(): void;
}
export {};
//# sourceMappingURL=CanvasWrapper.d.ts.map