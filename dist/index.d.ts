/**
 * smiles-drawer - Main library entry point
 *
 * Exports all public APIs for rendering SMILES strings as 2D molecular structure diagrams.
 */
import { Drawer } from "./Drawer";
import { parse } from "./Parser";
import { ReactionParser } from "./ReactionParser";
import { SvgDrawer } from "./SvgDrawer";
import { ReactionDrawer } from "./ReactionDrawer";
import { GaussDrawer } from "./GaussDrawer";
import type { ParseTreeNode } from "./types";
export declare const SmilesDrawer: {
    Version: string;
    Drawer: typeof Drawer;
    parse: typeof parse;
    SvgDrawer: typeof SvgDrawer;
    ReactionDrawer: typeof ReactionDrawer;
    ReactionParser: typeof ReactionParser;
    GaussDrawer: typeof GaussDrawer;
    /**
     * Cleans a SMILES string by removing invalid characters.
     * @param smiles The SMILES string to clean
     * @returns The cleaned SMILES string
     */
    clean(smiles: string): string;
    /**
     * Applies the drawer to all elements matching the selector.
     * @param options Drawer options
     * @param selector CSS selector for canvas elements with data-smiles attribute
     * @param themeName Theme name (default: "light")
     * @param onError Error callback
     */
    apply(options: any, selector?: string, themeName?: string, onError?: ((err: Error) => void) | null): void;
};
export { Drawer, parse, SvgDrawer, ReactionDrawer, ReactionParser, GaussDrawer };
export type { ParseTreeNode };
//# sourceMappingURL=index.d.ts.map