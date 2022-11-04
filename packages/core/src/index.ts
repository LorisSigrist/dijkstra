interface CompilationResult {
    code: string,
    typeDeclarations: string
}

export function compile(code: string) : CompilationResult {
    return {
        code : "",
        typeDeclarations: "",
    }
}