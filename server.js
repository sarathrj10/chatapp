const express = require('express');
const app =express()
const http = require('http').createServer(app)
const io =  require('socket.io')(http);
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{

    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})
http.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})