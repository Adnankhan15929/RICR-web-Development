import mongoose from "mongoose"; //mogoose MongoDB ko manage krta h ,MongoDB ko chalane ke liye Mongoose ki zaroorat padti hai

const connectDB = async () => { //async mtlb ye function time lega
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);//wait kro jb tk mongo database connect nhi ho jata mongoose se
    console.log("MongoDB connected at ", conn.connection.host); // database ka host address
    console.log("Database Name: ", conn.connection.name); // database ka name
  } catch (error) {
    console.log(error);
    process.exit(1); //1 ek error code h is line se server band ho jaega 
  }
};

export default connectDB; //export yani bhar bhjna mgr export default ka mtlb h ki sirf connectDB ko hi bhar bhjo or kisi ko nhi
