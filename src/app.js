import {Drawer} from "./Drawer";
import * as Parser from "./Parser";
import {ReactionParser} from "./ReactionParser";
import {SvgDrawer} from "./SvgDrawer";
import {ReactionDrawer} from "./ReactionDrawer";
// import {SmiDrawer} from "./src/SmilesDrawer";
import {GaussDrawer} from "./GaussDrawer";

const canUseDOM =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement;

export const SmilesDrawer = {
  Version: "1.0.0",
  Drawer,
  Parser,
  SvgDrawer,
  ReactionDrawer,
  ReactionParser,
  GaussDrawer,

  clean(smiles) {
    return smiles.replace(/[^A-Za-z0-9@.+-?!()[\]{}\/\\=#$:*]/g, "");
  },

  apply(
    options,
    selector = "canvas[data-smiles]",
    themeName = "light",
    onError = null
  ) {
    const smilesDrawer = new Drawer(options);
    const elements = document.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      this.parse(
        element.getAttribute("data-smiles"),
        (tree) => {
          smilesDrawer.draw(tree, element, themeName, false);
        },
        (err) => {
          if (onError) {
            onError(err);
          }
        }
      );
    }
  },

  parse(smiles, successCallback, errorCallback) {
    try {
      if (successCallback) {
        successCallback(Parser.parse(smiles));
      }
    } catch (err) {
      if (errorCallback) {
        errorCallback(err);
      }
    }
  },

  parseReaction(reactionSmiles, successCallback, errorCallback) {
    try {
      if (successCallback) {
        successCallback(ReactionParser.parse(reactionSmiles));
      }
    } catch (err) {
      if (errorCallback) {
        errorCallback(err);
      }
    }
  },
};

if (canUseDOM) {
  window.SmilesDrawer = SmilesDrawer;
}

const input = document.getElementById("input");
const debugCheckbox = document.getElementById("debug");
const bondThicknessInput = document.getElementById("bondThickness");
const textSizeInput = document.getElementById("textSize");
const bondLengthInput = document.getElementById("bondLength");
const shortBondLengthInput = document.getElementById("shortBondLength");
const bondSpacingInput = document.getElementById("bondSpacing");
const sizeInput = document.getElementById("size");
const overlapInput = document.getElementById("overlap");

const options = {
  debug: false,
  atomVisualization: "default",
};

const smilesDrawer = new SmilesDrawer.Drawer(options);
const log = document.getElementById("log");

const chembl = [
  'COc1cccc(c1OC)c2n[nH]c(Cc3ccc(Cl)c(Cl)c3)n2',
    'Cc1cc2c(cc1C)[n+]([O-])c(C#N)c(NS(=O)(=O)c3ccc4ccccc4c3)[n+]2[O-]',
    'Oc1nsc(N2CCCCC2)c1C#N',
    'COc1ccccc1CNS(=O)(=O)c2cc(Br)cc3CC(C)N(C(=O)C)c23',
    'CCNC(=O)[C@@H]1CCCN1C(=O)[C@H](CCCN=C(N)N)NC(=O)[C@H](CC(C)C)NC(=O)[C@@H](CC(C)C)N(C)C(=O)[C@H](Cc2ccc(O)cc2)NC(=O)[C@H](CO)NC(=O)[C@H](Cc3c[nH]c4ccccc34)NC(=O)[C@H](Cc5c[nH]cn5)NC(=O)[C@@H]6CCC(=O)N6',
    'CS(=O)(=O)n1c(\\C=C\\c2cc(Cl)cc(Cl)c2)nc3cc(F)ccc13',
    'COc1c(O)cc2C(=O)Oc3c(O)c(O)cc4C(=O)Oc1c2c34',
    'COc1ccc(\\C=C\\NC(=O)C)c(OC)c1',
    'OC(=O)c1ccc(NC(=O)Nc2nc3ccc(Cl)cc3s2)cc1O',
    'CCOC(=O)CNC(=O)N1CCCC(CNC(=O)c2occc2)C1',
    'COc1ccc(OC)c(NC(=O)CSc2oc(CNC(=O)COc3ccc(Cl)cc3)nn2)c1',
    'CC1(C)CC(O)CC(C)(C)N1CC(O)COCc2ccccc2',
    'COCCOCCOc1ccc(cc1)S(=O)(=O)N(CC(=O)N\\N=C\\2/C(=O)Nc3ccccc23)c4ccc(Cl)cc4',
    'Clc1ccccc1c2nnc3sc(nn23)c4ccncc4',
    'C1CN2C(=Cc3ccccc3C2=N1)c4cccnc4',
    'CC(=O)Nc1ccc2C(=O)CCCc2c1',
    'O[C@H]1C[C@@H]2C[C@H](CC=C)OC(=O)c3c(O)cccc3C[C@@H](C1)O2',
    'CC(C)C[C@H](NC(=O)[C@H]1O[C@@H]1C(=O)N[C@@H](CCCNC(=N)N)C(=O)N2CCC[C@H]2C(=O)N3CCC[C@H]3C(=O)N4CCC[C@H]4C(=O)N[C@@H](CO)C(=O)N)C(=O)N5CCC[C@H]5C(=O)N[C@@H]([C@@H](C)O)C(=O)N',
    'CC(C(=O)N)n1c(cc2cc(CN3CCC(CC3)Nc4ncnc5sc(CC(F)(F)F)cc45)ccc12)C#N',
    'CC(C)(C)C1=CN(C[C@H]2CCCO2)\\C(=N\\C(=O)c3cc(ccc3OCc4ccccc4)C(F)(F)F)\\S1',
    'CC(C)c1ccc(cc1)S(=O)(=O)c2cnc3ccc(C)cc3c2O',
    'Brc1ccc(cc1)C2=CC(c3occc3)n4ncnc4N2',
    'CCCc1ncc(s1)C(=O)O',
    'Cn1c(cc2cc(NC(=O)C3(CCC3)NC(=O)c4ccc5c(C6CCCC6)c(c7ccccn7)n(C)c5c4)ccc12)C(=O)O',
    'NCCc1cn(C2=C(C(=O)NC2=O)c3c[nH]c4ccc(Cl)cc34)c5ccccc15',
    'OC(=O)\\C=C/C(=O)O.C(CNc1cc(OCc2ccccc2)ccn1)COc3cccc(CN4CCCCC4)c3',
    'Fc1ccc(cc1)C2CCN(CCC(C3CC3)C(=O)NCc4cc(cc(c4)C(F)(F)F)C(F)(F)F)CC2',
    'CCOC(=O)C1(Cc2cccc(OC)c2)CCCN(Cc3c(C)nn(C(C)C)c3C)C1',
    'CCOP(=O)(OCC)[C@@H]1C[C@@H](ON1C)n2cc(nn2)c3ccccc3F',
    'COc1cccc(c1)C(=O)NCC(=O)OCC2=CC(=O)N3N=C(C)SC3=N2',
    'COc1ccc(OC)c(NC(=O)c2ccc(cc2)N3C(=O)C4CC=C(C)CC4C3=O)c1',
    'CCC(=O)\\C=C(/C)\\C=C\\CC(C)CCCC(C)(C)OC',
    'Oc1ccc(cc1C(=O)Nc2ccc(c(c2)C(F)(F)F)[N+](=O)[O-])c3ccc(F)cc3F',
    'CC(NC(=O)C1(C)C(C)(C)C1(Cl)Cl)c2ccccc2',
    'COc1ccc(cc1)C2CC(=NN2c3ccc(\\C=N\\NC(=O)c4ccncc4)cc3)c5ccccc5',
    'NCCN1C=CC(=O)C(=C1)O',
    'Cc1c(OS(=O)(=O)c2ccccc2F)cccc1C3CCNCC3',
    'OC1=C(N=C2C=CC(=CN2C1=O)N3CCOCC3)c4nnc(Cc5ccc(F)cc5)s4',
    'CC(C)C[C@H](NC(=O)NCc1ccc(F)cc1)C(=O)N[C@@H](C(C)C)C(=O)N[C@@H](CCCNC(=N)N)C(=O)c2nccs2',
    'O=NN(CC#C)C(=O)NC(CCCCNC(=O)OCc1ccccc1)C(=O)OCc2ccccc2',
    'CSc1ccc(\\C=C(/C#N)\\C(=O)Nc2cccc(C)c2)cc1',
    'CN(C)C[C@H]1C[C@H]2[C@H](O1)c3cc(F)ccc3Sc4ccccc24',
    'C[C@H]1CC[C@]2(C)N1C(=CC2=O)NC(=O)c3ccccc3',
    'CCc1c(C)nc(O)c(N(C)C)c1C(=O)c2cccc(\\C=C\\c3cccnc3)c2',
    'CC(=O)Nc1ccc(SC[C@H](Cc2ccccc2)N3CC[C@@H](O)CCC3=O)cc1',
    'COc1cc2OC(=CC(=O)c2c(OC)c1OC)c3cccc(OC(=O)N4CCN(C)CC4)c3',
    'CCOC(=O)[C@H](Cc1ccccc1)OC(=O)N(C)NC(=O)[C@@H]2CCCN2C(=O)[C@H](C)NC(=O)[C@H](C)NC(=O)C',
    'CN1CCCN(CC1)c2cncc(n2)c3cccc(\\C=C\\C(=O)N)c3',
    'COC(=O)[C@@H](N)[C@H]1CC[C@H](C1)\\N=C(\\C)/N',
    'O=C(N1CCOCC1)\\C(=C\\2/SC=C(N2c3ccccc3)c4ccccc4)\\C#N',
    'CN(C)CCSC1=Nc2sc(C)c(c3ccc(F)cc3)c2C(=O)N1c4ccccc4',
    'Cl.N[C@@H](CCSCCC(=O)NCC(=O)O)C(=O)O',
    'NC(C(=O)NCc1ccccc1)c2nccc3ccccc23',
    'CP(=S)(O)OCC1OC(C=C1)n2cnc3c(N)ncnc23',
    'Nc1nc2c3ccccc3C[C@H](c4ccc5OCOc5c4)c2c6ccccc16',
    'NC(=O)n1ccc2ccc(nc12)N3CCCCC3',
    'OCC[C@H]1C[C@H](O)[C@@H](O)[C@@]2(Cc3ccccc3CCO2)O1',
    'CN(C)CCCCCCCCCNc1c2CCCCc2nc3ccccc13',
    'Oc1ccc(NC(=O)c2cc(NC3CCCC3)ncn2)cc1',
    'Clc1cccc(Cl)c1CO\\N=C\\c2cc[n+](CCC[n+]3ccc(\\C=N\\OCc4c(Cl)cccc4Cl)cc3)cc2',
    'CCOc1ccc2nc(SC[C@]3(C)S[C@@H]4[C@@H](Cl)C(=O)N4[C@H]3C(=O)OC)sc2c1',
    'COc1cccc2c(Nc3ccccc3C)ccnc12',
    'Cl.NC(=N)Nc1nc(cs1)c2ccc(O)c(O)c2',
    'BrC1=C2c3ccc4[nH]ncc4c3C[C@]2(CCC5CC5)CCC1=O',
    'OC(=O)CSc1nc(Cl)cc(Nc2ccc(Nc3ccccc3)cc2)n1',
    'CN1CCN(CC\\C=C/c2ccccc2)CC1',
    'O=C1COc2ccc3ccc(OCC(=O)NCc4ccc(cc4)c5cccc(c5)c6ccc(CN1)cc6)cc3c2',
    'Cc1cc2nnc(c3ccccc3)n2c(C)n1',
    'CC[C@H](C)[C@H](NC(=O)CNC(=O)[C@H](CCCNC(=N)N)NC(=O)[C@H](Cc1ccccc1)NC(=O)[C@@H](NC(=O)[C@H](Cc2cnc[nH]2)NC(=O)[C@H](Cc3cnc[nH]3)NC(=O)[C@H](Cc4ccccc4)NC(=O)[C@@H](N)Cc5ccccc5)[C@@H](C)CC)C(=O)N[C@@H](C(C)C)C(=O)N[C@@H](Cc6cnc[nH]6)C(=O)N[C@@H](C(C)C)C(=O)NCC(=O)N[C@@H](CCCCN)C(=O)N[C@@H]([C@@H](C)O)C(=O)N[C@@H]([C@@H](C)CC)C(=O)N[C@@H](Cc7cnc[nH]7)C(=O)N[C@@H](CCCNC(=N)N)C(=O)N[C@@H](CC(C)C)C(=O)N[C@@H](C(C)C)C(=O)N[C@@H]([C@@H](C)O)C(=O)NCC(=O)O',
    'COc1ccccc1N2CCN(CC2)C(=O)CN3C(=O)n4nc(nc4c5ccccc35)c6ccc(C)cc6',
    'CC[C@H](C)C1=C(O)[N@+]2([O-])Oc3ccc(cc3O[C@]2([C@@H](C)CC)C(=O)N1O)c4c(O)c(O)c(c(OC(=O)C)c4OC(=O)C)c5ccc(OC(=O)C)cc5',
    'COC(=O)C1=C2Nc3ccccc3[C@@]24CCN5[C@@H]6O[C@]78[C@H]9C[C@]%10%11CCO[C@H]%10CCN%12CC[C@]7([C@H]%11%12)c%13cccc(OC)c%13N8C[C@]6(C9)[C@@H]%14OCC[C@]%14(C1)[C@@H]45',
    'CC(C)CCNC(=O)CCc1oc(COc2ccccc2)nn1',
    'CC1=CC(=O)C(=C(O1)c2ccc(cc2)S(=O)(=O)C)Oc3ccc(Br)cc3F',
    'NC(=O)C[C@@H]1CC[C@H](CC1)c2ccc(cc2)N3CCOc4ncnc(N)c4C3=O',
    'Nc1ccc(cc1)S(=O)(=O)Nc2ccc(cc2)C(F)(F)F',
    'OCC(C1CCN(CC1)C(=O)Nc2ccc(Cl)c(Cl)c2)N3CCC(CC3)c4c[nH]c5ccccc45',
    'Clc1cccc(c1)N2CCN(CC2)S(=O)(=O)c3ccc4N(CCc4c3)C(=O)c5ccc(Cl)c(Cl)c5',
    'CC(=O)O[C@H]1C[C@H]2C[C@@]3(CC[C@H]4[C@@](C)(CCC[C@@]4(C)C(=O)O)[C@H]13)[C@H](O)C2=C',
    'CC(O)C1(CNS(=O)(=O)C(F)(F)F)CCN(CC1)S(=O)(=O)c2ccc(Cl)cc2S(=O)(=O)c3ccccc3F',
    'CCNC(=O)NC(=O)CSc1nc2ccccc2n1CC(C)C',
    'Fc1ccc(NC(=O)Cn2cc(c3ccccc23)S(=O)(=O)Cc4cccc(Cl)c4)cc1Cl',
    'CCCCCN(CCCCC)C(=O)N1CCN([C@@H](C1)C(=O)NCCN(C(C)C)C(C)C)C(=O)N(c2ccccc2)c3ccccc3',
    'CCOC(=O)N1C=C(F)C(=O)N(C(=O)C)C1=O',
    'CC(C(=O)NC1CCc2ccccc12)C(=O)NC3C(=O)N(C)c4ccccc4c5ccccc35',
    'Cc1ccc(cc1)N2CCN(CC2)C(=O)CCNC(=O)c3ccc(c(c3)[N+](=O)[O-])S(=O)(=O)C',
    'Cc1nc2ccc(nc2n3c(nnc13)c4cc(ccc4Cl)C5(O)CCOC5)C6CC6',
    'COc1cc(ccc1c2oc(C)nc2)c3nnc4C(CCn34)c5ccc(Cl)c(Cl)c5',
    'CC[C@H](C)[C@H](NC(=O)[C@H](CC(C)C)NC(=O)[C@@H](NC(=O)[C@H](CC(C)C)NC(=O)[C@H](Cc1c[nH]cn1)NC(=O)[C@@H]2CSSC[C@@H](N)C(=O)N[C@@H](CO)C(=O)N[C@@H]3CSSC[C@@H](NC(=O)[C@H](CCC(=O)O)NC(=O)[C@@H](CCCCN)NC(=O)[C@H](CC(=O)O)NC(=O)[C@@H](CCSC)NC(=O)[C@H](CC(C)C)NC(=O)[C@@H](CO)NC(=O)[C@H](CO)NC3=O)C(=O)N[C@@H](C(C)C)C(=O)N[C@H](Cc4ccc(O)cc4)C(=O)N[C@@H](Cc5ccccc5)C(=O)N2)[C@H](C)O)C(=O)N[C@@H](Cc6c[nH]c7ccccc67)C(=O)O',
    'ClCC(=O)N(C\\C=C\\c1ccccc1)c2ccc3OCCOc3c2',
    'CCS(=O)(=O)CCN1CCN(CC1)C2CCC(CC2)C(C)C',
    'CCCS(=O)(=O)CCNCc1oc(cc1)c2ccc3ncnc(Nc4ccc(OCc5cccc(F)c5)c(Cl)c4)c3c2',
    'NS(=O)(=O)c1ccc(NC(=O)\\C=C\\c2cccs2)cc1',
    'CC(C)c1noc(n1)c2ncn3c2CN(C)C(=O)c4c(F)cccc34',
    'Cc1ccc(cc1)S(=O)(=O)CCC(=O)N(CCN2CCOCC2)c3nc4ccccc4s3',
    'CC1(C)C2CC=C(\\C=N\\NC(=O)C3CC3)C1C2',
    'Fc1ccc(cc1)C(=O)NC2CC3CCCC(C2)N3C(=O)NC4CCCCC4',
    'Nc1ncnc2c1nc(SCCP(=O)(O)O)n2CCc3ccccc3',
    'Clc1ccc(cc1Cl)c2noc(n2)c3sccc3Cl',
]

// const trees = {}
// chembl.forEach((smiles) => {
//   SmilesDrawer.parse(
//     smiles, (tree) => {
//       console.log(tree);
//       trees[smiles] = tree;
//     }
//     )
// })

// console.log(trees)

function draw() {
  const t = performance.now();
  SmilesDrawer.parse(
    input.value,
    (tree) => {
      console.log(tree);
      smilesDrawer.draw(tree, "output-canvas", "dark", false);
      const td = performance.now() - t;
      log.innerHTML = "&nbsp;";
      log.style.visibility = "hidden";

      new Noty({
        text: `Drawing took ${td.toFixed(
          3
        )}ms with a total overlap score of ${smilesDrawer
          .getTotalOverlapScore()
          .toFixed(3)}.`,
        killer: true,
        timeout: 2000,
        animation: {
          open: null,
          close: null,
        },
      }).show();

      console.log(smilesDrawer.getMolecularFormula());
    },
    (err) => {
      log.innerHTML = err;
      log.style.visibility = "visible";
      console.log(err);
    }
  );
}

function updateOptions() {
  const updatedDrawer = new SmilesDrawer.Drawer(options);
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("input", draw);

  debugCheckbox.addEventListener("click", () => {
    options.debug = debugCheckbox.checked;
    updateOptions();
  });

  textSizeInput.addEventListener("input", () => {
    options.fontSizeLarge = parseInt(textSizeInput.value);
    options.fontSizeSmall = (3 / 5) * options.fontSizeLarge;
    updateOptions();
  });

  bondThicknessInput.addEventListener("input", () => {
    options.bondThickness = parseFloat(bondThicknessInput.value);
    updateOptions();
  });

  bondLengthInput.addEventListener("input", () => {
    options.bondLength = parseInt(bondLengthInput.value);
    updateOptions();
  });

  shortBondLengthInput.addEventListener("input", () => {
    options.shortBondLength = parseInt(shortBondLengthInput.value) / 100;
    updateOptions();
  });

  bondSpacingInput.addEventListener("input", () => {
    options.bondSpacing = parseInt(bondSpacingInput.value);
    updateOptions();
  });

  sizeInput.addEventListener("input", () => {
    options.width = parseInt(sizeInput.value);
    options.height = parseInt(sizeInput.value);
    updateOptions();
  });

  overlapInput.addEventListener("input", () => {
    options.overlapResolutionIterations = parseInt(overlapInput.value);
    updateOptions();
  });
});