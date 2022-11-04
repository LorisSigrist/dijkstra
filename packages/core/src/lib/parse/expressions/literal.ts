export function literal(code: string, pos: number, literals: string | string[]): { literal: string, next: number } {
    if(pos >= code.length) throw SyntaxError("Unexpected EOF")
    
    if (typeof literals === "string")
        literals = [literals];

    for(const string of literals) {
        if(code.startsWith(string, pos)) {
            return {
                literal: string,
                next: string.length + pos
            }
        }
    }

    throw SyntaxError(`Char ${pos}: Expected ${'"' + literals.join('","') + '"'}`)
}