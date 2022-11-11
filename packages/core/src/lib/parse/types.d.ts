interface Modifier {
    name: string,
    args: Record<string, string>
}

interface Field {
    name: string,
    type: string,
    modifiers: Modifier[]
}

interface Store {
    name: string,
    fields: Field[],
    modifiers: Modifier[]
}

interface Database {
    name: string,
    stores: Store[],
    modifiers: Modifier[]
}

interface AST {
    databases: Database[]
}