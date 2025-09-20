import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, DollarSign, Plus, Heart, Share2 } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const events = [
    {
      id: 1,
      title: 'Annual Alumni Meet 2024',
      date: '2024-03-15',
      time: '10:00 AM',
      location: 'Main Campus Auditorium',
      attendees: 156,
      maxAttendees: 200,
      price: 'Free',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Join us for our biggest alumni gathering of the year! Network with fellow graduates, hear success stories, and celebrate our achievements.',
      organizer: 'College Alumni Association',
      tags: ['Networking', 'Reunion'],
      rsvpStatus: 'not_responded'
    },
    {
      id: 2,
      title: 'Tech Talk: AI & Machine Learning',
      date: '2024-03-20',
      time: '6:00 PM',
      location: 'Virtual Event',
      attendees: 89,
      maxAttendees: 100,
      price: '$25',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn from industry experts about the latest trends in AI and ML. Perfect for professionals looking to upskill.',
      organizer: 'CS Alumni Chapter',
      tags: ['Technology', 'Learning'],
      rsvpStatus: 'going'
    },
    {
      id: 3,
      title: 'Career Fair 2024',
      date: '2024-04-10',
      time: '9:00 AM',
      location: 'Student Center',
      attendees: 234,
      maxAttendees: 300,
      price: 'Free',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Connect with top employers and explore career opportunities. Open to students and recent graduates.',
      organizer: 'Career Services',
      tags: ['Career', 'Jobs'],
      rsvpStatus: 'maybe'
    }
  ];

  const handleRSVP = (eventId: number, status: 'going' | 'maybe' | 'not_going') => {
    console.log(`RSVP for event ${eventId}: ${status}`);
  };

  const getRSVPColor = (status: string) => {
    switch (status) {
      case 'going':
        return 'bg-green-500 text-white';
      case 'maybe':
        return 'bg-yellow-500 text-white';
      case 'not_going':
        return 'bg-red-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Events</h1>
            <p className="text-gray-600 mt-2">Discover and join amazing alumni events</p>
          </div>
          <button
            onClick={() => setShowCreateEvent(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create Event</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-xl w-fit">
          {['upcoming', 'past', 'my-events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab === 'upcoming' ? 'Upcoming' : tab === 'past' ? 'Past Events' : 'My Events'}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-2">
                    {event.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-green-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{event.attendees}/{event.maxAttendees} attending</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-yellow-500" />
                    <span className="font-medium">{event.price}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">by {event.organizer}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* RSVP Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleRSVP(event.id, 'going')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      event.rsvpStatus === 'going' 
                        ? 'bg-green-500 text-white' 
                        : 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
                    }`}
                  >
                    Going
                  </button>
                  <button
                    onClick={() => handleRSVP(event.id, 'maybe')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      event.rsvpStatus === 'maybe' 
                        ? 'bg-yellow-500 text-white' 
                        : 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
                    }`}
                  >
                    Maybe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Become an Event Sponsor</h2>
            <p className="text-lg opacity-90 mb-6">
              Support our alumni community by sponsoring events. Increase your brand visibility and give back to the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
                Sponsor an Event
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Create Event Modal */}
        {showCreateEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Create New Event</h2>
                  <button
                    onClick={() => setShowCreateEvent(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter event title"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      <input
                        type="time"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter event location"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe your event"
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Attendees</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Free or $25"
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateEvent(false)}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Create Event
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;