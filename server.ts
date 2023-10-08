import {app} from "./app";
import connectDB from "./utils/db";
require("dotenv").config();


app.listen(process.env.PORT,()=>{
    console.log("server is running on prot ",process.env.PORT)
    connectDB();
}).on('error', (error) => {
    console.error('Error starting the server:', error);
});