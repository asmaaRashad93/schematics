"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customModule = customModule;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const path_1 = require("path");
function customModule(_options) {
    return (tree, _context) => {
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.template)(Object.assign(Object.assign(Object.assign({}, _options), core_1.strings), { tmpl: '' })),
            (0, schematics_1.move)((0, path_1.normalize)(_options.name)) // Remove redundant folder creation
        ]);
        return (0, schematics_1.mergeWith)(templateSource)(tree, _context);
    };
}
