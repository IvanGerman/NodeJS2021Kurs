const { PORT }  = require('./common/config');
const app = require('./app');
import { tryDBConnect } from './helpers/db';


tryDBConnect( () => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});


export {};