import mongoose from "mongoose"


export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_CONECTION_STRING as string, {
        dbName: "booking-app"
    }).then((c) => {
        console.log(`Database connected to the ${c.connection.host}`);
        
    }).catch((error) => {
        console.log(error);
    
    })}