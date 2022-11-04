# The Dijkstra ORM
A modern ORM for IndexedDB.

> This is very work in progress. Expect Bugs, Breaking Changes, and in general: the worst. Use this at your own risk.

## .djk Files
.djk Files are how you describe the shape of your database. While they are similar to `.prisma` files, they are not interchangeable.

```js
/// my-database.djk
db MyDB {
    store Users {
        id: string @key() @generator(uuid)
        username: string
        posts: OneToMany(store: Post, field: user)
    }

    store Post {
        user: ManyToOne(store: User, field: posts)
        published: Date
        title: string,
        subtitle: string @nullable,
        text: string
    }
}
```

Dijkstra will then generate the code for these database definitions. To use it, simply import it:

```ts
//my-module.js
import {MyDB, type User, type Post} from './my-database.djk'

const user : User = await MyDB.User.findOne();

//We use Proxies to allow lazy population
const posts : Post[] = await user.posts
```