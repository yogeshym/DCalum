import React, { useState } from 'react';
import { Users, TrendingUp, Calendar, Briefcase, Award, Eye, MessageCircle, Star } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Alumni', value: '2,847', change: '+12%', icon: Users, color: 'blue' },
    { title: 'Active Mentors', value: '456', change: '+8%', icon: Star, color: 'purple' },
    { title: 'This Month Events', value: '23', change: '+15%', icon: Calendar, color: 'green' },
    { title: 'Job Postings', value: '189', change: '+22%', icon: Briefcase, color: 'orange' },
  ];

  const recentAlumni = [
    {
      name: 'Rahul Sharma',
      batch: '2019',
      company: 'Google',
      skills: ['React', 'Node.js', 'Python'],
      isOnline: true,
      mentoring: 5,
      connections: 127
    },
    {
      name: 'Anjali Patel',
      batch: '2018',
      company: 'Microsoft',
      skills: ['Java', 'Spring', 'AWS'],
      isOnline: false,
      mentoring: 3,
      connections: 89
    },
    {
      name: 'Kiran Kumar',
      batch: '2020',
      company: 'Amazon',
      skills: ['Python', 'Machine Learning'],
      isOnline: true,
      mentoring: 7,
      connections: 156
    }
  ];

  const mentorshipStats = [
    { mentor: 'Priya Sharma', students: 8, rating: 4.9, sessions: 45 },
    { mentor: 'Amit Patel', students: 6, rating: 4.8, sessions: 32 },
    { mentor: 'Ravi Kumar', students: 5, rating: 4.7, sessions: 28 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening in your alumni network.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Alumni List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Alumni Activity</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">{recentAlumni.filter(a => a.isOnline).length} online now</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {recentAlumni.map((alumni, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">{alumni.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          {alumni.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                          <p className="text-sm text-gray-600">Batch {alumni.batch} • {alumni.company}</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Connect
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {alumni.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {alumni.connections} connections
                        </span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          Mentoring {alumni.mentoring}
                        </span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        <MessageCircle className="w-4 h-4 inline mr-1" />
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MentorMatch Analytics */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">MentorMatch Analytics</h2>
              
              <div className="space-y-4">
                {mentorshipStats.map((mentor, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-900">{mentor.mentor}</h3>
                    <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                      <span>{mentor.students} students</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        {mentor.rating}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{mentor.sessions} total sessions</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-2 rounded-lg font-medium transition-all duration-200">
                  Create Event
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-2 rounded-lg font-medium transition-all duration-200">
                  Post Job
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-2 rounded-lg font-medium transition-all duration-200">
                  Find Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;