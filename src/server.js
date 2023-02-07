const express = require('express')
const app = express();
const userRoutes = require('./routes/users')
const port = 3001

app.use('/users',userRoutes);

app.listen(port,()=>{
    console.log(`Server dijalankan di port : ${port}`);
})

app.get('/',(req,res) => {
    res.send('Halaman utama')
})