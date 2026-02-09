/**
 * A class representing an edge.
 *
 * @property {Number} id The id of this edge.
 * @property {Number} sourceId The id of the source vertex.
 * @property {Number} targetId The id of the target vertex.
 * @property {Number} weight The weight of this edge. That is, the degree of the bond (single bond = 1, double bond = 2, etc).
 * @property {String} [bondType='-'] The bond type of this edge.
 * @property {Boolean} [isPartOfAromaticRing=false] Whether or not this edge is part of an aromatic ring.
 * @property {Boolean} [center=false] Whether or not the bond is centered. For example, this affects straight double bonds.
 * @property {String} [wedge=''] Wedge direction. Either '', 'up' or 'down'
 */
export declare class Edge {
    id: number | null;
    sourceId: number;
    targetId: number;
    weight: number;
    bondType: string;
    isPartOfAromaticRing: boolean;
    center: boolean;
    wedge: string;
    /**
     * The constructor for the class Edge.
     *
     * @param sourceId A vertex id.
     * @param targetId A vertex id.
     * @param weight The weight of the edge (default is 1).
     */
    constructor(sourceId: number, targetId: number, weight?: number);
    /**
     * Set the bond type of this edge. This also sets the edge weight.
     * @param bondType The type of bond.
     */
    setBondType(bondType: string): void;
    /**
     * An object mapping the bond type to the number of bonds.
     *
     * @returns The object containing the map.
     */
    static get bonds(): {
        [key: string]: number;
    };
}
//# sourceMappingURL=Edge.d.ts.map