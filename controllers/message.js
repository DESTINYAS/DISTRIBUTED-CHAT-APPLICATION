const Message = require('../models/message');
const User = require('../models/user');
const ChatRoom = require('../models/chatRoom');

// Send a message in a chat room
exports.sendMessage = async (req, res,next) => {
    try {
        const { content } = req.body;
        const userId = req.userId;
        const chatRoomId = req.params.chatRoomId
        const user = await User.findOne({email:req.user.email})
        // Check if the user and chat room exist
        const userExists = await User.findById({_id:userId});
        const chatRoom = await ChatRoom.findById({_id:chatRoomId});
        console.log(chatRoom)
        const isAChatRoomMember =  chatRoom.members.includes(userId);

        if (!userExists || !chatRoom || !isAChatRoomMember) {
            return res.status(404).json({ message: 'You are not a member of this chatroom.' });
        }

        // Create a new message
        let message = new Message({
            sender: userId,
            content,
            chatRoom: chatRoomId,
        });

        message = await message.save();

        user.messages.push(message._id)
        await user.save()

        // Emit a WebSocket event to notify all members of the chat room about the new message
        const sendMessage = (io, message) => {
            // Use io here to send messages via Socket.IO
            io.to(chatRoomId).emit('message', message);
          }

        // Add the message to the chat room's messages
        chatRoom.messages.push(message._id);
        await chatRoom.save();

        return res.status(201).json(message);
    } catch (error) {
        return  next(error)
    }
};