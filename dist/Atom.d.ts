export interface IBracket {
    hcount?: number;
    charge?: ("--" | "-" | "+" | "++")[];
    isotope?: number;
    chirality?: string;
    element?: string;
    class?: number;
}
interface IPseudoElement {
    element: string;
    count: number;
    hydrogenCount: number;
    previousElement: string;
    charge: number;
}
interface IRingbond {
    id: number;
    bondType: string;
}
export declare class Atom {
    idx: number | null;
    element: string;
    drawExplicit: boolean;
    ringbonds: IRingbond[];
    rings: number[];
    bondType: string;
    branchBond: string | null;
    isBridge: boolean;
    isBridgeNode: boolean;
    originalRings: number[];
    bridgedRing: number | null;
    anchoredRings: number[];
    bracket: IBracket | null;
    plane: number;
    attachedPseudoElements: {
        [key: string]: IPseudoElement;
    };
    hasAttachedPseudoElements: boolean;
    isDrawn: boolean;
    isConnectedToRing: boolean;
    neighbouringElements: string[];
    isPartOfAromaticRing: boolean;
    bondCount: number;
    chirality: string;
    isStereoCenter: boolean;
    priority: number;
    mainChain: boolean;
    hydrogenDirection: "up" | "down";
    subtreeDepth: number;
    hasHydrogen: boolean;
    class?: number;
    /**
     * The constructor of the class Atom.
     *
     * @param {String} element The one-letter code of the element.
     * @param {String} [bondType='-'] The type of the bond associated with this atom.
     */
    constructor(element: string, bondType?: string);
    /**
     * Adds a neighbouring element to this atom.
     *
     * @param {String} element A string representing an element.
     */
    addNeighbouringElement(element: string): void;
    /**
     * Attaches a pseudo element (e.g. Ac) to the atom.
     * @param {String} element The element identifier (e.g. Br, C, ...).
     * @param {String} previousElement The element that is part of the main chain (not the terminals that are converted to the pseudo element or concatinated).
     * @param {Number} [hydrogenCount=0] The number of hydrogens for the element.
     * @param {Number} [charge=0] The charge for the element.
     */
    attachPseudoElement(element: string, previousElement: string, hydrogenCount?: number, charge?: number): void;
    /**
     * Returns the attached pseudo elements sorted by hydrogen count (ascending).
     *
     * @returns {Object} The sorted attached pseudo elements.
     */
    getAttachedPseudoElements(): {
        [key: string]: IPseudoElement;
    };
    /**
     * Returns the number of attached pseudo elements.
     *
     * @returns {Number} The number of attached pseudo elements.
     */
    getAttachedPseudoElementsCount(): number;
    /**
     * Returns the number of attached pseudo elements.
     *
     * @returns {Number} The number of attached pseudo elements.
     */
    isHeteroAtom(): boolean;
    /**
     * Defines this atom as the anchor for a ring. When doing repositionings of the vertices and the vertex associated with this atom is moved, the center of this ring is moved as well.
     *
     * @param {Number} ringId A ring id.
     */
    addAnchoredRing(ringId: number): void;
    /**
     * Returns the number of ringbonds (breaks in rings to generate the MST of the smiles) within this atom is connected to.
     *
     * @returns {Number} The number of ringbonds this atom is connected to.
     */
    getRingbondCount(): number;
    /**
     * Backs up the current rings.
     */
    backupRings(): void;
    /**
     * Restores the most recent backed up rings.
     */
    restoreRings(): void;
    /**
     * Checks whether or not two atoms share a common ringbond id. A ringbond is a break in a ring created when generating the spanning tree of a structure.
     *
     * @param {Atom} atomA An atom.
     * @param {Atom} atomB An atom.
     * @returns {Boolean} A boolean indicating whether or not two atoms share a common ringbond.
     */
    haveCommonRingbond(atomA: Atom, atomB: Atom): boolean;
    /**
     * Check whether or not the neighbouring elements of this atom equal the supplied array.
     *
     * @param {String[]} arr An array containing all the elements that are neighbouring this atom. E.g. ['C', 'O', 'O', 'N']
     * @returns {Boolean} A boolean indicating whether or not the neighbours match the supplied array of elements.
     */
    neighbouringElementsEqual(arr: string[]): boolean;
    /**
     * Get the atomic number of this atom.
     *
     * @returns {Number} The atomic number of this atom.
     */
    getAtomicNumber(): number;
    /**
     * Get the atomic number of this atom.
     *
     * @returns {Number} The atomic number of this atom.
     */
    getMaxBonds(): number;
    /**
     * A map mapping element symbols to their maximum bonds.
     */
    private static readonly maxBonds;
    /**
     * A map mapping element symbols to the atomic number.
     */
    private static readonly atomicNumbers;
    /**
     * A map mapping element symbols to the atomic mass.
     */
    private static readonly mass;
}
export {};
//# sourceMappingURL=Atom.d.ts.map