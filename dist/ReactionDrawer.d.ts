export declare class ReactionDrawer {
    /**
     * The constructor for the class ReactionDrawer.
     *
     * @param {Object} options An object containing reaction drawing specitic options.
     * @param {Object} moleculeOptions An object containing molecule drawing specific options.
     */
    constructor(options: any, moleculeOptions: any);
    /**
     * Draws the parsed reaction smiles data to a canvas element.
     *
     * @param {Object} reaction The reaction object returned by the reaction smiles parser.
     * @param {(String|SVGElement)} target The id of the HTML canvas element the structure is drawn to - or the element itself.
     * @param {String} themeName='dark' The name of the theme to use. Built-in themes are 'light' and 'dark'.
     * @param {?Object} weights=null The weights for reactants, agents, and products.
     * @param {String} textAbove='{reagents}' The text above the arrow.
     * @param {String} textBelow='' The text below the arrow.
     * @param {?Object} weights=null The weights for reactants, agents, and products.
     * @param {Boolean} infoOnly=false Only output info on the molecule without drawing anything to the canvas.
     *
     * @returns {SVGElement} The svg element
     */
    draw(reaction: any, target: any, themeName?: string, weights?: null, textAbove?: string, textBelow?: string, infoOnly?: boolean): any;
    getPlus(): SVGSVGElement;
    getArrowhead(): SVGMarkerElement;
    getCDArrowhead(): SVGMarkerElement;
    getArrow(): SVGSVGElement;
}
//# sourceMappingURL=ReactionDrawer.d.ts.map