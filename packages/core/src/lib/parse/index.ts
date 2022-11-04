import { databases } from "./expressions/databases.js";

export function parse(code: string): any {
    const {databases: dbs} = databases(code, 0);
    return dbs;
}
