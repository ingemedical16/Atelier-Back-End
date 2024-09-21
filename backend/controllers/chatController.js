export const handleChat = (socket) => {
    console.log('User connected:', socket.id);
  
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      socket.to(roomId).emit('message', 'A new user has joined');
    });
  
    socket.on('chatMessage', (roomId, message) => {
      socket.to(roomId).emit('message', message);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  };
  