export function optionalWhitespace(code: string, pos: number, linebreak: boolean = false): number {
    if (code.length - pos < 0) throw SyntaxError("Unexpected End of File")


    const whitespaceChars = [" ", "\t"]
    if(linebreak) whitespaceChars.push("\n")

    let i = pos;
    while (i < code.length) {
        if (whitespaceChars.includes(code[i]))
            i++;
        else break;
    }
    
    return i;
}

export function mandatoryWhitespace(code: string, pos: number, linebreak: boolean = false): number {
    if (code.length - pos <= 0) throw SyntaxError("Unexpected End of File")

    const next = optionalWhitespace(code, pos, linebreak);

    if(next == pos) throw SyntaxError(`Char ${next}: Expected Whitespace, but found "${code[next]}"`)

    return next;
}