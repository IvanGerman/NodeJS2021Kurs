import { tryDBConnect } from './helpers/db';

const { PORT }  = require('./common/config');
const app = require('./app');


tryDBConnect( () => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});


export {};