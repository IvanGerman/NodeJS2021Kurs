"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { PORT } = require('./common/config');
const app = require('./app');
const db_1 = require("./helpers/db");
db_1.tryDBConnect(() => {
    app.listen(PORT, () => {
        console.log(`App is running on http://localhost:${PORT}`);
    });
});
