import mongoose from "mongoose";

const connectDB = async () =>{

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("monogodb connected sucessfully")
    }
    catch(error)
    {
        // console.log("errorr........" );
    }
}

export default connectDB;