import { Rule, SchematicContext, Tree, apply, url, template, move, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { normalize } from 'path';

export function customModule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      template({
        ..._options,
        ...strings,
        tmpl: '', // Ensure tmpl is defined for template files
      }),
      move(normalize(_options.name)) // Remove redundant folder creation
    ]);

    return mergeWith(templateSource)(tree, _context);
  };
}
