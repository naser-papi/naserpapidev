import mongoose from "mongoose";

const connection = { isConnected: mongoose.ConnectionStates.disconnected };

export async function dbConnect() {
    console.log("connecting to database", connection);
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.DATABASE_URL!);
    console.log("Database Connected!");
    connection.isConnected = db.connections[0].readyState;
}
