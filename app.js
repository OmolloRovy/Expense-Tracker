const { config } = require('dotenv');
config();

const { db } = require('./db/db');
const  express = require('express');
const cors =require('cors');

const app= express();

const PORT= process.env.PORT

//middlewares
app.use(express.json());
app.use(cors({

}));

app.get('/', (req, res)=> {
    res.send('Expenses management')
});
const server =()=>{
db();
app.listen(PORT, () =>{
    console.log("Server running at port:",PORT)
});

};
server();
