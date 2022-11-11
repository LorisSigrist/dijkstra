const MyDB = {
  open: async () => {

    const stores = ["MyStore", "MyOtherStore"];

    const DB = {};

    await openDB("MyDB", 5, (e) => {
        /** @type {IDBDatabase} */
        const db = e.target?.result;
        for(const store of stores) {
          DB[store] = initStore(db, store);
        }
    });

    return DB;
  },
};



const db = await MyDB.open();
db.MyStore;

export default MyDB;


/**
 * @param {string} name
 * @param {number | undefined} version
 * @param {IDBOpenDBRequest["onupgradeneeded"] | undefined} onUpgrade
 * @returns {Promise<IDBDatabase>}
 */
async function openDB(name, version, onUpgrade = undefined) {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(name, version);
    openRequest.onerror = reject;
    openRequest.onsuccess = (e) => {
      resolve(openRequest.result);
    };
    if (onUpgrade) {
      openRequest.onupgradeneeded = onUpgrade;
    }
  });
}

/**
 * @typedef {{ single: boolean }} Options
 */

/**
 * 
 * @param {IDBDatabase} db 
 * @param {string} name
 * @param {Options} options
 */
async function initStore(db, name, options = { single: false}) {
    db.createObjectStore(name);

    return {
      find: ()=>{},
      insert: () => {},
      insertMany: () => {},
      deleteOne: ()=> {},
      clear: ()=>{}
    }
}

