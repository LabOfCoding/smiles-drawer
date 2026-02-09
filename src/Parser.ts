/**
 * TypeScript wrapper for the PEG.js generated parser.
 *
 * The actual parser implementation is in Parser.js (auto-generated).
 * This file provides TypeScript type definitions.
 */

import type { ParseTreeNode } from './types';

// Declare require for importing CommonJS module
declare function require(moduleName: string): any;

// Import the generated parser
const ParserModule = require('./Parser.js');

/**
 * Custom syntax error class for SMILES parsing errors.
 */
export class SyntaxError extends Error {
  expected: any;
  found: any;
  location: any;

  constructor(message: string, expected: any, found: any, location: any) {
    super(message);
    this.name = 'SyntaxError';
    this.expected = expected;
    this.found = found;
    this.location = location;
  }
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
export function parse(input: string): ParseTreeNode {
  return ParserModule.parse(input);
}

// Re-export the SyntaxError from the module
export const ParseSyntaxError = ParserModule.SyntaxError;
