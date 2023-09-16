import { connect } from "mongoose";

const connectDB = function (uri: string | undefined, db: string) {
    if (uri) {
        return connect(uri, {
            dbName: db,
        }).catch((err) => console.error(err));
    }
};

export default connectDB;
