export class SvgWrapper {
    static createUnicodeCharge(n: any): string;
    static createUnicodeSubscript(n: any): string;
    static createUnicodeSuperscript(n: any): string;
    static replaceNumbersWithSubscript(text: any): any;
    static measureText(text: any, fontSize: any, fontFamily: any, lineHeight?: number): {
        width: number;
        height: number;
    };
    /**
     * Convert an SVG to a canvas. Warning: This happens async!
     *
     * @param {SVGElement} svg
     * @param {HTMLCanvasElement} canvas
     * @param {Number} width
     * @param {Number} height
     * @param {CallableFunction} callback
     * @returns {HTMLCanvasElement} The input html canvas element after drawing to.
     */
    static svgToCanvas(svg: SVGElement, canvas: HTMLCanvasElement, width: number, height: number, callback?: CallableFunction): HTMLCanvasElement;
    /**
     * Convert an SVG to a canvas. Warning: This happens async!
     *
     * @param {SVGElement} svg
     * @param {HTMLImageElement} canvas
     * @param {Number} width
     * @param {Number} height
     */
    static svgToImg(svg: SVGElement, img: any, width: number, height: number): void;
    /**
     * Create an SVG element containing text.
     * @param {String} text
     * @param {*} themeManager
     * @param {*} options
     * @returns {{svg: SVGElement, width: Number, height: Number}} The SVG element containing the text and its dimensions.
     */
    static writeText(text: string, themeManager: any, fontSize: any, fontFamily: any, maxWidth?: number): {
        svg: SVGElement;
        width: number;
        height: number;
    };
    constructor(themeManager: any, target: any, options: any, clear?: boolean);
    svg: any;
    container: SVGGElement | null;
    opts: any;
    uid: string;
    gradientId: number;
    backgroundItems: any[];
    paths: any[];
    vertices: any[];
    gradients: any[];
    highlights: any[];
    drawingWidth: number;
    drawingHeight: number;
    halfBondThickness: number;
    themeManager: any;
    maskElements: any[];
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
    style: SVGStyleElement;
    constructSvg(): SVGGElement | null | undefined;
    /**
     * Add a background to the svg.
     */
    addLayer(svg: any): void;
    /**
     * Create a linear gradient to apply to a line
     *
     * @param {Line} line the line to apply the gradiation to.
     */
    createGradient(line: Line): string;
    /**
     * Create a tspan element for sub or super scripts that styles the text
     * appropriately as one of those text types.
     *
     * @param {String} text the actual text
     * @param {String} shift the type of text, either 'sub', or 'super'
     */
    createSubSuperScripts(text: string, shift: string): SVGTSpanElement;
    /**
     * Determine drawing dimensiosn based on vertex positions.
     *
     * @param {Vertex[]} vertices An array of vertices containing the vertices associated with the current molecule.
     */
    determineDimensions(vertices: Vertex[]): void;
    updateViewbox(scale: any): void;
    /**
     * Draw an svg ellipse as a ball.
     *
     * @param {Number} x The x position of the text.
     * @param {Number} y The y position of the text.
     * @param {String} elementName The name of the element (single-letter).
     */
    drawBall(x: number, y: number, elementName: string): void;
    /**
     * @param {Line} line the line object to create the wedge from
     */
    drawWedge(line: Line): void;
    drawAtomHighlight(x: any, y: any, color?: string): void;
    /**
     * Draw a dashed wedge on the canvas.
     *
     * @param {Line} line A line.
     */
    drawDashedWedge(line: Line): void;
    /**
     * Draws a debug dot at a given coordinate and adds text.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordindate.
     * @param {String} [debugText=''] A string.
     * @param {String} [color='#f00'] A color in hex form.
     */
    drawDebugPoint(x: number, y: number, debugText?: string, color?: string): void;
    /**
     * Draws a debug text message at a given position
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     * @param {String} text The debug text.
     */
    drawDebugText(x: number, y: number, text: string): void;
    /**
     * Draws a ring.
     *
     * @param {x} x The x coordinate of the ring.
     * @param {y} r The y coordinate of the ring.
     * @param {s} s The size of the ring.
     */
    drawRing(x: any, y: any, s: any): void;
    /**
     * Draws a line.
     *
     * @param {Line} line A line.
     * @param {Boolean} dashed defaults to false.
     * @param {String} gradient gradient url. Defaults to null.
     */
    drawLine(line: Line, dashed?: boolean, gradient?: string, linecap?: string): void;
    /**
     * Draw a point.
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
     * @param {Number} totalVertices The total number of vertices in the graph.
     * @param {Object} attachedPseudoElement A map with containing information for pseudo elements or concatinated elements. The key is comprised of the element symbol and the hydrogen count.
     * @param {String} attachedPseudoElement.element The element symbol.
     * @param {Number} attachedPseudoElement.count The number of occurences that match the key.
     * @param {Number} attachedPseudoElement.hyrogenCount The number of hydrogens attached to each atom matching the key.
     */
    drawText(x: number, y: number, elementName: string, hydrogens: number, direction: string, isTerminal: boolean, charge: number, isotope: number, totalVertices: number, attachedPseudoElement?: {
        element: string;
        count: number;
        hyrogenCount: number;
    }): void;
    write(text: any, direction: any, x: any, y: any, singleVertex: any): void;
    /**
     * Draw the wrapped SVG to a canvas.
     * @param {HTMLCanvasElement} canvas The canvas element to draw the svg to.
     */
    toCanvas(canvas: HTMLCanvasElement, width: any, height: any): void;
}
import { Line } from "./Line";
//# sourceMappingURL=SvgWrapper.d.ts.map