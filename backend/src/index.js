const express = require("express");
const userRouter =  require("./routes/userRoutes");
const app = express();
const PORT =5000 ;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("KitabCycle backend setup done");
});
app.use("/api/users",userRouter);
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})