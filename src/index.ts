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

const canUseDOM =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement;

export const SmilesDrawer = {
  Version: "2.1.7",
  Drawer,
  parse,
  SvgDrawer,
  ReactionDrawer,
  ReactionParser,
  GaussDrawer,

  /**
   * Cleans a SMILES string by removing invalid characters.
   * @param smiles The SMILES string to clean
   * @returns The cleaned SMILES string
   */
  clean(smiles: string): string {
    return smiles.replace(/[^A-Za-z0-9@.+-?!()[\]{}\/\\=#$:*]/g, "");
  },

  /**
   * Applies the drawer to all elements matching the selector.
   * @param options Drawer options
   * @param selector CSS selector for canvas elements with data-smiles attribute
   * @param themeName Theme name (default: "light")
   * @param onError Error callback
   */
  apply(
    options: any,
    selector: string = "canvas[data-smiles]",
    themeName: string = "light",
    onError: ((err: Error) => void) | null = null
  ): void {
    const smilesDrawer = new Drawer(options);
    const elements = document.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      const smiles = element.getAttribute("data-smiles");
      if (smiles) {
        try {
          const tree = parse(smiles);
          smilesDrawer.draw(tree, element as HTMLCanvasElement, themeName, false);
        } catch (err) {
          if (onError) {
            onError(err as Error);
          }
        }
      }
    }
  },
};

// Export for browser global
if (canUseDOM) {
  (window as any).SmilesDrawer = SmilesDrawer;
}

// Named exports for ES modules
export { Drawer, parse, SvgDrawer, ReactionDrawer, ReactionParser, GaussDrawer };
export type { ParseTreeNode };
