import { config } from "../common/ormconfig";
import { getConnection, createConnection } from "typeorm"; 

const connectToDB = async() => {
    let connection;

    try {
        connection = getConnection()
    } catch(err) {
        // handle error
    };

    try {
      if (connection) {
          if (!connection.isConnected) {
             await connection.connect();
          };
      } else {
          await createConnection(config);
      };
      console.log('Successfully connected!');
      
    } catch(err) {
       console.error('Connection error', err);      
    }
};

export const tryDBConnect = async (cb: () => void) => {
    try {
        await connectToDB();
        cb();
    } catch(err) {
        console.error('DB Connection error!', err);        
    }
};