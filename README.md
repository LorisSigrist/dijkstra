# The Dijkstra ORM
A modern ORM for IndexedDB.

> This is very work in progress. Expect Bugs, Breaking Changes, and in general: the worst. Use this at your own risk.

## .djk Files
`.djk` Files are how you describe the shape of your indexedb database.

```js
/// my-database.djk
db MyDB @version(5) {
    store Users {
        id: string @key(generator: uuid)
        username: string
        posts: OneToMany(store: Post, field: user)
    }

    store Post {
        user: ManyToOne(store: User, field: posts)
        published: Date
        title: string,
        tags: string[]
        subtitle: string @nullable,
        content: string
    }

    store Session @single() {
        id: string @key(generator: uuid);
        token: string
        userId: string
    }
}
```

Dijkstra will then generate the necessary indexeddb code, as well as Type definitions.
To use it, simply import the `.djk` file, and let your build-system do the rest.

```ts
//my-module.js
import { MyDB } from './my-database.djk'

const db = await MyDB.open();

const user : MyDB.User = await db.User.findOne();

//Relations are populated lazily when accssed
const posts : MyDB.Post[] = await user.posts;
```

