import knex from "knex";
import path from "path";

const pathToDb = path.join(process.cwd(), "lib/database");
const db = knex({
    client: "sqlite3",
    connection: {
        filename: path.resolve(pathToDb, "database.db")
    },
    useNullAsDefault: true
});

/*
const db = new sqlite.Database(`${pathToDb}/database.db`, sqlite.OPEN_READWRITE, (err) => {
    let retorno = err ? err.message : 'Conectado ao BD.';
    console.log(retorno);
});
*/

export default db;