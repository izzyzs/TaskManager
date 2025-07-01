import { Database } from "sqlite3";

// const connectDB = function (uri: string | undefined, db: string) {
//     if (uri) {
//         return connect(uri, {
//             dbName: db,
//         }).catch((err) => console.error(err));
//     }
// };

const connectDB = function (err: Error | undefined) {
    if (err) {
        console.error(err.message, err.stack);
    } else {
        console.log("Connected to database.");
    }
};

export default connectDB;
