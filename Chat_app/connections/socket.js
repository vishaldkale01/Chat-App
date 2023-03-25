const socketConnection = (io)=>{
    io.on('connection', (socket) => {
        console.log('a user connected' ,socket.id);
        io.on('disconnect', () => {
            console.log('user disconnected' , socket.id);
          }); 
          socket.on("new_connect" , (user)=>{
            socket.broadcast.emit("new_connect" , user)  
          })
          socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
          }); 
      });
}
module.exports =  socketConnection