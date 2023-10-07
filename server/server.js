const server = require('http').createServer();
const os = require('os-utils')
require("dotenv").config();
const PORT = process.env.PORT


const io = require('socket.io')(server,{
    transport:['websoket','polling']
});

let tick =0;

io.on('connection',client=>{
    setInterval(()=>{
        os.cpuUsage((cpuPercent)=>{
            client.emit('cpu',{
                name:tick++,
                value:cpuPercent
            })
        });

    },1500)
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  