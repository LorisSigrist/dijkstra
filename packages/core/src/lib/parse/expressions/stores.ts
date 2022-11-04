import { store } from "./store.js";
import { optionalWhitespace } from "./whitespace.js";

export function stores(code: string, pos: number) : {stores: Store[], next: number} {
    const stores = [];

    while(pos < code.length) {
        try {
            pos = optionalWhitespace(code, pos, true);

            const storeResult = store(code, pos);
            pos = storeResult.next

            stores.push(storeResult.store);
        }catch(e) {
            break;
        }
    }

    return {
        stores,
        next: pos
    }

}