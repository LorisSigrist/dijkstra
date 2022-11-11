import * as Y from './test.djk';

document.body.innerHTML = `<pre>${JSON.stringify(Y, null, 2)}</pre>`;

/*
const db = await ExampleDB.open();

await db.Timerecord.add(
    {
        id: "asd",
        duration: 4
    },
    {
        id: "asd",
        duration: 4
    }
)

const records = await db.Timerecord.find()

for(const record of records) {
    record.duration *= 2;
}

// Save all modified documents
records.save();

*/