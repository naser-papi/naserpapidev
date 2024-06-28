import mongoose from "mongoose";

const connection = { isConnected: mongoose.ConnectionStates.disconnected };

export async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.DATABASE_URL!);

    connection.isConnected = db.connections[0].readyState;
}
