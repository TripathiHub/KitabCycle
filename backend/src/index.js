const express = require("express");
const userRouter =  require("./routes/userRoutes");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const PORT =5000 ;

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173"
}));
app.get("/",(req,res)=>{
    res.send("KitabCycle backend setup done");
});
app.use("/api/users",userRouter);
async function serverStarted(){
     await connectDB();
    app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
}
serverStarted();