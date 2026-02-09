export declare class SmilesDrawer {
    constructor(moleculeOptions?: {}, reactionOptions?: {});
    static apply(moleculeOptions?: {}, reactionOptions?: {}, attribute?: string, theme?: string, successCallback?: null, errorCallback?: null): void;
    apply(attribute?: string, theme?: string, successCallback?: null, errorCallback?: null): void;
    /**
     * Draw the smiles to the target.
     * @param {String} smiles The SMILES to be depicted.
     * @param {*} target The target element.
     * @param {String} theme The theme.
     * @param {?CallableFunction} successCallback The function called on success.
     * @param {?CallableFunction} errorCallback The function called on error.
     * @param {?Number[]|Object} weights The weights for the gaussians.
     */
    draw(smiles: any, target: any, theme?: string, successCallback?: null, errorCallback?: null, weights?: null): void;
    drawMolecule(smiles: any, target: any, theme: any, weights: any, callback: any): void;
    drawReaction(smiles: any, target: any, theme: any, settings: any, weights: any, callback: any): void;
    svgToCanvas(svg: any, canvas?: null): null;
    svgToImg(svg: any, img?: null): null;
    /**
     *
     * @param {HTMLImageElement|HTMLCanvasElement|SVGElement} element
     * @param {SVGElement} svg
     * @returns {{w: Number, h: Number}} The width and height.
     */
    getDimensions(element: any, svg?: null): {
        w: any;
        h: any;
    };
}
//# sourceMappingURL=SmilesDrawer.d.ts.map