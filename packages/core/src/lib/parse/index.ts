import { databases } from "./expressions/databases.js";

export function parse(code: string): AST {
    const {databases: dbs} = databases(code, 0);
    return {
        databases: dbs
    };
}
