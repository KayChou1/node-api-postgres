const { Client } = require('pg')
 
const client = new Client ({
    user: "postgres",
    password: " ",
    host: "localhost",
    port: 5432,
    database: "node"
})
 
client.connect()
.then(console.log('Connected Succesfully'))
.then(() => client.query('SELECT * FROM people'))
.then((results) => console.log(results.rows))
.catch((error) => console.log('error: '+ error))
.finall(() => client.end())