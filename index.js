const express = require('express');
const bodyParser = require('body-parser');


const app = express();


// port number 
const port =8000;
 

app.use(express.json());


app.post('/',(req,res)=>{
    const name = req.body.name;
    console.log(name);
});

// sever start 
app.listen(port ,()=>{
    console.log(`Api working in port:${port} `);
})