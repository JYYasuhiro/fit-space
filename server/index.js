const setupServer = require('./server');
const PORT = process.env.PORT || 8080;
const server = setupServer();
// const db = require('../db/knex');


// (async () => {
//     try {
//         await db.migrate.latest();
//         server.listen(PORT, ()=> {
//             console.log(`app is listening @ http://localhost:${PORT}`);
//         });
//     } catch(err) {
//         console.error(err);
//     }
// })();

(() => {
        server.listen(PORT, ()=> {
            console.log(`app is listening @ http://localhost:${PORT}`);
        });
   
})();