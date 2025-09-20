import React, { useState } from 'react';
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile, User } from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Priya Sharma',
      title: 'Product Manager at Microsoft',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'Thanks for the mentorship session! Really helpful insights.',
      timestamp: '2 min ago',
      unread: 2,
      isOnline: true
    },
    {
      id: 2,
      name: 'Amit Patel',
      title: 'Startup Founder',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'Are you available for a quick call tomorrow?',
      timestamp: '15 min ago',
      unread: 0,
      isOnline: false
    },
    {
      id: 3,
      name: 'Sneha Singh',
      title: 'Data Scientist at Amazon',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'I saw your job posting, very interested!',
      timestamp: '1 hour ago',
      unread: 1,
      isOnline: true
    },
    {
      id: 4,
      name: 'Kiran Kumar',
      title: 'Senior Developer at Flipkart',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'The tech meetup was amazing! Thanks for organizing.',
      timestamp: '3 hours ago',
      unread: 0,
      isOnline: false
    },
    {
      id: 5,
      name: 'Alumni Group Chat',
      title: '47 members',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'Rahul: Anyone interested in the AI workshop?',
      timestamp: '5 hours ago',
      unread: 5,
      isOnline: false,
      isGroup: true
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: 'Priya Sharma',
      message: 'Hi Rahul! Hope you\'re doing well. I wanted to thank you for the mentorship session last week.',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      senderId: 'me',
      senderName: 'You',
      message: 'Hey Priya! I\'m glad it was helpful. How are things going with your new project?',
      timestamp: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      senderName: 'Priya Sharma',
      message: 'Really well actually! We\'ve implemented some of the strategies you suggested and already seeing positive results.',
      timestamp: '10:35 AM',
      isOwn: false
    },
    {
      id: 4,
      senderId: 1,
      senderName: 'Priya Sharma',
      message: 'I was wondering if you\'d be interested in doing another session next month? I have some new challenges I\'d love to discuss.',
      timestamp: '10:36 AM',
      isOwn: false
    },
    {
      id: 5,
      senderId: 'me',
      senderName: 'You',
      message: 'Absolutely! I\'d be happy to help. Let me check my calendar and I\'ll send you some available times.',
      timestamp: '10:40 AM',
      isOwn: true
    },
    {
      id: 6,
      senderId: 1,
      senderName: 'Priya Sharma',
      message: 'Perfect! Thanks so much. You\'ve been such a great mentor. 🙏',
      timestamp: '10:42 AM',
      isOwn: false
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Conversations List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conversation.isOnline && !conversation.isGroup && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conversation.title}</p>
                  <p className="text-sm text-gray-500 truncate mt-1">{conversation.lastMessage}</p>
                </div>
                {conversation.unread > 0 && (
                  <div className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                    {conversation.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={selectedConversation.avatar}
                      alt={selectedConversation.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {selectedConversation.isOnline && !selectedConversation.isGroup && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">{selectedConversation.name}</h2>
                    <p className="text-sm text-gray-600">
                      {selectedConversation.isGroup 
                        ? selectedConversation.title 
                        : selectedConversation.isOnline 
                          ? 'Online' 
                          : 'Last seen recently'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.isOwn
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 ${message.isOwn ? 'text-right' : 'text-left'}`}>
                      {message.timestamp}
                    </p>
                  </div>
                  {!message.isOwn && (
                    <img
                      src={selectedConversation.avatar}
                      alt={selectedConversation.name}
                      className="w-6 h-6 rounded-full object-cover mr-2 order-0"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Smile className="w-5 h-5" />
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    newMessage.trim()
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a chat from the sidebar to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;