import { databases } from "./expressions/databases.js";

export function parse(code: string): AST {
    const ast = databases(code, 0);
    return ast;
}
