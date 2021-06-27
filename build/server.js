"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./helpers/db");
const { PORT } = require('./common/config');
const app = require('./app');
db_1.tryDBConnect(() => {
    app.listen(PORT, () => {
        console.log(`App is running on http://localhost:${PORT}`);
    });
});
