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
    fields: Field[]
}

interface Database {
    name: string,
    stores: Store[]
}