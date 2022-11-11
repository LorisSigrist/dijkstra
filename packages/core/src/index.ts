import { parse } from "./lib/parse/index.js"

interface CompilationResult {
    code: string,
    typeDeclarations: string
}

export function compile(code: string): CompilationResult {
    const ast = parse(code);
    return {
        code: `export const AST = JSON.parse('${JSON.stringify(ast)}')`,
        typeDeclarations: "",
    }
}