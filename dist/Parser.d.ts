/**
 * TypeScript wrapper for the PEG.js generated parser.
 *
 * The actual parser implementation is in Parser.js (auto-generated).
 * This file provides TypeScript type definitions.
 */
import type { ParseTreeNode } from './types';
/**
 * Custom syntax error class for SMILES parsing errors.
 */
export declare class SyntaxError extends Error {
    expected: any;
    found: any;
    location: any;
    constructor(message: string, expected: any, found: any, location: any);
}
/**
 * Parses a SMILES string into a parse tree.
 *
 * @param {string} input The SMILES string to parse.
 * @returns {ParseTreeNode} The parsed tree structure.
 * @throws {SyntaxError} If the SMILES string is invalid.
 *
 * @example
 * ```typescript
 * import { parse } from './Parser';
 *
 * const tree = parse('c1ccccc1'); // benzene
 * console.log(tree.atom); // 'c'
 * ```
 */
export declare function parse(input: string): ParseTreeNode;
export declare const ParseSyntaxError: any;
//# sourceMappingURL=Parser.d.ts.map