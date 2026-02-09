/**
 * Demo application for smiles-drawer
 *
 * This file contains the demo/example code and should not be part of the library distribution.
 */

import { SmilesDrawer } from "./index";

declare var Noty: any; // External library

const input = document.getElementById("input") as HTMLInputElement;
const debugCheckbox = document.getElementById("debug") as HTMLInputElement;
const bondThicknessInput = document.getElementById("bondThickness") as HTMLInputElement;
const textSizeInput = document.getElementById("textSize") as HTMLInputElement;
const bondLengthInput = document.getElementById("bondLength") as HTMLInputElement;
const shortBondLengthInput = document.getElementById("shortBondLength") as HTMLInputElement;
const bondSpacingInput = document.getElementById("bondSpacing") as HTMLInputElement;
const sizeInput = document.getElementById("size") as HTMLInputElement;
const overlapInput = document.getElementById("overlap") as HTMLInputElement;

const options: any = {
  debug: false,
  atomVisualization: "default",
};

const smilesDrawer = new SmilesDrawer.Drawer(options);
const log = document.getElementById("log")!;

function draw(): void {
  const t = performance.now();
  try {
    const tree = SmilesDrawer.parse(input.value);
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
  } catch (err) {
    log.innerHTML = (err as Error).message;
    log.style.visibility = "visible";
    console.log(err);
  }
}

function updateOptions(): void {
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
