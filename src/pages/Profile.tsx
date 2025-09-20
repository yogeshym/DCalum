import React, { useState } from 'react';
import { Camera, Edit3, MapPin, Calendar, Briefcase, GraduationCap, Award, Users, MessageCircle, Settings } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isEditing, setIsEditing] = useState(false);

  const profileData = {
    name: 'Rahul Sharma',
    title: 'Senior Software Engineer at Google',
    college: 'IIT Delhi',
    batch: '2018',
    location: 'Bangalore, India',
    joinedDate: 'March 2020',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    coverImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bio: 'Passionate software engineer with 6+ years of experience building scalable systems. Love mentoring junior developers and contributing to open source projects. Always excited to connect with fellow alumni and share knowledge.',
    connections: 234,
    posts: 45,
    mentees: 12
  };

  const skills = [
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'System Design', level: 'Advanced' },
    { name: 'Leadership', level: 'Intermediate' }
  ];

  const achievements = [
    { title: 'Top Mentor 2023', description: 'Recognized for outstanding mentorship contributions', date: 'Dec 2023' },
    { title: 'Innovation Award', description: 'Led development of high-impact features at Google', date: 'Aug 2023' },
    { title: '100+ Alumni Connections', description: 'Built strong network within DCalum community', date: 'Jun 2023' }
  ];

  const posts = [
    {
      id: 1,
      content: 'Just completed an amazing mentoring session with 3 junior developers. The energy and passion of our new graduates never ceases to amaze me! 🚀',
      likes: 24,
      comments: 8,
      time: '2 days ago',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      content: 'Excited to announce that my team at Google is hiring! We have 2 open positions for Senior Frontend Engineers. Alumni from our college get priority consideration. DM me for details!',
      likes: 56,
      comments: 23,
      time: '1 week ago'
    }
  ];

  const connections = [
    { name: 'Priya Patel', title: 'Product Manager at Microsoft', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Amit Kumar', title: 'Startup Founder', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Sneha Singh', title: 'Data Scientist at Amazon', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  const getSkillColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cover Photo */}
        <div className="relative mb-8">
          <div 
            className="h-64 rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${profileData.coverImage})` }}
          >
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info Overlay */}
          <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
            <div className="relative">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="pb-4">
              <h1 className="text-3xl font-bold text-white mb-1">{profileData.name}</h1>
              <p className="text-white/90 text-lg">{profileData.title}</p>
              <div className="flex items-center space-x-4 mt-2 text-white/80">
                <div className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {profileData.college} • Batch {profileData.batch}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {profileData.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8 mt-20">
          {/* Left Sidebar */}
          <div className="w-80 space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{profileData.connections}</div>
                  <div className="text-sm text-gray-600">Connections</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{profileData.posts}</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{profileData.mentees}</div>
                  <div className="text-sm text-gray-600">Mentees</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Privacy Settings</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-green-100 text-green-700 py-2 rounded-lg hover:bg-green-200 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>Invite Friends</span>
                </button>
              </div>
            </div>

            {/* Recent Connections */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Connections</h3>
              <div className="space-y-3">
                {connections.map((connection, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={connection.avatar}
                      alt={connection.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{connection.name}</p>
                      <p className="text-xs text-gray-500 truncate">{connection.title}</p>
                    </div>
                  </div>
                ))}
                <button className="w-full text-blue-600 text-sm font-medium hover:underline">
                  View all connections
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-xl w-fit">
              {['about', 'skills', 'achievements', 'connections', 'posts'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 capitalize ${
                    activeTab === tab
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* About Tab */}
              {activeTab === 'about' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">About</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {isEditing ? 'Save' : 'Edit'}
                    </button>
                  </div>
                  
                  {isEditing ? (
                    <textarea
                      defaultValue={profileData.bio}
                      className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-700 leading-relaxed text-lg">{profileData.bio}</p>
                  )}

                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Works at {profileData.title.split(' at ')[1]}</p>
                        <p className="text-sm text-gray-600">Since 2019</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Studied at {profileData.college}</p>
                        <p className="text-sm text-gray-600">Batch {profileData.batch}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Lives in {profileData.location}</p>
                        <p className="text-sm text-gray-600">From Delhi, India</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Joined DCalum</p>
                        <p className="text-sm text-gray-600">{profileData.joinedDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add Skill
                  </button>
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                          <p className="text-gray-600 mt-1">{achievement.description}</p>
                          <p className="text-sm text-gray-500 mt-2">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Posts Tab */}
              {activeTab === 'posts' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Posts</h2>
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <div key={post.id} className="border border-gray-200 rounded-lg p-6">
                        <p className="text-gray-800 mb-4">{post.content}</p>
                        {post.image && (
                          <img
                            src={post.image}
                            alt="Post content"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.time}</span>
                          <div className="flex items-center space-x-4">
                            <span>{post.likes} likes</span>
                            <span>{post.comments} comments</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;