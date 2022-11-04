import { database } from "./database.js";
import { optionalWhitespace } from "./whitespace.js";

export function databases(code: string, pos: number) : {databases: Database[], next: number} {
    pos = optionalWhitespace(code,pos);

    const databases = [];

    while(pos < code.length) {
        try {
            const dbResult = database(code, pos);
            pos = dbResult.next;
            databases.push(dbResult.database);

            pos = optionalWhitespace(code,pos, true);
        }catch(e) {
            break;
        }
    }

    return {
        databases,
        next: pos
    }
}