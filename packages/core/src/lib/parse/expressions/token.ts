const allowedCharacters = /[a-zA-Z_0-9]/


export function token(code: string, pos: number) : {token: string, next: number} {
    if(code.length - pos <= 0) throw SyntaxError("Unexpected end of file");

    let token = "";
    let i = pos;
    while(i < code.length) {
        if(code[i].match(allowedCharacters)) {
            token += code[i];
        }else {
            break;
        }
        i++
    }

    
    if(i === pos) { //Not a single character matched
        throw SyntaxError(`Char ${pos}: Expected a token, but found ${code[i]}`)
    }

    return {
        token,
        next: i 
    }
}