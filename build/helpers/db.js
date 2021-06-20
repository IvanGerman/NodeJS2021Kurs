"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryDBConnect = void 0;
const ormconfig_1 = require("../common/ormconfig");
const typeorm_1 = require("typeorm");
const connectToDB = async () => {
    let connection;
    try {
        connection = typeorm_1.getConnection();
    }
    catch (err) {
        // handle error
    }
    ;
    try {
        if (connection) {
            if (!connection.isConnected) {
                await connection.connect();
            }
            ;
        }
        else {
            await typeorm_1.createConnection(ormconfig_1.config);
        }
        ;
        console.log('Successfully connected!');
    }
    catch (err) {
        console.error('Connection error', err);
    }
};
const tryDBConnect = async (cb) => {
    try {
        await connectToDB();
        cb();
    }
    catch (err) {
        console.error('DB Connection error!', err);
    }
};
exports.tryDBConnect = tryDBConnect;
