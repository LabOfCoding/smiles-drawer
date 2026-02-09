export namespace SmilesDrawer {
    export let Version: string;
    export { Drawer };
    export { Parser };
    export { SvgDrawer };
    export { ReactionDrawer };
    export { ReactionParser };
    export { GaussDrawer };
    export function clean(smiles: any): any;
    export function apply(options: any, selector?: string, themeName?: string, onError?: null): void;
    export function parse(smiles: any, successCallback: any, errorCallback: any): void;
    export function parseReaction(reactionSmiles: any, successCallback: any, errorCallback: any): void;
}
import { Drawer } from "./Drawer";
import * as Parser from "./Parser";
import { SvgDrawer } from "./SvgDrawer";
import { ReactionDrawer } from "./ReactionDrawer";
import { ReactionParser } from "./ReactionParser";
import { GaussDrawer } from "./GaussDrawer";
//# sourceMappingURL=app.d.ts.map