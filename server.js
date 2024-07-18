import app from "./index.js";
import {connect} from './src/config/mongodb.js'
app.listen(5000,()=>{
    connect();
    console.log('the server is running at 5000 port number')});