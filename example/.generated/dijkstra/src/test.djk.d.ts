
interface Timerecord {
    id: string,
    duration: number
}

interface Session {
    id: string,
    token: string,
    userId: string
}

type Document<T> = T & {
    save: ()=>Promise<void>
    toObject: ()=>T,
    toJSON: ()=>string
}

interface Collection<T> {
    [i: number] : Document<T>
    [Symbol.iterator] : ()=>Iterator<Document<T>>
    save: ()=>Promise<void>,
    toArray: ()=>T[]
}

interface SingleStore<T> {
    get: () => Promise<T | null>,
    set: (record: T) => Promise<void>,
    delete: () => Promise<void>
}

interface Store<T> {
    find: () => Promise<Collection<T>>,
    add: (...timerecord: T[]) => Promise<void>,
    delete: (key: string) => Promise<void>
    deleteAll: () => Promise<void>
}

interface ExampleDBConnection {
    Session: SingleStore<Session>,
    Timerecord: Store<Timerecord>
}

export declare const ExampleDB: {
    open: () => Promise<ExampleDBConnection>
} 