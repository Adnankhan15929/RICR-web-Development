import dotenv from "dotenv"; 
dotenv.config(); //file ko padhega
import express from "express"; //backend server banane ke liye
import cors from 'cors'; //different domains/ports se requests allow karne ke liye
import morgan from 'morgan'; //sare incoming requests ko console par dikhane ke liye morgan (kaun aaya, kab aaya, kya kiya)
import connectDB from "../../Hotel/server/src/config/db.js"; //extension use ki taki exact file mile

const app = express(); // Naya server application banaya

app.use(cors({origin: "http://localhost:5173", credentials: true})); //mtlb express me use kro cors ka or allow kro local host or cookies/tokens bhj skte hai or 5173 port frontend server ka hai.

app.use(express.json()); //Express, tu JSON format ki requests ko automatically samajh le, aur unhe mere liye JavaScript object mein convert kar de

app.use(morgan("dev")); //sare incoming request ko console pr colorfully dikhao - kaun aaya, kab aaya, kya kiya

app.use("/auth",AuthRouter); //jo bhi request /auth se shuru ho rahi hai (jaise /auth/login, /auth/register), use AuthRouter ko forward kar de. Woh manage karega.

app.use("/public",PublicRouter);//jo bhi request /public se shuru ho rahi hai, use AuthPublic ko forward kar de. Woh manage karega.

app.get("/",(req,res)=>{
    console.log("Server is Working");  //Website ki home page (/) par koi aaye to "Server is Working" console par dikhao.
})

app.use((err, req, res)=>{ //err = Aapke route se next(error) se aata hai
    const ErrorMessage = err.message || "Internal server error";
    const StatusCode = err.statusCode || 500;

    // console.log("error found",{ErrorMessage, StatusCode});

    res.status(StatusCode).json({message:ErrorMessage});//user ko response jaega status code and json format me message
})

const port = process.env.PORT || 5000;//.env se port lo nhi mile to 5000 dedo

app.listen(port,()=>{
    console.log("Server Started at Port: " , port);
    connectDB();
})


// app.use() → Sab routes ke liye common middleware (jaise security guard har aane wale ko check kare)
// app.get() → Data lena/read karna
// app.listen() → Server start karke port par wait karna